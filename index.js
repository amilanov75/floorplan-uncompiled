'use strict';

// Define the VueJS app
var app1 = new Vue({
    el: '#app',
    data: {

        colour_picker_hide: false,
        light_bulb_hide: true,

        input_circuit:"-",
        input_brightness:"0",
        input_colour:'#000000',
    
        positionx:"400",
        button_adj:"1328px",

        
        light_table: [
            // kitchen spots
            {hc2name:"Kitchen/Cabinet Lights",          localname:"kitcabinet",     brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false},
            {hc2name:"Kitchen/Lounge Lights",           localname:"kitlounge",      brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false},
            {hc2name:"Kitchen/Wall Lights",             localname:"kitwall",        brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false},
            {hc2name:"Kitchen/Pendant Light",           localname:"kitpendant",     brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false},
            {hc2name:"Kitchen/Island Lights",           localname:"kitisland",      brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false},
            {hc2name:"Kitchen/Courtyard Uplights",      localname:"kitcourtyard",   brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false},
            //kitchen rgbw
            {hc2name:"Kitchen/Skylight Lights",         localname:"kitskyrgbw",     brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:true,      colour_value:"0"},
            {hc2name:"Kitchen/Ceiling Lights",          localname:"kitedgergbw",    brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:true,      colour_value:"0"},
            {hc2name:"Kitchen/Kit Sink RGBW 5PL",       localname:"kitsinkrgbw",    brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:true,      colour_value:"0"},
            {hc2name:"Kitchen/Island Low Lights",       localname:"kitislandrgbw",  brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:true,      colour_value:"0"},
            {hc2name:"Kitchen/Sink and Low Lights",     localname:"kitcabinetrgbw", brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:true,      colour_value:"0"},
            {hc2name:"Kitchen/Drinks Cabinet",          localname:"kitdrinksrgbw",  brightness_value:"0",   zonename:"Zone_G_Kitchen",  rgbw:false,     colour_value:"0"},
            //garden
            {hc2name:"Garden/Garden Wall Lights",       localname:"gardenwall",     brightness_value:"0",   zonename:"Zone_G_Garden",   rgbw:false},
            {hc2name:"Garden/Garden Bench Lights",      localname:"gardenbench",    brightness_value:"0",   zonename:"Zone_G_Garden",   rgbw:true,      colour_value:"0"},
            //garden room
            {hc2name:"Garden Room/Spot Lights",         localname:"groomspot",      brightness_value:"0",   zonename:"Zone_G_GarRoom",  rgbw:false},
            {hc2name:"Garden Room/Perimeter Lights",    localname:"groomedgergbw",  brightness_value:"0",   zonename:"Zone_G_GarRoom",  rgbw:true,      colour_value:"0"},
            //garden bath
            {hc2name:"Garden Bath/Bath Spot Lights",    localname:"gbathspot",      brightness_value:"0",   zonename:"Zone_G_GarBath",  rgbw:false},
            {hc2name:"Garden Bath/Bath Perimeter Light",localname:"gbathedgergbw",  brightness_value:"0",   zonename:"Zone_G_GarBath",  rgbw:true,      colour_value:"0"},
            //kitchen landing
            {hc2name:"Corridors/Kit Corr 2x 2P",        localname:"kitcorrspot",    brightness_value:"0",   zonename:"Zone_G_KitCorr",  rgbw:false},
            {hc2name:"Corridors/Kit RGBW Corr Low",     localname:"kitcorrlowrgbw", brightness_value:"0",   zonename:"Zone_G_KitCorr",  rgbw:true,      colour_value:"0"},
            {hc2name:"Corridors/Kit RGB Stairs",        localname:"kitcorrstairs",  brightness_value:"0",   zonename:"Zone_G_KitCorr",  rgbw:true,      colour_value:"0"},
            //kitchen wc
            {hc2name:"Kitchen WC/Kit WC Lights 1P",     localname:"kitwcspot",      brightness_value:"0",   zonename:"Zone_G_KitWC",    rgbw:false},
            {hc2name:"Kitchen WC/Kit WC RGBW Perm 2P",  localname:"kitwcedgergbw",  brightness_value:"0",   zonename:"Zone_G_KitWC",    rgbw:true,      colour_value:"0"},
            ],

      
        // TO DO - REMOVE DUPLICATE VARIABLE NAMES // 
        //each AL zone in the floor plan has to be names as per the HC2 Global Variable name
        zone_table: [
            {hc2name:"Zone_G_Kitchen",            zonestatus:"No Data",       lightingPanelName:"Kitchen",},   
            {hc2name:"Zone_G_KitCorr",            zonestatus:"No Data",       lightingPanelName:"Kit Corr",},   
            {hc2name:"Zone_G_KitWC",              zonestatus:"No Data",       lightingPanelName:"Kitchen WC",},   
            {hc2name:"Zone_G_Garden",             zonestatus:"Manual",        lightingPanelName:"Garden",},   
            {hc2name:"Zone_G_GarRoom",            zonestatus:"No Data",       lightingPanelName:"Gardenroom",},   
            {hc2name:"Zone_G_GarBath",            zonestatus:"No Data",       lightingPanelName:"Garden Bath",},
              ],


        //Time remaining 
        zone_kitchen_landing_time:  "0",
        zone_kitchen_wc_time:       "0",
        zone_garden_room_time:      "0",
        zone_garden_bath_time:      "0",



        //Temp and Humidity
        sensors:[
            {hc2name:"Kitchen/Kit Din UF Temp1",                       sensor_value:"1",},
            {hc2name:"Kitchen/Kit Liv UF Temp1",                       sensor_value:"0",},
            {hc2name:"Kitchen WC/Kit WC UF Temp1",                     sensor_value:"0",},
            {hc2name:"Kitchen/KitchenGard Temp",                       sensor_value:"0",},
            {hc2name:"Kitchen WC/Kitchen WC Temp",                     sensor_value:"0",},
            {hc2name:"Garden Room/Garden Room Temp",                   sensor_value:"0",},
            {hc2name:"Garden Bath/Garden Bath Temp",                   sensor_value:"0",},
            {hc2name:"Kitchen WC/Kitchen WC Humidity",                 sensor_value:"0",},
            {hc2name:"Kitchen/KitchenGard Humidit",                    sensor_value:"0",},
            {hc2name:"Garden Bath/Garden Bath Humidity",               sensor_value:"0",},
        ],


        sensors1:[
            {hc2name:"Kitchen/Kit Din UF Temp1",                       sensor_value:"10",},
        ],


    }, // --- End of data --- //




    methods: {

        // -- Called if a LIGHT BULB is clicked 
        clickLight: function(localname) {

            //Pulse light when selected
            var element = document.getElementById(localname);
            var circuit = document.getElementById('circuit_name');
            element.classList.add("fa-beat");
            circuit.classList.add("fa-beat2");

            //Retrieve object for the light bulb
            var light_lookup_localname = app1.light_lookup_localname(localname)

            //Change background & text colour of popover if AL zone is Active
            var zone_lookup     = app1.zone_table;
            var zone_name       = light_lookup_localname.zonename
            zone_lookup         = zone_lookup.find(zone_lookup => zone_lookup.hc2name == zone_name);

            if (zone_lookup.zonestatus == "Active") {
                var root = document.documentElement;
                root.style.setProperty('--popover-background-colour', "#edd9d8");
            }
            else {
                var root = document.documentElement;
                root.style.setProperty('--popover-background-colour', "#fff");
            }

            //Could pick up from either the name/value array or the indivudal variables - chose the name/value pair 
            this.input_circuit       = light_lookup_localname.hc2name;
            
            var bright_adjust        = light_lookup_localname.brightness_value;                                               
            if (bright_adjust       == ""){bright_adjust = "0"};
            this.input_brightness    = bright_adjust;
            
            if (light_lookup_localname.rgbw === true) 
                {
                this.input_colour       = light_lookup_localname.colour_value;                                                
                this.colour_picker_hide = true;
                }
            else    
                {this.colour_picker_hide = false;}
            

            //TIMEOUT - DON'T PUT ANYTHING AFTER THIS
            //remove Pulse style after x milliseconds
            setTimeout(function(){element.classList.remove("fa-beat");  circuit.classList.remove("fa-beat2");}, 900);

        },

 

        // -- Called if a LIGHTING GROUP button is clicked -- //
        clickLightGroup: function(group_name) {
            this.input_circuit= "Group " + group_name;
            if (group_name != "Kit Spot All") {this.colour_picker_hide = true;} else {this.colour_picker_hide = false;}
        },




        // -- Called if a LIGHTING SCENE button is clicked -- //
        clickLightScene: function(group_name) {
            this.input_circuit= "Group " + group_name;
                {
                uibuilder.send({
                'topic':            group_name,
                'payload':          "Scene",
                });
                }
        },
        




        // -- Called if a ZONE STATUS button is clicked -- //
        clickZoneStatus: function(zone_name) {
            var zone_lookup     = app1.zone_table;
            zone_lookup         = zone_lookup.find(zone_lookup => zone_lookup.hc2name == zone_name);

            //console.log("up to herez");
            var el = document.getElementById(zone_name);
            //toggle colour of button 
            if (zone_lookup.zonestatus == "Disabled")   {el.style.backgroundColor = "#007011"} //swap to green
            if (zone_lookup.zonestatus == "Active")     {el.style.backgroundColor = "#990202"} //swap to red
            
            // the status is swtiched in subflow = AL Zone Status Updates 
            if (zone_lookup.zonestatus != "Manual")
                {
                uibuilder.send({
                'topic':            "placeholder to make sure things happen",      //send something to make sure "Node: Lighting groups does not err"
                'payload':          zone_lookup.lightingPanelName,
                'zone_status':      true,
                });
                }
        }, // -- End of  -- //





        // -- Set zone button colour at start
        colourZoneStatus: function(zone_name) {
            var el = document.getElementById(zone_name);
            var zone_lookup     = app1.zone_table;
            zone_lookup         = zone_lookup.find(zone_lookup => zone_lookup.hc2name == zone_name);

            //console.log("up to here now - zone name ", zone_name)
            //console.log("up to there now ", zone_lookup.zonestatus)

            //toggle colour of button 
            if (zone_lookup.zonestatus == "Disabled")     {el.style.backgroundColor = "#990202"}  //set to red
            if (zone_lookup.zonestatus == "Active")   {el.style.backgroundColor = "#007011"}      // set to green
        },





        // Called if slider value has been changed
        sliderChange: function(input_brightness)  {
        // Send Updated BRIGHTNESS to Node Red //
        uibuilder.send({
            'topic': this.input_circuit,
            'payload': Number(input_brightness),
            'brightness': Number(input_brightness),
        });
        }, // -- End of  -- //






        colourChange: function(input_colour) {
        // Send COLOUR to Node Red //
        uibuilder.send({             
            'topic': this.input_circuit,
            'payload': input_colour,
            'colour': input_colour,
            'type': 'colour'
        });
        }, // -- End of  -- //






        changeElement: function(localname,status,colour) {
            //console.log(localname + status + colour);
            var el = document.getElementById(localname);
            let light_colour = (colour === null) ? "orange" : colour;
            if (status === true)
                {
                el.style.color =  light_colour;
                el.style.fontSize = "1.1em";
                el.style.textShadow = "0px 0px 14px #fff700";
                }
            else
                {
                el.style.color = "#636363";
                el.style.fontSize = "0.9em";
                el.style.textShadow = "0px 0px 14px #948f8f";
                }
          },





        //Update time left
        timeLeft: function(time_remaining, zone_name, time_remaining_var) {
            var zone_lookup     = app1.zone_table;
            zone_lookup         = zone_lookup.find(zones => zones.hc2name == zone_name);
            if (time_remaining == "0" || zone_lookup.zonestatus == "Disabled") {app1[time_remaining_var] = ""}   
            else {if (time_remaining !== undefined) {app1[time_remaining_var]  = time_remaining + "s"}}
          },


        //Lookup sensor data
        sensor_lookup: function(hc2_name) {
            return this.sensors.find(sensor => sensor.hc2name == hc2_name); // returns whole object found
          },

        //Lookup light data - hc2 name
        light_lookup_hc2name: function(hc2_name) {
            return this.light_table.find(lights => lights.hc2name == hc2_name); // returns whole object found
          },

        //Lookup light data - local name
        light_lookup_localname: function(localname) {
            return this.light_table.find(lights => lights.localname == localname); // returns whole object found
          },

        //Lookup zone data - hc2 name
        zone_lookup_hc2name: function(hc2name) {
            return this.zone_table.find(zones => zones.hc2name == hc2name); // returns whole object found
          },

    }, // --- End of methods --- //



    // Start-up
    mounted: function(){

          
        /** **REQUIRED** Start uibuilder comms with Node-RED */
        uibuilder.start();

        // msg is updated when a standard msg is received from Node-RED
        uibuilder.onChange('msg', function(msg){


            // prepare device specific variables based on the MSG TOPIC of each incoming MSG
            // LIGHTING
            var device_name     = msg.topic;
            var status          = "";       // stores is a light in on/off ie brightness > 0 ? on : off


            var light_lookup_hc2name  = app1.light_lookup_hc2name(device_name)

            // SENSORS - TEMP & HUMIDITY
            var sensors_lookup  = app1.sensors;
            sensors_lookup      = sensors_lookup.find(sensors_lookup => sensors_lookup.hc2name == device_name);


            // AUTO LIGHTING ZONES
            var zone_name       = msg.topic;
            var zone_lookup     = app1.zone_table;
            zone_lookup         = zone_lookup.find(zone_lookup => zone_lookup.hc2name == zone_name);


            //Update variable with time remaining before auto lights are off automatically - using one of the circuits in each zone
            if (msg.topic == "Corridors/Kit Corr 2x 2P")        {app1.timeLeft(msg.time_remaining, "Zone_G_KitCorr",  "zone_kitchen_landing_time")};
            if (msg.topic == "Kitchen WC/Kit WC Lights 1P")     {app1.timeLeft(msg.time_remaining, "Zone_G_KitWC",    "zone_kitchen_wc_time")};
            if (msg.topic == "Garden Bath/Bath Spot Lights")    {app1.timeLeft(msg.time_remaining, "Zone_G_GarBath",  "zone_garden_bath_time")};
            if (msg.topic == "Garden Room/Spot Lights")         {app1.timeLeft(msg.time_remaining, "Zone_G_GarRoom",  "zone_garden_room_time")};


            // UPDATE BRIGHTNESS AND COLOUR BASED ON MSG'S (LIVE AND CACHED) RECIEVED FROM NODE-RED
            if (light_lookup_hc2name  !== undefined)
            {   
                // 2x vars have to be here to stop errors if msg.topic does not ecist in the "Devices" variable defined in the data section
                //COLOUR 
                if (msg.colour !== undefined)
                {

                    light_lookup_hc2name.colour_value = msg.colour;                                                                                       
                    //console.log ("device = ", device_name);
                    //console.log ("colour = ", app1.light_lookup_hc2name.colour_value);

                    if (light_lookup_hc2name.brightness_value > 0) {status = true} else {status = false}                                                     
                        app1.changeElement(light_lookup_hc2name.localname,status,msg.colour)
                }
                 
                //BRIGHTNESS
                if (msg.brightness !== undefined  )
                {
                    if (msg.brightness == "0"){msg.brightness = ""}                 /// otherwise 0 will be shown on the floor plan when lights are off - it's neater with nothing showing
                    //console.log("up to here for device = ", device_name);
                    light_lookup_hc2name.brightness_value   = msg.brightness;                                                                                
                    //console.log("brightness for device = ", light_lookup_hc2name.brightness_value + " / " + msg.brightness );
                    if      (msg.brightness > 0 && light_lookup_hc2name.rgbw == true)      {app1.changeElement(light_lookup_hc2name.localname,true,light_lookup_hc2name.colour_value)} 
                    else if (msg.brightness > 0 && light_lookup_hc2name.rgbw == false)     {app1.changeElement(light_lookup_hc2name.localname,true,"orange")} 
                    else                                                                   {app1.changeElement(light_lookup_hc2name.localname,false)}
                }
            }


            // UPDATE SENSOR DATA
            if (sensors_lookup  !== undefined)
            {  
                sensors_lookup.sensor_value = msg.payload;
                //console.log("up to here ", sensors_lookup.sensor_value)
            }

            

            //ZONE STATUS (AUTO LIGHTING)
            //If should always pass as UIBUILDER is getting a handpicked set of Zone statuses
            if (zone_lookup !== undefined)
            {
                //ZONE STATUS
                if(msg.al_zone_status !== undefined)
                {
                    zone_lookup.zonestatus = msg.al_zone_status;
                    //console.log("up here statu ", zone_lookup.zonestatus)
                    //console.log("up here name", zone_lookup.hc2name)
                    app1.colourZoneStatus(zone_lookup.hc2name);
                }
            }




            //LIGHTING CONTROL - USER INPUT // 
           // Updates the lighting control values on incoming message to keep them syncs if a user makes a change outside of this web page
            if (msg.topic == app1.input_circuit) {
                if (msg.brightness !== undefined) {app1.input_brightness = msg.brightness}
                if (msg.colour     !== undefined) {app1.input_colour     = msg.colour}
            }

            //Incoming msg log
            //console.log('incoming msg', app1.isonavmain1p, app1.isonavspots1, msg)
            
        });

    } // --- End of mounted hook --- //

}); // --- End of app1 --- //