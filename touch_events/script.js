(function(){
    'use strict';

    var map = L.map('map').setView([34.028622, -117.810333], 13); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 

    var marker = L.marker([34.02, -117.81]).addTo(map); 
    var circle = L.circle([34.028622, -117.86], {
        color: 'fuchsia',
        fillColor: 'fuchsia',
        fillOpacity: 0.5,
        radius: 400
    }).addTo(map);
    var polygon = L.polygon([
        [34.03, -117.85],
        [34.04, -117.83],
        [34.03, -117.81]
    ]).addTo(map);
    marker.bindPopup("i am a marker").openPopup();
    circle.bindPopup("i'm round");
    polygon.bindPopup("i'm pointy");
}());