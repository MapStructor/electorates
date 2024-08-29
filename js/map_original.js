
//////////////////////////////////////////////////
//{ START.                                               minimize here.
//////////////////////////////////////////////////

mapboxgl.accessToken =
  "pk.eyJ1Ijoibml0dHlqZWUiLCJhIjoid1RmLXpycyJ9.NFk875-Fe6hoRCkGciG8yQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/nittyjee/cjg705tp9c5xw2rlhsukbq0bs",
  hash: true,
  center: [-94, 38],
  zoom: 4,
  pitchWithRotate: false
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-left");

urlHash = window.location.hash;

map.on("load", function() {
  console.log("load");
  var sliderVal = $("#date").val();
  var yr = parseInt(moment.unix(sliderVal).format("YYYY"));
  var date = parseInt(moment.unix(sliderVal).format("YYYYMMDD"));

  $("#linkButton").on("click", function() {
    document.location.href = "raster-version.html" + urlHash;
  });

  /* add layers */
  //moved this to a separate function to clean things up - have to pass yr and date for filtering to work
  //latest: moved addLayers to fire on "style.load" event rather than "load" for quick implementation of "basemap" switching
  // addLayers(yr, date);

  /*Map events*/


  
//Why does this section require 2 ends below?
//}
//}
//////////////////////////////////////////////////





//////////////////////////////////////////////////
//{CLICKING FEATURES, AND SOME LINES IN BETWEEN          minimize here.
//////////////////////////////////////////////////

//{AMES BUILDINGS


  map.on("click", "buildings", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<b>Year Built:</b>" +
          e.features[0].properties.YearStart +
          "<br>" +
          "<b>Year Demolished:</b>" +
          e.features[0].properties.YearEnd
      )
      .addTo(map);
  });

  map.on("mouseenter", "buildings", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "buildings", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#year").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });

//}


//{NYC PARCELS AND SOME LINES IN BETWEEN

//{ NYC PARCELS (1)

  //{MANHATTAN PARCELS


    map.on("click", "manhattan_parcels_03-9qwzuf", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(

	  /*
            "<b>Address:</b>" +
            e.features[0].properties.Address +

            "<br>" +

            "<b>Owner:</b>" +
            e.features[0].properties.OwnerName +

            "<br>" +

            "<b>Total Value:</b>" +
            e.features[0].properties.AssessTot +

            "<br>" +

            "<b>Total Land Value:</b>" +
            e.features[0].properties.AssessLand +

            "<br>" +

            "<b>Date1 (temp):</b>" +
            e.features[0].properties.DayStart +

            "<br>" +

            "<b>Date2 (temp):</b>" +
            e.features[0].properties.DayEnd

            "<br>" +
*/

        "<b>Year Built:</b>" +
            e.features[0].properties.YearBuilt

      )
      .addTo(map);
  });

  map.on("mouseenter", "manhattan_parcels_03-9qwzuf", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "manhattan_parcels_03-9qwzuf", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#year").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });

  

//}
  //}

/////////////////////{SOME LINES IN BETWEEN


//{ENCLOSING PART OF START BEFORE CLICKING LAYERS
}); //end map.on("load")


//{ADDITIONAL LINE
map.on("error", function(e) {
  // Hide those annoying non-error errors
  if (e && e.error !== "Error") console.log(e);
});


//}

//}

//{ NYC PARCELS (2)
  

  //{BROOKLYN PARCELS


  map.on("click", "brooklyn_parcels_03-7y3mp4", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(

        "<b>Year Built:</b>" +
            e.features[0].properties.YearBuilt

      )
      .addTo(map);
  });

  map.on("mouseenter", "brooklyn_parcels_03-7y3mp4", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "brooklyn_parcels_03-7y3mp4", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#year").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });


  //}
  
  
  //{QUEENS PARCELS


  map.on("click", "queens_parcels_03-cihsme", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(

        "<b>Year Built:</b>" +
            e.features[0].properties.YearBuilt

      )
      .addTo(map);
  });

  map.on("mouseenter", "queens_parcels_03-cihsme", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "queens_parcels_03-cihsme", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#year").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });

  //}


  //{BRONX PARCELS

  map.on("click", "bronx_parcels_03-4jgu91", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(

        "<b>Year Built:</b>" +
            e.features[0].properties.YearBuilt

      )
      .addTo(map);
  });

  map.on("mouseenter", "bronx_parcels_03-4jgu91", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "bronx_parcels_03-4jgu91", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#year").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });

  //}

  
  //{STATEN ISLAND PARCELS


  map.on("click", "staten_island_parcels_03-1o8j1i", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(

        "<b>Year Built:</b>" +
            e.features[0].properties.YearBuilt

      )
      .addTo(map);
  });

  map.on("mouseenter", "staten_island_parcels_03-1o8j1i", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "staten_island_parcels_03-1o8j1i", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#year").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });
  
  
//}


  //}


//}
  

//}
//{GERRYMANDERING CLICKING                               minimize here.
  
/*
joining_congressperson_reduce-dl83t7
nittyjee.8smz6ybs
joining_congressperson_reduced_further
*/
  
  map.on("click", "joining_congressperson_reduce-dl83t7", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(

        "<b>Representative:</b>" +
            e.features[0].properties.congressperson

      )
      .addTo(map);
  });

  map.on("mouseenter", "joining_congressperson_reduce-dl83t7", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "joining_congressperson_reduce-dl83t7", function() {
    map.getCanvas().style.cursor = "";
  });

  map.on("moveend", function() {
    urlHash = window.location.hash + "/" + $("#DayStart").val();
    // document.location.href = 'raster-version.html' + urlHash;
    // console.log(document.location.href)
    console.log(urlHash);
  });
  
  
//}
//////////////////////////////////////////////////





//////////////////////////////////////////////////
//{ LAYER FILTERING                                      minimize here.

function changeDate(unixDate) {
  var year = parseInt(moment.unix(unixDate).format("YYYY"));
  var date = parseInt(moment.unix(unixDate).format("YYYYMMDD"));

  var sv = $("#year");
  if (year < 1700) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1600");
  }
  if (year >= 1700 && year < 1800) {
    sv
      .removeClass("y1600")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1700");
  }
  if (year >= 1800 && year < 1850) {
    sv
      .removeClass("y1700")
      .removeClass("y1600")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1800");
  }
  if (year >= 1850 && year < 1900) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1600")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1850");
  }
  if (year >= 1900 && year < 1950) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1600")
      .removeClass("y1950")
      .removeClass("y2000")
      .addClass("y1900");
  }
  if (year >= 1950 && year < 2000) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1600")
      .removeClass("y2000")
      .addClass("y1950");
  }
  if (year >= 2000) {
    sv
      .removeClass("y1700")
      .removeClass("y1800")
      .removeClass("y1850")
      .removeClass("y1900")
      .removeClass("y1950")
      .removeClass("y1600")
      .addClass("y2000");
  }

//}
  
  var yrFilter = ["all", ["<=", "YearStart", year], [">=", "YearEnd", year]];

  var dateFilter = ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]];
  
//}
//////////////////////////////////////////////////






//////////////////////////////////////////////////
//{FILTERING FOR LAYERS                                  minimize here.
//////////////////////////////////////////////////


  //Ames Buildings
  map.setFilter("buildings", yrFilter);

  //Netherlands Buildings
  map.setFilter("netherlands_buildings-6wkgma", yrFilter);
  
  //US Major Boundaries - polygons
  //  map.setFilter('Major_Boundaries-4abmlj', yrFilter);

  //US Major Boundaries - lines
  map.setFilter("US_Major_Boundaries_Lines-2706lh", dateFilter);
  
  
  //US Major Boundaries Labels
  map.setFilter("us_major_boundary_labels", dateFilter);

  //US Minor Boundaries - polygons
  map.setFilter("US_Minor_Boundaries-1lyzcs", yrFilter);

  //Indian Subcontinent Major Boundaries - polygons
  map.setFilter("Indian_Subcontinent_Major_Bou-dpiee3", yrFilter);

  //Indian Subcontinent Major Boundaries - lines
  map.setFilter("Indian_Subcontinent_Major_Bou-5gq491", yrFilter);

/*
  //Global Settlements - points
  map.setFilter("population", yrFilter);
*/

  //NYC MUNICIPALITIES, FILLS
//  map.setFilter("NYC_Municipalities-1ytq8a", dateFilter);

  //NYC MUNICIPALITIES, LINES
  map.setFilter("nyc_municipalities_lines-cztvls", dateFilter);

  //NYC MUNICIPALITIES LABELS
    map.setFilter("labels_shapefile-70j5np", dateFilter);



  //NYC PARCELS

  //MANHATTAN NYC PARCELS
//    map.setFilter("manhattan_parcels_03-cs4an8", dateFilter);
    map.setFilter("manhattan_parcels_03-9qwzuf", dateFilter);

  //BROOKLYN NYC PARCELS
    map.setFilter("brooklyn_parcels_03-7y3mp4", dateFilter);

  //QUEENS NYC PARCELS
    map.setFilter("queens_parcels_03-cihsme", dateFilter);

  //BRONX NYC PARCELS
    map.setFilter("bronx_parcels_03-4jgu91", dateFilter);

  //STATEN ISLAND NYC PARCELS
    map.setFilter("staten_island_parcels_03-1o8j1i", dateFilter);



	  //Places LABELS
  map.setFilter("global_labels", yrFilter);

  /////////////////////////////////////////////////////////////
  //Bulk Layers
  /////////////////////////////////////////////////////////////

  /*
  Chicago_Buildings-dg5b3w
  Chicago_Buildings
  nittyjee.a3jtdrwh


  */

  /////////////////////////////////////////////////////////////
  //Chicago, Illinois
  //Buildings
  /////////////////////////////////////////////////////////////

  //CHICAGO BUILDINGS
    map.setFilter("Chicago_Buildings-dg5b3w", dateFilter);
	
	
//}
//{FILTERING FOR GERRYMANDERING                          minimize here.


/*
joining_congressperson_reduce-dl83t7
nittyjee.8smz6ybs
joining_congressperson_reduced_further
*/


//Reduced Further
map.setFilter("joining_congressperson_reduce-dl83t7", dateFilter);
  
//Reduced Completely
//map.setFilter("joining_congressperson_reduce-ddz1hv", dateFilter);

//}
//////////////////////////////////////////////////

  


 
//////////////////////////////////////////////////
//LAYER FILTERING END
}//end function changeDate
//////////////////////////////////////////////////






//////////////////////////////////////////////////
//{ LEGEND, BASEMAPS                                     minimize here.


function setLayers() {

  var toggleableLayerIds = [
    "buildings",
    "netherlands_buildings-6wkgma",
    "US_Major_Boundaries_Lines-2706lh",
    "US_Minor_Boundaries-1lyzcs",
    "Indian_Subcontinent_Major_Bou-dpiee3",
    "us_major_boundary_labels",
    "Indian_Subcontinent_Major_Bou-5gq491",
  //  "nyc_municipalities_lines-catd44",
    "population"
  ];

  var legend = document.getElementById("legend");
  while (legend.hasChildNodes()) {
    legend.removeChild(legend.lastChild);
  }
  for (var i = 0; i < toggleableLayerIds.length; i++) {
    //use closure to deal with scoping
    (function() {
      var id = toggleableLayerIds[i];

      // Add checkbox and label elements for the layer.
      var input = document.createElement("input");
      input.type = "checkbox";
      input.id = id;
      input.checked = true;

      var label = document.createElement("label");
      label.setAttribute("for", id);
      label.textContent = id;

      // When the checkbox changes, update the visibility of the layer.
      input.addEventListener("change", function(e) {
        map.setLayoutProperty(
          id,
          "visibility",
          e.target.checked ? "visible" : "none"
        );
      });

      var layers = document.getElementById("legend");
      layers.appendChild(input);
      layers.appendChild(label);
      layers.appendChild(document.createElement("br"));
    })();
  }

}




/* "Basemap switcher code" */
map.on('style.load', function() {
  //on the 'style.load' event, switch "basemaps" and then re-add layers
  //this is necessary because basemaps aren't a concept in Mapbox, all layers are added via the same primitives
  console.log("style change")
  switchStyle();
  var sliderVal = $("#date").val();
  var yr = parseInt(moment.unix(sliderVal).format("YYYY"));
  var date = parseInt(moment.unix(sliderVal).format("YYYYMMDD"));
  console.log(sliderVal)
  console.log(yr)
  console.log(date)
  setLayers();
  addLayers(yr, date);
});


function switchStyle() {
  var basemaps = document.getElementById('styleSwitcher');
  var inputs = basemaps.getElementsByTagName('input');
console.log(inputs)
console.log(inputs.length)
  function switchLayer(layer) {
    var layerId = layer.target.id;
    if(layerId == 'hidden') {
      // map.removeLayer('buildings')
      // map.removeLayer('netherlands_buildings-6wkgma')
      // map.removeLayer('manhattan_parcels_03-9qwzuf')
      // map.removeLayer('brooklyn_parcels_03-7y3mp4')
      // map.removeLayer('queens_parcels_03-cihsme')
      // map.removeLayer('bronx_parcels_03-4jgu91')
      // map.removeLayer('staten_island_parcels_03-1o8j1i')
      // map.removeLayer('US_Minor_Boundaries-1lyzcs')
      // map.removeLayer('US_Major_Boundaries_Lines-2706lh')
      // map.removeLayer('us_major_boundary_labels')
      // map.removeLayer('Indian_Subcontinent_Major_Bou-dpiee3')
      // map.removeLayer('Indian_Subcontinent_Major_Bou-5gq491')
      map.setStyle('mapbox://styles/nittyjee/cjg705tp9c5xw2rlhsukbq0bs');

    } else {
      map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
    }
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
  }
}

//}
//////////////////////////////////////////////////









//Do not minimize this line:
//Unminimize this line:
                                       function addLayers(yr, date) {

									   
									   
/////////////////////////////////////
//{ MAP LAYERS						                     minimize here.	
									   
/////////////////////////////////////
//{NATURAL EARTH, COMMENTED OUT.
   //Commenting out natural earth raster layer to use Mapbox "outdoor" style option instead
  // map.addLayer({
  //   id: "naturalearth",
  //   source: {
  //     type: "raster",
  //     tiles: [
  //       "https://a.tiles.mapbox.com/v3/mapbox.natural-earth-2/{z}/{x}/{y}@2x.png"
  //     ]
  //   },
  //   type: "raster"
  // });
  
//}
/////////////////////////////////////



/////////////////////////////////////
//{SETTLEMENTS

//{SETTLEMENTS


//{BUILDINGS

//{Ames, IA Buildings
  
  map.addLayer({
    id: "buildings",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.058256b7"
    },
    "source-layer": "buildings",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "YearStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [1600, "#888a85"],
          [1700, "#5c3566"],
          [1800, "#75507b"],
          [1850, "#a40000"],
          [1900, "#cc0000"],
          [1950, "#f57900"],
          [2000, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "YearStart", yr], [">=", "YearEnd", yr]]
  });
  
  //}

//{Netherlands Buildings

  map.addLayer({
    id: "netherlands_buildings-6wkgma",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.d4hvz40x"
    },
    "source-layer": "Netherlands_Buildingsgeojson",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "YearStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [1600, "#888a85"],
          [1700, "#5c3566"],
          [1800, "#75507b"],
          [1850, "#a40000"],
          [1900, "#cc0000"],
          [1950, "#f57900"],
          [2000, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "YearStart", yr], [">=", "YearEnd", yr]]
  });

  //}  

//{CHICAGO BUILDINGS

  /*
  Chicago_Buildings-dg5b3w
  Chicago_Buildings
  nittyjee.a3jtdrwh

  */

  map.addLayer({
    id: "Chicago_Buildings-dg5b3w",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.a3jtdrwh"
    },
    "source-layer": "Chicago_Buildings",
    paint: {
      "fill-outline-color": "rgba(0,0,0,1)",
      "fill-color": {
        property: "DayStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
//          [11111111, "rgba(255,255,255,0)"],
          [11110101, "rgba(255,255,255,0)"],
          [11111112, "#2e3436"],
          [17650101, "#888a85"],
          [19000101, "#5c3566"],
          [19100101, "#75507b"],
          [19200101, "#a40000"],
          [19300101, "#808000"],
          [19650101, "#f57900"],
          [19950101, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });
  
//}

//}
  

//{PARCELS

//{ NYC Parcels

//{Manhattan Parcels


  map.addLayer({
    id: "manhattan_parcels_03-9qwzuf",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.6pz0gg5h"
    },
    "source-layer": "manhattan_parcels_03312018",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "DayStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [11111111, "rgba(255,255,255,0)"],
          [11111112, "#2e3436"],
          [17650101, "#888a85"],
          [19000101, "#5c3566"],
          [19100101, "#75507b"],
          [19200101, "#a40000"],
          [19300101, "#808000"],
          [19650101, "#f57900"],
          [19950101, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });
  
//}

//{Brooklyn Parcels

  map.addLayer({
    id: "brooklyn_parcels_03-7y3mp4",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.1lzkw0cv"
    },
    "source-layer": "brooklyn_parcels_03312018",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "DayStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [11110101, "rgba(255,255,255,0)"],
          [11111112, "#2e3436"],
          [17650101, "#888a85"],
          [19000101, "#5c3566"],
          [19100101, "#75507b"],
          [19200101, "#a40000"],
          [19300101, "#808000"],
          [19650101, "#f57900"],
          [19950101, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });

//}

//{Queens Parcels

  map.addLayer({
    id: "queens_parcels_03-cihsme",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.au26ytcw"
    },
    "source-layer": "queens_parcels_03312018",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "DayStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [11110101, "rgba(255,255,255,0)"],
          [11111112, "#2e3436"],
          [17650101, "#888a85"],
          [19000101, "#5c3566"],
          [19100101, "#75507b"],
          [19200101, "#a40000"],
          [19300101, "#808000"],
          [19650101, "#f57900"],
          [19950101, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });

//}

//{Bronx Parcels


  map.addLayer({
    id: "bronx_parcels_03-4jgu91",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.3nkvmmm0"
    },
    "source-layer": "bronx_parcels_03312018",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "DayStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [11110101, "rgba(255,255,255,0)"],
          [11111112, "#2e3436"],
          [17650101, "#888a85"],
          [19000101, "#5c3566"],
          [19100101, "#75507b"],
          [19200101, "#a40000"],
          [19300101, "#808000"],
          [19650101, "#f57900"],
          [19950101, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });

//}

//{Staten Island Parcels

  map.addLayer({
    id: "staten_island_parcels_03-1o8j1i",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.1h8zis4l"
    },
    "source-layer": "staten_island_parcels_03312018",
    paint: {
      "fill-outline-color": "rgba(0,0,0,0)",
      "fill-color": {
        property: "DayStart",
        type: "interval",
        stops: [
          [0, "#2e3436"],
          [11110101, "rgba(255,255,255,0)"],
          [11111112, "#2e3436"],
          [17650101, "#888a85"],
          [19000101, "#5c3566"],
          [19100101, "#75507b"],
          [19200101, "#a40000"],
          [19300101, "#808000"],
          [19650101, "#f57900"],
          [19950101, "#edd400"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });
  
//}
  
  
//}
  
//}


//}

//{SETTLEMENT POINTS -> ORGANIZE FURTHER

  /////////////////////////////////////////////////////////////
  //Add Settlements Layer
  //Points
  /////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////
  //Global Settlements
  /////////////////////////////////////////////////////////////
  
  
  /*

  map.addLayer({
    id: "population",
    type: "circle",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.c9okffto"
    },
    "source-layer": "shp-2lsmbo",
    paint: {
      //      'circle-radius': 4,

      "circle-radius": {
        property: "pop",
        stops: [
          [0, 1],
          [10000, 2],
          [50000, 3],
          [250000, 4],
          [1000000, 5],
          [2500000, 6],
          [5000000, 7],
          [10000000, 8],
          [30000000, 9]
        ]
      }

      /*
				'circle-color': {
                property: 'pop',
                stops: [
                    [0, '#F2F12D'],
                    [10000, '#EED322'],
                    [50000, '#E6B71E'],
                    [250000, '#DA9C20'],
                    [1000000, '#CA8323'],
                    [2500000, '#B86B25'],
                    [5000000, '#A25626'],
                    [10000000, '#8B4225'],
                    [30000000, '#723122']
                ]
				}
 */
 
/*
 
 
    },
    filter: ["all", ["<=", "YearStart", yr], [">=", "YearEnd", yr]]
  });

*/


//}

//{ZOOMABLE POINTS

map.on('load', function () {
  var lbl_color = "#482525";
  var lbl_color_hover = "#ff0000";
  var cities = ['ames', 'amsterdam', 'chicago', 'newyork'];
  map.addLayer({
      "id": "places-chicago",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "properties": {
                    "title": "Chicago",
                    "icon": "circle",
                    "bounds": [[-88.202, 41.6059], [-87.0924, 42.0984]]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-87.6554, 41.8176]
                }
              }]
          }
      },
      "layout": {
        "icon-image": "{icon}-11",
        "text-font": ["Open Sans Regular"],
        "text-field": '{title}',
        "text-size": 14,
        "text-anchor": "top",
        "text-offset": [0, 0.3],
      },
      "paint": {
        "text-color": lbl_color
      }
  });

  map.addLayer({
      "id": "places-newyork",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "properties": {
                    "title": "New York City",
                    "icon": "circle",
                    "bounds": [[-74.6538, 40.459], [-73.3429, 41.0178]]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-74.006054, 40.712998]
                }
              }]
          }
      },
      "layout": {
        "icon-image": "{icon}-11",
        "text-font": ["Open Sans Regular"],
        "text-field": '{title}',
        "text-size": 14,
        "text-anchor": "top",
        "text-offset": [4, 1],
      },
      "paint": {
        "text-color": lbl_color
      }
  });
  
  /*
  
"bounds": [[RIGHT, TOP], [LEFT, BOTTOM]]

"bounds": [-74.6538, 40.459], [-73.3429, 41.0178]
					
  Center:   #9.8/40.7082/-73.9952
  Top:      #9.8/40.459/-73.9865
  Bottom:   #9.8/41.0178/-73.9873
  Left:     #9.8/40.6986/-73.3429
  Right:    #9.7/40.6909/-74.6538
  
  */


  map.addLayer({
      "id": "places-ames",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "properties": {
                    "title": "Ames",
                    "icon": "circle",
                    "bounds": [[-93.6737, 42.0132], [-93.5966, 42.0495]]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-93.6357, 42.03]
                }
              }]
          }
      },
      "layout": {
        "icon-image": "{icon}-11",
        "text-font": ["Open Sans Regular"],
        "text-field": '{title}',
        "text-size": 14,
        "text-anchor": "top",
        "text-offset": [0, 0.3],
      },
      "paint": {
        "text-color": lbl_color
      }
  });
  
  

  map.addLayer({
      "id": "places-amsterdam",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "properties": {
                    "title": "Amsterdam",
                    "icon": "circle",				
                    "bounds": [[4.8405, 52.3518], [4.9433, 52.3845]]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.8866, 52.3677]
                }
              }]
          }
      },
      "layout": {
        "icon-image": "{icon}-11",
        "text-font": ["Open Sans Regular"],
        "text-field": '{title}',
        "text-size": 14,
        "text-anchor": "top",
        "text-offset": [0, 0.3],
      },
      "paint": {
        "text-color": lbl_color
      }
  });
  
  
  //Amsterdam
  //#13/52.3677/4.8866

  /*
  Top:    #13.5/52.3518/4.8926
  Bottom: #13.5/52.3845/4.8883
  Left:   #13.5/52.3665/4.9433
  Right:  #13.5/52.3677/4.8405
  */
  

  var map_city_click = function (e) {
    if (feature = getRenderedFeature(e.point)) {
      var bounds = JSON.parse(feature.properties.bounds);

      map.fitBounds(bounds, {
        padding: {top: 10, bottom:25, left: 15, right: 5}
      });
    }
  }

  map.on("click", map_city_click);

  map.on('mousemove', function (e) {

      if (feature = getRenderedFeature(e.point)) {
        layer = feature.layer.id;
        map.setPaintProperty(layer, 'text-color', lbl_color_hover);
        map.getCanvas().style.cursor = 'pointer';
      } else {
        map.setPaintProperty('places-ames', 'text-color', lbl_color);
        map.setPaintProperty('places-amsterdam', 'text-color', lbl_color);
        map.setPaintProperty('places-chicago', 'text-color', lbl_color);
        map.setPaintProperty('places-newyork', 'text-color', lbl_color);
        map.getCanvas().style.cursor = '';
      }
  });

  function getRenderedFeature(point) {
    var width = 50;
    var height = 14;
    var feature = map.queryRenderedFeatures([
      [point.x - width / 2, point.y - height * 0.9],
      [point.x + width / 2, point.y + height * 0.1]
    ], { layers: ['places-ames', 'places-amsterdam', 'places-newyork', 'places-chicago'] })[0];

    if (typeof feature != 'undefined') {
      return feature;
    } else {
      return 0;
    }
  }

});

//}

//{TRYING GLOBAL LABELS

  map.addSource("places_labels_src", {
    type: "vector",
    url: "mapbox://nittyjee.71d7u55v"
  });

  map.addLayer({
    id: "global_labels",
    source: "places_labels_src",
    "source-layer": "chicago_and_nyc-duq2nh",
    type: "symbol",
    maxzoom: 6,
    layout: {
      "text-field": "{city}"
    },
    filter: ["all", ["<=", "YearStart", date], [">=", "YearEnd", date]]
  });
  
//}

//}
/////////////////////////////////////


/////////////////////////////////////
//{GERRYMANDERING BOUNDARIES						     minimize here.
////////Move this section back below boundaries section, above United States.

/*
joining_congressperson_reduce-dl83t7
nittyjee.8smz6ybs
joining_congressperson_reduced_further
*/




//{Congressperson Reduced Further

	map.addLayer({
		id: "joining_congressperson_reduce-dl83t7",
		source: {
			type: "vector",
			url: "mapbox://nittyjee.8smz6ybs"
		},
		"source-layer": "joining_congressperson_reduced_further",
		type: "fill",
		paint: {
			'fill-outline-color': 'rgba(0,0,0,1)',
//			'fill-color': 'rgba(255,0,0,1)'
			"fill-color": {
				property: "pol_party",
				type: "categorical",
				stops: [
					["Dem", "rgba(184,199,101,1)"],
					["Rep", "rgba(0,0,0,0)"]
				]
			}
		},
    filter: ["all", ["<=", "DayStart", yr], [">=", "DayEnd", date]]
  });

//}

////////Move this section back below boundaries section, above United States.
//} GERRYMANDERING Section end.
/////////////////////////////////////

/////////////////////////////////////
//{ BOUNDARIES


//{ United States

//{ United States Minor Boundaries 

  map.addLayer({
    id: "US_Minor_Boundaries-1lyzcs",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.az4itfz9"
    },
    "source-layer": "US_Minor_Boundariesgeojson",
    type: "fill",
    maxzoom: 6,
    paint: {
      //		'line-color': '#000000'
      "fill-outline-color": "rgba(0, 0, 0, 0.15)",
      "fill-color": "rgba(0, 0, 0, 0)"
    },
    filter: ["all", ["<=", "YearStart", yr], [">=", "YearEnd", yr]]
  });

//}

//{ United States Major Boundaries 

//{ United States Major Boundaries Lines

  map.addLayer({
    //    'id': 'US_Major_Boundaries_Lines-aceyhz',
    id: "US_Major_Boundaries_Lines-2706lh",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.ajotvzcc"
    },
    "source-layer": "US_Major_Boundaries_Linesgeojson",
    type: "line",
    maxzoom: 6,
    paint: {
      "line-offset": 1,
      "line-width": 1.5,
      "line-color": {
        property: "TERR_TYPE",
        type: "categorical",
        stops: [
          //Bright Blue
          ["Colony", "#0000ee"],
          //Orange
          ["Unorganized Territory", "#ff9900"],
          //Dark Red
          ["Territory", "#cc3300"],
          //Bright Red
          ["State", "#cd0000"],
          //Bright Green
          ["Other", "#009933"],
          //Black
          ["District of Columbia", "#000000"]
        ]
      }
    },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });
  
//}

//{ United States Major Boundaries Labels

  map.addSource("us_major_boundary_labels_src", {
    type: "vector",
    url: "mapbox://nittyjee.7x096jcj"
  });

  map.addLayer({
    id: "us_major_boundary_labels",
    source: "us_major_boundary_labels_src",
    "source-layer": "shapefile_update_2-28a1ki",
    type: "symbol",
    maxzoom: 6,
    layout: {
      "text-field": "{name}"
    },
    /*
  'paint': {
    'text-color': 'red'
  },
  */
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });
  
//}

//}

//}


//{Indian Subcontinent

//{Indian Subcontinent Fills



  map.addLayer({
    id: "Indian_Subcontinent_Major_Bou-dpiee3",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.3qczytus"
    },
    "source-layer": "Indian_Subcontinent_Major_Boundariesgeojson",
    type: "fill",
    maxzoom: 6,
    //		'fill-color': 'rgba(255,0,0,0)',

    // /*

    //------------------------------------------------
    paint: {
      //        'fill-outline-color': 'rgba(0,0,0,1)',
      "fill-color": {
        property: "TYPE",
        type: "categorical",
        stops: [
          ["Afghans", "rgba(184,199,101,1)"],
          //
          //Agency should be dashed:
          ["Agency", "rgba(0,0,0,0)"],
          //
          ["Agency (Princely)", "rgba(255,127,127,1)"],
          ["Agency, British Portion", "rgba(255,190,190,1)"],
          ["ANEX_COMPLETE", "rgba(255,190,190,1)"],
          ["ANNEX_COMPLET", "rgba(255,190,190,1)"],
          ["ANNEX_COMPLETE", "rgba(255,190,190,1)"],
          ["ANNEXED_COMPLETE", "rgba(255,190,190,1)"],
          ["ANNEXED_PROTECTED", "rgba(255,190,190,1)"],
          ["ANNEXED_TWICE", "rgba(255,190,190,1)"],
          ["Autonomous Area", "rgba(255,127,127,1)"],
          ["Bangash", "rgba(164,114,173,1)"],
          ["BANGLADESH", "rgba(255,190,232,1)"],
          ["Benares", "rgba(223,115,255,1)"],
          ["Bengal", "rgba(76,115,0,1)"],
          ["British", "rgba(255,190,190,1)"],
          ["British (administration)", "rgba(255,190,190,1)"],
          ["British (direct relations)", "rgba(255,190,190,1)"],
          ["British (feudatory)", "rgba(255,127,127,1)"],
          ["British (leased)", "rgba(255,190,190,1)"],
          ["British (Partial)", "rgba(255,190,190,1)"],
          ["British (protectorate)", "rgba(255,190,190,1)"],
          ["British (Province)", "rgba(255,190,190,1)"],
          ["British (Special)", "rgba(255,127,127,1)"],
          ["British (subordinate ally)", "rgba(255,190,190,1)"],
          ["British (Temporary)", "rgba(255,190,190,1)"],
          ["British special treaty", "rgba(255,190,190,1)"],
          ["British, Chief Commissioner's Province", "rgba(255,190,190,1)"],
          ["British, Chief Commissionership", "rgba(255,190,190,1)"],
          ["Carnatic", "rgba(250,243,142,1)"],
          ["CARNATIC", "rgba(127,138,55,1)"],
          ["CIS-SUTLEJ SIKHS", "rgba(209,109,186,1)"],
          ["Cochin", "rgba(187,237,157,1)"],
          ["COCHIN", "rgba(130,196,73,1)"],
          //
          //Crown Colony should have black outline:
          ["Crown Colony", "rgba(0,0,0,0)"],
          //
          ["Cutch", "rgba(91,148,240,1)"],
          ["CUTCH", "rgba(120,49,140,1)"],
          ["Denmark", "rgba(206,84,240,1)"],
          ["DUTCH", "rgba(140,49,96,1)"],
          ["FARRUKHABAD", "rgba(165,185,250,1)"],
          ["Feudatory State", "rgba(255,127,127,1)"],
          ["French", "rgba(130,230,126,1)"],
          ["Gorakhpur", "rgba(97,250,97,1)"],
          ["INDIA", "rgba(190,232,255,1)"],
          ["Jammu & Kashmir (Protection, Full Area)", "rgba(255,127,127,1)"],
          ["Jammu & Kashmir (Protection)", "rgba(255,127,127,1)"],
          ["Jats", "rgba(179,115,109,1)"],
          ["JATS", "rgba(189,75,179,1)"],
          ["Kalhoras", "rgba(121,60,128,1)"],
          ["Lahore", "rgba(124,101,173,1)"],
          ["Lower Doab", "rgba(117,250,107,1)"],
          ["Malabar", "rgba(204,119,98,1)"],
          ["MALABAR", "rgba(204,119,98,1)"],
          //
          //Marathas or MARATHA should not have a border:
          ["MARATHA", "rgba(163,255,115,1)"],
          //
          ["Marathas", "rgba(163,255,115,1)"],
          ["Mughals", "rgba(0,169,230,1)"],
          ["MUGHALS", "rgba(0,169,230,1)"],
          ["Mysore", "rgba(91,185,240,1)"],
          ["MYSORE", "rgba(166,81,78,1)"],
          ["NEPAL", "rgba(255,190,232,1)"],
          ["Nizam", "rgba(112,168,0,1)"],
          ["NIZAM", "rgba(112,168,0,1)"],
          ["Northern Circars, Masulipatam", "rgba(140,50,76,1)"],
          ["Oudh", "rgba(132,0,168,1)"],
          ["OUDH", "rgba(132,0,168,1)"],
          ["PAKISTAN", "rgba(233,255,190,1)"],
          ["Portuguese", "rgba(191,164,96,1)"],
          ["PORTUGUESE", "rgba(132,196,169,1)"],
          ["Portuguese India", "rgba(68,165,173,1)"],
          //
          //Presidency should be dashed:
          ["Presidency", "rgba(0,0,0,0)"],
          //
          ["Princely Area", "rgba(255,127,127,1)"],
          ["Princely_State", "rgba(255,127,127,1)"],
          ["PROTECED_COMPLETE", "rgba(255,127,127,1)"],
          ["PROTECTED", "rgba(255,127,127,1)"],
          ["PROTECTED_ANNEXED", "rgba(255,127,127,1)"],
          ["PROTECTED_COMPLETE", "rgba(255,127,127,1)"],
          ["PROTECTED_TWICE", "rgba(255,127,127,1)"],
          //
          //Province should have black outline:
          ["Province", "rgba(0,0,0,0)"],
          //
          ["Province (British)", "rgba(255,190,190,1)"],
          ["Province (Princely)", "rgba(255,127,127,1)"],
          ["Province, British Portion", "rgba(255,190,190,1)"],
          ["RAJPUTANA", "rgba(255,255,190,1)"],
          ["Rajputs", "rgba(255,255,190,1)"],
          ["Rohilkhand", "rgba(161,63,126,1)"],
          ["Rohillas", "rgba(81,196,142,1)"],
          ["SAVANTVADI", "rgba(203,212,78,1)"],
          ["SINDHIA", "rgba(163,255,115,1)"],
          ["SIROHI", "rgba(163,83,158,1)"],
          ["TANJORE", "rgba(201,133,147,1)"],
          ["TRAVANCORE", "rgba(114,79,179,1)"],
          ["Unlabeled", "rgba(130,130,130,1)"],
          ["UNLABELED", "rgba(130,130,130,1)"],
          ["NULL", "rgba(239,245,191,1)"]
        ]
      }
    },

    filter: ["all", ["<=", "YearStart", yr], [">=", "YearEnd", yr]]
  });

//}


//{Indian Subcontinent Lines

  map.addLayer({
    id: "Indian_Subcontinent_Major_Bou-5gq491",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.aozn7vub"
    },
    "source-layer": "Indian_Subcontinent_Major_Boundaries_Linesgeojson",
    type: "line",
    maxzoom: 6,
    paint: {
      //		'line-offset': 1,
      //		'line-width': 1.5,
      "line-color": {
        property: "TYPE",
        type: "categorical",
        stops: [
          ["Afghans", "rgba(0,0,0,1)"],
          //Agency should be dashed:
          ["Agency", "rgba(0,0,0,1)"],
          ["Agency (Princely)", "rgba(0,0,0,1)"],
          ["Agency, British Portion", "rgba(0,0,0,1)"],
          ["ANEX_COMPLETE", "rgba(0,0,0,1)"],
          ["ANNEX_COMPLET", "rgba(0,0,0,1)"],
          ["ANNEX_COMPLETE", "rgba(0,0,0,1)"],
          ["ANNEXED_COMPLETE", "rgba(0,0,0,1)"],
          ["ANNEXED_PROTECTED", "rgba(0,0,0,1)"],
          ["ANNEXED_TWICE", "rgba(0,0,0,1)"],
          ["Autonomous Area", "rgba(0,0,0,1)"],
          ["Bangash", "rgba(0,0,0,1)"],
          ["BANGLADESH", "rgba(0,0,0,1)"],
          ["Benares", "rgba(0,0,0,1)"],
          ["Bengal", "rgba(0,0,0,1)"],
          ["British", "rgba(0,0,0,1)"],
          ["British (administration)", "rgba(0,0,0,1)"],
          ["British (direct relations)", "rgba(0,0,0,1)"],
          ["British (feudatory)", "rgba(0,0,0,1)"],
          ["British (leased)", "rgba(0,0,0,1)"],
          ["British (Partial)", "rgba(0,0,0,1)"],
          ["British (protectorate)", "rgba(0,0,0,1)"],
          ["British (Province)", "rgba(0,0,0,1)"],
          ["British (Special)", "rgba(0,0,0,1)"],
          ["British (subordinate ally)", "rgba(0,0,0,1)"],
          ["British (Temporary)", "rgba(0,0,0,1)"],
          ["British special treaty", "rgba(0,0,0,1)"],
          //["British, Chief Commissioner's Province", 'rgba(0,0,0,1)'],
          ["British, Chief Commissionership", "rgba(0,0,0,1)"],
          ["Carnatic", "rgba(0,0,0,1)"],
          ["CARNATIC", "rgba(0,0,0,1)"],
          ["CIS-SUTLEJ SIKHS", "rgba(0,0,0,1)"],
          ["Cochin", "rgba(0,0,0,1)"],
          ["COCHIN", "rgba(0,0,0,1)"],
          //Crown Colony should have black outline:
          ["Crown Colony", "rgba(0,0,0,1)"],
          ["Cutch", "rgba(0,0,0,1)"],
          ["CUTCH", "rgba(0,0,0,1)"],
          ["Denmark", "rgba(0,0,0,1)"],
          ["DUTCH", "rgba(0,0,0,1)"],
          ["FARRUKHABAD", "rgba(0,0,0,1)"],
          ["Feudatory State", "rgba(0,0,0,1)"],
          ["French", "rgba(0,0,0,1)"],
          ["Gorakhpur", "rgba(0,0,0,1)"],
          ["INDIA", "rgba(0,0,0,1)"],
          ["Jammu & Kashmir (Protection", "rgba(0,0,0,1)"],
          //['Jammu & Kashmir (Protection)', 'rgba(0,0,0,1)'],
          ["Jats", "rgba(0,0,0,1)"],
          ["JATS", "rgba(0,0,0,1)"],
          ["Kalhoras", "rgba(0,0,0,1)"],
          ["Lahore", "rgba(0,0,0,1)"],
          ["Lower Doab", "rgba(0,0,0,1)"],
          ["Malabar", "rgba(0,0,0,1)"],
          ["MALABAR", "rgba(0,0,0,1)"],
          //Marathas or MARATHA should not have a border:
          ["MARATHA", "rgba(0,0,0,0)"],
          ["Marathas", "rgba(0,0,0,0)"],
          ["Mughals", "rgba(0,0,0,1)"],
          ["MUGHALS", "rgba(0,0,0,1)"],
          ["Mysore", "rgba(0,0,0,1)"],
          ["MYSORE", "rgba(0,0,0,1)"],
          ["NEPAL", "rgba(0,0,0,1)"],
          ["Nizam", "rgba(0,0,0,1)"],
          ["NIZAM", "rgba(0,0,0,1)"],
          ["Northern Circars", "rgba(0,0,0,1)"],
          ["Oudh", "rgba(0,0,0,1)"],
          ["OUDH", "rgba(0,0,0,1)"],
          ["PAKISTAN", "rgba(0,0,0,1)"],
          ["Portuguese", "rgba(0,0,0,1)"],
          ["PORTUGUESE", "rgba(0,0,0,1)"],
          ["Portuguese India", "rgba(0,0,0,1)"],
          //Presidency should be dashed:
          ["Presidency", "rgba(0,0,0,1)"],
          //
          ["Princely Area", "rgba(0,0,0,1)"],
          ["Princely_State", "rgba(0,0,0,1)"],
          ["PROTECED_COMPLETE", "rgba(0,0,0,1)"],
          ["PROTECTED", "rgba(0,0,0,1)"],
          ["PROTECTED_ANNEXED", "rgba(0,0,0,1)"],
          ["PROTECTED_COMPLETE", "rgba(0,0,0,1)"],
          ["PROTECTED_TWICE", "rgba(0,0,0,1)"],
          //
          //Province should have black outline:
          ["Province", "rgba(0,0,0,1)"],
          //
          ["Province (British)", "rgba(0,0,0,1)"],
          ["Province (Princely)", "rgba(0,0,0,1)"],
          ["RAJPUTANA", "rgba(0,0,0,1)"],
          ["Rajputs", "rgba(0,0,0,1)"],
          ["Rohilkhand", "rgba(0,0,0,1)"],
          ["Rohillas", "rgba(0,0,0,1)"],
          ["SAVANTVADI", "rgba(0,0,0,1)"],
          ["SINDHIA", "rgba(0,0,0,1)"],
          ["SIROHI", "rgba(0,0,0,1)"],
          ["TANJORE", "rgba(0,0,0,1)"],
          ["TRAVANCORE", "rgba(0,0,0,1)"],
          ["Unlabeled", "rgba(0,0,0,1)"],
          ["UNLABELED", "rgba(0,0,0,1)"],
          ["NULL", "rgba(0,0,0,1)"]
        ]
      }
    },

    filter: ["all", ["<=", "YearStart", yr], [">=", "YearEnd", yr]]
  });
  
//}

//}Indian Subcontinent Section End


//{NYC MUNICIPALITIES

  //////////////
  //NYC MUNICIPALITIES LINES
  //////////////

  map.addLayer({
//    id: "nyc_municipalities_lines-604nzo",
    id: "nyc_municipalities_lines-cztvls",
    source: {
      type: "vector",
//      url: "mapbox://nittyjee.81l6dnd6"
      url: "mapbox://nittyjee.34hs9r49"
    },
    "source-layer": "nyc_municipalities_lines",
	type: "line",
    minzoom: 7,
    paint: {
//    "line-offset": 1,
      "line-color": "rgba(0,0,0,1)",
      "line-width": 1.5
	  },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });


  //////////////
  //NYC MUNICIPALITIES FILLED
  //////////////

/*

  map.addLayer({
    id: "NYC_Municipalities-1ytq8a",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.8q6y4nhh"
    },
    "source-layer": "NYC_Municipalities",
    type: "fill",
//    maxzoom: 6,
    paint: {
	  "fill-outline-color": "rgba(0,0,0,1)",
      "fill-color": "rgba(0,0,0,0.2)"
	  },
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });


*/


   /////////////////////////////////////////////////////////////
  //Add Labels Layer
  //NYC MUNICIPALITIES
  /////////////////////////////////////////////////////////////

  //NOTE: MUST USE ZIPPED SHAPEFILE. MBTILES WILL NOT WORK.

  map.addSource("nyc_labels_src", {
    type: "vector",
//    url: "mapbox://nittyjee.11suz4o4"
    url: "mapbox://nittyjee.dvdzyqyb"
  });

  map.addLayer({
//	id: "NYC_labels2",
	id: "labels_shapefile-70j5np",
    source: "nyc_labels_src",
//    "source-layer": "NYC_labels2-6zzh1p",
    "source-layer": "labels_shapefile-70j5np",
    type: "symbol",
    minzoom: 8,
    layout: {
      "text-field": "{NAME}"
    },
    /*
  'paint': {
    'text-color': 'red'
  },
  */
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });
  
//}


//} Boundaries section end.
/////////////////////////////////////



//} Map Layers Section End 






//Don't remove/change/move this bracket:
}
/////////////////////////////////////////
  





/* End of Rob Code */
