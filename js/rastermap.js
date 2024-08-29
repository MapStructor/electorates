(function(window) {
  var HAS_HASHCHANGE = (function() {
    var doc_mode = window.documentMode;
    return "onhashchange" in window && (doc_mode === undefined || doc_mode > 7);
  })();

  L.Hash = function(map) {
    this.onHashChange = L.Util.bind(this.onHashChange, this);

    if (map) {
      this.init(map);
    }
  };

  L.Hash.parseHash = function(hash) {
    if (hash.indexOf("#") === 0) {
      hash = hash.substr(1);
    }
    var args = hash.split("/");
    if (args.length == 4) {
      var zoom = parseInt(args[0], 10),
        lat = parseFloat(args[1]),
        lon = parseFloat(args[2]);
      year = parseInt(args[3]);
      if (isNaN(zoom) || isNaN(lat) || isNaN(lon) || isNaN(year)) {
        return false;
      } else {
        $("#slider").slider("option", "value", year);
        $("#year").val(year);
        changeYear(year);
        return {
          center: new L.LatLng(lat, lon),
          zoom: zoom
        };
      }
    } else {
      return false;
    }
  };

  (L.Hash.formatHash = function(map) {
    var center = map.getCenter(),
      zoom = map.getZoom(),
      precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
    year = parseInt($("#year").val());

    return (
      "#" +
      [
        zoom,
        center.lat.toFixed(precision),
        center.lng.toFixed(precision),
        year
      ].join("/")
    );
  }),
    (L.Hash.prototype = {
      map: null,
      lastHash: null,

      parseHash: L.Hash.parseHash,
      formatHash: L.Hash.formatHash,

      init: function(map) {
        this.map = map;

        // reset the hash
        this.lastHash = null;
        this.onHashChange();

        if (!this.isListening) {
          this.startListening();
        }
      },

      removeFrom: function(map) {
        if (this.changeTimeout) {
          clearTimeout(this.changeTimeout);
        }

        if (this.isListening) {
          this.stopListening();
        }

        this.map = null;
      },

      onMapMove: function() {
        // bail if we're moving the map (updating from a hash),
        // or if the map is not yet loaded

        if (this.movingMap || !this.map._loaded) {
          return false;
        }

        var hash = this.formatHash(this.map);
        if (this.lastHash != hash) {
          location.replace(hash);
          this.lastHash = hash;
        }
      },

      movingMap: false,
      update: function() {
        var hash = location.hash;
        if (hash === this.lastHash) {
          return;
        }
        var parsed = this.parseHash(hash);
        if (parsed) {
          this.movingMap = true;

          this.map.setView(parsed.center, parsed.zoom);

          this.movingMap = false;
        } else {
          this.onMapMove(this.map);
        }
      },

      // defer hash change updates every 100ms
      changeDefer: 100,
      changeTimeout: null,
      onHashChange: function() {
        // throttle calls to update() so that they only happen every
        // `changeDefer` ms
        if (!this.changeTimeout) {
          var that = this;
          this.changeTimeout = setTimeout(function() {
            that.update();
            that.changeTimeout = null;
          }, this.changeDefer);
        }
      },

      isListening: false,
      hashChangeInterval: null,
      startListening: function() {
        this.map.on("moveend", this.onMapMove, this);

        if (HAS_HASHCHANGE) {
          L.DomEvent.addListener(window, "hashchange", this.onHashChange);
        } else {
          clearInterval(this.hashChangeInterval);
          this.hashChangeInterval = setInterval(this.onHashChange, 50);
        }
        this.isListening = true;
      },

      stopListening: function() {
        this.map.off("moveend", this.onMapMove, this);

        if (HAS_HASHCHANGE) {
          L.DomEvent.removeListener(window, "hashchange", this.onHashChange);
        } else {
          clearInterval(this.hashChangeInterval);
        }
        this.isListening = false;
      }
    });
  L.hash = function(map) {
    return new L.Hash(map);
  };
  L.Map.prototype.addHash = function() {
    this._hash = L.hash(this);
  };
  L.Map.prototype.removeHash = function() {
    this._hash.removeFrom();
  };
})(window);

var map = new L.Map("map", { maxZoom: 16 });
//Background map
var layer = new L.StamenTileLayer("toner");
layer.setOpacity(0.4);
map.setView(new L.LatLng(52.36, 4.88), 13).addLayer(layer);
bagatttr = "BAG data &copy; bag.vrom.nl";

//Create a canvas layer on which to draw the BAG data
var canvasTiles = new L.TileLayer.Canvas({
  tms: false,
  minZoom: 9,
  maxZoom: 16,
  attribution: bagatttr
});
var hash = new L.Hash(map);
/*
On initialising a canvas tile, use the drawTile function to loop through each pixel and assign color and alpha values based on the current year and the r-value of the data.
*/

getJaar = function() {
  var jaar = parseInt($("#year").val());
  //We default to 2012
  if (jaar == "NaN") jaar = 2012;

  //this is the value of year as encoded in the pngs
  var jr = 0;
  if (jaar < 1600) {
    jr = 1;
  } else if (jaar >= 1600 && jaar < 1700) {
    jr = 10;
  } else if (jaar >= 1700 && jaar < 1800) {
    jr = 20;
  } else if (jaar >= 1800 && jaar < 1850) {
    jr = 30;
  }
  if (jaar > 1850) {
    jr = 50 + jaar - 1850;
  }
  return jr;
};

canvasTiles._loadTile = function(tile, tilePoint) {
  tile._layer = this;
  tile._tilePoint = tilePoint;
  this._adjustTilePoint(tilePoint);
  this._redrawTile(tile);

  if (!this.options.async) {
    this.tileDrawn(tile);
  }
};
canvasTiles.drawTile = function(canvas, tilePoint, zoom) {
  var jr = getJaar();

  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.crossOrigin = "Anonymous";
  //The tiles need to come from a local source to prevent cross-origin problems
  // var url = '/tiles/tilecache.py/ibag/'+zoom+'/'+tilePoint.x+'/'+tilePoint.y+'.png';
  // var url = 'tiles/mapstory-tiles/'+zoom+'/'+tilePoint.x+'/'+tilePoint.y+'.png';
  var url =
    "https://api.mapbox.com/styles/v1/nittyjee/cj81xi6ij92pl2qld6s4ld01e/tiles/256/" +
    zoom +
    "/" +
    tilePoint.x +
    "/" +
    tilePoint.y +
    "?access_token=pk.eyJ1Ijoibml0dHlqZWUiLCJhIjoid1RmLXpycyJ9.NFk875-Fe6hoRCkGciG8yQ";
  //On the img.onload store the original data of the png to the canvas element and loop through all the pixels.
  img.onload = function() {
    var height = 256;
    var width = 256;
    ctx.drawImage(img, 0, 0);
    imageData = ctx.getImageData(0, 0, 256, 256);
    $(canvas).data("iData", imageData);
    //color the pixels of the canvas
    colorPixels(canvas);
  };
  img.src = url;
};
map.addLayer(canvasTiles);

//function to color the pixels of the canvas based on the pixel value and the current selected year
colorPixels = function(canvas) {
  var jr = getJaar();
  var ctx = canvas.getContext("2d");
  var imageData = ctx.createImageData(256, 256);
  if ($(canvas).data("iData")) {
    oImageData = $(canvas).data("iData");
    for (y = 0; y < 256; y++) {
      inpos = y * 256 * 4; // *4 for 4 ints per pixel
      outpos = inpos;
      for (x = 0; x < 256; x++) {
        var r = oImageData.data[inpos++]; // less red
        var g = oImageData.data[inpos++]; // less green
        var b = oImageData.data[inpos++]; // MORE BLUE
        var a = oImageData.data[inpos++]; // same alpha
        var rn = r; //store the original red value

        //The pixel is newer than the year so don't show it
        //also the nodata pixels should stay invisible

        if (r > jr || r == 0) a = 0;
        else {
          //the pixel is older than the year so show it and color it depending on the r value
          a = 255;
          if (r <= 1) {
            rn = 0;
            b = 0;
            g = 0;
          } else if (r > 1 && r <= 10) {
            // before 1600
            rn = 136;
            g = 138;
            b = 133;
          } else if (r > 10 && r <= 20) {
            //1600-1700
            rn = 92;
            g = 53;
            b = 102;
          } else if (r > 20 && r <= 30) {
            //1700-1800
            rn = 117;
            g = 80;
            b = 123;
          } else if (r > 30 && r <= 100) {
            //1800-1850
            rn = 150;
            g = 0;
            b = 0;
          } else if (r > 100 && r <= 150) {
            //1850-1900
            rn = 255;
            g = 0;
            b = 0;
          } else if (r > 150 && r <= 200) {
            //1900-1950
            rn = 245;
            g = 121;
            b = 0;
          } else if (r > 200 && r <= 250) {
            //1950-2000
            rn = 237;
            g = 212;
            b = 0;
          } //2000-2050
        }
        imageData.data[outpos++] = rn;
        imageData.data[outpos++] = g;
        imageData.data[outpos++] = b;
        imageData.data[outpos++] = a;
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
};

changeYear = function(jaar) {
  //update the color of the year
  var sv = $("#year");
  if (jaar < 1700) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1600");
  }
  if (jaar >= 1700 && jaar < 1800) {
    sv
      .removeClass("y1600")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1700");
  }
  if (jaar >= 1800 && jaar < 1850) {
    sv
      .removeClass("y1700")
      .removeClass("y1600")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1800");
  }
  if (jaar >= 1850 && jaar < 1900) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1600")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1850");
  }
  if (jaar >= 1900 && jaar < 1950) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1600")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1900");
  }
  if (jaar >= 1950 && jaar < 2000) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1600")
      .removeClass("y2000")
      .addClass("y1950");
  }
  if (jaar >= 2000) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y1600")
      .addClass("y2000");
  }

  var canvi = $("canvas");
  for (i = 0; i < canvi.length; i++) {
    var canvas = canvi[i];
    colorPixels(canvas);
  }
};

//set the opacity of the background map
setOpacity = function(opac) {
  layer.setOpacity(opac);
};

$("#linkButton").on("click", function() {
  var urlHash = window.location.hash.slice(0, -5);
  var year = window.location.hash.slice(-4);
  window.name = parseInt(year);
  document.location.href = "index.html" + urlHash;
});
