ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([19684613.297575, -2107424.395335, 19919372.265738, -1931926.991323]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ABS_1 = new ol.format.GeoJSON();
var features_ABS_1 = format_ABS_1.readFeatures(json_ABS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABS_1.addFeatures(features_ABS_1);
var lyr_ABS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABS_1, 
                style: style_ABS_1,
                popuplayertitle: 'ABS',
                interactive: true,
                title: '<img src="styles/legend/ABS_1.png" /> ABS'
            });
var format_DOF_2 = new ol.format.GeoJSON();
var features_DOF_2 = format_DOF_2.readFeatures(json_DOF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOF_2.addFeatures(features_DOF_2);
var lyr_DOF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOF_2, 
                style: style_DOF_2,
                popuplayertitle: 'DOF',
                interactive: true,
                title: '<img src="styles/legend/DOF_2.png" /> DOF'
            });
var format_GroundMountTransformer_3 = new ol.format.GeoJSON();
var features_GroundMountTransformer_3 = format_GroundMountTransformer_3.readFeatures(json_GroundMountTransformer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroundMountTransformer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundMountTransformer_3.addFeatures(features_GroundMountTransformer_3);
var lyr_GroundMountTransformer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GroundMountTransformer_3, 
                style: style_GroundMountTransformer_3,
                popuplayertitle: 'Ground Mount Transformer',
                interactive: true,
                title: '<img src="styles/legend/GroundMountTransformer_3.png" /> Ground Mount Transformer'
            });
var format_Isolator_4 = new ol.format.GeoJSON();
var features_Isolator_4 = format_Isolator_4.readFeatures(json_Isolator_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isolator_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isolator_4.addFeatures(features_Isolator_4);
var lyr_Isolator_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isolator_4, 
                style: style_Isolator_4,
                popuplayertitle: 'Isolator',
                interactive: true,
                title: '<img src="styles/legend/Isolator_4.png" /> Isolator'
            });
var format_Overhead11kV_5 = new ol.format.GeoJSON();
var features_Overhead11kV_5 = format_Overhead11kV_5.readFeatures(json_Overhead11kV_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Overhead11kV_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Overhead11kV_5.addFeatures(features_Overhead11kV_5);
var lyr_Overhead11kV_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Overhead11kV_5, 
                style: style_Overhead11kV_5,
                popuplayertitle: 'Overhead 11kV',
                interactive: true,
                title: '<img src="styles/legend/Overhead11kV_5.png" /> Overhead 11kV'
            });
var format_Overhead33kV_6 = new ol.format.GeoJSON();
var features_Overhead33kV_6 = format_Overhead33kV_6.readFeatures(json_Overhead33kV_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Overhead33kV_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Overhead33kV_6.addFeatures(features_Overhead33kV_6);
var lyr_Overhead33kV_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Overhead33kV_6, 
                style: style_Overhead33kV_6,
                popuplayertitle: 'Overhead 33kV',
                interactive: true,
                title: '<img src="styles/legend/Overhead33kV_6.png" /> Overhead 33kV'
            });
var format_Overhead132kV_7 = new ol.format.GeoJSON();
var features_Overhead132kV_7 = format_Overhead132kV_7.readFeatures(json_Overhead132kV_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Overhead132kV_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Overhead132kV_7.addFeatures(features_Overhead132kV_7);
var lyr_Overhead132kV_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Overhead132kV_7, 
                style: style_Overhead132kV_7,
                popuplayertitle: 'Overhead 132kV',
                interactive: true,
                title: '<img src="styles/legend/Overhead132kV_7.png" /> Overhead 132kV'
            });
var format_OverheadLV_8 = new ol.format.GeoJSON();
var features_OverheadLV_8 = format_OverheadLV_8.readFeatures(json_OverheadLV_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverheadLV_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverheadLV_8.addFeatures(features_OverheadLV_8);
var lyr_OverheadLV_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OverheadLV_8, 
                style: style_OverheadLV_8,
                popuplayertitle: 'Overhead LV',
                interactive: true,
                title: '<img src="styles/legend/OverheadLV_8.png" /> Overhead LV'
            });
var format_PillarBox_9 = new ol.format.GeoJSON();
var features_PillarBox_9 = format_PillarBox_9.readFeatures(json_PillarBox_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PillarBox_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PillarBox_9.addFeatures(features_PillarBox_9);
var lyr_PillarBox_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PillarBox_9, 
                style: style_PillarBox_9,
                popuplayertitle: 'PillarBox',
                interactive: true,
                title: '<img src="styles/legend/PillarBox_9.png" /> PillarBox'
            });
var format_PoleMountTransformer_10 = new ol.format.GeoJSON();
var features_PoleMountTransformer_10 = format_PoleMountTransformer_10.readFeatures(json_PoleMountTransformer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoleMountTransformer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoleMountTransformer_10.addFeatures(features_PoleMountTransformer_10);
var lyr_PoleMountTransformer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoleMountTransformer_10, 
                style: style_PoleMountTransformer_10,
                popuplayertitle: 'Pole Mount Transformer',
                interactive: true,
                title: '<img src="styles/legend/PoleMountTransformer_10.png" /> Pole Mount Transformer'
            });
var format_Poles_11 = new ol.format.GeoJSON();
var features_Poles_11 = format_Poles_11.readFeatures(json_Poles_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poles_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poles_11.addFeatures(features_Poles_11);
var lyr_Poles_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poles_11, 
                style: style_Poles_11,
                popuplayertitle: 'Poles',
                interactive: true,
                title: '<img src="styles/legend/Poles_11.png" /> Poles'
            });
var format_Recloser_12 = new ol.format.GeoJSON();
var features_Recloser_12 = format_Recloser_12.readFeatures(json_Recloser_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recloser_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recloser_12.addFeatures(features_Recloser_12);
var lyr_Recloser_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recloser_12, 
                style: style_Recloser_12,
                popuplayertitle: 'Recloser',
                interactive: true,
                title: '<img src="styles/legend/Recloser_12.png" /> Recloser'
            });
var format_SwitchGear_13 = new ol.format.GeoJSON();
var features_SwitchGear_13 = format_SwitchGear_13.readFeatures(json_SwitchGear_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SwitchGear_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SwitchGear_13.addFeatures(features_SwitchGear_13);
var lyr_SwitchGear_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SwitchGear_13, 
                style: style_SwitchGear_13,
                popuplayertitle: 'SwitchGear',
                interactive: true,
                title: '<img src="styles/legend/SwitchGear_13.png" /> SwitchGear'
            });
var format_UnderGround11kVUnderGround11kV_14 = new ol.format.GeoJSON();
var features_UnderGround11kVUnderGround11kV_14 = format_UnderGround11kVUnderGround11kV_14.readFeatures(json_UnderGround11kVUnderGround11kV_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnderGround11kVUnderGround11kV_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnderGround11kVUnderGround11kV_14.addFeatures(features_UnderGround11kVUnderGround11kV_14);
var lyr_UnderGround11kVUnderGround11kV_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnderGround11kVUnderGround11kV_14, 
                style: style_UnderGround11kVUnderGround11kV_14,
                popuplayertitle: 'UnderGround 11kV — UnderGround11kV',
                interactive: true,
                title: '<img src="styles/legend/UnderGround11kVUnderGround11kV_14.png" /> UnderGround 11kV — UnderGround11kV'
            });
var format_UnderGroundLV_15 = new ol.format.GeoJSON();
var features_UnderGroundLV_15 = format_UnderGroundLV_15.readFeatures(json_UnderGroundLV_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnderGroundLV_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnderGroundLV_15.addFeatures(features_UnderGroundLV_15);
var lyr_UnderGroundLV_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnderGroundLV_15, 
                style: style_UnderGroundLV_15,
                popuplayertitle: 'UnderGround LV',
                interactive: true,
                title: '<img src="styles/legend/UnderGroundLV_15.png" /> UnderGround LV'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ABS_1.setVisible(true);lyr_DOF_2.setVisible(true);lyr_GroundMountTransformer_3.setVisible(true);lyr_Isolator_4.setVisible(true);lyr_Overhead11kV_5.setVisible(true);lyr_Overhead33kV_6.setVisible(true);lyr_Overhead132kV_7.setVisible(true);lyr_OverheadLV_8.setVisible(true);lyr_PillarBox_9.setVisible(true);lyr_PoleMountTransformer_10.setVisible(true);lyr_Poles_11.setVisible(true);lyr_Recloser_12.setVisible(true);lyr_SwitchGear_13.setVisible(true);lyr_UnderGround11kVUnderGround11kV_14.setVisible(true);lyr_UnderGroundLV_15.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ABS_1,lyr_DOF_2,lyr_GroundMountTransformer_3,lyr_Isolator_4,lyr_Overhead11kV_5,lyr_Overhead33kV_6,lyr_Overhead132kV_7,lyr_OverheadLV_8,lyr_PillarBox_9,lyr_PoleMountTransformer_10,lyr_Poles_11,lyr_Recloser_12,lyr_SwitchGear_13,lyr_UnderGround11kVUnderGround11kV_14,lyr_UnderGroundLV_15];
lyr_ABS_1.set('fieldAliases', {'fid': 'fid', 'ABS_NUMBER': 'ABS_NUMBER', 'LOCATION_OF_ABS': 'LOCATION_OF_ABS', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'DATE_INSTALLED': 'DATE_INSTALLED', 'Maintenance_Done': 'Maintenance_Done', 'Maintenance_Date': 'Maintenance_Date', 'SLD_No': 'SLD_No', 'REMARKS': 'REMARKS', 'PoleID': 'PoleID', 'ABS_No': 'ABS_No', 'ZONE_SUBSTATION': 'ZONE_SUBSTATION', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'Maintenance_Work': 'Maintenance_Work', 'layer': 'layer', 'path': 'path', });
lyr_DOF_2.set('fieldAliases', {'fid': 'fid', 'DOF': 'DOF', 'LOCATION': 'LOCATION', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'SLD': 'SLD', 'DATE_INSTALLED': 'DATE_INSTALLED', 'REMARKS': 'REMARKS', 'Maintenance_Date': 'Maintenance_Date', 'Maintenance_Work': 'Maintenance_Work', 'PoleID': 'PoleID', 'Fuse_No': 'Fuse_No', 'ZONE_SUBSTATION': 'ZONE_SUBSTATION', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'Installed_Date': 'Installed_Date', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'FuseNo': 'FuseNo', 'layer': 'layer', 'path': 'path', });
lyr_GroundMountTransformer_3.set('fieldAliases', {'fid': 'fid', 'LOCATION_No': 'LOCATION_No', 'NAME': 'NAME', 'FEEDER': 'FEEDER', 'Voltage': 'Voltage', 'FEA_ID#': 'FEA_ID#', 'LOCATION': 'LOCATION', 'CUSTOMERS_CONNECTED': 'CUSTOMERS_CONNECTED', 'CUSTOMERS_NOT_CONNECTED': 'CUSTOMERS_NOT_CONNECTED', 'TOTAL_CUSTOMERS': 'TOTAL_CUSTOMERS', 'CUSTOMER_No_LAST_UPDATE': 'CUSTOMER_No_LAST_UPDATE', 'TRANSFORMER_SIZE': 'TRANSFORMER_SIZE', 'MAKE': 'MAKE', 'YEAR_OF_MANUFACTURE': 'YEAR_OF_MANUFACTURE', 'NO_OF_PHASES': 'NO_OF_PHASES', 'VECTOR_GROUP': 'VECTOR_GROUP', 'IMPEDANCE': 'IMPEDANCE', 'Date1Installed': 'Date1Installed', 'Date1Removed': 'Date1Removed', 'Txfr1Serial#': 'Txfr1Serial#', 'Date2Installed': 'Date2Installed', 'Date2Removed': 'Date2Removed', 'Txfr2Serial#': 'Txfr2Serial#', 'No_of_Taps': 'No_of_Taps', 'Present_Tap': 'Present_Tap', 'Normal_Tap': 'Normal_Tap', 'Tap_Volt_Selector': 'Tap_Volt_Selector', 'Prot_Type': 'Prot_Type', 'Make_SG': 'Make_SG', 'Serial#SG': 'Serial#SG', 'Type1': 'Type1', 'Fuse_Size': 'Fuse_Size', 'Cable_Termination': 'Cable_Termination', 'Cable_Size___Type': 'Cable_Size___Type', 'ServiceDate1': 'ServiceDate1', 'Sw_Marked2': 'Sw_Marked2', 'Make_SG2': 'Make_SG2', 'Serial#_SG2': 'Serial#_SG2', 'Type2': 'Type2', 'Cable_Termination2': 'Cable_Termination2', 'Cable_Size___Type2': 'Cable_Size___Type2', 'ServiceDate2': 'ServiceDate2', 'Sw_Marked3': 'Sw_Marked3', 'Make_SG3': 'Make_SG3', 'Serial#_SG3': 'Serial#_SG3', 'Type3': 'Type3', 'Cable_Termination3': 'Cable_Termination3', 'Cable_Size___Type3': 'Cable_Size___Type3', 'ServiceDate3': 'ServiceDate3', 'Sw_Marked4': 'Sw_Marked4', 'Make_SG4': 'Make_SG4', 'Type4': 'Type4', 'Cable_Termination4': 'Cable_Termination4', 'Cable_Size___Type4': 'Cable_Size___Type4', 'ServiceDate4': 'ServiceDate4', 'Sw_Marked5': 'Sw_Marked5', 'Make_SG5': 'Make_SG5', 'Serial#_SG5': 'Serial#_SG5', 'Type5': 'Type5', 'Cable_Termination5': 'Cable_Termination5', 'Cable_Size___Type5': 'Cable_Size___Type5', 'ServiceDate5': 'ServiceDate5', 'Sw_Marked6': 'Sw_Marked6', 'Make_SG6': 'Make_SG6', 'Serial#_SG6': 'Serial#_SG6', 'Type6': 'Type6', 'Cable_Termination6': 'Cable_Termination6', 'Cable_Size___Type6': 'Cable_Size___Type6', 'ServiceDate6': 'ServiceDate6', 'Cable_SizeTfr': 'Cable_SizeTfr', 'Fuse_SizeTfr': 'Fuse_SizeTfr', 'LoadTfr': 'LoadTfr', 'Feeder_Name1': 'Feeder_Name1', 'Cable_Size1': 'Cable_Size1', 'Cable_Type1': 'Cable_Type1', 'Fuse_Size1': 'Fuse_Size1', 'Opening_Point1': 'Opening_Point1', 'Feeder_Name2': 'Feeder_Name2', 'Cable_Size2': 'Cable_Size2', 'Cable_Type2': 'Cable_Type2', 'Fuse_Size2': 'Fuse_Size2', 'Opening_Point2': 'Opening_Point2', 'Feeder_Name3': 'Feeder_Name3', 'Cable_Size3': 'Cable_Size3', 'Cable_Type3': 'Cable_Type3', 'Fuse_Size3': 'Fuse_Size3', 'Opening_Point3': 'Opening_Point3', 'Feeder_Name4': 'Feeder_Name4', 'Cable_Size4': 'Cable_Size4', 'Cable_Type4': 'Cable_Type4', 'Fuse_Size4': 'Fuse_Size4', 'Opening_Point4': 'Opening_Point4', 'Feeder_Name5': 'Feeder_Name5', 'Cable_Size5': 'Cable_Size5', 'Cable_Type5': 'Cable_Type5', 'Fuse_Size5': 'Fuse_Size5', 'Opening_Point5': 'Opening_Point5', 'Feeder_Name6': 'Feeder_Name6', 'Cable_Size6': 'Cable_Size6', 'Cable_Type6': 'Cable_Type6', 'Fuse_Size6': 'Fuse_Size6', 'Opening_Point6': 'Opening_Point6', 'Defects': 'Defects', 'SUBSTATION_TYPE': 'SUBSTATION_TYPE', 'ZONESUBSTATION': 'ZONESUBSTATION', 'SLD_No': 'SLD_No', 'SCHEME_No': 'SCHEME_No', 'Attachment_1': 'Attachment_1', 'REMARKS': 'REMARKS', 'Maintenance_Date': 'Maintenance_Date', 'Maintenance_Work': 'Maintenance_Work', 'LOCATION_No_2': 'LOCATION_No_2', 'LOCATION_NUMBER': 'LOCATION_NUMBER', 'Rating_KVA_': 'Rating_KVA_', 'WORKSHOP_NO': 'WORKSHOP_NO', 'TYPE': 'TYPE', 'Date_Installed': 'Date_Installed', 'LOCALITY': 'LOCALITY', 'DISTRICT': 'DISTRICT', 'OCB_No': 'OCB_No', 'layer': 'layer', 'path': 'path', });
lyr_Isolator_4.set('fieldAliases', {'fid': 'fid', 'ISOLATOR_No': 'ISOLATOR_No', 'LOCATION': 'LOCATION', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'DATE_INSTALLED': 'DATE_INSTALLED', 'REMARKS': 'REMARKS', 'SLD_No': 'SLD_No', 'Maintenance_Done': 'Maintenance_Done', 'Maintenance_Date': 'Maintenance_Date', 'PoleID': 'PoleID', 'ZONE_SUBSTATION': 'ZONE_SUBSTATION', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'Maintenance_Work': 'Maintenance_Work', 'IsolatorNo': 'IsolatorNo', 'layer': 'layer', 'path': 'path', });
lyr_Overhead11kV_5.set('fieldAliases', {'fid': 'fid', 'VOLTAGE': 'VOLTAGE', 'COND_TYPE': 'COND_TYPE', 'Length': 'Length', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'Date_Installed': 'Date_Installed', 'Maintenance_Work': 'Maintenance_Work', 'Maintenance_Date': 'Maintenance_Date', 'REMARKS': 'REMARKS', 'LineID': 'LineID', 'CONDUCTOR_TYPE': 'CONDUCTOR_TYPE', 'layer': 'layer', 'path': 'path', });
lyr_Overhead33kV_6.set('fieldAliases', {'fid': 'fid', 'VOLTAGE': 'VOLTAGE', 'COND_TYPE': 'COND_TYPE', 'Length': 'Length', 'ROUTE': 'ROUTE', 'DATE_INSTALLED': 'DATE_INSTALLED', 'REMARKS': 'REMARKS', 'LineID': 'LineID', 'CONDUCTOR_TYPE': 'CONDUCTOR_TYPE', 'Installed_Date': 'Installed_Date', 'layer': 'layer', 'path': 'path', });
lyr_Overhead132kV_7.set('fieldAliases', {'fid': 'fid', 'LineID': 'LineID', 'LineVolt': 'LineVolt', 'CondType': 'CondType', 'LengthL': 'LengthL', 'FromPole': 'FromPole', 'ToPole': 'ToPole', 'LastCheck': 'LastCheck', 'layer': 'layer', 'path': 'path', });
lyr_OverheadLV_8.set('fieldAliases', {'fid': 'fid', 'VOLTAGE': 'VOLTAGE', 'COND_TYPE': 'COND_TYPE', 'Length': 'Length', 'Date_Installed': 'Date_Installed', 'TRANSFORMER': 'TRANSFORMER', 'REMARKS': 'REMARKS', 'Maintenance_Date': 'Maintenance_Date', 'Maintenance_Work': 'Maintenance_Work', 'LineID': 'LineID', 'CONDUCTOR_TYPE': 'CONDUCTOR_TYPE', 'layer': 'layer', 'path': 'path', });
lyr_PillarBox_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'DISTRIBUTION': 'DISTRIBUTION', 'TYPE': 'TYPE', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'REGION': 'REGION', 'Date_Installed': 'Date_Installed', 'REMARKS': 'REMARKS', 'Maintenance_Date': 'Maintenance_Date', 'Maintenance_Work': 'Maintenance_Work', 'PillarBoxID': 'PillarBoxID', 'layer': 'layer', 'path': 'path', });
lyr_PoleMountTransformer_10.set('fieldAliases', {'fid': 'fid', 'TXFR_No': 'TXFR_No', 'DROPOUT_FUSE': 'DROPOUT_FUSE', 'TXFR_SIZE': 'TXFR_SIZE', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'LOCATION': 'LOCATION', 'SLD': 'SLD', 'REMARKS': 'REMARKS', 'DATE_INSTALLED': 'DATE_INSTALLED', 'Last_Maintenance': 'Last_Maintenance', 'Maintenance_notes': 'Maintenance_notes', 'TRANS_FEA_NO': 'TRANS_FEA_NO', 'SCHEME_NO': 'SCHEME_NO', 'DATE_COMMISSIONED': 'DATE_COMMISSIONED', 'NO_OF_PHASES': 'NO_OF_PHASES', 'MANUFACTURER': 'MANUFACTURER', 'YEAR_OF_MANUFACTURER': 'YEAR_OF_MANUFACTURER', 'SERIAL_NO': 'SERIAL_NO', 'TAPPING': 'TAPPING', 'TESTED_VOLTAGE_MV_SIDE': 'TESTED_VOLTAGE_MV_SIDE', 'R_Y': 'R_Y', 'R_N': 'R_N', 'Y_B': 'Y_B', 'Y_N': 'Y_N', 'B_R': 'B_R', 'B_N': 'B_N', 'SILICA_GEL_BREATHER': 'SILICA_GEL_BREATHER', 'PHASE_SEQUENCE': 'PHASE_SEQUENCE', 'HV_FUSEGEAR': 'HV_FUSEGEAR', 'TYPE': 'TYPE', 'RATING_AMPS': 'RATING_AMPS', 'MV_FUSEGEAR': 'MV_FUSEGEAR', 'TYPE1': 'TYPE1', 'RATING1_AMPS': 'RATING1_AMPS', 'SURGE_DIVERTERS_MAKE': 'SURGE_DIVERTERS_MAKE', 'RATING2_KV': 'RATING2_KV', 'EARTHING': 'EARTHING', 'SURGE_DIVERTERS_HV__EARTHED_MET': 'SURGE_DIVERTERS_HV__EARTHED_MET', 'MV_NEUTRAL': 'MV_NEUTRAL', 'HV_SWITCHGEAR': 'HV_SWITCHGEAR', 'MAKE': 'MAKE', 'SERIAL_NUMBER': 'SERIAL_NUMBER', 'COMMISSIONING_REPORT': 'COMMISSIONING_REPORT', 'VOLTAGE_RATIO': 'VOLTAGE_RATIO', 'TRANSFORMER_LOAD': 'TRANSFORMER_LOAD', 'TERMINAL_VOLTAGE_AT_PEAK_LOAD': 'TERMINAL_VOLTAGE_AT_PEAK_LOAD', 'DATE_OF_LOAD_READING': 'DATE_OF_LOAD_READING', 'CUSTOMERS_CONNECTED': 'CUSTOMERS_CONNECTED', 'CUSTOMERS_NOT_CONNECTED': 'CUSTOMERS_NOT_CONNECTED', 'TOTAL_No_CUSTOMERS': 'TOTAL_No_CUSTOMERS', 'CUSTOMER_No_LAST_UPDATE': 'CUSTOMER_No_LAST_UPDATE', 'PoleID': 'PoleID', 'LocationNo': 'LocationNo', 'TransformerNo': 'TransformerNo', 'FuseNo': 'FuseNo', 'RATING_KVA': 'RATING_KVA', 'ZONE_SUBSTATION': 'ZONE_SUBSTATION', 'WORKSHOP_NO': 'WORKSHOP_NO', 'YEAR_OF_MANUFACTURE': 'YEAR_OF_MANUFACTURE', 'TransformerNo_2': 'TransformerNo_2', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'SLD_No': 'SLD_No', 'layer': 'layer', 'path': 'path', });
lyr_Poles_11.set('fieldAliases', {'fid': 'fid', 'PoleID': 'PoleID', 'PoleType': 'PoleType', 'Length': 'Length', 'DRESSING': 'DRESSING', 'Date_Installed': 'Date_Installed', 'Customer_Red_Phase': 'Customer_Red_Phase', 'Customer_Blue_Phase': 'Customer_Blue_Phase', 'Customer_Yellow_Phase': 'Customer_Yellow_Phase', 'Customer_3Ph_Supply': 'Customer_3Ph_Supply', 'Customer_Label': 'Customer_Label', 'Streetlight': 'Streetlight', 'Telecom_Line': 'Telecom_Line', 'STAY': 'STAY', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'REGION': 'REGION', 'REMARKS': 'REMARKS', 'Maintenance_Work': 'Maintenance_Work', 'Maintenance_Date': 'Maintenance_Date', 'Maintenance_Notes': 'Maintenance_Notes', 'X_Coordinate': 'X_Coordinate', 'Y_Coordinate': 'Y_Coordinate', 'Pole_Number': 'Pole_Number', 'Maintenance_Works': 'Maintenance_Works', 'Pole_No': 'Pole_No', 'Field24': 'Field24', 'layer': 'layer', 'path': 'path', });
lyr_Recloser_12.set('fieldAliases', {'fid': 'fid', 'RECLOSER': 'RECLOSER', 'LOCATION': 'LOCATION', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'DRAW_NO': 'DRAW_NO', 'DATE_INSTALLED': 'DATE_INSTALLED', 'REMARKS': 'REMARKS', 'PoleID': 'PoleID', 'MAINTENANCE_DATE': 'MAINTENANCE_DATE', 'MAINTENANCE_WORK': 'MAINTENANCE_WORK', 'ZONE_SUBSTATION': 'ZONE_SUBSTATION', 'STREET_LOCATION': 'STREET_LOCATION', 'AREA': 'AREA', 'layer': 'layer', 'path': 'path', });
lyr_SwitchGear_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Feeder': 'Feeder', 'Zone_Substation': 'Zone_Substation', 'Cable_Types': 'Cable_Types', 'SLD_No': 'SLD_No', 'OCB_No': 'OCB_No', 'Street_Name': 'Street_Name', 'Area': 'Area', 'Locality': 'Locality', 'Commissioned_Date': 'Commissioned_Date', 'Scheme_No': 'Scheme_No', 'Maintenance_Date': 'Maintenance_Date', 'Maintenance_Work': 'Maintenance_Work', 'Remarks': 'Remarks', 'layer': 'layer', 'path': 'path', });
lyr_UnderGround11kVUnderGround11kV_14.set('fieldAliases', {'fid': 'fid', 'VOLTAGE': 'VOLTAGE', 'COND_TYPE': 'COND_TYPE', 'ROUTE_LENGTH': 'ROUTE_LENGTH', 'FROM_LOCATION': 'FROM_LOCATION', 'TO_LOCATION': 'TO_LOCATION', 'CABLE_ROUTE': 'CABLE_ROUTE', 'FEEDER': 'FEEDER', 'ZONESUBSTATION': 'ZONESUBSTATION', 'OCB_No': 'OCB_No', 'Date_Installed': 'Date_Installed', 'REMARKS': 'REMARKS', 'Attachment': 'Attachment', 'CableID': 'CableID', 'LENGTH': 'LENGTH', 'CONDUCTOR_TYPE': 'CONDUCTOR_TYPE', 'ZONESUB': 'ZONESUB', 'Attachments': 'Attachments', 'layer': 'layer', 'path': 'path', });
lyr_UnderGroundLV_15.set('fieldAliases', {'fid': 'fid', 'TYPE': 'TYPE', 'CONDUCTORTYPE': 'CONDUCTORTYPE', 'CABLE_ROUTE': 'CABLE_ROUTE', 'ROUTE_LENGTH': 'ROUTE_LENGTH', 'TRANSFORMER': 'TRANSFORMER', 'Date_Installed': 'Date_Installed', 'REMARKS': 'REMARKS', 'CableID': 'CableID', 'VOLTAGE': 'VOLTAGE', 'LENGTH': 'LENGTH', 'CONDUCTOR_TYPE': 'CONDUCTOR_TYPE', 'layer': 'layer', 'path': 'path', });
lyr_ABS_1.set('fieldImages', {'fid': '', 'ABS_NUMBER': '', 'LOCATION_OF_ABS': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'DATE_INSTALLED': '', 'Maintenance_Done': '', 'Maintenance_Date': '', 'SLD_No': '', 'REMARKS': '', 'PoleID': '', 'ABS_No': '', 'ZONE_SUBSTATION': '', 'STREET_LOCATION': '', 'AREA': '', 'Maintenance_Work': '', 'layer': '', 'path': '', });
lyr_DOF_2.set('fieldImages', {'fid': '', 'DOF': '', 'LOCATION': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'SLD': '', 'DATE_INSTALLED': '', 'REMARKS': '', 'Maintenance_Date': '', 'Maintenance_Work': '', 'PoleID': '', 'Fuse_No': '', 'ZONE_SUBSTATION': '', 'STREET_LOCATION': '', 'AREA': '', 'Installed_Date': '', 'Longitude': '', 'Latitude': '', 'FuseNo': '', 'layer': '', 'path': '', });
lyr_GroundMountTransformer_3.set('fieldImages', {'fid': '', 'LOCATION_No': '', 'NAME': '', 'FEEDER': '', 'Voltage': '', 'FEA_ID#': '', 'LOCATION': '', 'CUSTOMERS_CONNECTED': '', 'CUSTOMERS_NOT_CONNECTED': '', 'TOTAL_CUSTOMERS': '', 'CUSTOMER_No_LAST_UPDATE': '', 'TRANSFORMER_SIZE': '', 'MAKE': '', 'YEAR_OF_MANUFACTURE': '', 'NO_OF_PHASES': '', 'VECTOR_GROUP': '', 'IMPEDANCE': '', 'Date1Installed': '', 'Date1Removed': '', 'Txfr1Serial#': '', 'Date2Installed': '', 'Date2Removed': '', 'Txfr2Serial#': '', 'No_of_Taps': '', 'Present_Tap': '', 'Normal_Tap': '', 'Tap_Volt_Selector': '', 'Prot_Type': '', 'Make_SG': '', 'Serial#SG': '', 'Type1': '', 'Fuse_Size': '', 'Cable_Termination': '', 'Cable_Size___Type': '', 'ServiceDate1': '', 'Sw_Marked2': '', 'Make_SG2': '', 'Serial#_SG2': '', 'Type2': '', 'Cable_Termination2': '', 'Cable_Size___Type2': '', 'ServiceDate2': '', 'Sw_Marked3': '', 'Make_SG3': '', 'Serial#_SG3': '', 'Type3': '', 'Cable_Termination3': '', 'Cable_Size___Type3': '', 'ServiceDate3': '', 'Sw_Marked4': '', 'Make_SG4': '', 'Type4': '', 'Cable_Termination4': '', 'Cable_Size___Type4': '', 'ServiceDate4': '', 'Sw_Marked5': '', 'Make_SG5': '', 'Serial#_SG5': '', 'Type5': '', 'Cable_Termination5': '', 'Cable_Size___Type5': '', 'ServiceDate5': '', 'Sw_Marked6': '', 'Make_SG6': '', 'Serial#_SG6': '', 'Type6': '', 'Cable_Termination6': '', 'Cable_Size___Type6': '', 'ServiceDate6': '', 'Cable_SizeTfr': '', 'Fuse_SizeTfr': '', 'LoadTfr': '', 'Feeder_Name1': '', 'Cable_Size1': '', 'Cable_Type1': '', 'Fuse_Size1': '', 'Opening_Point1': '', 'Feeder_Name2': '', 'Cable_Size2': '', 'Cable_Type2': '', 'Fuse_Size2': '', 'Opening_Point2': '', 'Feeder_Name3': '', 'Cable_Size3': '', 'Cable_Type3': '', 'Fuse_Size3': '', 'Opening_Point3': '', 'Feeder_Name4': '', 'Cable_Size4': '', 'Cable_Type4': '', 'Fuse_Size4': '', 'Opening_Point4': '', 'Feeder_Name5': '', 'Cable_Size5': '', 'Cable_Type5': '', 'Fuse_Size5': '', 'Opening_Point5': '', 'Feeder_Name6': '', 'Cable_Size6': '', 'Cable_Type6': '', 'Fuse_Size6': '', 'Opening_Point6': '', 'Defects': '', 'SUBSTATION_TYPE': '', 'ZONESUBSTATION': '', 'SLD_No': '', 'SCHEME_No': '', 'Attachment_1': '', 'REMARKS': '', 'Maintenance_Date': '', 'Maintenance_Work': '', 'LOCATION_No_2': '', 'LOCATION_NUMBER': '', 'Rating_KVA_': '', 'WORKSHOP_NO': '', 'TYPE': '', 'Date_Installed': '', 'LOCALITY': '', 'DISTRICT': '', 'OCB_No': '', 'layer': '', 'path': '', });
lyr_Isolator_4.set('fieldImages', {'fid': '', 'ISOLATOR_No': '', 'LOCATION': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'DATE_INSTALLED': '', 'REMARKS': '', 'SLD_No': '', 'Maintenance_Done': '', 'Maintenance_Date': '', 'PoleID': '', 'ZONE_SUBSTATION': '', 'STREET_LOCATION': '', 'AREA': '', 'Maintenance_Work': '', 'IsolatorNo': '', 'layer': '', 'path': '', });
lyr_Overhead11kV_5.set('fieldImages', {'fid': '', 'VOLTAGE': '', 'COND_TYPE': '', 'Length': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'Date_Installed': '', 'Maintenance_Work': '', 'Maintenance_Date': '', 'REMARKS': '', 'LineID': '', 'CONDUCTOR_TYPE': '', 'layer': '', 'path': '', });
lyr_Overhead33kV_6.set('fieldImages', {'fid': '', 'VOLTAGE': '', 'COND_TYPE': '', 'Length': '', 'ROUTE': '', 'DATE_INSTALLED': '', 'REMARKS': '', 'LineID': '', 'CONDUCTOR_TYPE': '', 'Installed_Date': '', 'layer': '', 'path': '', });
lyr_Overhead132kV_7.set('fieldImages', {'fid': '', 'LineID': '', 'LineVolt': '', 'CondType': '', 'LengthL': '', 'FromPole': '', 'ToPole': '', 'LastCheck': '', 'layer': '', 'path': '', });
lyr_OverheadLV_8.set('fieldImages', {'fid': '', 'VOLTAGE': '', 'COND_TYPE': '', 'Length': '', 'Date_Installed': '', 'TRANSFORMER': '', 'REMARKS': '', 'Maintenance_Date': '', 'Maintenance_Work': '', 'LineID': '', 'CONDUCTOR_TYPE': '', 'layer': '', 'path': '', });
lyr_PillarBox_9.set('fieldImages', {'fid': '', 'ID': '', 'DISTRIBUTION': '', 'TYPE': '', 'STREET_LOCATION': '', 'AREA': '', 'REGION': '', 'Date_Installed': '', 'REMARKS': '', 'Maintenance_Date': '', 'Maintenance_Work': '', 'PillarBoxID': '', 'layer': '', 'path': '', });
lyr_PoleMountTransformer_10.set('fieldImages', {'fid': '', 'TXFR_No': '', 'DROPOUT_FUSE': '', 'TXFR_SIZE': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'LOCATION': '', 'SLD': '', 'REMARKS': '', 'DATE_INSTALLED': '', 'Last_Maintenance': '', 'Maintenance_notes': '', 'TRANS_FEA_NO': '', 'SCHEME_NO': '', 'DATE_COMMISSIONED': '', 'NO_OF_PHASES': '', 'MANUFACTURER': '', 'YEAR_OF_MANUFACTURER': '', 'SERIAL_NO': '', 'TAPPING': '', 'TESTED_VOLTAGE_MV_SIDE': '', 'R_Y': '', 'R_N': '', 'Y_B': '', 'Y_N': '', 'B_R': '', 'B_N': '', 'SILICA_GEL_BREATHER': '', 'PHASE_SEQUENCE': '', 'HV_FUSEGEAR': '', 'TYPE': '', 'RATING_AMPS': '', 'MV_FUSEGEAR': '', 'TYPE1': '', 'RATING1_AMPS': '', 'SURGE_DIVERTERS_MAKE': '', 'RATING2_KV': '', 'EARTHING': '', 'SURGE_DIVERTERS_HV__EARTHED_MET': '', 'MV_NEUTRAL': '', 'HV_SWITCHGEAR': '', 'MAKE': '', 'SERIAL_NUMBER': '', 'COMMISSIONING_REPORT': '', 'VOLTAGE_RATIO': '', 'TRANSFORMER_LOAD': '', 'TERMINAL_VOLTAGE_AT_PEAK_LOAD': '', 'DATE_OF_LOAD_READING': '', 'CUSTOMERS_CONNECTED': '', 'CUSTOMERS_NOT_CONNECTED': '', 'TOTAL_No_CUSTOMERS': '', 'CUSTOMER_No_LAST_UPDATE': '', 'PoleID': '', 'LocationNo': '', 'TransformerNo': '', 'FuseNo': '', 'RATING_KVA': '', 'ZONE_SUBSTATION': '', 'WORKSHOP_NO': '', 'YEAR_OF_MANUFACTURE': '', 'TransformerNo_2': '', 'STREET_LOCATION': '', 'AREA': '', 'SLD_No': '', 'layer': '', 'path': '', });
lyr_Poles_11.set('fieldImages', {'fid': '', 'PoleID': '', 'PoleType': '', 'Length': '', 'DRESSING': '', 'Date_Installed': '', 'Customer_Red_Phase': '', 'Customer_Blue_Phase': '', 'Customer_Yellow_Phase': '', 'Customer_3Ph_Supply': '', 'Customer_Label': '', 'Streetlight': '', 'Telecom_Line': '', 'STAY': '', 'STREET_LOCATION': '', 'AREA': '', 'REGION': '', 'REMARKS': '', 'Maintenance_Work': '', 'Maintenance_Date': '', 'Maintenance_Notes': '', 'X_Coordinate': '', 'Y_Coordinate': '', 'Pole_Number': '', 'Maintenance_Works': '', 'Pole_No': '', 'Field24': '', 'layer': '', 'path': '', });
lyr_Recloser_12.set('fieldImages', {'fid': '', 'RECLOSER': '', 'LOCATION': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'DRAW_NO': '', 'DATE_INSTALLED': '', 'REMARKS': '', 'PoleID': '', 'MAINTENANCE_DATE': '', 'MAINTENANCE_WORK': '', 'ZONE_SUBSTATION': '', 'STREET_LOCATION': '', 'AREA': '', 'layer': '', 'path': '', });
lyr_SwitchGear_13.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Feeder': '', 'Zone_Substation': '', 'Cable_Types': '', 'SLD_No': '', 'OCB_No': '', 'Street_Name': '', 'Area': '', 'Locality': '', 'Commissioned_Date': '', 'Scheme_No': '', 'Maintenance_Date': '', 'Maintenance_Work': '', 'Remarks': '', 'layer': '', 'path': '', });
lyr_UnderGround11kVUnderGround11kV_14.set('fieldImages', {'fid': '', 'VOLTAGE': '', 'COND_TYPE': '', 'ROUTE_LENGTH': '', 'FROM_LOCATION': '', 'TO_LOCATION': '', 'CABLE_ROUTE': '', 'FEEDER': '', 'ZONESUBSTATION': '', 'OCB_No': '', 'Date_Installed': '', 'REMARKS': '', 'Attachment': '', 'CableID': '', 'LENGTH': '', 'CONDUCTOR_TYPE': '', 'ZONESUB': '', 'Attachments': '', 'layer': '', 'path': '', });
lyr_UnderGroundLV_15.set('fieldImages', {'fid': '', 'TYPE': '', 'CONDUCTORTYPE': '', 'CABLE_ROUTE': '', 'ROUTE_LENGTH': '', 'TRANSFORMER': '', 'Date_Installed': '', 'REMARKS': '', 'CableID': '', 'VOLTAGE': '', 'LENGTH': '', 'CONDUCTOR_TYPE': '', 'layer': '', 'path': '', });
lyr_ABS_1.set('fieldLabels', {'fid': 'no label', 'ABS_NUMBER': 'no label', 'LOCATION_OF_ABS': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'DATE_INSTALLED': 'no label', 'Maintenance_Done': 'no label', 'Maintenance_Date': 'no label', 'SLD_No': 'no label', 'REMARKS': 'no label', 'PoleID': 'no label', 'ABS_No': 'no label', 'ZONE_SUBSTATION': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'Maintenance_Work': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_DOF_2.set('fieldLabels', {'fid': 'no label', 'DOF': 'no label', 'LOCATION': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'SLD': 'no label', 'DATE_INSTALLED': 'no label', 'REMARKS': 'no label', 'Maintenance_Date': 'no label', 'Maintenance_Work': 'no label', 'PoleID': 'no label', 'Fuse_No': 'no label', 'ZONE_SUBSTATION': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'Installed_Date': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'FuseNo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GroundMountTransformer_3.set('fieldLabels', {'fid': 'no label', 'LOCATION_No': 'no label', 'NAME': 'no label', 'FEEDER': 'no label', 'Voltage': 'no label', 'FEA_ID#': 'no label', 'LOCATION': 'no label', 'CUSTOMERS_CONNECTED': 'no label', 'CUSTOMERS_NOT_CONNECTED': 'no label', 'TOTAL_CUSTOMERS': 'no label', 'CUSTOMER_No_LAST_UPDATE': 'no label', 'TRANSFORMER_SIZE': 'no label', 'MAKE': 'no label', 'YEAR_OF_MANUFACTURE': 'no label', 'NO_OF_PHASES': 'no label', 'VECTOR_GROUP': 'no label', 'IMPEDANCE': 'no label', 'Date1Installed': 'no label', 'Date1Removed': 'no label', 'Txfr1Serial#': 'no label', 'Date2Installed': 'no label', 'Date2Removed': 'no label', 'Txfr2Serial#': 'no label', 'No_of_Taps': 'no label', 'Present_Tap': 'no label', 'Normal_Tap': 'no label', 'Tap_Volt_Selector': 'no label', 'Prot_Type': 'no label', 'Make_SG': 'no label', 'Serial#SG': 'no label', 'Type1': 'no label', 'Fuse_Size': 'no label', 'Cable_Termination': 'no label', 'Cable_Size___Type': 'no label', 'ServiceDate1': 'no label', 'Sw_Marked2': 'no label', 'Make_SG2': 'no label', 'Serial#_SG2': 'no label', 'Type2': 'no label', 'Cable_Termination2': 'no label', 'Cable_Size___Type2': 'no label', 'ServiceDate2': 'no label', 'Sw_Marked3': 'no label', 'Make_SG3': 'no label', 'Serial#_SG3': 'no label', 'Type3': 'no label', 'Cable_Termination3': 'no label', 'Cable_Size___Type3': 'no label', 'ServiceDate3': 'no label', 'Sw_Marked4': 'no label', 'Make_SG4': 'no label', 'Type4': 'no label', 'Cable_Termination4': 'no label', 'Cable_Size___Type4': 'no label', 'ServiceDate4': 'no label', 'Sw_Marked5': 'no label', 'Make_SG5': 'no label', 'Serial#_SG5': 'no label', 'Type5': 'no label', 'Cable_Termination5': 'no label', 'Cable_Size___Type5': 'no label', 'ServiceDate5': 'no label', 'Sw_Marked6': 'no label', 'Make_SG6': 'no label', 'Serial#_SG6': 'no label', 'Type6': 'no label', 'Cable_Termination6': 'no label', 'Cable_Size___Type6': 'no label', 'ServiceDate6': 'no label', 'Cable_SizeTfr': 'no label', 'Fuse_SizeTfr': 'no label', 'LoadTfr': 'no label', 'Feeder_Name1': 'no label', 'Cable_Size1': 'no label', 'Cable_Type1': 'no label', 'Fuse_Size1': 'no label', 'Opening_Point1': 'no label', 'Feeder_Name2': 'no label', 'Cable_Size2': 'no label', 'Cable_Type2': 'no label', 'Fuse_Size2': 'no label', 'Opening_Point2': 'no label', 'Feeder_Name3': 'no label', 'Cable_Size3': 'no label', 'Cable_Type3': 'no label', 'Fuse_Size3': 'no label', 'Opening_Point3': 'no label', 'Feeder_Name4': 'no label', 'Cable_Size4': 'no label', 'Cable_Type4': 'no label', 'Fuse_Size4': 'no label', 'Opening_Point4': 'no label', 'Feeder_Name5': 'no label', 'Cable_Size5': 'no label', 'Cable_Type5': 'no label', 'Fuse_Size5': 'no label', 'Opening_Point5': 'no label', 'Feeder_Name6': 'no label', 'Cable_Size6': 'no label', 'Cable_Type6': 'no label', 'Fuse_Size6': 'no label', 'Opening_Point6': 'no label', 'Defects': 'no label', 'SUBSTATION_TYPE': 'no label', 'ZONESUBSTATION': 'no label', 'SLD_No': 'no label', 'SCHEME_No': 'no label', 'Attachment_1': 'no label', 'REMARKS': 'no label', 'Maintenance_Date': 'no label', 'Maintenance_Work': 'no label', 'LOCATION_No_2': 'no label', 'LOCATION_NUMBER': 'no label', 'Rating_KVA_': 'no label', 'WORKSHOP_NO': 'no label', 'TYPE': 'no label', 'Date_Installed': 'no label', 'LOCALITY': 'no label', 'DISTRICT': 'no label', 'OCB_No': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Isolator_4.set('fieldLabels', {'fid': 'no label', 'ISOLATOR_No': 'no label', 'LOCATION': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'DATE_INSTALLED': 'no label', 'REMARKS': 'no label', 'SLD_No': 'no label', 'Maintenance_Done': 'no label', 'Maintenance_Date': 'no label', 'PoleID': 'no label', 'ZONE_SUBSTATION': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'Maintenance_Work': 'no label', 'IsolatorNo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Overhead11kV_5.set('fieldLabels', {'fid': 'no label', 'VOLTAGE': 'no label', 'COND_TYPE': 'no label', 'Length': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'Date_Installed': 'no label', 'Maintenance_Work': 'no label', 'Maintenance_Date': 'no label', 'REMARKS': 'no label', 'LineID': 'no label', 'CONDUCTOR_TYPE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Overhead33kV_6.set('fieldLabels', {'fid': 'no label', 'VOLTAGE': 'no label', 'COND_TYPE': 'no label', 'Length': 'no label', 'ROUTE': 'no label', 'DATE_INSTALLED': 'no label', 'REMARKS': 'no label', 'LineID': 'no label', 'CONDUCTOR_TYPE': 'no label', 'Installed_Date': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Overhead132kV_7.set('fieldLabels', {'fid': 'no label', 'LineID': 'no label', 'LineVolt': 'no label', 'CondType': 'no label', 'LengthL': 'no label', 'FromPole': 'no label', 'ToPole': 'no label', 'LastCheck': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_OverheadLV_8.set('fieldLabels', {'fid': 'no label', 'VOLTAGE': 'no label', 'COND_TYPE': 'no label', 'Length': 'no label', 'Date_Installed': 'no label', 'TRANSFORMER': 'no label', 'REMARKS': 'no label', 'Maintenance_Date': 'no label', 'Maintenance_Work': 'no label', 'LineID': 'no label', 'CONDUCTOR_TYPE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PillarBox_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'DISTRIBUTION': 'no label', 'TYPE': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'REGION': 'no label', 'Date_Installed': 'no label', 'REMARKS': 'no label', 'Maintenance_Date': 'no label', 'Maintenance_Work': 'no label', 'PillarBoxID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PoleMountTransformer_10.set('fieldLabels', {'fid': 'no label', 'TXFR_No': 'no label', 'DROPOUT_FUSE': 'no label', 'TXFR_SIZE': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'LOCATION': 'no label', 'SLD': 'no label', 'REMARKS': 'no label', 'DATE_INSTALLED': 'no label', 'Last_Maintenance': 'no label', 'Maintenance_notes': 'no label', 'TRANS_FEA_NO': 'no label', 'SCHEME_NO': 'no label', 'DATE_COMMISSIONED': 'no label', 'NO_OF_PHASES': 'no label', 'MANUFACTURER': 'no label', 'YEAR_OF_MANUFACTURER': 'no label', 'SERIAL_NO': 'no label', 'TAPPING': 'no label', 'TESTED_VOLTAGE_MV_SIDE': 'no label', 'R_Y': 'no label', 'R_N': 'no label', 'Y_B': 'no label', 'Y_N': 'no label', 'B_R': 'no label', 'B_N': 'no label', 'SILICA_GEL_BREATHER': 'no label', 'PHASE_SEQUENCE': 'no label', 'HV_FUSEGEAR': 'no label', 'TYPE': 'no label', 'RATING_AMPS': 'no label', 'MV_FUSEGEAR': 'no label', 'TYPE1': 'no label', 'RATING1_AMPS': 'no label', 'SURGE_DIVERTERS_MAKE': 'no label', 'RATING2_KV': 'no label', 'EARTHING': 'no label', 'SURGE_DIVERTERS_HV__EARTHED_MET': 'no label', 'MV_NEUTRAL': 'no label', 'HV_SWITCHGEAR': 'no label', 'MAKE': 'no label', 'SERIAL_NUMBER': 'no label', 'COMMISSIONING_REPORT': 'no label', 'VOLTAGE_RATIO': 'no label', 'TRANSFORMER_LOAD': 'no label', 'TERMINAL_VOLTAGE_AT_PEAK_LOAD': 'no label', 'DATE_OF_LOAD_READING': 'no label', 'CUSTOMERS_CONNECTED': 'no label', 'CUSTOMERS_NOT_CONNECTED': 'no label', 'TOTAL_No_CUSTOMERS': 'no label', 'CUSTOMER_No_LAST_UPDATE': 'no label', 'PoleID': 'no label', 'LocationNo': 'no label', 'TransformerNo': 'no label', 'FuseNo': 'no label', 'RATING_KVA': 'no label', 'ZONE_SUBSTATION': 'no label', 'WORKSHOP_NO': 'no label', 'YEAR_OF_MANUFACTURE': 'no label', 'TransformerNo_2': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'SLD_No': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Poles_11.set('fieldLabels', {'fid': 'inline label - always visible', 'PoleID': 'header label - always visible', 'PoleType': 'no label', 'Length': 'no label', 'DRESSING': 'no label', 'Date_Installed': 'no label', 'Customer_Red_Phase': 'no label', 'Customer_Blue_Phase': 'no label', 'Customer_Yellow_Phase': 'no label', 'Customer_3Ph_Supply': 'no label', 'Customer_Label': 'no label', 'Streetlight': 'no label', 'Telecom_Line': 'no label', 'STAY': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'REGION': 'no label', 'REMARKS': 'no label', 'Maintenance_Work': 'no label', 'Maintenance_Date': 'no label', 'Maintenance_Notes': 'no label', 'X_Coordinate': 'no label', 'Y_Coordinate': 'no label', 'Pole_Number': 'no label', 'Maintenance_Works': 'no label', 'Pole_No': 'no label', 'Field24': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Recloser_12.set('fieldLabels', {'fid': 'no label', 'RECLOSER': 'no label', 'LOCATION': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'DRAW_NO': 'no label', 'DATE_INSTALLED': 'no label', 'REMARKS': 'no label', 'PoleID': 'no label', 'MAINTENANCE_DATE': 'no label', 'MAINTENANCE_WORK': 'no label', 'ZONE_SUBSTATION': 'no label', 'STREET_LOCATION': 'no label', 'AREA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SwitchGear_13.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', 'Feeder': 'no label', 'Zone_Substation': 'no label', 'Cable_Types': 'no label', 'SLD_No': 'no label', 'OCB_No': 'no label', 'Street_Name': 'no label', 'Area': 'no label', 'Locality': 'no label', 'Commissioned_Date': 'no label', 'Scheme_No': 'no label', 'Maintenance_Date': 'no label', 'Maintenance_Work': 'no label', 'Remarks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UnderGround11kVUnderGround11kV_14.set('fieldLabels', {'fid': 'no label', 'VOLTAGE': 'no label', 'COND_TYPE': 'no label', 'ROUTE_LENGTH': 'no label', 'FROM_LOCATION': 'no label', 'TO_LOCATION': 'no label', 'CABLE_ROUTE': 'no label', 'FEEDER': 'no label', 'ZONESUBSTATION': 'no label', 'OCB_No': 'no label', 'Date_Installed': 'no label', 'REMARKS': 'no label', 'Attachment': 'no label', 'CableID': 'no label', 'LENGTH': 'no label', 'CONDUCTOR_TYPE': 'no label', 'ZONESUB': 'no label', 'Attachments': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UnderGroundLV_15.set('fieldLabels', {'fid': 'no label', 'TYPE': 'no label', 'CONDUCTORTYPE': 'no label', 'CABLE_ROUTE': 'no label', 'ROUTE_LENGTH': 'no label', 'TRANSFORMER': 'no label', 'Date_Installed': 'no label', 'REMARKS': 'no label', 'CableID': 'no label', 'VOLTAGE': 'no label', 'LENGTH': 'no label', 'CONDUCTOR_TYPE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UnderGroundLV_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});