var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geomorphicKapoposang_1 = new ol.format.GeoJSON();
var features_geomorphicKapoposang_1 = format_geomorphicKapoposang_1.readFeatures(json_geomorphicKapoposang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphicKapoposang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphicKapoposang_1.addFeatures(features_geomorphicKapoposang_1);
var lyr_geomorphicKapoposang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphicKapoposang_1, 
                style: style_geomorphicKapoposang_1,
                popuplayertitle: 'geomorphic — Kapoposang',
                interactive: true,
    title: 'geomorphic — Kapoposang<br />\
    <img src="styles/legend/geomorphicKapoposang_1_0.png" /> <br />\
    <img src="styles/legend/geomorphicKapoposang_1_1.png" /> Outer Reef Flat<br />\
    <img src="styles/legend/geomorphicKapoposang_1_2.png" /> Back Reef Slope<br />\
    <img src="styles/legend/geomorphicKapoposang_1_3.png" /> Deep Lagoon<br />\
    <img src="styles/legend/geomorphicKapoposang_1_4.png" /> Inner Reef Flat<br />\
    <img src="styles/legend/geomorphicKapoposang_1_5.png" /> Plateau<br />\
    <img src="styles/legend/geomorphicKapoposang_1_6.png" /> Reef Crest<br />\
    <img src="styles/legend/geomorphicKapoposang_1_7.png" /> Shallow Lagoon<br />\
    <img src="styles/legend/geomorphicKapoposang_1_8.png" /> Sheltered Reef Slope<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_geomorphicKapoposang_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_geomorphicKapoposang_1];
lyr_geomorphicKapoposang_1.set('fieldAliases', {'class': 'class', });
lyr_geomorphicKapoposang_1.set('fieldImages', {'class': 'TextEdit', });
lyr_geomorphicKapoposang_1.set('fieldLabels', {'class': 'hidden field', });
lyr_geomorphicKapoposang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});