
//////////////////////////////////////////////////
//{ START.                                               minimize here.
//////////////////////////////////////////////////

mapboxgl.accessToken =
  "pk.eyJ1Ijoibml0dHlqZWUiLCJhIjoid1RmLXpycyJ9.NFk875-Fe6hoRCkGciG8yQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/nittyjee/cjg705tp9c5xw2rlhsukbq0bs",
  hash: true,
  center: [-92, 41],
  //  center: [-94, 38],
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
//CLICKING FEATURES

//{Line1                                                 minimize here.
//////////////////////////////////////////////////



//{ENCLOSING PART OF START BEFORE CLICKING LAYERS
}); //end map.on("load")
//}
//{Line2                                                 minimize here.
map.on("error", function(e) {
  // Hide those annoying non-error errors
  if (e && e.error !== "Error") console.log(e);
});


//}
//}Not sure why bracket must go here.

//         																	 EDIT THIS.
//{GERRYMANDERING CLICKING                               minimize here.
  
/*
joining_congressperson_reduce-0wjed0
nittyjee.7s9oedpt
joining_congressperson_reduced_further
*/
  
  map.on("click", "joining_congressperson_reduce-0wjed0", function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
		e.features[0].properties.STATENAME +
			", " +
			"District " +
		e.features[0].properties.DISTRICT +
			"<br>" +
			"<b>Representative: </b>" +
			"<br>" +
		e.features[0].properties.congressperson +
			"<br>" +
//          "<b>State: </b>" +
			"<b>Party: </b>" +
		e.features[0].properties.pol_party
      )
      .addTo(map);
  });

  

  
//  var popup;
  var info = document.querySelector("#infoPanel");
  map.on("mouseenter", "joining_congressperson_reduce-0wjed0", function(e) {
    map.getCanvas().style.cursor = "pointer";
    //console.log('',e);
	/*
    popup = new mapboxgl.Popup({closeButton:false})
    .setLngLat(e.lngLat)
    .setHTML(
      "<b>Representative:</b>" +
          e.features[0].properties.congressperson
    )
    .addTo(map);
*/
    info.innerHTML =  
	//"<b>Representative: </b>" + e.features[0].properties.congressperson;
	
//*
		e.features[0].properties.STATENAME +
			", " +
			"District " +
		e.features[0].properties.DISTRICT +
			"<br>" +
			"<b>Representative: </b>" +
			"<br>" +
		e.features[0].properties.congressperson +
			"<br>" +
//          "<b>State: </b>" +
			"<b>Party: </b>" +
		e.features[0].properties.pol_party
		;
//	  */
	
	
  });

  map.on("mousemove", "joining_congressperson_reduce-0wjed0", function(e) {
    map.getCanvas().style.cursor = "pointer";
    
    //console.log('',e);
/*
    if(popup) popup.remove()
    popup = new mapboxgl.Popup({closeButton:false})
    .setLngLat(e.lngLat)
    .setHTML(
      "<b>Representative:</b>" +
          e.features[0].properties.congressperson
    )
    .addTo(map);
	*/
    info.innerHTML =  
	//"<b>Representative: </b>" + e.features[0].properties.congressperson;
	
//*
		e.features[0].properties.STATENAME +
			", " +
			"District " +
		e.features[0].properties.DISTRICT +
			"<br>" +
			"<b>Representative: </b>" +
			"<br>" +
		e.features[0].properties.congressperson +
			"<br>" +
//          "<b>State: </b>" +
			"<b>Party: </b>" +
		e.features[0].properties.pol_party
		;
//	  */
    debounced(e.features[0].properties.fid);
    
    
    //map.setPaintProperty('joining_congressperson_reduce-0wjed0', 'fill-opacity', ['case', ['==', ['to-number', ['get', 'fid']], e.features[0].properties.fid], 1, 0.5 ]);
  });

  var debounced = _.debounce(function(fid){
    console.log('',"DEBOUNCED",fid);
    map.setFilter('joining_congressperson_reduce-0wjed0_highlighted', ['==', 'fid', fid]);
    //map.setPaintProperty('joining_congressperson_reduce-0wjed0', 'fill-opacity', ['case', ['==', ['to-number', ['get', 'fid']], fid], 1, 0.5 ]);
    
  }, 50);

  map.on("mouseleave", "joining_congressperson_reduce-0wjed0", function() {
    map.getCanvas().style.cursor = "";
    if(popup) popup.remove()
    info.innerHTML =  "";
    map.setFilter('joining_congressperson_reduce-0wjed0_highlighted', ['in', 'fid', '']);
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
//FILTERING FOR LAYERS														 EDIT THIS.

//{Gerrymandering                                        minimize here.

/*
joining_congressperson_reduce-0wjed0
nittyjee.7s9oedpt
joining_congressperson_reduced_further
*/

//Reduced Further
map.setFilter("joining_congressperson_reduce-0wjed0", dateFilter);

//Reduced Completely
//map.setFilter("joining_congressperson_reduce-ddz1hv", dateFilter);

//}
//{US Boundaries                                         minimize here.
  //US Major Boundaries - polygons
  //  map.setFilter('Major_Boundaries-4abmlj', yrFilter);

  //US Major Boundaries - lines
  map.setFilter("US_Major_Boundaries_Lines-2706lh", dateFilter);
  
  
  //US Major Boundaries Labels
  map.setFilter("us_major_boundary_labels", dateFilter);

  //US Minor Boundaries - polygons
  map.setFilter("US_Minor_Boundaries-1lyzcs", yrFilter);

//}



//{Indian Subcontinent                                   minimize here.
  //Indian Subcontinent Major Boundaries - polygons
  map.setFilter("Indian_Subcontinent_Major_Bou-dpiee3", yrFilter);

  //Indian Subcontinent Major Boundaries - lines
  map.setFilter("Indian_Subcontinent_Major_Bou-5gq491", yrFilter);
//}


//////////////////////////////////////////////////

  


 
//////////////////////////////////////////////////
//LAYER FILTERING END
}//end function changeDate
//////////////////////////////////////////////////






//////////////////////////////////////////////////
//																			 EDIT THIS.
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
//MAP LAYERS
/////////////////////////////////////							   
//														 					   EDIT THIS.

/////////////////////////////////////
//Boundaries
/////////////////////////////////////

//{GERRYMANDERING BOUNDARIES						     minimize here.
////////Move this section back below boundaries section, above United States.

/*
joining_congressperson_reduce-0wjed0
nittyjee.7s9oedpt
joining_congressperson_reduced_further
*/




//{Congressperson Reduced Further

	map.addLayer({
		id: "joining_congressperson_reduce-0wjed0",
		source: {
			type: "vector",
			url: "mapbox://nittyjee.7s9oedpt"
		},
		"source-layer": "joining_congressperson_reduced_further",
		type: "fill",
		paint: {
			'fill-outline-color': 'rgba(0,0,0,1)',
//			'fill-color': 'rgba(255,0,0,1)'
      'fill-opacity':0.6,
			"fill-color": {
				property: "pol_party",
				type: "categorical",
				stops: [
["American", "rgba(255,255,179,1)"],
["Anti-Mason", "rgba(204,255,230,1)"],
["Anti-Monopolist", "rgba(255,204,255,1)"],
["Conservative", "rgba(198,215,236,1)"],
["Dem", "rgba(153,179,255,1)"],
["Farm Labor", "rgba(179,230,179,1)"],
["Federalist", "rgba(204,204,179,1)"],
["Free Soil", "rgba(223,191,159,1)"],
["Greenback", "rgba(179,255,179,1)"],
["Independent", "rgba(204,255,255,1)"],
["Liberal", "rgba(255,255,153,1)"],
["Populist", "rgba(255,204,102,1)"],
["Progressive", "rgba(204,204,255,1)"],
["Rep", "rgba(255,153,128,1)"],
["Socialist", "rgba(179,217,255,1)"],
["Union Labor", "rgba(230,204,255,1)"],
["Whig", "rgba(255,221,153,1)"],
["none", "rgba(0,0,0,0.1)"]
				]
			}
		},
    filter: ["all", ["<=", "DayStart", date], [">=", "DayEnd", date]]
  });

	map.addLayer({
		id: "joining_congressperson_reduce-0wjed0_highlighted",
		source: {
			type: "vector",
			url: "mapbox://nittyjee.7s9oedpt"
		},
		"source-layer": "joining_congressperson_reduced_further",
		type: "fill",
		paint: {
			'fill-outline-color': "red",
      'fill-opacity':1,
			"fill-color": "dark gray"
		},
    filter: ["in", "fid", ""]
  });



















//}

////////Move this section back below boundaries section, above United States.
//} GERRYMANDERING Section end.
//{ United States Boundaries						     minimize here.

//{ United States Minor Boundaries 

  map.addLayer({
    id: "US_Minor_Boundaries-1lyzcs",
    source: {
      type: "vector",
      url: "mapbox://nittyjee.az4itfz9"
    },
    "source-layer": "US_Minor_Boundariesgeojson",
    type: "fill",
    minzoom: 7,
    paint: {
      //		'line-color': '#000000'
      "fill-outline-color": "rgba(255,255,230, 0.1)",
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

//{Other Boundaries						                 minimize here.

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

//}











//Don't remove/change/move this bracket:
}
/////////////////////////////////////////
  





/* End of Rob Code */
