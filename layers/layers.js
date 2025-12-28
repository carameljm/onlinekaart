var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldOpenStreetMapFoundationOpenStreetMapCartoStyledefault_1 = new ol.layer.Tile({
            'title': 'World - OpenStreetMap Foundation - OpenStreetMap Carto Style (default)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gemeente_2 = new ol.format.GeoJSON();
var features_Gemeente_2 = format_Gemeente_2.readFeatures(json_Gemeente_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeente_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeente_2.addFeatures(features_Gemeente_2);
var lyr_Gemeente_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemeente_2, 
                style: style_Gemeente_2,
                popuplayertitle: 'Gemeente',
                interactive: true,
                title: '<img src="styles/legend/Gemeente_2.png" /> Gemeente'
            });
var format_buurtwegenoostvlaanderen_3 = new ol.format.GeoJSON();
var features_buurtwegenoostvlaanderen_3 = format_buurtwegenoostvlaanderen_3.readFeatures(json_buurtwegenoostvlaanderen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buurtwegenoostvlaanderen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buurtwegenoostvlaanderen_3.addFeatures(features_buurtwegenoostvlaanderen_3);
var lyr_buurtwegenoostvlaanderen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buurtwegenoostvlaanderen_3, 
                style: style_buurtwegenoostvlaanderen_3,
                popuplayertitle: 'buurtwegenoostvlaanderen',
                interactive: true,
                title: '<img src="styles/legend/buurtwegenoostvlaanderen_3.png" /> buurtwegenoostvlaanderen'
            });
var format_wijzigingenoostvlaanderen_4 = new ol.format.GeoJSON();
var features_wijzigingenoostvlaanderen_4 = format_wijzigingenoostvlaanderen_4.readFeatures(json_wijzigingenoostvlaanderen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wijzigingenoostvlaanderen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wijzigingenoostvlaanderen_4.addFeatures(features_wijzigingenoostvlaanderen_4);
var lyr_wijzigingenoostvlaanderen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wijzigingenoostvlaanderen_4, 
                style: style_wijzigingenoostvlaanderen_4,
                popuplayertitle: 'wijzigingenoostvlaanderen',
                interactive: true,
    title: 'wijzigingenoostvlaanderen<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_0.png" /> Afschaffing<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_1.png" /> Deels afgeschaft bij verplaatsing<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_2.png" /> Nieuw deel bij verplaatsing<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_3.png" /> Nieuwe weg<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_4.png" /> Onbepaalde wijziging<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_5.png" /> Verbreding<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_6.png" /> Verklaring/erkenning<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_7.png" /> Verlenging<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_8.png" /> Verplaatsing<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_9.png" /> Versmalling<br />\
    <img src="styles/legend/wijzigingenoostvlaanderen_4_10.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_WorldOpenStreetMapFoundationOpenStreetMapCartoStyledefault_1.setVisible(true);lyr_Gemeente_2.setVisible(true);lyr_buurtwegenoostvlaanderen_3.setVisible(true);lyr_wijzigingenoostvlaanderen_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_WorldOpenStreetMapFoundationOpenStreetMapCartoStyledefault_1,lyr_Gemeente_2,lyr_buurtwegenoostvlaanderen_3,lyr_wijzigingenoostvlaanderen_4];
lyr_Gemeente_2.set('fieldAliases', {'id': 'id', 'UIDN': 'UIDN', 'OIDN': 'OIDN', 'TERRID': 'TERRID', 'NISCODE': 'NISCODE', 'NAAM': 'NAAM', 'DATPUBLBS': 'DATPUBLBS', 'NUMAC': 'NUMAC', });
lyr_buurtwegenoostvlaanderen_3.set('fieldAliases', {'ID': 'ID', 'NR': 'NR', 'TYPE': 'TYPE', 'LENGTH': 'LENGTH', 'GEMID': 'GEMID', 'PLANID': 'PLANID', 'CEVI_OID': 'CEVI_OID', 'GEMEENTE': 'GEMEENTE', 'DETAILPLAN': 'DETAILPLAN', 'TYPE_LABEL': 'TYPE_LABEL', });
lyr_wijzigingenoostvlaanderen_4.set('fieldAliases', {'GEMID': 'GEMID', 'PLANID': 'PLANID', 'NR': 'NR', 'IDWIJZIGIN': 'IDWIJZIGIN', 'TYPE': 'TYPE', 'TYPE_LABEL': 'TYPE_LABEL', 'DATUM': 'DATUM', 'LINK': 'LINK', 'CEVI_OID': 'CEVI_OID', 'GEMEENTE': 'GEMEENTE', });
lyr_Gemeente_2.set('fieldImages', {'id': 'TextEdit', 'UIDN': 'Range', 'OIDN': 'Range', 'TERRID': 'Range', 'NISCODE': 'TextEdit', 'NAAM': 'TextEdit', 'DATPUBLBS': 'DateTime', 'NUMAC': 'TextEdit', });
lyr_buurtwegenoostvlaanderen_3.set('fieldImages', {'ID': 'TextEdit', 'NR': 'TextEdit', 'TYPE': 'TextEdit', 'LENGTH': 'TextEdit', 'GEMID': 'TextEdit', 'PLANID': 'TextEdit', 'CEVI_OID': 'Range', 'GEMEENTE': 'TextEdit', 'DETAILPLAN': 'TextEdit', 'TYPE_LABEL': 'TextEdit', });
lyr_wijzigingenoostvlaanderen_4.set('fieldImages', {'GEMID': 'TextEdit', 'PLANID': 'TextEdit', 'NR': 'TextEdit', 'IDWIJZIGIN': 'TextEdit', 'TYPE': 'TextEdit', 'TYPE_LABEL': 'TextEdit', 'DATUM': 'DateTime', 'LINK': 'TextEdit', 'CEVI_OID': 'Range', 'GEMEENTE': 'TextEdit', });
lyr_Gemeente_2.set('fieldLabels', {'id': 'no label', 'UIDN': 'no label', 'OIDN': 'no label', 'TERRID': 'no label', 'NISCODE': 'no label', 'NAAM': 'no label', 'DATPUBLBS': 'no label', 'NUMAC': 'no label', });
lyr_buurtwegenoostvlaanderen_3.set('fieldLabels', {'ID': 'no label', 'NR': 'no label', 'TYPE': 'no label', 'LENGTH': 'no label', 'GEMID': 'no label', 'PLANID': 'no label', 'CEVI_OID': 'no label', 'GEMEENTE': 'no label', 'DETAILPLAN': 'no label', 'TYPE_LABEL': 'no label', });
lyr_wijzigingenoostvlaanderen_4.set('fieldLabels', {'GEMID': 'no label', 'PLANID': 'no label', 'NR': 'no label', 'IDWIJZIGIN': 'no label', 'TYPE': 'no label', 'TYPE_LABEL': 'no label', 'DATUM': 'no label', 'LINK': 'no label', 'CEVI_OID': 'no label', 'GEMEENTE': 'no label', });
lyr_wijzigingenoostvlaanderen_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});