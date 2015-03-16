var map = L.map('map', {
	zoomControl: false
}).setView([39.290365, -76.615220], 13);

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