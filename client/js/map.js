var map = L.map('map', {
	zoomControl: false
}).setView([39.282365, -76.615220], 15);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-i875mjb7'
}).addTo(map);

//custom zoom controls
$("#zoomIn").click(function(e) {
    e.preventDefault();
    map.zoomIn();
});

$("#zoomOut").click(function(e) {
    e.preventDefault();
    map.zoomOut();
});

var geojsonMarkerOptions = {
    radius: 18,
    fillColor: "grey",
    color: "white",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};



var sensorLayer = L.geoJson(sensordata, {
		pointToLayer: function (feature, latlng) {
        	return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(map);

setTimeout(function(){
	var colors = [['#e4ff01', 8], ['#ffe401', 8], ['#ffa201', 14], ['#ff7301', 16], ['#ff4901', 18], ['#ff0101', 20]];
	map.removeLayer(sensorLayer);
	console.log(colors[Math.floor(Math.random() * colors.length)]);
	geojsonMarkerOptions.fillColor = colors[Math.floor(Math.random() * colors.length )];

	sensorLayer = L.geoJson(sensordata, {
			pointToLayer: function (feature, latlng) {
				var sdaf = colors[Math.floor(Math.random() * colors.length )];
	        	return L.circleMarker(latlng, {
				    radius: sdaf[1],
				    fillColor: sdaf[0],
				    color: "white",
				    weight: 1,
				    opacity: 1,
				    fillOpacity: 0.8
				});
	        }
	    }).addTo(map);

	setTimeout(arguments.callee, 1000);
}, 1000);

var turnOffAll = function(){
	$('#temp').find('i').removeClass('act');
	$('#humidity').find('i').removeClass('act');
	$('#sound').find('i').removeClass('act');
	$('#light').find('i').removeClass('act');

};

$('#temp').click(function(){ turnOffAll();
	$(this).find('i').toggleClass('act');

});

$('#humidity').click(function(){ turnOffAll();
	$(this).find('i').toggleClass('act');

});

$('#sound').click(function(){ turnOffAll();
	$(this).find('i').toggleClass('act');

});

$('#light').click(function(){ turnOffAll();
	$(this).find('i').toggleClass('act');

});
