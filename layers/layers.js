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

        var lyr_BelgiNGIMapBelgiumin1873vanaf1860_2 = new ol.layer.Tile({
            'title': 'België - NGI - Map Belgium in 1873 (vanaf 1860)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wmts.ngi.be/arcgis/rest/services/seamless_carto__default__3857__140/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_VlaanderenDigitaalVlaanderenFerrariskaart1777Vlaanderen_3 = new ol.layer.Tile({
            'title': 'Vlaanderen - Digitaal Vlaanderen - Ferrariskaart (1777), Vlaanderen',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://geo.api.vlaanderen.be/HISTCART/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=ferraris&STYLE=&FORMAT=image/png&TILEMATRIXSET=GoogleMapsVL&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}'
            })
        });
var lyr_Villaret_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geo.api.vlaanderen.be/histcart/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Villaret",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Villaret',
                            popuplayertitle: 'Villaret',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Villaret_4, 0]);

        var lyr_FlandersDigitaalVlaanderenAtlasderBuurtwegenca1840Vlaanderen_5 = new ol.layer.Tile({
            'title': 'Flanders - Digitaal Vlaanderen - Atlas der Buurtwegen (ca 1840), Vlaanderen',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://geo.api.vlaanderen.be/HISTCART/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=abw&STYLE=&FORMAT=image/png&TILEMATRIXSET=GoogleMapsVL&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}'
            })
        });

        var lyr_VlaanderenDigitaalVlaanderenDigitaalHoogtemodelVlaanderenIImultidirectionalehillshade025m_6 = new ol.layer.Tile({
            'title': 'Vlaanderen - Digitaal Vlaanderen - Digitaal Hoogtemodel Vlaanderen II, multidirectionale hillshade 0,25 m',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://geo.api.vlaanderen.be/DHMV/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=DHMV_II_HILL_25cm&STYLE=&FORMAT=image/png&TILEMATRIXSET=GoogleMapsVL&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}'
            })
        });

        var lyr_VlaanderenDigitaalVlaanderenDigitaalHoogtemodelVlaanderenIISkyviewfactor025m_7 = new ol.layer.Tile({
            'title': 'Vlaanderen - Digitaal Vlaanderen - Digitaal Hoogtemodel Vlaanderen II, Skyview factor 0,25 m',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://geo.api.vlaanderen.be/DHMV/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=DHMV_II_SVF_25cm&STYLE=&FORMAT=image/png&TILEMATRIXSET=GoogleMapsVL&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}'
            })
        });
var lyr_LiDAR_DHMV_II_25CM_YearlyIrradianceTotal_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://remotesensing.vlaanderen.be/services/openlidar/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "LiDAR_DHMV_II_25CM_YearlyIrradianceTotal",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'LiDAR_DHMV_II_25CM_YearlyIrradianceTotal',
                            popuplayertitle: 'LiDAR_DHMV_II_25CM_YearlyIrradianceTotal',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LiDAR_DHMV_II_25CM_YearlyIrradianceTotal_8, 0]);
var format_gemeenten_9 = new ol.format.GeoJSON();
var features_gemeenten_9 = format_gemeenten_9.readFeatures(json_gemeenten_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gemeenten_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gemeenten_9.addFeatures(features_gemeenten_9);
var lyr_gemeenten_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gemeenten_9, 
                style: style_gemeenten_9,
                popuplayertitle: 'gemeenten',
                interactive: false,
                title: '<img src="styles/legend/gemeenten_9.png" /> gemeenten'
            });
var lyr_tertiair_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tertiair<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tertiair_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [403906.472517, 6588299.439503, 409361.031982, 6591308.715828]
        })
    });
var lyr_pluviaal_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'pluviaal<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/pluviaal_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [403935.328500, 6588351.576900, 409334.078500, 6591256.576900]
        })
    });

lyr_GoogleHybrid_0.setVisible(true);lyr_WorldOpenStreetMapFoundationOpenStreetMapCartoStyledefault_1.setVisible(true);lyr_BelgiNGIMapBelgiumin1873vanaf1860_2.setVisible(false);lyr_VlaanderenDigitaalVlaanderenFerrariskaart1777Vlaanderen_3.setVisible(false);lyr_Villaret_4.setVisible(false);lyr_FlandersDigitaalVlaanderenAtlasderBuurtwegenca1840Vlaanderen_5.setVisible(false);lyr_VlaanderenDigitaalVlaanderenDigitaalHoogtemodelVlaanderenIImultidirectionalehillshade025m_6.setVisible(false);lyr_VlaanderenDigitaalVlaanderenDigitaalHoogtemodelVlaanderenIISkyviewfactor025m_7.setVisible(false);lyr_LiDAR_DHMV_II_25CM_YearlyIrradianceTotal_8.setVisible(false);lyr_gemeenten_9.setVisible(true);lyr_tertiair_10.setVisible(false);lyr_pluviaal_11.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_WorldOpenStreetMapFoundationOpenStreetMapCartoStyledefault_1,lyr_BelgiNGIMapBelgiumin1873vanaf1860_2,lyr_VlaanderenDigitaalVlaanderenFerrariskaart1777Vlaanderen_3,lyr_Villaret_4,lyr_FlandersDigitaalVlaanderenAtlasderBuurtwegenca1840Vlaanderen_5,lyr_VlaanderenDigitaalVlaanderenDigitaalHoogtemodelVlaanderenIImultidirectionalehillshade025m_6,lyr_VlaanderenDigitaalVlaanderenDigitaalHoogtemodelVlaanderenIISkyviewfactor025m_7,lyr_LiDAR_DHMV_II_25CM_YearlyIrradianceTotal_8,lyr_gemeenten_9,lyr_tertiair_10,lyr_pluviaal_11];
lyr_gemeenten_9.set('fieldAliases', {'id': 'id', 'UIDN': 'UIDN', 'OIDN': 'OIDN', 'TERRID': 'TERRID', 'NISCODE': 'NISCODE', 'NAAM': 'NAAM', 'DATPUBLBS': 'DATPUBLBS', 'NUMAC': 'NUMAC', });
lyr_gemeenten_9.set('fieldImages', {'id': 'TextEdit', 'UIDN': 'Range', 'OIDN': 'Range', 'TERRID': 'Range', 'NISCODE': 'TextEdit', 'NAAM': 'TextEdit', 'DATPUBLBS': 'DateTime', 'NUMAC': 'TextEdit', });
lyr_gemeenten_9.set('fieldLabels', {'id': 'no label', 'UIDN': 'no label', 'OIDN': 'no label', 'TERRID': 'no label', 'NISCODE': 'no label', 'NAAM': 'no label', 'DATPUBLBS': 'no label', 'NUMAC': 'no label', });
lyr_gemeenten_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});