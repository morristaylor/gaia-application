mapboxgl.accessToken = 'pk.eyJ1IjoidGF5bG9ybW9ycmlzIiwiYSI6ImNqb3E3NGo4YTAyMDEzcG11d2w3Z3BqOWUifQ.xO2zMgLIrCXcIav8p9jDIQ';
var map = new mapboxgl.Map({
  container: 'map',
  center: [-123.5485, 45.6646],
  style: 'mapbox://styles/mapbox/outdoors-v10',
  zoom: 9,
  bearing: 300,
  pitch: 60
});

map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features":
              [
                {
                  "type": "Feature",
                  "properties": {
                    "name": "North Fork Nehalem Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/North_Fork_Nehalem_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76696,
                      45.81357
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Munson Creek Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Munson_Creek_Falls_Trailhead",
                    "driveTime": "95 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.77353,
                      45.36564
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Side Step Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Side_Step_Trailhead",
                    "driveTime": "65 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.40887,
                      45.59885
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Northrup Creek Winter Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Northrup_Creek_Winter_Trailhead",
                    "driveTime": "85 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4322,
                      46.0065
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Bell Camp Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Bell_Camp_Road_Trailhead",
                    "driveTime": "65 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.36721,
                      45.69061
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Kings Mountain Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Kings_Mountain_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5063,
                      45.5969
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Maple Creek Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Maple_Creek_Road_Trailhead",
                    "driveTime": "100 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.39333,
                      45.46717
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Nehalem Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Nehalem_Falls_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.77129,
                      45.72649
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Niagara Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Niagara_Falls_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.6378,
                      45.2259
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Bloom Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Bloom_Lake_Trailhead",
                    "driveTime": "60 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5136,
                      45.838
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Rogers Camp Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Rogers_Camp_Trailhead",
                    "driveTime": "50 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.3757,
                      45.6226
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "South Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/South_Lake_Trailhead",
                    "driveTime": "135 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.7221,
                      45.20276
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Storey Burn Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Storey_Burn_Trailhead",
                    "driveTime": "55 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.38774,
                      45.62775
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Reehers Camp Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Reehers_Camp_Trailhead",
                    "driveTime": "60 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.33793,
                      45.70696
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Smith Homestead Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Smith_Homestead_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5521,
                      45.5874
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Sawtooth Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Sawtooth_Road_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.74187,
                      45.62233
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Clayhill Horse Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Clayhill_Horse_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.1847,
                      45.7479
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Stagecoach Horse Camp Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Stagecoach_Horse_Camp_Trailhead",
                    "driveTime": "65 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.41389,
                      45.5971
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Cedar Butte Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Cedar_Butte_Trailhead",
                    "driveTime": "80 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.646,
                      45.5828
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Beaver Creek Trailhead (Banks-Vernonia)",
                    "url": "https://www.oregonhikers.org/field_guide/Beaver_Creek_Trailhead_(Banks-Vernonia)",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.23117,
                      45.81067
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Buxton Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Buxton_Trailhead",
                    "driveTime": "40 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.18336,
                      45.69855
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Footbridge Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Footbridge_Trailhead",
                    "driveTime": "65 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.58491,
                      45.56313
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gnat Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gnat_Creek_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.50193,
                      46.17728
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Cougar Valley Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Cougar_Valley_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76176,
                      45.71335
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Purcell Creek Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Purcell_Creek_Road_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.7949,
                      45.5856
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "North Fork Salmonberry Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/North_Fork_Salmonberry_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.5062,
                      45.72835
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Cochran Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Cochran_Trailhead",
                    "driveTime": "70 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.41114,
                      45.70453
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Diamond Mill Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Diamond_Mill_Trailhead",
                    "driveTime": "65 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.54796,
                      45.6044
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Little South Fork Kilchis River Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Little_South_Fork_Kilchis_River_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.75458,
                      45.55645
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Beaver Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Beaver_Falls_Trailhead",
                    "driveTime": "80 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.12982,
                      46.10387
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Summit Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Summit_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.3755,
                      45.62394
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Jones Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Jones_Creek_Trailhead",
                    "driveTime": "1 hour from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.55602,
                      45.58795
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Sunset Rest Area Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Sunset_Rest_Area_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4589,
                      45.7963
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Hebo Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Hebo_Lake_Trailhead",
                    "driveTime": "115 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.79559,
                      45.23003
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Hilltop Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Hilltop_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.1861,
                      45.7417
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Keenig Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Keenig_Creek_Trailhead",
                    "driveTime": "70 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.61223,
                      45.54342
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Spruce Run Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Spruce_Run_Creek_Trailhead",
                    "driveTime": "75 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.6103,
                      45.8116
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Jackson Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Jackson_Creek_Trailhead",
                    "driveTime": "75 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -122.9093,
                      45.6991
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Stairstep Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Stairstep_Falls_Trailhead",
                    "driveTime": "100 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4599,
                      45.46532
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Tillamook Forest Center Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Tillamook_Forest_Center_Trailhead",
                    "driveTime": "1 hour from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.56034,
                      45.58518
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Soapstone Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Soapstone_Lake_Trailhead",
                    "driveTime": "75 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76236,
                      45.84684
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gnat Creek Hatchery Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gnat_Creek_Hatchery_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.48801,
                      46.16918
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Lee Falls Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Lee_Falls_Road_Trailhead",
                    "driveTime": "70 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.2574,
                      45.4522
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Elk Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Elk_Creek_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4666,
                      45.6103
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Northrup Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Northrup_Creek_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4557,
                      46.0237
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Tophill Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Tophill_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.20148,
                      45.75838
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Vernonia Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Vernonia_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.19399,
                      45.85681
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Sam Downs Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Sam_Downs_Creek_Trailhead",
                    "driveTime": "110 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.752,
                      45.5494
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Four County Point Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Four_County_Point_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.3517,
                      45.7805
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Upper Pioneer Indian Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Upper_Pioneer_Indian_Trailhead",
                    "driveTime": "120 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.76251,
                      45.21805
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Vernonia Lake Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Vernonia_Lake_Trailhead",
                    "driveTime": "1 hour",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.1746,
                      45.85699
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Salmonberry Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Salmonberry_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.65223,
                      45.75001
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Belding Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Belding_Trailhead",
                    "driveTime": "2 hours",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.49452,
                      45.70591
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Deyoe Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Deyoe_Creek_Trailhead",
                    "driveTime": "55 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.36677,
                      45.61428
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gales Creek Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gales_Creek_Trailhead",
                    "driveTime": "50 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.35926,
                      45.64231
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Idiot Creek Loop Road Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Idiot_Creek_Loop_Road_Trailhead",
                    "driveTime": "80 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4572,
                      45.6146
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "University Falls Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/University_Falls_Trailhead",
                    "driveTime": "60 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.39234,
                      45.59841
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Liahona Loop Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Liahona_Loop_Trailhead",
                    "driveTime": "85 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.04884,
                      45.92732
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Gales Creek Winter Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Gales_Creek_Winter_Trailhead",
                    "driveTime": "45 minutes from downtown Portland",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.34723,
                      45.64527
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Peninsula Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Peninsula_Trailhead",
                    "driveTime": "95 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.6717,
                      45.4555
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Elks Picnic Area Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Elks_Picnic_Area_Trailhead",
                    "driveTime": "45 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.2052,
                      45.47
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Mount Hebo Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Mount_Hebo_Trailhead",
                    "driveTime": "120 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.75515,
                      45.21394
                    ]
                  }
                },
                {
                  "type": "Feature",
                  "properties": {
                    "name": "Northrup Creek Big Tree Trailhead",
                    "url": "https://www.oregonhikers.org/field_guide/Northrup_Creek_Big_Tree_Trailhead",
                    "driveTime": "90 minutes",
                    "icon": "triangle"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": [
                      -123.4545,
                      46.0232
                    ]
                  }
                }
              ]
          }
        },
          "layout": {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true
        }
      });

    map.addLayer({
      "id": "route",
      "type": "line",
      "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  "id": "0f1db66a-dc42-42b7-b30b-630f8be1bbe6",
                  "updated_date": "2018-11-27T19:17:58Z",
                  "time_created": "2018-11-27T19:17:58Z",
                  "last_updated_on_server": "2018-11-27T19:17:58.900",
                  "db_insert_date": "2018-11-27T19:17:58Z",
                  "deleted": false,
                  "title": "Elk Creek to Idiot Creek Road Hike",
                  "public": false,
                  "color": "#FF00FF",
                  "hexcolor": "#FF00FF",
                  "is_active": true,
                  "revision": 41,
                  "notes": "https://www.oregonhikers.org/field_guide/Elk_Creek_to_Idiot_Creek_Road_Hike",
                  "track_type": "route",
                  "routing_mode": "pedestrian",
                  "uploaded_gpx_to_osm": null,
                  "flag": null,
                  "source": null,
                  "cover_photo_id": null,
                  "distance": 10504.4681604764,
                  "total_ascent": 763.640221440166,
                  "total_descent": 762.975159680044,
                  "stopped_time": 0,
                  "total_time": 0,
                  "average_speed": 0,
                  "moving_time": 0,
                  "moving_speed": 0,
                  "preferred_link": "/datasummary/track/0f1db66a-dc42-42b7-b30b-630f8be1bbe6/",
                  "user_displayname": "taylor.morris",
                  "username": "taylor.morris@gmail.com",
                  "user_email": "taylor.morris@gmail.com",
                  "user_id": 515547,
                  "favorite_count": 0,
                  "comment_count": 0,
                  "user_photo_count": 0
                },
                "style": {
                  "stroke": "#FF00FF"
                },
                "geometry": {
                  "type": "MultiLineString",
                  "coordinates": [
                    [
                      [
                        -123.466729,
                        45.610172,
                        285.5702969600057,
                        0
                      ],
                      [
                        -123.466614,
                        45.610469,
                        286.2353587201277,
                        0
                      ],
                      [
                        -123.466591,
                        45.610675,
                        287.8108679998881,
                        0
                      ],
                      [
                        -123.46653,
                        45.610923,
                        288.85758240013143,
                        0
                      ],
                      [
                        -123.466576,
                        45.611148,
                        291.5362918400828,
                        0
                      ],
                      [
                        -123.466721,
                        45.611412,
                        292.3793260800846,
                        0
                      ],
                      [
                        -123.467057,
                        45.611774,
                        288.5698307200201,
                        0
                      ],
                      [
                        -123.467324,
                        45.611984,
                        288.07449856012715,
                        0
                      ],
                      [
                        -123.467644,
                        45.612159,
                        286.1503878401895,
                        0
                      ],
                      [
                        -123.467865,
                        45.612304,
                        284.71115840001727,
                        0
                      ],
                      [
                        -123.468079,
                        45.612411,
                        285.9417670400471,
                        0
                      ],
                      [
                        -123.468369,
                        45.612625,
                        287.9028799998337,
                        0
                      ],
                      [
                        -123.468743,
                        45.612895,
                        287.92450320000484,
                        0
                      ],
                      [
                        -123.468941,
                        45.613162,
                        285.39284672001577,
                        0
                      ],
                      [
                        -123.469002,
                        45.613315,
                        286.02390080008445,
                        0
                      ],
                      [
                        -123.469201,
                        45.613754,
                        287.06412095996643,
                        0
                      ],
                      [
                        -123.469292,
                        45.613937,
                        285.80734783996746,
                        0
                      ],
                      [
                        -123.469666,
                        45.614154,
                        293.4535411201125,
                        0
                      ],
                      [
                        -123.469872,
                        45.614288,
                        295.9523225598273,
                        0
                      ],
                      [
                        -123.470101,
                        45.614433,
                        299.17098032003133,
                        0
                      ],
                      [
                        -123.470414,
                        45.614711,
                        301.2668243201963,
                        0
                      ],
                      [
                        -123.470612,
                        45.614902,
                        300.1340889600589,
                        0
                      ],
                      [
                        -123.470727,
                        45.615089,
                        298.2931929599542,
                        0
                      ],
                      [
                        -123.470734,
                        45.61536,
                        297.01655040001134,
                        0
                      ],
                      [
                        -123.470826,
                        45.615558,
                        300.95646464001726,
                        0
                      ],
                      [
                        -123.471039,
                        45.615818,
                        304.24774016005676,
                        0
                      ],
                      [
                        -123.471306,
                        45.616096,
                        302.4913011200113,
                        0
                      ],
                      [
                        -123.471589,
                        45.616737,
                        305.2619735999663,
                        0
                      ],
                      [
                        -123.471673,
                        45.617031,
                        306.3461910398906,
                        0
                      ],
                      [
                        -123.471749,
                        45.617397,
                        311.4508744000298,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471413,
                        45.617759,
                        307.14106768000306,
                        0
                      ],
                      [
                        -123.471139,
                        45.617794,
                        308.7408000000323,
                        0
                      ],
                      [
                        -123.470635,
                        45.618053,
                        317.77113759988134,
                        0
                      ],
                      [
                        -123.469735,
                        45.618347,
                        324.62411600000036,
                        0
                      ],
                      [
                        -123.469132,
                        45.61848,
                        327.1211776000609,
                        0
                      ],
                      [
                        -123.468483,
                        45.618572,
                        328.1102630399393,
                        0
                      ],
                      [
                        -123.467759,
                        45.618789,
                        327.4092716799874,
                        0
                      ],
                      [
                        -123.467339,
                        45.618915,
                        334.17214080011905,
                        0
                      ],
                      [
                        -123.466729,
                        45.619033,
                        342.2156561598732,
                        0
                      ],
                      [
                        -123.466179,
                        45.619224,
                        343.9395532799292,
                        0
                      ],
                      [
                        -123.46563,
                        45.619277,
                        342.9009456002432,
                        0
                      ],
                      [
                        -123.46634,
                        45.619056,
                        349.11068159990384,
                        0
                      ],
                      [
                        -123.466012,
                        45.619037,
                        357.11132544004425,
                        0
                      ],
                      [
                        -123.465271,
                        45.619194,
                        351.5332067200023,
                        0
                      ],
                      [
                        -123.46473,
                        45.619071,
                        358.70105920021285,
                        0
                      ],
                      [
                        -123.464425,
                        45.619079,
                        356.8937240000642,
                        0
                      ],
                      [
                        -123.464013,
                        45.618896,
                        369.2664857599568,
                        0
                      ],
                      [
                        -123.463578,
                        45.61893,
                        362.67844160005353,
                        0
                      ],
                      [
                        -123.462975,
                        45.618797,
                        372.50793199995843,
                        0
                      ],
                      [
                        -123.46283,
                        45.618808,
                        374.6644543999848,
                        0
                      ],
                      [
                        -123.46241,
                        45.619132,
                        364.1025407998398,
                        0
                      ],
                      [
                        -123.461991,
                        45.619277,
                        371.631253600278,
                        0
                      ],
                      [
                        -123.461815,
                        45.619514,
                        368.48525439982205,
                        0
                      ],
                      [
                        -123.461579,
                        45.619678,
                        371.90137407996303,
                        0
                      ],
                      [
                        -123.461243,
                        45.619724,
                        380.60328384018516,
                        0
                      ],
                      [
                        -123.461525,
                        45.619598,
                        378.7830880000512,
                        0
                      ],
                      [
                        -123.461709,
                        45.6194,
                        380.2572160001302,
                        0
                      ],
                      [
                        -123.461815,
                        45.619178,
                        387.2501872000296,
                        0
                      ],
                      [
                        -123.462067,
                        45.619018,
                        383.33092095999916,
                        0
                      ],
                      [
                        -123.462273,
                        45.618877,
                        384.6276145602219,
                        0
                      ],
                      [
                        -123.462403,
                        45.618675,
                        390.9320439998884,
                        0
                      ],
                      [
                        -123.46241,
                        45.618537,
                        396.0112431998963,
                        0
                      ],
                      [
                        -123.462212,
                        45.61882,
                        388.563494400216,
                        0
                      ],
                      [
                        -123.461731,
                        45.619094,
                        396.04231936010876,
                        0
                      ],
                      [
                        -123.461579,
                        45.619239,
                        396.14011119996763,
                        0
                      ],
                      [
                        -123.46151,
                        45.619426,
                        389.4015519999285,
                        0
                      ],
                      [
                        -123.461358,
                        45.619522,
                        390.99325887963056,
                        0
                      ],
                      [
                        -123.461152,
                        45.619548,
                        395.8638284799166,
                        0
                      ],
                      [
                        -123.461274,
                        45.619396,
                        400.79600895983924,
                        0
                      ],
                      [
                        -123.46135,
                        45.619159,
                        407.8674639999261,
                        0
                      ],
                      [
                        -123.461365,
                        45.618957,
                        415.7117127999194,
                        0
                      ],
                      [
                        -123.461464,
                        45.618804,
                        417.3877657598089,
                        0
                      ],
                      [
                        -123.461739,
                        45.61869,
                        408.7747072002316,
                        0
                      ],
                      [
                        -123.461892,
                        45.618511,
                        406.5619129597954,
                        0
                      ],
                      [
                        -123.46196,
                        45.618194,
                        411.0848895998411,
                        0
                      ],
                      [
                        -123.462067,
                        45.617713,
                        432.7980878396464,
                        0
                      ],
                      [
                        -123.462266,
                        45.61742,
                        445.7351551998177,
                        0
                      ],
                      [
                        -123.462479,
                        45.617378,
                        446.8319859198129,
                        0
                      ],
                      [
                        -123.463318,
                        45.617645,
                        434.24398559981955,
                        0
                      ],
                      [
                        -123.46428,
                        45.617691,
                        445.0676959999023,
                        0
                      ],
                      [
                        -123.465104,
                        45.617458,
                        472.60666496013584,
                        0
                      ],
                      [
                        -123.465752,
                        45.61737,
                        478.59852159989083,
                        0
                      ],
                      [
                        -123.466767,
                        45.617488,
                        479.25918848000936,
                        0
                      ],
                      [
                        -123.466301,
                        45.617324,
                        481.8434393596929,
                        0
                      ],
                      [
                        -123.465737,
                        45.617225,
                        493.4097280002088,
                        0
                      ],
                      [
                        -123.466683,
                        45.617183,
                        494.3099795200393,
                        0
                      ],
                      [
                        -123.467454,
                        45.61716,
                        488.68261119986124,
                        0
                      ],
                      [
                        -123.467652,
                        45.617122,
                        481.5946892800027,
                        0
                      ],
                      [
                        -123.467682,
                        45.617023,
                        478.8373283201616,
                        0
                      ],
                      [
                        -123.467316,
                        45.616985,
                        487.1898208000642,
                        0
                      ],
                      [
                        -123.466599,
                        45.617015,
                        495.828558399931,
                        0
                      ],
                      [
                        -123.466157,
                        45.616905,
                        513.9709416002052,
                        0
                      ],
                      [
                        -123.465668,
                        45.616912,
                        530.9730355201114,
                        0
                      ],
                      [
                        -123.464829,
                        45.617084,
                        515.082232320237,
                        0
                      ],
                      [
                        -123.464325,
                        45.616992,
                        524.890719999693,
                        0
                      ],
                      [
                        -123.463402,
                        45.616718,
                        526.8632000001589,
                        0
                      ],
                      [
                        -123.462472,
                        45.616596,
                        525.9985305599799,
                        0
                      ],
                      [
                        -123.461983,
                        45.61647,
                        532.2667888000311,
                        0
                      ],
                      [
                        -123.461396,
                        45.616527,
                        534.9520716802963,
                        0
                      ],
                      [
                        -123.460785,
                        45.616851,
                        538.6845336000484,
                        0
                      ],
                      [
                        -123.460549,
                        45.617076,
                        543.0648921600506,
                        0
                      ],
                      [
                        -123.460495,
                        45.617286,
                        539.6765584002871,
                        0
                      ],
                      [
                        -123.460343,
                        45.617519,
                        539.7611396802292,
                        0
                      ],
                      [
                        -123.46003,
                        45.617729,
                        549.7369887998743,
                        0
                      ],
                      [
                        -123.460175,
                        45.61737,
                        554.6876799995872,
                        0
                      ],
                      [
                        -123.460206,
                        45.617015,
                        565.4675327999448,
                        0
                      ],
                      [
                        -123.460427,
                        45.616687,
                        564.9541230403368,
                        0
                      ],
                      [
                        -123.460526,
                        45.616477,
                        570.3386003197143,
                        0
                      ],
                      [
                        -123.460694,
                        45.616294,
                        573.4702534396758,
                        0
                      ],
                      [
                        -123.460892,
                        45.616199,
                        571.3639289598668,
                        0
                      ],
                      [
                        -123.460526,
                        45.616245,
                        582.6275391999656,
                        0
                      ],
                      [
                        -123.460244,
                        45.616386,
                        590.683535359911,
                        0
                      ],
                      [
                        -123.460045,
                        45.616695,
                        588.2694760003598,
                        0
                      ],
                      [
                        -123.45961,
                        45.616882,
                        596.426857600228,
                        0
                      ],
                      [
                        -123.459366,
                        45.617218,
                        594.6499699198773,
                        0
                      ],
                      [
                        -123.459237,
                        45.617496,
                        591.3355078398829,
                        0
                      ],
                      [
                        -123.459176,
                        45.617092,
                        605.3225932800394,
                        0
                      ],
                      [
                        -123.459282,
                        45.616806,
                        612.9938713600924,
                        0
                      ],
                      [
                        -123.459603,
                        45.616596,
                        611.137588479883,
                        0
                      ],
                      [
                        -123.459656,
                        45.616424,
                        617.1874662400988,
                        0
                      ],
                      [
                        -123.459595,
                        45.616207,
                        624.1702032002241,
                        0
                      ],
                      [
                        -123.459633,
                        45.616027,
                        625.2176593600947,
                        0
                      ],
                      [
                        -123.4599,
                        45.615898,
                        616.4105919998078,
                        0
                      ],
                      [
                        -123.460335,
                        45.615829,
                        601.6532543999376,
                        0
                      ],
                      [
                        -123.459633,
                        45.615749,
                        625.0068836801586,
                        0
                      ],
                      [
                        -123.459412,
                        45.615791,
                        634.7152006400357,
                        0
                      ],
                      [
                        -123.459275,
                        45.615856,
                        640.2631519998195,
                        0
                      ],
                      [
                        -123.459244,
                        45.615715,
                        638.2752032001052,
                        0
                      ],
                      [
                        -123.459282,
                        45.615608,
                        633.9111795199824,
                        0
                      ],
                      [
                        -123.459145,
                        45.615783,
                        643.5257335997685,
                        0
                      ],
                      [
                        -123.459054,
                        45.616043,
                        647.4648406402387,
                        0
                      ],
                      [
                        -123.458977,
                        45.616184,
                        649.9100332798378,
                        0
                      ],
                      [
                        -123.458924,
                        45.616058,
                        653.2381030401795,
                        0
                      ],
                      [
                        -123.458893,
                        45.615913,
                        654.1260660798667,
                        0
                      ],
                      [
                        -123.458893,
                        45.615646,
                        649.7956188798319,
                        0
                      ],
                      [
                        -123.458771,
                        45.615898,
                        659.6511996800624,
                        0
                      ],
                      [
                        -123.458672,
                        45.616161,
                        663.6511999997201,
                        0
                      ],
                      [
                        -123.458642,
                        45.616359,
                        662.0960000000669,
                        0
                      ],
                      [
                        -123.458634,
                        45.616443,
                        660.9248393598945,
                        0
                      ],
                      [
                        -123.458489,
                        45.616336,
                        671.6955008000109,
                        0
                      ],
                      [
                        -123.458329,
                        45.616096,
                        681.2626540796238,
                        0
                      ],
                      [
                        -123.458275,
                        45.61584,
                        683.9551199999748,
                        0
                      ],
                      [
                        -123.458184,
                        45.615657,
                        684.3763315198362,
                        0
                      ],
                      [
                        -123.457726,
                        45.615425,
                        697.8671920001808,
                        0
                      ],
                      [
                        -123.457406,
                        45.615097,
                        696.4174921599551,
                        0
                      ],
                      [
                        -123.457261,
                        45.614738,
                        696.7956707199795,
                        0
                      ],
                      [
                        -123.457154,
                        45.614612,
                        699.1251622399612,
                        0
                      ],
                      [
                        -123.457284,
                        45.614437,
                        700.7249190399357,
                        0
                      ],
                      [
                        -123.457306,
                        45.614162,
                        706.5775993599465,
                        0
                      ],
                      [
                        -123.457161,
                        45.614017,
                        712.7756000000857,
                        0
                      ],
                      [
                        -123.457169,
                        45.613739,
                        708.4524505602325,
                        0
                      ],
                      [
                        -123.457085,
                        45.613529,
                        699.3542415999601,
                        0
                      ],
                      [
                        -123.457146,
                        45.613323,
                        689.6392153600048,
                        0
                      ],
                      [
                        -123.457146,
                        45.613323,
                        689.6392153600048,
                        0
                      ],
                      [
                        -123.457085,
                        45.613529,
                        699.3542415999601,
                        0
                      ],
                      [
                        -123.457169,
                        45.613739,
                        708.4524505602325,
                        0
                      ],
                      [
                        -123.457161,
                        45.614017,
                        712.7756000000857,
                        0
                      ],
                      [
                        -123.457306,
                        45.614162,
                        706.5775993599465,
                        0
                      ],
                      [
                        -123.457284,
                        45.614437,
                        700.7249190399357,
                        0
                      ],
                      [
                        -123.457154,
                        45.614612,
                        699.1251622399612,
                        0
                      ],
                      [
                        -123.457261,
                        45.614738,
                        696.7956707199795,
                        0
                      ],
                      [
                        -123.457406,
                        45.615097,
                        696.4174921599551,
                        0
                      ],
                      [
                        -123.457726,
                        45.615425,
                        697.8671920001808,
                        0
                      ],
                      [
                        -123.458184,
                        45.615657,
                        684.3763315198362,
                        0
                      ],
                      [
                        -123.458275,
                        45.61584,
                        683.9551199999748,
                        0
                      ],
                      [
                        -123.458329,
                        45.616096,
                        681.2626540796238,
                        0
                      ],
                      [
                        -123.458489,
                        45.616336,
                        671.6955008000109,
                        0
                      ],
                      [
                        -123.458634,
                        45.616443,
                        660.9248393598945,
                        0
                      ],
                      [
                        -123.458642,
                        45.616359,
                        662.0960000000669,
                        0
                      ],
                      [
                        -123.458672,
                        45.616161,
                        663.6511999997201,
                        0
                      ],
                      [
                        -123.458771,
                        45.615898,
                        659.6511996800624,
                        0
                      ],
                      [
                        -123.458893,
                        45.615646,
                        649.7956188798319,
                        0
                      ],
                      [
                        -123.458893,
                        45.615913,
                        654.1260660798667,
                        0
                      ],
                      [
                        -123.458924,
                        45.616058,
                        653.2381030401795,
                        0
                      ],
                      [
                        -123.458977,
                        45.616184,
                        649.9100332798378,
                        0
                      ],
                      [
                        -123.459054,
                        45.616043,
                        647.4648406402387,
                        0
                      ],
                      [
                        -123.459145,
                        45.615783,
                        643.5257335997685,
                        0
                      ],
                      [
                        -123.459282,
                        45.615608,
                        633.9111795199824,
                        0
                      ],
                      [
                        -123.459244,
                        45.615715,
                        638.2752032001052,
                        0
                      ],
                      [
                        -123.459275,
                        45.615856,
                        640.2631519998195,
                        0
                      ],
                      [
                        -123.459412,
                        45.615791,
                        634.7152006400357,
                        0
                      ],
                      [
                        -123.459633,
                        45.615749,
                        625.0068836801586,
                        0
                      ],
                      [
                        -123.460335,
                        45.615829,
                        601.6532543999376,
                        0
                      ],
                      [
                        -123.4599,
                        45.615898,
                        616.4105919998078,
                        0
                      ],
                      [
                        -123.459633,
                        45.616027,
                        625.2176593600947,
                        0
                      ],
                      [
                        -123.459595,
                        45.616207,
                        624.1702032002241,
                        0
                      ],
                      [
                        -123.459656,
                        45.616424,
                        617.1874662400988,
                        0
                      ],
                      [
                        -123.459603,
                        45.616596,
                        611.137588479883,
                        0
                      ],
                      [
                        -123.459282,
                        45.616806,
                        612.9938713600924,
                        0
                      ],
                      [
                        -123.459176,
                        45.617092,
                        605.3225932800394,
                        0
                      ],
                      [
                        -123.459237,
                        45.617496,
                        591.3355078398829,
                        0
                      ],
                      [
                        -123.459366,
                        45.617218,
                        594.6499699198773,
                        0
                      ],
                      [
                        -123.45961,
                        45.616882,
                        596.426857600228,
                        0
                      ],
                      [
                        -123.460045,
                        45.616695,
                        588.2694760003598,
                        0
                      ],
                      [
                        -123.460244,
                        45.616386,
                        590.683535359911,
                        0
                      ],
                      [
                        -123.460526,
                        45.616245,
                        582.6275391999656,
                        0
                      ],
                      [
                        -123.460892,
                        45.616199,
                        571.3639289598668,
                        0
                      ],
                      [
                        -123.460694,
                        45.616294,
                        573.4702534396758,
                        0
                      ],
                      [
                        -123.460526,
                        45.616477,
                        570.3386003197143,
                        0
                      ],
                      [
                        -123.460427,
                        45.616687,
                        564.9541230403368,
                        0
                      ],
                      [
                        -123.460206,
                        45.617015,
                        565.4675327999448,
                        0
                      ],
                      [
                        -123.460175,
                        45.61737,
                        554.6876799995872,
                        0
                      ],
                      [
                        -123.46003,
                        45.617729,
                        549.7369887998743,
                        0
                      ],
                      [
                        -123.460343,
                        45.617519,
                        539.7611396802292,
                        0
                      ],
                      [
                        -123.460495,
                        45.617286,
                        539.6765584002871,
                        0
                      ],
                      [
                        -123.460549,
                        45.617076,
                        543.0648921600506,
                        0
                      ],
                      [
                        -123.460785,
                        45.616851,
                        538.6845336000484,
                        0
                      ],
                      [
                        -123.461396,
                        45.616527,
                        534.9520716802963,
                        0
                      ],
                      [
                        -123.461983,
                        45.61647,
                        532.2667888000311,
                        0
                      ],
                      [
                        -123.462472,
                        45.616596,
                        525.9985305599799,
                        0
                      ],
                      [
                        -123.463402,
                        45.616718,
                        526.8632000001589,
                        0
                      ],
                      [
                        -123.464325,
                        45.616992,
                        524.890719999693,
                        0
                      ],
                      [
                        -123.464829,
                        45.617084,
                        515.082232320237,
                        0
                      ],
                      [
                        -123.465668,
                        45.616912,
                        530.9730355201114,
                        0
                      ],
                      [
                        -123.466157,
                        45.616905,
                        513.9709416002052,
                        0
                      ],
                      [
                        -123.466599,
                        45.617015,
                        495.828558399931,
                        0
                      ],
                      [
                        -123.467316,
                        45.616985,
                        487.1898208000642,
                        0
                      ],
                      [
                        -123.467682,
                        45.617023,
                        478.8373283201616,
                        0
                      ],
                      [
                        -123.467652,
                        45.617122,
                        481.5946892800027,
                        0
                      ],
                      [
                        -123.467454,
                        45.61716,
                        488.68261119986124,
                        0
                      ],
                      [
                        -123.466683,
                        45.617183,
                        494.3099795200393,
                        0
                      ],
                      [
                        -123.465737,
                        45.617225,
                        493.4097280002088,
                        0
                      ],
                      [
                        -123.466301,
                        45.617324,
                        481.8434393596929,
                        0
                      ],
                      [
                        -123.466767,
                        45.617488,
                        479.25918848000936,
                        0
                      ],
                      [
                        -123.465752,
                        45.61737,
                        478.59852159989083,
                        0
                      ],
                      [
                        -123.465104,
                        45.617458,
                        472.60666496013584,
                        0
                      ],
                      [
                        -123.46428,
                        45.617691,
                        445.0676959999023,
                        0
                      ],
                      [
                        -123.463318,
                        45.617645,
                        434.24398559981955,
                        0
                      ],
                      [
                        -123.462479,
                        45.617378,
                        446.8319859198129,
                        0
                      ],
                      [
                        -123.462266,
                        45.61742,
                        445.7351551998177,
                        0
                      ],
                      [
                        -123.462067,
                        45.617713,
                        432.7980878396464,
                        0
                      ],
                      [
                        -123.46196,
                        45.618194,
                        411.0848895998411,
                        0
                      ],
                      [
                        -123.461892,
                        45.618511,
                        406.5619129597954,
                        0
                      ],
                      [
                        -123.461739,
                        45.61869,
                        408.7747072002316,
                        0
                      ],
                      [
                        -123.461464,
                        45.618804,
                        417.3877657598089,
                        0
                      ],
                      [
                        -123.461365,
                        45.618957,
                        415.7117127999194,
                        0
                      ],
                      [
                        -123.46135,
                        45.619159,
                        407.8674639999261,
                        0
                      ],
                      [
                        -123.461274,
                        45.619396,
                        400.79600895983924,
                        0
                      ],
                      [
                        -123.461152,
                        45.619548,
                        395.8638284799166,
                        0
                      ],
                      [
                        -123.461358,
                        45.619522,
                        390.99325887963056,
                        0
                      ],
                      [
                        -123.46151,
                        45.619426,
                        389.4015519999285,
                        0
                      ],
                      [
                        -123.461579,
                        45.619239,
                        396.14011119996763,
                        0
                      ],
                      [
                        -123.461731,
                        45.619094,
                        396.04231936010876,
                        0
                      ],
                      [
                        -123.462212,
                        45.61882,
                        388.563494400216,
                        0
                      ],
                      [
                        -123.46241,
                        45.618537,
                        396.0112431998963,
                        0
                      ],
                      [
                        -123.462403,
                        45.618675,
                        390.9320439998884,
                        0
                      ],
                      [
                        -123.462273,
                        45.618877,
                        384.6276145602219,
                        0
                      ],
                      [
                        -123.462067,
                        45.619018,
                        383.33092095999916,
                        0
                      ],
                      [
                        -123.461815,
                        45.619178,
                        387.2501872000296,
                        0
                      ],
                      [
                        -123.461709,
                        45.6194,
                        380.2572160001302,
                        0
                      ],
                      [
                        -123.461525,
                        45.619598,
                        378.7830880000512,
                        0
                      ],
                      [
                        -123.461243,
                        45.619724,
                        380.60328384018516,
                        0
                      ],
                      [
                        -123.461579,
                        45.619678,
                        371.90137407996303,
                        0
                      ],
                      [
                        -123.461815,
                        45.619514,
                        368.48525439982205,
                        0
                      ],
                      [
                        -123.461991,
                        45.619277,
                        371.631253600278,
                        0
                      ],
                      [
                        -123.46241,
                        45.619132,
                        364.1025407998398,
                        0
                      ],
                      [
                        -123.46283,
                        45.618808,
                        374.6644543999848,
                        0
                      ],
                      [
                        -123.462975,
                        45.618797,
                        372.50793199995843,
                        0
                      ],
                      [
                        -123.463578,
                        45.61893,
                        362.67844160005353,
                        0
                      ],
                      [
                        -123.464013,
                        45.618896,
                        369.2664857599568,
                        0
                      ],
                      [
                        -123.464425,
                        45.619079,
                        356.8937240000642,
                        0
                      ],
                      [
                        -123.46473,
                        45.619071,
                        358.70105920021285,
                        0
                      ],
                      [
                        -123.465271,
                        45.619194,
                        351.5332067200023,
                        0
                      ],
                      [
                        -123.466012,
                        45.619037,
                        357.11132544004425,
                        0
                      ],
                      [
                        -123.46634,
                        45.619056,
                        349.11068159990384,
                        0
                      ],
                      [
                        -123.46563,
                        45.619277,
                        342.9009456002432,
                        0
                      ],
                      [
                        -123.466179,
                        45.619224,
                        343.9395532799292,
                        0
                      ],
                      [
                        -123.466729,
                        45.619033,
                        342.2156561598732,
                        0
                      ],
                      [
                        -123.467339,
                        45.618915,
                        334.17214080011905,
                        0
                      ],
                      [
                        -123.467759,
                        45.618789,
                        327.4092716799874,
                        0
                      ],
                      [
                        -123.468483,
                        45.618572,
                        328.1102630399393,
                        0
                      ],
                      [
                        -123.469132,
                        45.61848,
                        327.1211776000609,
                        0
                      ],
                      [
                        -123.469735,
                        45.618347,
                        324.62411600000036,
                        0
                      ],
                      [
                        -123.470635,
                        45.618053,
                        317.77113759988134,
                        0
                      ],
                      [
                        -123.471139,
                        45.617794,
                        308.7408000000323,
                        0
                      ],
                      [
                        -123.471413,
                        45.617759,
                        307.14106768000306,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471734,
                        45.617778,
                        309.6699878399354,
                        0
                      ],
                      [
                        -123.471749,
                        45.617397,
                        311.4508744000298,
                        0
                      ],
                      [
                        -123.471673,
                        45.617031,
                        306.3461910398906,
                        0
                      ],
                      [
                        -123.471589,
                        45.616737,
                        305.2619735999663,
                        0
                      ],
                      [
                        -123.471306,
                        45.616096,
                        302.4913011200113,
                        0
                      ],
                      [
                        -123.471039,
                        45.615818,
                        304.24774016005676,
                        0
                      ],
                      [
                        -123.470826,
                        45.615558,
                        300.95646464001726,
                        0
                      ],
                      [
                        -123.470734,
                        45.61536,
                        297.01655040001134,
                        0
                      ],
                      [
                        -123.470727,
                        45.615089,
                        298.2931929599542,
                        0
                      ],
                      [
                        -123.470612,
                        45.614902,
                        300.1340889600589,
                        0
                      ],
                      [
                        -123.470414,
                        45.614711,
                        301.2668243201963,
                        0
                      ],
                      [
                        -123.470101,
                        45.614433,
                        299.17098032003133,
                        0
                      ],
                      [
                        -123.469872,
                        45.614288,
                        295.9523225598273,
                        0
                      ],
                      [
                        -123.469666,
                        45.614154,
                        293.4535411201125,
                        0
                      ],
                      [
                        -123.469292,
                        45.613937,
                        285.80734783996746,
                        0
                      ],
                      [
                        -123.469201,
                        45.613754,
                        287.06412095996643,
                        0
                      ],
                      [
                        -123.469002,
                        45.613315,
                        286.02390080008445,
                        0
                      ],
                      [
                        -123.468941,
                        45.613162,
                        285.39284672001577,
                        0
                      ],
                      [
                        -123.468743,
                        45.612895,
                        287.92450320000484,
                        0
                      ],
                      [
                        -123.468369,
                        45.612625,
                        287.9028799998337,
                        0
                      ],
                      [
                        -123.468079,
                        45.612411,
                        285.9417670400471,
                        0
                      ],
                      [
                        -123.467865,
                        45.612304,
                        284.71115840001727,
                        0
                      ],
                      [
                        -123.467644,
                        45.612159,
                        286.1503878401895,
                        0
                      ],
                      [
                        -123.467324,
                        45.611984,
                        288.07449856012715,
                        0
                      ],
                      [
                        -123.467057,
                        45.611774,
                        288.5698307200201,
                        0
                      ],
                      [
                        -123.466721,
                        45.611412,
                        292.3793260800846,
                        0
                      ],
                      [
                        -123.466576,
                        45.611148,
                        291.5362918400828,
                        0
                      ],
                      [
                        -123.46653,
                        45.610923,
                        288.85758240013143,
                        0
                      ],
                      [
                        -123.466591,
                        45.610675,
                        287.8108679998881,
                        0
                      ],
                      [
                        -123.466614,
                        45.610469,
                        286.2353587201277,
                        0
                      ],
                      [
                        -123.466729,
                        45.610172,
                        285.5702969600057,
                        0
                      ]
                    ]
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "id": "695475c5-5730-49e4-9e07-e4693038f122",
                  "updated_date": "2018-11-27T19:55:37Z",
                  "time_created": "2018-11-27T19:55:31Z",
                  "last_updated_on_server": "2018-11-27T19:55:37.303",
                  "db_insert_date": "2018-11-27T19:55:31Z",
                  "deleted": false,
                  "title": "Little South Fork Kilchis River Hike",
                  "public": true,
                  "color": "#FF00FF",
                  "hexcolor": "#FF00FF",
                  "is_active": true,
                  "revision": 52,
                  "notes": "https://www.oregonhikers.org/field_guide/Little_South_Fork_Kilchis_River_Hike",
                  "track_type": "route",
                  "routing_mode": "pedestrian",
                  "uploaded_gpx_to_osm": null,
                  "flag": null,
                  "source": null,
                  "cover_photo_id": null,
                  "distance": 14512.8766601141,
                  "total_ascent": 841.977355519477,
                  "total_descent": 842.184132319405,
                  "stopped_time": 0,
                  "total_time": 0,
                  "average_speed": 0,
                  "moving_time": 0,
                  "moving_speed": 0,
                  "preferred_link": "/datasummary/track/695475c5-5730-49e4-9e07-e4693038f122/",
                  "user_displayname": "taylor.morris",
                  "username": "taylor.morris@gmail.com",
                  "user_email": "taylor.morris@gmail.com",
                  "user_id": 515547,
                  "favorite_count": 0,
                  "comment_count": 0,
                  "user_photo_count": 0,
                  "latitude": 45.56279484266147,
                  "longitude": -123.73414304603678
                },
                "style": {
                  "stroke": "#FF00FF"
                },
                "geometry": {
                  "type": "MultiLineString",
                  "coordinates": [
                    [
                      [
                        -123.751961,
                        45.548454,
                        88.6727999999166,
                        0
                      ],
                      [
                        -123.751915,
                        45.548477,
                        88.46602319998762,
                        0
                      ],
                      [
                        -123.752007,
                        45.549228,
                        92.66680000001747,
                        0
                      ],
                      [
                        -123.752175,
                        45.549732,
                        96.96480000000429,
                        0
                      ],
                      [
                        -123.752755,
                        45.550556,
                        97.16439360004786,
                        0
                      ],
                      [
                        -123.752656,
                        45.551792,
                        103.83158783993873,
                        0
                      ],
                      [
                        -123.752854,
                        45.552318,
                        107.98597376000157,
                        0
                      ],
                      [
                        -123.753701,
                        45.553642,
                        103.40878431998681,
                        0
                      ],
                      [
                        -123.75396,
                        45.554397,
                        110.25190080000743,
                        0
                      ],
                      [
                        -123.75396,
                        45.555198,
                        114.23447679991664,
                        0
                      ],
                      [
                        -123.754181,
                        45.555839,
                        118.95920000000842,
                        0
                      ],
                      [
                        -123.75454,
                        45.556388,
                        120.98830079997806,
                        0
                      ],
                      [
                        -123.754509,
                        45.556911,
                        130.37001903999092,
                        0
                      ],
                      [
                        -123.753792,
                        45.557323,
                        137.79654463988078,
                        0
                      ],
                      [
                        -123.752945,
                        45.55746,
                        135.88862399988867,
                        0
                      ],
                      [
                        -123.752099,
                        45.557964,
                        141.19484223995752,
                        0
                      ],
                      [
                        -123.751236,
                        45.558315,
                        143.50447360018637,
                        0
                      ],
                      [
                        -123.749848,
                        45.558624,
                        146.10400000007826,
                        0
                      ],
                      [
                        -123.748482,
                        45.558765,
                        141.445804800024,
                        0
                      ],
                      [
                        -123.745621,
                        45.559909,
                        145.86045231994393,
                        0
                      ],
                      [
                        -123.745492,
                        45.560089,
                        150.90370752003685,
                        0
                      ],
                      [
                        -123.74556,
                        45.560569,
                        155.4032256000797,
                        0
                      ],
                      [
                        -123.74614,
                        45.561416,
                        169.07200000006742,
                        0
                      ],
                      [
                        -123.746178,
                        45.561828,
                        177.24225663995296,
                        0
                      ],
                      [
                        -123.746392,
                        45.562129,
                        185.9579174399461,
                        0
                      ],
                      [
                        -123.746232,
                        45.562145,
                        188.3583999999762,
                        0
                      ],
                      [
                        -123.746232,
                        45.562145,
                        188.3583999999762,
                        0
                      ],
                      [
                        -123.746026,
                        45.562164,
                        192.69382144010183,
                        0
                      ],
                      [
                        -123.745476,
                        45.562164,
                        210.5504000002411,
                        0
                      ],
                      [
                        -123.744416,
                        45.561183,
                        224.42810111994174,
                        0
                      ],
                      [
                        -123.743905,
                        45.560527,
                        224.313049600086,
                        0
                      ],
                      [
                        -123.743538,
                        45.56018,
                        222.15196800012004,
                        0
                      ],
                      [
                        -123.742119,
                        45.559997,
                        229.3028531202293,
                        0
                      ],
                      [
                        -123.741517,
                        45.560245,
                        234.2628000001671,
                        0
                      ],
                      [
                        -123.741051,
                        45.560661,
                        239.39589088011252,
                        0
                      ],
                      [
                        -123.740754,
                        45.561145,
                        257.87728640006145,
                        0
                      ],
                      [
                        -123.739098,
                        45.561981,
                        243.31760000000895,
                        0
                      ],
                      [
                        -123.738961,
                        45.562389,
                        245.24133616014262,
                        0
                      ],
                      [
                        -123.739228,
                        45.562847,
                        258.6190700798455,
                        0
                      ],
                      [
                        -123.73909,
                        45.56377,
                        277.61412799998413,
                        0
                      ],
                      [
                        -123.738717,
                        45.564132,
                        289.26479999998946,
                        0
                      ],
                      [
                        -123.738472,
                        45.56406,
                        286.7020927998855,
                        0
                      ],
                      [
                        -123.737137,
                        45.563232,
                        265.46256191995485,
                        0
                      ],
                      [
                        -123.73671,
                        45.563159,
                        258.6407775999797,
                        0
                      ],
                      [
                        -123.736527,
                        45.563304,
                        261.4305913599993,
                        0
                      ],
                      [
                        -123.7361,
                        45.563385,
                        258.4414399997525,
                        0
                      ],
                      [
                        -123.735817,
                        45.563724,
                        263.280696319921,
                        0
                      ],
                      [
                        -123.735413,
                        45.564735,
                        285.65922879981156,
                        0
                      ],
                      [
                        -123.734841,
                        45.56483,
                        289.61449120001936,
                        0
                      ],
                      [
                        -123.734101,
                        45.564613,
                        279.0554099199981,
                        0
                      ],
                      [
                        -123.733162,
                        45.564678,
                        239.49234559942565,
                        0
                      ],
                      [
                        -123.732857,
                        45.565162,
                        248.7627286397704,
                        0
                      ],
                      [
                        -123.732346,
                        45.565483,
                        239.42443712012866,
                        0
                      ],
                      [
                        -123.731858,
                        45.565971,
                        216.77664576013333,
                        0
                      ],
                      [
                        -123.73211,
                        45.56697,
                        214.3840000000837,
                        0
                      ],
                      [
                        -123.732529,
                        45.567588,
                        218.4207564799772,
                        0
                      ],
                      [
                        -123.733498,
                        45.567981,
                        253.27809247972908,
                        0
                      ],
                      [
                        -123.734101,
                        45.569011,
                        245.22720719986586,
                        0
                      ],
                      [
                        -123.734192,
                        45.569717,
                        259.4198873599791,
                        0
                      ],
                      [
                        -123.734055,
                        45.569869,
                        270.89451759988464,
                        0
                      ],
                      [
                        -123.733689,
                        45.569717,
                        269.717599999869,
                        0
                      ],
                      [
                        -123.73333,
                        45.569187,
                        248.13839200002857,
                        0
                      ],
                      [
                        -123.731904,
                        45.568519,
                        250.04788096009008,
                        0
                      ],
                      [
                        -123.73124,
                        45.568367,
                        271.5565472000505,
                        0
                      ],
                      [
                        -123.730965,
                        45.567989,
                        271.13068160000154,
                        0
                      ],
                      [
                        -123.731003,
                        45.567741,
                        261.1204503998577,
                        0
                      ],
                      [
                        -123.730179,
                        45.566848,
                        268.3306572796767,
                        0
                      ],
                      [
                        -123.729989,
                        45.566116,
                        262.4633939199118,
                        0
                      ],
                      [
                        -123.729691,
                        45.565578,
                        241.7473180800283,
                        0
                      ],
                      [
                        -123.727089,
                        45.564952,
                        247.201450239855,
                        0
                      ],
                      [
                        -123.726784,
                        45.564922,
                        246.64180992018885,
                        0
                      ],
                      [
                        -123.72519,
                        45.565677,
                        253.63386879995898,
                        0
                      ],
                      [
                        -123.724167,
                        45.566268,
                        240.09191103987888,
                        0
                      ],
                      [
                        -123.722756,
                        45.567573,
                        262.8741964801862,
                        0
                      ],
                      [
                        -123.722069,
                        45.568367,
                        272.3452539200994,
                        0
                      ],
                      [
                        -123.721543,
                        45.568622,
                        276.0692147199889,
                        0
                      ],
                      [
                        -123.721215,
                        45.56855,
                        284.3331200000051,
                        0
                      ],
                      [
                        -123.720589,
                        45.568191,
                        297.85113519977176,
                        0
                      ],
                      [
                        -123.719712,
                        45.567562,
                        291.92384128007376,
                        0
                      ],
                      [
                        -123.71888,
                        45.565773,
                        307.2164479999537,
                        0
                      ],
                      [
                        -123.717934,
                        45.565483,
                        295.9967910399693,
                        0
                      ],
                      [
                        -123.717156,
                        45.565032,
                        304.20931839996103,
                        0
                      ],
                      [
                        -123.715165,
                        45.564647,
                        326.5563447999435,
                        0
                      ],
                      [
                        -123.714013,
                        45.564567,
                        334.2016718401654,
                        0
                      ],
                      [
                        -123.713341,
                        45.564632,
                        332.38985791984544,
                        0
                      ],
                      [
                        -123.712945,
                        45.56491,
                        337.571999999896,
                        0
                      ],
                      [
                        -123.712403,
                        45.565128,
                        351.12742272016783,
                        0
                      ],
                      [
                        -123.711686,
                        45.565185,
                        368.39546080001156,
                        0
                      ],
                      [
                        -123.710618,
                        45.565128,
                        385.41076351998754,
                        0
                      ],
                      [
                        -123.709488,
                        45.565017,
                        391.0227884801421,
                        0
                      ],
                      [
                        -123.70784,
                        45.56496,
                        402.38374399999566,
                        0
                      ],
                      [
                        -123.7072,
                        45.564765,
                        432.8886399998845,
                        0
                      ],
                      [
                        -123.70591,
                        45.56483,
                        450.7999999999022,
                        0
                      ],
                      [
                        -123.70591,
                        45.56483,
                        450.7999999999022,
                        0
                      ],
                      [
                        -123.7072,
                        45.564765,
                        432.8886399998845,
                        0
                      ],
                      [
                        -123.70784,
                        45.56496,
                        402.38374399999566,
                        0
                      ],
                      [
                        -123.709488,
                        45.565017,
                        391.0227884801421,
                        0
                      ],
                      [
                        -123.710618,
                        45.565128,
                        385.41076351998754,
                        0
                      ],
                      [
                        -123.711686,
                        45.565185,
                        368.39546080001156,
                        0
                      ],
                      [
                        -123.712403,
                        45.565128,
                        351.12742272016783,
                        0
                      ],
                      [
                        -123.712945,
                        45.56491,
                        337.571999999896,
                        0
                      ],
                      [
                        -123.713341,
                        45.564632,
                        332.38985791984544,
                        0
                      ],
                      [
                        -123.714013,
                        45.564567,
                        334.2016718401654,
                        0
                      ],
                      [
                        -123.715165,
                        45.564647,
                        326.5563447999435,
                        0
                      ],
                      [
                        -123.717156,
                        45.565032,
                        304.20931839996103,
                        0
                      ],
                      [
                        -123.717934,
                        45.565483,
                        295.9967910399693,
                        0
                      ],
                      [
                        -123.71888,
                        45.565773,
                        307.2164479999537,
                        0
                      ],
                      [
                        -123.719712,
                        45.567562,
                        291.92384128007376,
                        0
                      ],
                      [
                        -123.720589,
                        45.568191,
                        297.85113519977176,
                        0
                      ],
                      [
                        -123.721215,
                        45.56855,
                        284.3331200000051,
                        0
                      ],
                      [
                        -123.721543,
                        45.568622,
                        276.0692147199889,
                        0
                      ],
                      [
                        -123.722069,
                        45.568367,
                        272.3452539200994,
                        0
                      ],
                      [
                        -123.722756,
                        45.567573,
                        262.8741964801862,
                        0
                      ],
                      [
                        -123.724167,
                        45.566268,
                        240.09191103987888,
                        0
                      ],
                      [
                        -123.72519,
                        45.565677,
                        253.63386879995898,
                        0
                      ],
                      [
                        -123.726784,
                        45.564922,
                        246.64180992018885,
                        0
                      ],
                      [
                        -123.727089,
                        45.564952,
                        247.201450239855,
                        0
                      ],
                      [
                        -123.729691,
                        45.565578,
                        241.7473180800283,
                        0
                      ],
                      [
                        -123.729989,
                        45.566116,
                        262.4633939199118,
                        0
                      ],
                      [
                        -123.730179,
                        45.566848,
                        268.3306572796767,
                        0
                      ],
                      [
                        -123.731003,
                        45.567741,
                        261.1204503998577,
                        0
                      ],
                      [
                        -123.730965,
                        45.567989,
                        271.13068160000154,
                        0
                      ],
                      [
                        -123.73124,
                        45.568367,
                        271.5565472000505,
                        0
                      ],
                      [
                        -123.731904,
                        45.568519,
                        250.04788096009008,
                        0
                      ],
                      [
                        -123.73333,
                        45.569187,
                        248.13839200002857,
                        0
                      ],
                      [
                        -123.733689,
                        45.569717,
                        269.717599999869,
                        0
                      ],
                      [
                        -123.734055,
                        45.569869,
                        270.89451759988464,
                        0
                      ],
                      [
                        -123.734192,
                        45.569717,
                        259.4198873599791,
                        0
                      ],
                      [
                        -123.734101,
                        45.569011,
                        245.22720719986586,
                        0
                      ],
                      [
                        -123.733498,
                        45.567981,
                        253.27809247972908,
                        0
                      ],
                      [
                        -123.732529,
                        45.567588,
                        218.4207564799772,
                        0
                      ],
                      [
                        -123.73211,
                        45.56697,
                        214.3840000000837,
                        0
                      ],
                      [
                        -123.731858,
                        45.565971,
                        216.77664576013333,
                        0
                      ],
                      [
                        -123.732346,
                        45.565483,
                        239.42443712012866,
                        0
                      ],
                      [
                        -123.732857,
                        45.565162,
                        248.7627286397704,
                        0
                      ],
                      [
                        -123.733162,
                        45.564678,
                        239.49234559942565,
                        0
                      ],
                      [
                        -123.734101,
                        45.564613,
                        279.0554099199981,
                        0
                      ],
                      [
                        -123.734841,
                        45.56483,
                        289.61449120001936,
                        0
                      ],
                      [
                        -123.735413,
                        45.564735,
                        285.65922879981156,
                        0
                      ],
                      [
                        -123.735817,
                        45.563724,
                        263.280696319921,
                        0
                      ],
                      [
                        -123.7361,
                        45.563385,
                        258.4414399997525,
                        0
                      ],
                      [
                        -123.736527,
                        45.563304,
                        261.4305913599993,
                        0
                      ],
                      [
                        -123.73671,
                        45.563159,
                        258.6407775999797,
                        0
                      ],
                      [
                        -123.737137,
                        45.563232,
                        265.46256191995485,
                        0
                      ],
                      [
                        -123.738472,
                        45.56406,
                        286.7020927998855,
                        0
                      ],
                      [
                        -123.738717,
                        45.564132,
                        289.26479999998946,
                        0
                      ],
                      [
                        -123.73909,
                        45.56377,
                        277.61412799998413,
                        0
                      ],
                      [
                        -123.739228,
                        45.562847,
                        258.6190700798455,
                        0
                      ],
                      [
                        -123.738961,
                        45.562389,
                        245.24133616014262,
                        0
                      ],
                      [
                        -123.739098,
                        45.561981,
                        243.31760000000895,
                        0
                      ],
                      [
                        -123.740754,
                        45.561145,
                        257.87728640006145,
                        0
                      ],
                      [
                        -123.741051,
                        45.560661,
                        239.39589088011252,
                        0
                      ],
                      [
                        -123.741517,
                        45.560245,
                        234.2628000001671,
                        0
                      ],
                      [
                        -123.742119,
                        45.559997,
                        229.3028531202293,
                        0
                      ],
                      [
                        -123.743538,
                        45.56018,
                        222.15196800012004,
                        0
                      ],
                      [
                        -123.743905,
                        45.560527,
                        224.313049600086,
                        0
                      ],
                      [
                        -123.744416,
                        45.561183,
                        224.42810111994174,
                        0
                      ],
                      [
                        -123.745476,
                        45.562164,
                        210.5504000002411,
                        0
                      ],
                      [
                        -123.746026,
                        45.562164,
                        192.69382144010183,
                        0
                      ],
                      [
                        -123.746392,
                        45.562129,
                        185.9579174399461,
                        0
                      ],
                      [
                        -123.746178,
                        45.561828,
                        177.24225663995296,
                        0
                      ],
                      [
                        -123.74614,
                        45.561416,
                        169.07200000006742,
                        0
                      ],
                      [
                        -123.74556,
                        45.560569,
                        155.4032256000797,
                        0
                      ],
                      [
                        -123.745492,
                        45.560089,
                        150.90370752003685,
                        0
                      ],
                      [
                        -123.745621,
                        45.559909,
                        145.86045231994393,
                        0
                      ],
                      [
                        -123.748482,
                        45.558765,
                        141.445804800024,
                        0
                      ],
                      [
                        -123.749848,
                        45.558624,
                        146.10400000007826,
                        0
                      ],
                      [
                        -123.751236,
                        45.558315,
                        143.50447360018637,
                        0
                      ],
                      [
                        -123.752099,
                        45.557964,
                        141.19484223995752,
                        0
                      ],
                      [
                        -123.752945,
                        45.55746,
                        135.88862399988867,
                        0
                      ],
                      [
                        -123.753792,
                        45.557323,
                        137.79654463988078,
                        0
                      ],
                      [
                        -123.754509,
                        45.556911,
                        130.37001903999092,
                        0
                      ],
                      [
                        -123.75454,
                        45.556388,
                        120.98830079997806,
                        0
                      ],
                      [
                        -123.754181,
                        45.555839,
                        118.95920000000842,
                        0
                      ],
                      [
                        -123.75396,
                        45.555198,
                        114.23447679991664,
                        0
                      ],
                      [
                        -123.75396,
                        45.554397,
                        110.25190080000743,
                        0
                      ],
                      [
                        -123.753701,
                        45.553642,
                        103.40878431998681,
                        0
                      ],
                      [
                        -123.752854,
                        45.552318,
                        107.98597376000157,
                        0
                      ],
                      [
                        -123.752656,
                        45.551792,
                        103.83158783993873,
                        0
                      ],
                      [
                        -123.752755,
                        45.550556,
                        97.16439360004786,
                        0
                      ],
                      [
                        -123.752175,
                        45.549732,
                        96.96480000000429,
                        0
                      ],
                      [
                        -123.752007,
                        45.549228,
                        92.66680000001747,
                        0
                      ],
                      [
                        -123.751915,
                        45.548477,
                        88.46602319998762,
                        0
                      ],
                      [
                        -123.751954,
                        45.548458,
                        88.5863999999558,
                        0
                      ]
                    ]
                  ]
                }
              },
              {"type":"Feature","properties":{"id":"610acb7e-668b-49e4-bdba-1069078817e4","updated_date":"2018-11-27T21:48:02Z","time_created":"2018-11-27T21:47:55Z","last_updated_on_server":"2018-11-27T21:48:02.132","db_insert_date":"2018-11-27T21:47:55Z","deleted":false,"title":"Kilchis River Hike","public":true,"color":"#FF00FF","hexcolor":"#FF00FF","is_active":true,"revision":61,"notes":"https://www.oregonhikers.org/field_guide/Kilchis_River_Hike","track_type":"route","routing_mode":"pedestrian","uploaded_gpx_to_osm":null,"flag":null,"source":null,"cover_photo_id":null,"distance":7472.47219859347,"total_ascent":362.134189919128,"total_descent":364.526876639158,"stopped_time":0.0,"total_time":0.0,"average_speed":0,"moving_time":0.0,"moving_speed":0,"preferred_link":"/datasummary/track/610acb7e-668b-49e4-bdba-1069078817e4/","user_displayname":"taylor.morris","username":"taylor.morris@gmail.com","user_email":"taylor.morris@gmail.com","user_id":515547,"favorite_count":0,"comment_count":0,"user_photo_count":0,"latitude":45.59280609970102,"longitude":-123.78132814816404},"style":{"stroke":"#FF00FF"},"geometry":{"type":"MultiLineString","coordinates":[[[-123.794594,45.585845,95.18381279999493,0.0],[-123.793847,45.586235,105.32114320010257,0.0],[-123.792969,45.586486,107.84560000003012,0.0],[-123.790719,45.586509,101.4231758399294,0.0],[-123.79036,45.586715,101.97451200011334,0.0],[-123.789513,45.588268,106.70430527995207,0.0],[-123.788537,45.588932,101.83960000012144,0.0],[-123.787621,45.589275,97.25691600002995,0.0],[-123.783844,45.589389,100.07425535990997,0.0],[-123.781632,45.589569,106.09683967987404,0.0],[-123.780427,45.589775,96.33573600013713,0.0],[-123.780007,45.589935,96.20359999988818,0.0],[-123.777558,45.590415,102.7147999999961,0.0],[-123.777436,45.590465,101.94031039995883,0.0],[-123.776909,45.59069,100.19680000004746,0.0],[-123.775574,45.591625,102.66560000009304,0.0],[-123.774987,45.59238,105.10501759992626,0.0],[-123.775055,45.592906,118.4444063999621,0.0],[-123.775147,45.592952,119.78497151994269,0.0],[-123.775246,45.59341,128.52970239995668,0.0],[-123.775185,45.593822,133.1823999999251,0.0],[-123.774987,45.593982,133.44759999983467,0.0],[-123.772286,45.5951,135.9914879999343,0.0],[-123.772118,45.595237,138.9028380799742,0.0],[-123.772088,45.595626,152.17760000002636,0.0],[-123.774041,45.596405,207.95903919991227,0.0],[-123.774956,45.596588,227.64041215992845,0.0],[-123.775178,45.596473,227.28033152007023,0.0],[-123.775277,45.596199,218.46565631999715,0.0],[-123.775765,45.595832,219.71518080030228,0.0],[-123.776322,45.595878,225.61407935996817,0.0],[-123.777428,45.596176,242.49279999999885,0.0],[-123.778527,45.596206,263.98072704012685,0.0],[-123.778962,45.596221,267.966956160002,0.0],[-123.779969,45.596611,294.5086121601585,0.0],[-123.780716,45.597137,301.71723071987253,0.0],[-123.781624,45.598804,333.3104409601452,0.0],[-123.78283,45.600498,364.05969280004496,0.0],[-123.784104,45.600612,370.9946419199394,0.0],[-123.785309,45.600978,384.69946207994184,0.0],[-123.785355,45.600963,384.41582959999556,0.0],[-123.785355,45.600963,384.41582959999556,0.0],[-123.785309,45.600978,384.69946207994184,0.0],[-123.784104,45.600612,370.9946419199394,0.0],[-123.78283,45.600498,364.05969280004496,0.0],[-123.781624,45.598804,333.3104409601452,0.0],[-123.780716,45.597137,301.71723071987253,0.0],[-123.779969,45.596611,294.5086121601585,0.0],[-123.778962,45.596221,267.966956160002,0.0],[-123.778527,45.596206,263.98072704012685,0.0],[-123.777428,45.596176,242.49279999999885,0.0],[-123.776322,45.595878,225.61407935996817,0.0],[-123.775765,45.595832,219.71518080030228,0.0],[-123.775277,45.596199,218.46565631999715,0.0],[-123.775178,45.596473,227.28033152007023,0.0],[-123.774956,45.596588,227.64041215992845,0.0],[-123.774041,45.596405,207.95903919991227,0.0],[-123.772088,45.595626,152.17760000002636,0.0],[-123.772118,45.595237,138.9028380799742,0.0],[-123.772286,45.5951,135.9914879999343,0.0],[-123.774987,45.593982,133.44759999983467,0.0],[-123.775185,45.593822,133.1823999999251,0.0],[-123.775246,45.59341,128.52970239995668,0.0],[-123.775147,45.592952,119.78497151994269,0.0],[-123.775055,45.592906,118.4444063999621,0.0],[-123.774987,45.59238,105.10501759992626,0.0],[-123.775574,45.591625,102.66560000009304,0.0],[-123.776909,45.59069,100.19680000004746,0.0],[-123.777436,45.590465,101.94031039995883,0.0],[-123.777558,45.590415,102.7147999999961,0.0],[-123.780007,45.589935,96.20359999988818,0.0],[-123.780427,45.589775,96.33573600013713,0.0],[-123.781632,45.589569,106.09683967987404,0.0],[-123.783844,45.589389,100.07425535990997,0.0],[-123.787621,45.589275,97.25691600002995,0.0],[-123.788537,45.588932,101.83960000012144,0.0],[-123.789513,45.588268,106.70430527995207,0.0],[-123.79036,45.586715,101.97451200011334,0.0],[-123.790719,45.586509,101.4231758399294,0.0],[-123.792969,45.586486,107.84560000003012,0.0],[-123.793847,45.586235,105.32114320010257,0.0],[-123.794594,45.585845,95.18381279999493,0.0],[-123.794671,45.585746,92.7911260799647,0.0]]]}},
              {"type":"Feature","properties":{"id":"99bc7c7d-a6d2-4bae-af8b-640d4b6b7b60","updated_date":"2018-11-27T21:57:56Z","time_created":"2018-11-27T21:57:51Z","last_updated_on_server":"2018-11-27T21:58:00.584","db_insert_date":"2018-11-27T21:57:51Z","deleted":false,"title":"Sawtooth Ridge Hike","public":false,"color":"#FF00FF","hexcolor":"#FF00FF","is_active":true,"revision":65,"notes":"https://www.oregonhikers.org/field_guide/Sawtooth_Ridge_Hike\n\nScramble starts around the old flatbed truck. Length is approximate due to road and scramble options.","track_type":"route","routing_mode":"pedestrian","uploaded_gpx_to_osm":null,"flag":null,"source":null,"cover_photo_id":null,"distance":15757.598394348,"total_ascent":1279.81109487697,"total_descent":1279.81109487697,"stopped_time":0.0,"total_time":0.0,"average_speed":0,"moving_time":0.0,"moving_speed":0,"preferred_link":"/datasummary/track/99bc7c7d-a6d2-4bae-af8b-640d4b6b7b60/","user_displayname":"taylor.morris","username":"taylor.morris@gmail.com","user_email":"taylor.morris@gmail.com","user_id":515547,"favorite_count":0,"comment_count":0,"user_photo_count":0,"latitude":45.61253925857468,"longitude":-123.72049916944846},"style":{"stroke":"#FF00FF"},"geometry":{"type":"MultiLineString","coordinates":[[[-123.741036,45.622081,158.9429145598979,0.0],[-123.740868,45.621456,176.34424832006218,0.0],[-123.74096,45.621112,189.53788160012948,0.0],[-123.741517,45.620151,220.84154160005016,0.0],[-123.741219,45.619144,243.53950656003266,0.0],[-123.741417,45.618919,248.45080000003213,0.0],[-123.741807,45.618896,251.3749331199486,0.0],[-123.742066,45.619098,252.41227583983215,0.0],[-123.742363,45.619899,258.144927519883,0.0],[-123.742623,45.620288,263.75210495979127,0.0],[-123.742882,45.620426,264.53999999983057,0.0],[-123.743401,45.620403,267.6159999997799,0.0],[-123.743859,45.620014,282.4836460801535,0.0],[-123.74379,45.618755,303.743999999924,0.0],[-123.743699,45.618663,306.04439999989677,0.0],[-123.743699,45.617912,313.480337920027,0.0],[-123.744019,45.616699,330.90979120009064,0.0],[-123.745644,45.615211,355.2177132799432,0.0],[-123.745659,45.615139,357.63389791996775,0.0],[-123.745713,45.614913,364.8668782400628,0.0],[-123.745415,45.614868,372.99765120006106,0.0],[-123.743889,45.615348,382.21700224019077,0.0],[-123.742875,45.615329,405.2205199998564,0.0],[-123.742486,45.615146,416.78987071977747,0.0],[-123.742226,45.614803,431.55910975994504,0.0],[-123.741669,45.614459,433.1688803202511,0.0],[-123.740792,45.614437,415.009199999844,0.0],[-123.738709,45.613819,442.4837361600307,0.0],[-123.738099,45.613906,439.0336684800024,0.0],[-123.737565,45.613979,434.8999999999603,0.0],[-123.736428,45.613662,445.1816000001477,0.0],[-123.735383,45.612884,473.0557593598839,0.0],[-123.733918,45.612224,470.85292928020743,0.0],[-123.732842,45.612129,456.7443443198084,0.0],[-123.732583,45.612224,451.0293753600401,0.0],[-123.732285,45.612659,442.5556751998091,0.0],[-123.732255,45.614303,399.91714240032974,0.0],[-123.732163,45.614326,405.33000000002926,0.0],[-123.732163,45.614601,403.2639214400048,0.0],[-123.731896,45.614692,415.6610483198614,0.0],[-123.731736,45.614624,421.90564864009076,0.0],[-123.731049,45.613616,458.76332928000704,0.0],[-123.730759,45.613319,478.42200000006187,0.0],[-123.730141,45.612934,495.25412575989026,0.0],[-123.729355,45.612796,500.3342303997957,0.0],[-123.728806,45.612796,500.2387750397326,0.0],[-123.727891,45.61314,493.412041599905,0.0],[-123.726914,45.613872,476.95120896013486,0.0],[-123.726624,45.613986,478.37789568013665,0.0],[-123.726357,45.613986,481.6386614400975,0.0],[-123.725907,45.612934,526.590478719986,0.0],[-123.725022,45.612751,514.2458790395541,0.0],[-123.724373,45.61243,519.5491567997365,0.0],[-123.723527,45.61243,497.7094831997822,0.0],[-123.722809,45.612751,482.0122475199415,0.0],[-123.720498,45.613094,489.77335296018214,0.0],[-123.71978,45.613323,481.9711999999297,0.0],[-123.718834,45.614078,481.32774783998343,0.0],[-123.718476,45.614147,490.90959999996403,0.0],[-123.718117,45.613964,502.85677503988217,0.0],[-123.717728,45.612892,540.3038259196522,0.0],[-123.717629,45.612823,540.1904086401529,0.0],[-123.71711,45.611198,578.6486560000562,0.0],[-123.716355,45.610237,609.9489807999249,0.0],[-123.715706,45.609645,625.6151999998483,0.0],[-123.713753,45.608661,634.4905206400728,0.0],[-123.712967,45.608501,636.2268553603177,0.0],[-123.711632,45.608455,644.332249600037,0.0],[-123.710099,45.608596,642.6763763200853,0.0],[-123.709549,45.608501,641.7480148800373,0.0],[-123.707886,45.607589,664.1068000003065,0.0],[-123.706582,45.607154,667.5675411197892,0.0],[-123.705964,45.607154,655.2399487998614,0.0],[-123.705246,45.607498,641.7575763199601,0.0],[-123.704827,45.607475,649.6784000000316,0.0],[-123.70398,45.606903,664.549999999881,0.0],[-123.703164,45.606628,660.98719999998,0.0],[-123.702546,45.606628,651.8351091199612,0.0],[-123.702118,45.606517,649.1452000000515,0.0],[-123.70163,45.605808,665.2359999998071,0.0],[-123.70134,45.605693,670.9318303998618,0.0],[-123.700493,45.605922,669.4482838401034,0.0],[-123.699547,45.606037,669.5989025599583,0.0],[-123.699257,45.606243,658.0731950400166,0.0],[-123.699257,45.606674,643.7492883198935,0.0],[-123.699387,45.607063,635.8819999999241,0.0],[-123.699387,45.607589,636.0745412799507,0.0],[-123.699227,45.60791,638.3579744003961,0.0],[-123.699029,45.608161,638.724389280085,0.0],[-123.698899,45.608589,632.2306051200521,0.0],[-123.698685,45.608966,630.7037664000449,0.0],[-123.698418,45.609294,634.051720319878,0.0],[-123.698159,45.609535,636.7267951997977,0.0],[-123.697983,45.609848,634.5816000003397,0.0],[-123.698044,45.610107,625.8120000002123,0.0],[-123.698197,45.610363,616.5644000003394,0.0],[-123.698197,45.610675,615.0112000003337,0.0],[-123.69806,45.610908,620.2513024000751,0.0],[-123.697968,45.611164,622.3407718398056,0.0],[-123.698105,45.611358,612.7562064000186,0.0],[-123.698227,45.611656,605.9047999998729,0.0],[-123.698082,45.611686,610.6933740800426,0.0],[-123.697899,45.612026,614.9650918396337,0.0],[-123.698014,45.612506,603.01258047997,0.0],[-123.698548,45.613197,576.7627999999154,0.0],[-123.698403,45.61351,580.5390176000425,0.0],[-123.698113,45.613552,588.3155859198471,0.0],[-123.697632,45.613494,596.4750783999039,0.0],[-123.697175,45.613853,584.5740720000385,0.0],[-123.696442,45.613933,586.2630502398277,0.0],[-123.69603,45.613773,591.2106223997653,0.0],[-123.695893,45.613655,594.7379383998922,0.0],[-123.69587,45.613483,600.5931135999151,0.0],[-123.695389,45.613162,596.1681667201321,0.0],[-123.695252,45.612915,600.3704863997901,0.0],[-123.695298,45.612594,618.6273644797137,0.0],[-123.694687,45.612152,605.520110080127,0.0],[-123.694512,45.611934,593.0742886400432,0.0],[-123.694916,45.611507,599.6118976003157,0.0],[-123.695054,45.611244,601.365804799945,0.0],[-123.694916,45.610969,598.7119078402872,0.0],[-123.694512,45.610858,587.9232115201017,0.0],[-123.694245,45.610977,575.1940487998162,0.0],[-123.694085,45.611099,567.827563200032,0.0],[-123.69365,45.611217,550.2121680002025,0.0],[-123.693383,45.611412,535.9018476798635,0.0],[-123.6931,45.611869,531.7472000000134,0.0],[-123.692887,45.612358,536.1857961599457,0.0],[-123.692887,45.612358,536.1857961599457,0.0],[-123.6931,45.611869,531.7472000000134,0.0],[-123.693383,45.611412,535.9018476798635,0.0],[-123.69365,45.611217,550.2121680002025,0.0],[-123.694085,45.611099,567.827563200032,0.0],[-123.694245,45.610977,575.1940487998162,0.0],[-123.694512,45.610858,587.9232115201017,0.0],[-123.694916,45.610969,598.7119078402872,0.0],[-123.695054,45.611244,601.365804799945,0.0],[-123.694916,45.611507,599.6118976003157,0.0],[-123.694512,45.611934,593.0742886400432,0.0],[-123.694687,45.612152,605.520110080127,0.0],[-123.695298,45.612594,618.6273644797137,0.0],[-123.695252,45.612915,600.3704863997901,0.0],[-123.695389,45.613162,596.1681667201321,0.0],[-123.69587,45.613483,600.5931135999151,0.0],[-123.695893,45.613655,594.7379383998922,0.0],[-123.69603,45.613773,591.2106223997653,0.0],[-123.696442,45.613933,586.2630502398277,0.0],[-123.697175,45.613853,584.5740720000385,0.0],[-123.697632,45.613494,596.4750783999039,0.0],[-123.698113,45.613552,588.3155859198471,0.0],[-123.698403,45.61351,580.5390176000425,0.0],[-123.698548,45.613197,576.7627999999154,0.0],[-123.698014,45.612506,603.01258047997,0.0],[-123.697899,45.612026,614.9650918396337,0.0],[-123.698082,45.611686,610.6933740800426,0.0],[-123.698227,45.611656,605.9047999998729,0.0],[-123.698105,45.611358,612.7562064000186,0.0],[-123.697968,45.611164,622.3407718398056,0.0],[-123.69806,45.610908,620.2513024000751,0.0],[-123.698197,45.610675,615.0112000003337,0.0],[-123.698197,45.610363,616.5644000003394,0.0],[-123.698044,45.610107,625.8120000002123,0.0],[-123.697983,45.609848,634.5816000003397,0.0],[-123.698159,45.609535,636.7267951997977,0.0],[-123.698418,45.609294,634.051720319878,0.0],[-123.698685,45.608966,630.7037664000449,0.0],[-123.698899,45.608589,632.2306051200521,0.0],[-123.699029,45.608161,638.724389280085,0.0],[-123.699227,45.60791,638.3579744003961,0.0],[-123.699387,45.607589,636.0745412799507,0.0],[-123.699387,45.607063,635.8819999999241,0.0],[-123.699257,45.606674,643.7492883198935,0.0],[-123.699257,45.606243,658.0731950400166,0.0],[-123.699547,45.606037,669.5989025599583,0.0],[-123.700493,45.605922,669.4482838401034,0.0],[-123.70134,45.605693,670.9318303998618,0.0],[-123.70163,45.605808,665.2359999998071,0.0],[-123.702118,45.606517,649.1452000000515,0.0],[-123.702546,45.606628,651.8351091199612,0.0],[-123.703164,45.606628,660.98719999998,0.0],[-123.70398,45.606903,664.549999999881,0.0],[-123.704827,45.607475,649.6784000000316,0.0],[-123.705246,45.607498,641.7575763199601,0.0],[-123.705964,45.607154,655.2399487998614,0.0],[-123.706582,45.607154,667.5675411197892,0.0],[-123.707886,45.607589,664.1068000003065,0.0],[-123.709549,45.608501,641.7480148800373,0.0],[-123.710099,45.608596,642.6763763200853,0.0],[-123.711632,45.608455,644.332249600037,0.0],[-123.712967,45.608501,636.2268553603177,0.0],[-123.713753,45.608661,634.4905206400728,0.0],[-123.715706,45.609645,625.6151999998483,0.0],[-123.716355,45.610237,609.9489807999249,0.0],[-123.71711,45.611198,578.6486560000562,0.0],[-123.717629,45.612823,540.1904086401529,0.0],[-123.717728,45.612892,540.3038259196522,0.0],[-123.718117,45.613964,502.85677503988217,0.0],[-123.718476,45.614147,490.90959999996403,0.0],[-123.718834,45.614078,481.32774783998343,0.0],[-123.71978,45.613323,481.9711999999297,0.0],[-123.720498,45.613094,489.77335296018214,0.0],[-123.722809,45.612751,482.0122475199415,0.0],[-123.723527,45.61243,497.7094831997822,0.0],[-123.724373,45.61243,519.5491567997365,0.0],[-123.725022,45.612751,514.2458790395541,0.0],[-123.725907,45.612934,526.590478719986,0.0],[-123.726357,45.613986,481.6386614400975,0.0],[-123.726624,45.613986,478.37789568013665,0.0],[-123.726914,45.613872,476.95120896013486,0.0],[-123.727891,45.61314,493.412041599905,0.0],[-123.728806,45.612796,500.2387750397326,0.0],[-123.729355,45.612796,500.3342303997957,0.0],[-123.730141,45.612934,495.25412575989026,0.0],[-123.730759,45.613319,478.42200000006187,0.0],[-123.731049,45.613616,458.76332928000704,0.0],[-123.731736,45.614624,421.90564864009076,0.0],[-123.731896,45.614692,415.6610483198614,0.0],[-123.732163,45.614601,403.2639214400048,0.0],[-123.732163,45.614326,405.33000000002926,0.0],[-123.732255,45.614303,399.91714240032974,0.0],[-123.732285,45.612659,442.5556751998091,0.0],[-123.732583,45.612224,451.0293753600401,0.0],[-123.732842,45.612129,456.7443443198084,0.0],[-123.733918,45.612224,470.85292928020743,0.0],[-123.735383,45.612884,473.0557593598839,0.0],[-123.736428,45.613662,445.1816000001477,0.0],[-123.737565,45.613979,434.8999999999603,0.0],[-123.738099,45.613906,439.0336684800024,0.0],[-123.738709,45.613819,442.4837361600307,0.0],[-123.740792,45.614437,415.009199999844,0.0],[-123.741669,45.614459,433.1688803202511,0.0],[-123.742226,45.614803,431.55910975994504,0.0],[-123.742486,45.615146,416.78987071977747,0.0],[-123.742875,45.615329,405.2205199998564,0.0],[-123.743889,45.615348,382.21700224019077,0.0],[-123.745415,45.614868,372.99765120006106,0.0],[-123.745713,45.614913,364.8668782400628,0.0],[-123.745659,45.615139,357.63389791996775,0.0],[-123.745644,45.615211,355.2177132799432,0.0],[-123.744019,45.616699,330.90979120009064,0.0],[-123.743699,45.617912,313.480337920027,0.0],[-123.743699,45.618663,306.04439999989677,0.0],[-123.74379,45.618755,303.743999999924,0.0],[-123.743859,45.620014,282.4836460801535,0.0],[-123.743401,45.620403,267.6159999997799,0.0],[-123.742882,45.620426,264.53999999983057,0.0],[-123.742623,45.620288,263.75210495979127,0.0],[-123.742363,45.619899,258.144927519883,0.0],[-123.742066,45.619098,252.41227583983215,0.0],[-123.741807,45.618896,251.3749331199486,0.0],[-123.741417,45.618919,248.45080000003213,0.0],[-123.741219,45.619144,243.53950656003266,0.0],[-123.741517,45.620151,220.84154160005016,0.0],[-123.74096,45.621112,189.53788160012948,0.0],[-123.740868,45.621456,176.34424832006218,0.0],[-123.741036,45.622081,158.9429145598979,0.0],[-123.741097,45.622077,159.88336703998309,0.0]]]}},
              {"type":"Feature","properties":{"id":"681a4604-453e-4228-bf3f-bd4f557c7050","updated_date":"2018-11-27T22:10:23Z","time_created":"2018-11-27T22:10:23Z","last_updated_on_server":"2018-11-27T22:10:23.168","db_insert_date":"2018-11-27T22:10:23Z","deleted":false,"title":"Wilson River Traverse Hike (One-way, short)","public":false,"color":"#800080","hexcolor":"#800080","is_active":true,"revision":67,"notes":"https://www.oregonhikers.org/field_guide/Wilson_River_Traverse_Hike","track_type":"route","routing_mode":"pedestrian","uploaded_gpx_to_osm":null,"flag":null,"source":null,"cover_photo_id":null,"distance":30738.47,"total_ascent":null,"total_descent":null,"stopped_time":null,"total_time":null,"average_speed":0,"moving_time":0,"moving_speed":0,"preferred_link":"/datasummary/track/681a4604-453e-4228-bf3f-bd4f557c7050/","user_displayname":"taylor.morris","username":"taylor.morris@gmail.com","user_email":"taylor.morris@gmail.com","user_id":515547,"favorite_count":0,"comment_count":0,"user_photo_count":0},"style":{"stroke":"#800080"},"geometry":{"type":"MultiLineString","coordinates":[[[-123.466729,45.610172,285.5702969600057,0.0],[-123.466843,45.610214,287.6528998399473,0.0],[-123.466942,45.610244,289.59334016006915,0.0],[-123.46711,45.610237,293.0481072000827,0.0],[-123.467248,45.610168,295.2177254399572,0.0],[-123.46737,45.610069,297.38174880012156,0.0],[-123.467827,45.609828,312.91111103999845,0.0],[-123.468056,45.609638,316.404314880079,0.0],[-123.468232,45.609279,317.8372748800133,0.0],[-123.468361,45.609199,319.5315999999932,0.0],[-123.468438,45.609077,319.84504480002823,0.0],[-123.468598,45.609001,319.6135503999901,0.0],[-123.468766,45.60905,317.53200000000857,0.0],[-123.469018,45.609237,313.7238115198251,0.0],[-123.469246,45.60955,319.8981119999854,0.0],[-123.469674,45.609809,326.2377020799229,0.0],[-123.470009,45.609947,329.12152767969985,0.0],[-123.470459,45.610202,337.28562527999196,0.0],[-123.471131,45.610366,337.31159999993474,0.0],[-123.471627,45.610366,331.30836639995573,0.0],[-123.472245,45.610496,345.21923839985794,0.0],[-123.473038,45.610462,350.7375999998926,0.0],[-123.473626,45.610553,363.9343724801755,0.0],[-123.473908,45.610626,371.0926092801503,0.0],[-123.474083,45.610645,374.7119455997998,0.0],[-123.474251,45.610614,376.92070303976755,0.0],[-123.474366,45.610534,377.98431424018594,0.0],[-123.47448,45.610431,377.5858047999255,0.0],[-123.474541,45.610267,371.97424256006946,0.0],[-123.474556,45.609973,360.8145420803745,0.0],[-123.474534,45.609825,354.63804800045375,0.0],[-123.47464,45.60968,359.3529599994453,0.0],[-123.474968,45.609573,378.6248563201683,0.0],[-123.475235,45.609317,374.29857919976746,0.0],[-123.475541,45.60921,379.11982560008863,0.0],[-123.475693,45.609058,376.7642972801658,0.0],[-123.476105,45.608795,383.76718000014625,0.0],[-123.476456,45.608333,383.98291008009494,0.0],[-123.476555,45.608242,379.2001775998384,0.0],[-123.476647,45.608192,376.40402304013514,0.0],[-123.47683,45.608146,372.89945279984073,0.0],[-123.476983,45.608139,371.0152955199895,0.0],[-123.477288,45.608154,367.3155903999517,0.0],[-123.477807,45.608268,373.6825139201321,0.0],[-123.478058,45.608383,377.2706672000671,0.0],[-123.47844,45.608478,375.8224255997886,0.0],[-123.478676,45.608673,383.6107539201761,0.0],[-123.478806,45.608699,384.1896137600358,0.0],[-123.47905,45.608734,386.2790239999436,0.0],[-123.479256,45.608768,389.60784128004974,0.0],[-123.479394,45.608715,390.8704735999129,0.0],[-123.479439,45.608654,390.6469049600084,0.0],[-123.479401,45.608425,384.466047999779,0.0],[-123.479447,45.607624,390.529386239872,0.0],[-123.47947,45.607448,384.4551552000856,0.0],[-123.479531,45.607326,380.5856275198851,0.0],[-123.479744,45.607192,378.7295999997964,0.0],[-123.480233,45.606945,376.7390448001148,0.0],[-123.480431,45.606925,379.91682399967846,0.0],[-123.480683,45.606941,386.0413326399173,0.0],[-123.480858,45.606914,386.06573248031094,0.0],[-123.480965,45.606853,379.06964080012364,0.0],[-123.481057,45.60667,363.22833759996496,0.0],[-123.48127,45.606552,353.3906432000312,0.0],[-123.481461,45.606525,352.1919959998209,0.0],[-123.481873,45.606517,351.2771999998199,0.0],[-123.482033,45.606536,349.86854591985485,0.0],[-123.482224,45.606601,350.5146259197572,0.0],[-123.482674,45.60683,355.89135360008333,0.0],[-123.482873,45.607074,367.68119999986243,0.0],[-123.48304,45.607139,368.8871999997275,0.0],[-123.483178,45.607128,365.6904000002762,0.0],[-123.483452,45.60704,355.4831999998569,0.0],[-123.483674,45.607025,351.54080000007775,0.0],[-123.483902,45.607074,352.253599999819,0.0],[-123.484108,45.607219,359.4247999999691,0.0],[-123.484269,45.607284,363.4954713600166,0.0],[-123.484467,45.607311,363.3056000003039,0.0],[-123.484787,45.607242,352.3125961600012,0.0],[-123.485138,45.607242,347.2889113599049,0.0],[-123.485436,45.607315,348.63519999991354,0.0],[-123.485573,45.607353,349.1560000001414,0.0],[-123.485741,45.60744,350.53839999972433,0.0],[-123.485917,45.607585,350.5957671999878,0.0],[-123.486039,45.607872,352.37228159986586,0.0],[-123.486054,45.608165,361.4335872001388,0.0],[-123.486374,45.608573,363.6056000000581,0.0],[-123.486474,45.608993,370.261522559922,0.0],[-123.486733,45.609382,370.4711999998972,0.0],[-123.486779,45.609638,377.5203718399112,0.0],[-123.486886,45.609657,377.1716038399648,0.0],[-123.487,45.609592,374.3119999999717,0.0],[-123.487221,45.609424,368.4115238399136,0.0],[-123.487526,45.609169,372.36080000016045,0.0],[-123.488411,45.608135,354.62782799983637,0.0],[-123.488686,45.607856,344.0617548798849,0.0],[-123.488869,45.6077,337.0444799999414,0.0],[-123.489022,45.607608,332.41813888001985,0.0],[-123.489228,45.607547,329.5452812796979,0.0],[-123.489831,45.607479,326.4716099198478,0.0],[-123.490326,45.607471,326.3125238397786,0.0],[-123.490754,45.60733,320.0676639998432,0.0],[-123.491013,45.607303,318.5721788801057,0.0],[-123.491196,45.607318,317.22536703991886,0.0],[-123.491341,45.607353,317.0874726401599,0.0],[-123.491532,45.607429,317.8716851200497,0.0],[-123.492058,45.607707,314.06506015988964,0.0],[-123.492524,45.608116,306.9592012799551,0.0],[-123.493035,45.608371,297.62523439975456,0.0],[-123.493317,45.608566,294.3335999999472,0.0],[-123.493645,45.60865,288.7021599998849,0.0],[-123.493874,45.608734,287.58297471983184,0.0],[-123.494065,45.608726,283.2687551997612,0.0],[-123.494133,45.608642,278.7449548800246,0.0],[-123.494217,45.608558,274.9188271999895,0.0],[-123.4945,45.608535,272.1616000000192,0.0],[-123.494698,45.608558,271.8224915199738,0.0],[-123.494713,45.608539,272.04446895999143,0.0],[-123.494767,45.60847,274.00177919995883,0.0],[-123.494591,45.608249,273.42213807998877,0.0],[-123.494538,45.608055,273.71840000015254,0.0],[-123.494462,45.607883,278.9599999999118,0.0],[-123.494149,45.607559,278.56856047965846,0.0],[-123.494088,45.60717,281.3081920001156,0.0],[-123.49379,45.606655,289.9810480001313,0.0],[-123.49376,45.606548,291.2593791997959,0.0],[-123.493737,45.606369,294.7781473597373,0.0],[-123.49376,45.606227,300.00994239974204,0.0],[-123.493874,45.606029,309.3030649603159,0.0],[-123.494179,45.605686,310.59414880003493,0.0],[-123.494309,45.60551,309.6768672001338,0.0],[-123.494805,45.60474,300.8857119999502,0.0],[-123.495141,45.60408,300.1284288001928,0.0],[-123.495362,45.603546,303.0645401600465,0.0],[-123.495514,45.603267,302.21387552003785,0.0],[-123.495591,45.603096,303.02315712019606,0.0],[-123.495636,45.602809,300.121102080164,0.0],[-123.495636,45.602642,295.6960000002366,0.0],[-123.495598,45.602416,288.0946201599873,0.0],[-123.49553,45.602153,280.2908000000448,0.0],[-123.495583,45.60205,280.9530399999119,0.0],[-123.495835,45.60197,283.03876000004954,0.0],[-123.496079,45.601932,284.89149439982,0.0],[-123.496529,45.601943,286.9080457599525,0.0],[-123.497216,45.601955,281.70725119980744,0.0],[-123.497689,45.601947,285.4925403200936,0.0],[-123.498139,45.601871,286.10147728008707,0.0],[-123.498581,45.601898,289.0705244799465,0.0],[-123.49881,45.60184,288.1184320001358,0.0],[-123.499039,45.601783,288.4781609598881,0.0],[-123.499329,45.601615,286.6203872001124,0.0],[-123.499497,45.601585,287.39642479998747,0.0],[-123.499634,45.601615,287.5145264000376,0.0],[-123.499749,45.601699,287.6656209601488,0.0],[-123.499901,45.601985,287.5221032000992,0.0],[-123.500054,45.602176,286.811548159837,0.0],[-123.500222,45.602294,283.84651328018435,0.0],[-123.500466,45.602474,280.8522233599394,0.0],[-123.50129,45.602657,269.00842240007154,0.0],[-123.501519,45.602611,264.8740273600346,0.0],[-123.501748,45.602588,264.0383180800141,0.0],[-123.501931,45.602626,266.5808915200048,0.0],[-123.502015,45.602699,268.80640000002677,0.0],[-123.502038,45.602828,271.88018688004564,0.0],[-123.502091,45.60289,273.9055007999834,0.0],[-123.50232,45.602924,277.28578560002103,0.0],[-123.502427,45.602924,278.4617241600238,0.0],[-123.502533,45.602897,278.59741103994793,0.0],[-123.502678,45.602809,276.974374080053,0.0],[-123.502808,45.6026,272.28473600009477,0.0],[-123.502991,45.602474,270.6693526399621,0.0],[-123.50306,45.602439,270.5428000000102,0.0],[-123.503151,45.602397,271.12240000013117,0.0],[-123.503312,45.602405,274.2219999998274,0.0],[-123.50351,45.602443,278.7436000001253,0.0],[-123.503685,45.60239,280.39733600006497,0.0],[-123.503937,45.602264,281.4480492798832,0.0],[-123.50412,45.60218,281.2799999999197,0.0],[-123.504281,45.602165,282.5020104000437,0.0],[-123.504464,45.60223,286.44565759995356,0.0],[-123.504571,45.602172,286.27757248007066,0.0],[-123.504761,45.60189,281.99720000000343,0.0],[-123.504906,45.601886,285.5792000001434,0.0],[-123.505158,45.602024,292.98959999990166,0.0],[-123.505211,45.602005,293.6700000000251,0.0],[-123.505257,45.601898,292.7899999999786,0.0],[-123.505692,45.60136,292.42903039991603,0.0],[-123.505784,45.601211,291.3194700800804,0.0],[-123.505845,45.601016,288.38638079997133,0.0],[-123.50586,45.600856,285.6881663999878,0.0],[-123.505791,45.600536,282.96712896001253,0.0],[-123.505692,45.600364,279.04846847993025,0.0],[-123.505555,45.600246,275.5408575999815,0.0],[-123.505166,45.60004,274.03485439998184,0.0],[-123.50499,45.599925,273.98227999994316,0.0],[-123.504929,45.5998,272.4471680000106,0.0],[-123.504937,45.599674,270.0116000000123,0.0],[-123.505013,45.59951,265.6767104000657,0.0],[-123.505059,45.599449,264.3202332800066,0.0],[-123.505135,45.599399,263.67258079995855,0.0],[-123.505265,45.599357,263.09416159994345,0.0],[-123.505372,45.599353,262.91313536002343,0.0],[-123.505562,45.599399,263.8547999999564,0.0],[-123.505936,45.599555,266.2224000000135,0.0],[-123.506119,45.599582,266.0232636799622,0.0],[-123.506279,45.599552,266.3872236800784,0.0],[-123.506493,45.599468,266.237166080082,0.0],[-123.506783,45.599311,264.91001695998943,0.0],[-123.507203,45.599002,259.0781782399984,0.0],[-123.507447,45.59869,256.0497871999734,0.0],[-123.507416,45.598648,255.39855872004173,0.0],[-123.507416,45.598648,255.39855872004173,0.0],[-123.507447,45.59869,256.0497871999734,0.0],[-123.507615,45.598419,255.85880000001248,0.0],[-123.507691,45.598327,256.0015227199132,0.0],[-123.507775,45.59827,256.2882799999465,0.0],[-123.508271,45.598072,256.9531999999974,0.0],[-123.508553,45.597831,257.43496544007763,0.0],[-123.508698,45.597755,258.50275039994057,0.0],[-123.508843,45.597717,259.22774576004866,0.0],[-123.509018,45.59769,260.3515231999774,0.0],[-123.509209,45.59769,261.94039999999586,0.0],[-123.509461,45.597713,263.38149871997217,0.0],[-123.509659,45.597751,264.39965936005416,0.0],[-123.509842,45.597816,266.19746688005205,0.0],[-123.510109,45.597938,269.5027363199839,0.0],[-123.510216,45.597984,271.06689023993084,0.0],[-123.510605,45.598209,280.04505439990714,0.0],[-123.510697,45.598247,282.3646812799121,0.0],[-123.510819,45.598258,284.60038784000136,0.0],[-123.511002,45.598205,286.105620800085,0.0],[-123.511429,45.597991,284.2376414400754,0.0],[-123.511971,45.597774,291.02870048015114,0.0],[-123.512177,45.597698,298.18293151975536,0.0],[-123.512269,45.597583,299.4942462401269,0.0],[-123.51236,45.597404,299.89941759999886,0.0],[-123.512307,45.597343,296.70369904032566,0.0],[-123.512162,45.597263,289.03692128012966,0.0],[-123.512154,45.597209,287.88661887978935,0.0],[-123.51223,45.597072,289.7287424000782,0.0],[-123.512337,45.596923,292.91349520004053,0.0],[-123.512391,45.596862,294.42607839970464,0.0],[-123.512475,45.596809,298.1477799997219,0.0],[-123.512566,45.596809,301.3221462401869,0.0],[-123.512688,45.596878,305.53490943987686,0.0],[-123.512978,45.597015,312.13720000005287,0.0],[-123.513352,45.597236,319.2570675199543,0.0],[-123.513459,45.597366,327.08535103992,0.0],[-123.513558,45.597389,331.37518592012026,0.0],[-123.513604,45.597366,332.79060224004655,0.0],[-123.513611,45.59732,332.40336319993906,0.0],[-123.513596,45.59724,330.5627264003029,0.0],[-123.513649,45.597137,331.11325743999237,0.0],[-123.513779,45.597049,331.66328847998017,0.0],[-123.513909,45.597,332.1185599999893,0.0],[-123.513978,45.596935,332.7387215998705,0.0],[-123.513947,45.596893,332.71783152001564,0.0],[-123.513848,45.596836,331.9090662399421,0.0],[-123.513634,45.59671,331.0654911999559,0.0],[-123.513619,45.596622,331.25970016005647,0.0],[-123.513657,45.596549,332.12913615990504,0.0],[-123.513726,45.596485,333.7062832000873,0.0],[-123.513833,45.59642,336.4124032000849,0.0],[-123.51397,45.59642,340.92518399998437,0.0],[-123.514069,45.596466,343.9504166402607,0.0],[-123.514191,45.596435,349.8253415998583,0.0],[-123.514199,45.596343,352.6888292803023,0.0],[-123.514138,45.596252,352.1094860801299,0.0],[-123.514084,45.596004,354.21990911984335,0.0],[-123.514092,45.595909,355.8107577602438,0.0],[-123.514222,45.595561,358.45708704011736,0.0],[-123.514298,45.595466,360.0615999998845,0.0],[-123.514374,45.595417,362.46280000011575,0.0],[-123.514588,45.595317,367.24463296012397,0.0],[-123.514733,45.595275,368.9560120001277,0.0],[-123.514992,45.595111,361.72409152022965,0.0],[-123.515091,45.595123,362.49012256006154,0.0],[-123.515076,45.595203,367.5498937598582,0.0],[-123.514893,45.595355,374.07331439991617,0.0],[-123.514809,45.595611,381.83586511997356,0.0],[-123.514832,45.595672,382.916203519975,0.0],[-123.514901,45.595737,385.1419985598822,0.0],[-123.515038,45.59579,388.58771840005676,0.0],[-123.515542,45.595947,394.79369311994384,0.0],[-123.516266,45.596054,396.14525952004925,0.0],[-123.516541,45.596107,395.1552865601343,0.0],[-123.516762,45.596187,395.3435244800131,0.0],[-123.516861,45.596221,395.6195235199524,0.0],[-123.51706,45.596309,396.99564159992195,0.0],[-123.517159,45.596378,398.32107807997863,0.0],[-123.51722,45.596435,399.1806880000332,0.0],[-123.517289,45.596549,401.0732000000039,0.0],[-123.517373,45.59674,403.7866975998881,0.0],[-123.517594,45.597023,406.02459903997914,0.0],[-123.517792,45.597332,410.7152000000376,0.0],[-123.517869,45.597396,412.0508000000684,0.0],[-123.518006,45.597469,413.3971999999169,0.0],[-123.518319,45.597576,412.1074822398435,0.0],[-123.518494,45.597656,409.6288294399099,0.0],[-123.518631,45.597759,408.819640160125,0.0],[-123.518723,45.597885,411.62331920009416,0.0],[-123.518799,45.598251,426.61048495983687,0.0],[-123.518845,45.598369,429.8799895999802,0.0],[-123.519227,45.59893,435.4399280000121,0.0],[-123.519394,45.599079,436.21136480004935,0.0],[-123.519516,45.599166,438.24072703990316,0.0],[-123.519684,45.599239,441.8438758398724,0.0],[-123.519982,45.599315,446.8425967998596,0.0],[-123.520264,45.599349,451.6816851197837,0.0],[-123.520775,45.599353,457.2436680000458,0.0],[-123.520974,45.59938,459.5229695998019,0.0],[-123.521363,45.599517,468.2985123198882,0.0],[-123.521485,45.59954,470.6590239998298,0.0],[-123.521561,45.599536,471.0466201600786,0.0],[-123.521866,45.599437,467.7006732801353,0.0],[-123.521943,45.599433,468.24365695978094,0.0],[-123.5224,45.599487,474.4221120002279,0.0],[-123.5225,45.59951,475.77600000013837,0.0],[-123.522591,45.599555,476.99732160002736,0.0],[-123.522652,45.59962,478.79815680020727,0.0],[-123.522683,45.599689,480.7875398399025,0.0],[-123.522721,45.600055,490.4327999997304,0.0],[-123.522797,45.600299,496.096973760113,0.0],[-123.522851,45.60036,496.54485119997224,0.0],[-123.522973,45.600452,495.97439232011965,0.0],[-123.523278,45.600643,495.37119999977585,0.0],[-123.523362,45.600742,497.36593215972084,0.0],[-123.523385,45.600811,499.7481543998915,0.0],[-123.523407,45.600917,502.694643519917,0.0],[-123.5234,45.601051,506.9962720000916,0.0],[-123.523331,45.601371,518.5688000000496,0.0],[-123.523354,45.601478,521.8830675200779,0.0],[-123.52369,45.601909,526.1391999999046,0.0],[-123.523713,45.602005,527.363924799945,0.0],[-123.523697,45.602661,539.6947999999988,0.0],[-123.52372,45.602775,541.4120000001135,0.0],[-123.523812,45.602973,542.4381247998416,0.0],[-123.523942,45.603126,542.7133299199439,0.0],[-123.524117,45.603256,542.9718675200114,0.0],[-123.524537,45.603496,546.3370438400591,0.0],[-123.52501,45.603797,558.5827088000759,0.0],[-123.525353,45.603939,563.2543999998584,0.0],[-123.525483,45.603977,564.1760000000857,0.0],[-123.525704,45.604015,565.4753823998082,0.0],[-123.52636,45.604022,563.8500736000302,0.0],[-123.52697,45.604061,554.7429903999464,0.0],[-123.52707,45.604084,553.6555456000804,0.0],[-123.527154,45.604137,552.9357097600839,0.0],[-123.527176,45.604183,553.0083059200438,0.0],[-123.527184,45.604255,553.5865407998849,0.0],[-123.526978,45.604743,568.4493641600077,0.0],[-123.526963,45.60485,569.9540720002552,0.0],[-123.526986,45.604919,569.2164233603476,0.0],[-123.527092,45.605148,565.0643532802226,0.0],[-123.527115,45.605289,564.732811200297,0.0],[-123.527077,45.605392,568.5136492797027,0.0],[-123.526909,45.605628,577.1563219197956,0.0],[-123.52681,45.605709,578.1534384001637,0.0],[-123.526627,45.605781,581.5441175998832,0.0],[-123.526093,45.605892,586.3398297602289,0.0],[-123.525589,45.605937,584.7269332802717,0.0],[-123.525391,45.605972,584.3897478398941,0.0],[-123.525094,45.606056,582.9208614398862,0.0],[-123.524827,45.606197,580.5413697598361,0.0],[-123.524567,45.606384,580.5459999998709,0.0],[-123.524354,45.606571,581.7143999997995,0.0],[-123.524064,45.606719,585.3888326402151,0.0],[-123.523865,45.606887,583.4801847999584,0.0],[-123.523659,45.60707,584.1285504001736,0.0],[-123.523598,45.607215,582.7011999998151,0.0],[-123.523575,45.60749,580.5380000002579,0.0],[-123.523659,45.607833,572.7462731202095,0.0],[-123.523644,45.607933,570.8521619197658,0.0],[-123.523514,45.608154,568.4564070398601,0.0],[-123.523316,45.608398,562.2568000001961,0.0],[-123.523163,45.608524,562.062399999998,0.0],[-123.523041,45.608589,564.0764579195097,0.0],[-123.522942,45.608619,568.6759603200625,0.0],[-123.522889,45.608657,570.4753843195928,0.0],[-123.522767,45.608772,572.5376729598427,0.0],[-123.522706,45.608871,571.1153590400014,0.0],[-123.522652,45.609008,571.211678720235,0.0],[-123.522645,45.609081,570.4780304000724,0.0],[-123.52266,45.609149,568.9087327998939,0.0],[-123.522713,45.609222,566.8706931201672,0.0],[-123.522995,45.609516,556.0354432002479,0.0],[-123.523034,45.609603,554.5353059201983,0.0],[-123.523034,45.60968,554.7909952001854,0.0],[-123.523003,45.609798,552.9967999999708,0.0],[-123.522835,45.610042,550.0471471999763,0.0],[-123.522812,45.610237,544.0947142400028,0.0],[-123.522606,45.610412,544.5623564803423,0.0],[-123.522484,45.610584,539.6249087997054,0.0],[-123.521889,45.61095,544.4921679999337,0.0],[-123.521828,45.611003,546.3251526400414,0.0],[-123.521798,45.611072,546.9598297598685,0.0],[-123.521798,45.611072,546.9598297598685,0.0],[-123.521828,45.611133,546.9345011201464,0.0],[-123.521912,45.611175,546.6506080001527,0.0],[-123.522042,45.611202,545.2493747199463,0.0],[-123.522179,45.611213,543.0273481600846,0.0],[-123.522667,45.611209,534.8240000001233,0.0],[-123.523133,45.611133,524.0228611201005,0.0],[-123.523415,45.611156,521.6167584000475,0.0],[-123.523682,45.611297,526.0474790399271,0.0],[-123.523781,45.611263,525.9277372800424,0.0],[-123.523766,45.611125,519.6172800000528,0.0],[-123.523903,45.610992,511.17938304031065,0.0],[-123.524071,45.61087,507.0106608000591,0.0],[-123.524163,45.610797,504.5531999999082,0.0],[-123.524376,45.61074,505.96193280007304,0.0],[-123.52475,45.61071,508.0967999998224,0.0],[-123.525116,45.61063,503.7067008000491,0.0],[-123.525338,45.610641,503.1500137600368,0.0],[-123.525673,45.610549,491.51437807991584,0.0],[-123.526055,45.610683,507.1642208001268,0.0],[-123.526345,45.610637,505.6957023998501,0.0],[-123.526528,45.610584,501.3409638402023,0.0],[-123.52665,45.610549,497.4705839998386,0.0],[-123.526742,45.610614,500.6986604798983,0.0],[-123.526856,45.610729,506.8811910400174,0.0],[-123.527192,45.611206,531.5840000001917,0.0],[-123.52726,45.611259,534.0480127998176,0.0],[-123.527344,45.611301,535.7121804798336,0.0],[-123.527436,45.611312,535.2827494399357,0.0],[-123.527535,45.611305,533.3536880001145,0.0],[-123.52771,45.611186,519.8109055997159,0.0],[-123.527924,45.611133,511.6355212802488,0.0],[-123.528481,45.611179,517.4837539199723,0.0],[-123.528664,45.611156,519.2368000003567,0.0],[-123.528809,45.611118,519.9423999995547,0.0],[-123.528954,45.611049,515.2301302401352,0.0],[-123.529122,45.610927,506.77523935971817,0.0],[-123.529236,45.61087,504.3503167998334,0.0],[-123.529427,45.610816,503.6369561599589,0.0],[-123.529656,45.610774,501.0434444799444,0.0],[-123.529961,45.610748,493.54485440007727,0.0],[-123.530144,45.610733,485.4415539200056,0.0],[-123.530282,45.610759,482.17320000015434,0.0],[-123.530335,45.610813,485.31600000022877,0.0],[-123.530312,45.610916,496.5582643204838,0.0],[-123.530312,45.611083,514.0671321602232,0.0],[-123.530266,45.611167,522.5031779201584,0.0],[-123.530343,45.611248,526.0375244801513,0.0],[-123.530617,45.611442,520.604293439507,0.0],[-123.530739,45.61153,513.8198832002352,0.0],[-123.530785,45.61174,514.968384000262,0.0],[-123.530961,45.611904,508.75432895978537,0.0],[-123.531006,45.612083,513.0544755195737,0.0],[-123.531106,45.612258,511.68750080035943,0.0],[-123.531151,45.612396,513.7794169602378,0.0],[-123.531113,45.612598,522.3939894397656,0.0],[-123.531159,45.612777,526.2854900800041,0.0],[-123.531136,45.61288,533.5346815997282,0.0],[-123.531212,45.612949,536.5871705601049,0.0],[-123.531319,45.612953,534.5753278399241,0.0],[-123.53164,45.612819,521.7584000001616,0.0],[-123.531823,45.6128,519.1994239999793,0.0],[-123.532212,45.612957,530.5782867200933,0.0],[-123.53238,45.612934,536.0034432002943,0.0],[-123.532464,45.612861,535.329171840317,0.0],[-123.533013,45.612289,538.6405171196811,0.0],[-123.533066,45.612182,536.6732889600106,0.0],[-123.533326,45.612068,540.2418854401475,0.0],[-123.533433,45.611919,534.2803339200848,0.0],[-123.533608,45.611648,521.9815526401457,0.0],[-123.533867,45.611408,513.7113785598619,0.0],[-123.534127,45.611057,516.4902871999986,0.0],[-123.534043,45.610752,505.27169983979456,0.0],[-123.534203,45.610649,505.3435966402744,0.0],[-123.534333,45.610519,504.9280083199976,0.0],[-123.534363,45.610324,497.6275539198845,0.0],[-123.53463,45.61021,499.92400000023304,0.0],[-123.53489,45.610157,498.6501808000464,0.0],[-123.535141,45.610179,497.9626974401789,0.0],[-123.535744,45.610099,486.37847295998495,0.0],[-123.536011,45.610099,482.26249311989403,0.0],[-123.536156,45.610134,481.1053324799901,0.0],[-123.53624,45.610187,481.40290559998607,0.0],[-123.536286,45.610252,482.46968063999515,0.0],[-123.536377,45.610492,485.2448294399582,0.0],[-123.536416,45.61082,487.87999999986914,0.0],[-123.53637,45.610977,489.1627999998218,0.0],[-123.536408,45.611072,487.5710259201653,0.0],[-123.536515,45.611042,484.3908896001751,0.0],[-123.536675,45.610843,478.64584399989513,0.0],[-123.536828,45.610652,470.6286387200137,0.0],[-123.53711,45.610145,461.39888800003257,0.0],[-123.537301,45.609813,454.4257976000394,0.0],[-123.537636,45.609432,441.1272703999271,0.0],[-123.537728,45.60926,436.60025599998755,0.0],[-123.537812,45.609035,430.370387199963,0.0],[-123.538079,45.608772,424.33151552010037,0.0],[-123.538079,45.608665,421.282426400101,0.0],[-123.538041,45.608589,419.00074208010705,0.0],[-123.53798,45.608531,416.4240895999767,0.0],[-123.537827,45.608467,413.8053372799038,0.0],[-123.537629,45.608444,410.9504339198938,0.0],[-123.537514,45.608474,410.2534451200543,0.0],[-123.537446,45.608524,410.50769152012134,0.0],[-123.537339,45.608676,411.7886054401169,0.0],[-123.537278,45.608734,411.5056339199824,0.0],[-123.537064,45.608833,409.26060351996887,0.0],[-123.536828,45.608875,407.2550399999448,0.0],[-123.536622,45.608875,406.1462399998647,0.0],[-123.536622,45.608821,404.07720191989824,0.0],[-123.536866,45.608745,404.76790080002934,0.0],[-123.536995,45.608676,405.70491520010944,0.0],[-123.537049,45.608589,404.9586843199905,0.0],[-123.537018,45.608272,395.02859648005193,0.0],[-123.537056,45.608169,390.99924031997034,0.0],[-123.537102,45.608093,388.11577567990537,0.0],[-123.537163,45.608039,386.47012016000923,0.0],[-123.537316,45.607944,383.9224396801864,0.0],[-123.537636,45.607795,377.9590656001714,0.0],[-123.53814,45.607654,370.8151999998295,0.0],[-123.538239,45.607643,371.0132000001722,0.0],[-123.538376,45.607658,372.46063232003445,0.0],[-123.538628,45.607723,375.45034879996916,0.0],[-123.538857,45.607727,373.0746727999978,0.0],[-123.5392,45.607662,370.0064640000168,0.0],[-123.539399,45.607578,369.4585555200152,0.0],[-123.539567,45.60749,368.7399327999559,0.0],[-123.539956,45.607276,368.5423999999898,0.0],[-123.54004,45.607208,368.66817279996684,0.0],[-123.540169,45.607032,367.5150323199675,0.0],[-123.540543,45.606719,359.8610313599778,0.0],[-123.540741,45.606685,356.5495384000292,0.0],[-123.541382,45.606441,355.56900992001243,0.0],[-123.541512,45.60641,355.3037504000511,0.0],[-123.541832,45.606418,352.6904000000445,0.0],[-123.542054,45.606422,350.96258751998784,0.0],[-123.542153,45.606441,350.17034992007376,0.0],[-123.542229,45.606483,348.9184000000164,0.0],[-123.54226,45.606536,347.5504000000419,0.0],[-123.542412,45.606945,338.31416639998946,0.0],[-123.542603,45.60725,336.42919999999754,0.0],[-123.542992,45.607551,332.23199232000843,0.0],[-123.543076,45.607639,331.2788000000121,0.0],[-123.543107,45.607769,330.4759999999417,0.0],[-123.543061,45.607982,329.4996198400321,0.0],[-123.543068,45.608062,328.8845606400165,0.0],[-123.543107,45.608146,327.77769887999455,0.0],[-123.543198,45.608234,326.2305772799383,0.0],[-123.543335,45.60831,324.3299999999592,0.0],[-123.543458,45.608345,323.420899199998,0.0],[-123.54377,45.60836,322.8080000000173,0.0],[-123.543961,45.608383,322.1696164800051,0.0],[-123.544053,45.608417,321.3939489599535,0.0],[-123.544114,45.608459,320.8410249600224,0.0],[-123.544152,45.608531,320.35642752001735,0.0],[-123.544152,45.6086,320.09491200000167,0.0],[-123.544083,45.608692,319.9222905600091,0.0],[-123.543854,45.608852,319.1566796799961,0.0],[-123.543786,45.608924,318.45638143997985,0.0],[-123.543717,45.609062,317.3723638399964,0.0],[-123.543641,45.609287,316.16858767996445,0.0],[-123.543633,45.609359,316.10303887999976,0.0],[-123.543656,45.609439,316.16476735999373,0.0],[-123.543755,45.609535,317.17000000002326,0.0],[-123.5439,45.609596,318.12755200000254,0.0],[-123.544098,45.609638,318.8500979200058,0.0],[-123.544373,45.609668,317.65939456004685,0.0],[-123.544472,45.609691,316.8148000000185,0.0],[-123.544564,45.609737,315.57950272004257,0.0],[-123.54461,45.609798,314.5038111999511,0.0],[-123.544587,45.610046,312.36978591994,0.0],[-123.544617,45.610149,310.7028116799724,0.0],[-123.544671,45.61021,309.330193600047,0.0],[-123.544785,45.61029,306.61594399993857,0.0],[-123.54493,45.610347,302.95120160015927,0.0],[-123.545044,45.610359,300.79231615988175,0.0],[-123.545182,45.610324,299.00102528007653,0.0],[-123.545533,45.610027,297.17981471984734,0.0],[-123.545739,45.609878,293.76684768003776,0.0],[-123.545838,45.60984,292.0679999999511,0.0],[-123.54609,45.609798,287.8343999998958,0.0],[-123.546174,45.609779,286.4129238400963,0.0],[-123.546242,45.609756,285.34350207990286,0.0],[-123.546311,45.609706,284.45112607993786,0.0],[-123.546433,45.609512,281.7682201601888,0.0],[-123.546471,45.609371,280.9295300800885,0.0],[-123.546479,45.609245,281.1420423998108,0.0],[-123.546471,45.608913,278.19897424017336,0.0],[-123.54638,45.608554,274.9447999999852,0.0],[-123.546479,45.608184,259.5956051197916,0.0],[-123.546425,45.607845,256.4354600000223,0.0],[-123.546418,45.607673,254.85393055982354,0.0],[-123.546517,45.607021,243.04046640021824,0.0],[-123.546547,45.606708,241.64158783982384,0.0],[-123.546624,45.606319,233.30135424023726,0.0],[-123.546616,45.606185,232.58691840001933,0.0],[-123.546555,45.606029,234.30316880008007,0.0],[-123.546547,45.605895,234.4036375998518,0.0],[-123.546616,45.605587,233.19605695999064,0.0],[-123.546662,45.605522,231.3412294401036,0.0],[-123.546715,45.605487,229.33502719976426,0.0],[-123.546814,45.605484,225.40707584007956,0.0],[-123.547051,45.605564,219.5264000000634,0.0],[-123.547226,45.605571,217.13991231994387,0.0],[-123.547341,45.605525,217.43112800002027,0.0],[-123.547379,45.605468,216.8274022400602,0.0],[-123.547364,45.605243,213.74960000001101,0.0],[-123.547188,45.604675,212.38316799991128,0.0],[-123.547158,45.604446,211.47188416004641,0.0],[-123.54715,45.604034,210.67732799997654,0.0],[-123.547211,45.603694,210.59314463994681,0.0],[-123.547318,45.603481,212.36729567995033,0.0],[-123.547364,45.603336,213.9456998400023,0.0],[-123.54741,45.603004,211.69413119999038,0.0],[-123.547448,45.602931,211.38371904000005,0.0],[-123.547646,45.602783,213.6171561600007,0.0],[-123.547669,45.602733,214.6236740799746,0.0],[-123.547699,45.602447,218.62588911988786,0.0],[-123.547852,45.602256,223.09280000012905,0.0],[-123.548058,45.601909,230.90647711996203,0.0],[-123.548089,45.601707,230.52388208004106,0.0],[-123.548241,45.601356,225.25584384015883,0.0],[-123.548325,45.601245,224.69646000010152,0.0],[-123.548508,45.601127,229.70896319990598,0.0],[-123.548531,45.601062,230.1617673598677,0.0],[-123.548539,45.600822,228.61377504017034,0.0],[-123.548592,45.600711,229.5908985599604,0.0],[-123.548737,45.600524,231.37960000004819,0.0],[-123.548798,45.600387,232.97080000009782,0.0],[-123.548806,45.600299,233.4315999999833,0.0],[-123.548691,45.600109,237.0811457599924,0.0],[-123.548661,45.599979,240.26953327992416,0.0],[-123.548668,45.599945,240.74645120016876,0.0],[-123.548668,45.599945,240.74645120016876,0.0],[-123.548676,45.599899,241.38361088000406,0.0],[-123.548714,45.599834,243.08165312009604,0.0],[-123.548951,45.599624,249.55906496001919,0.0],[-123.549141,45.599422,250.06813184004045,0.0],[-123.549225,45.599319,249.11007200012386,0.0],[-123.549477,45.599166,251.05988127989497,0.0],[-123.549645,45.599182,256.5195279999408,0.0],[-123.549996,45.599262,267.1889420797611,0.0],[-123.550156,45.599327,270.3659334399946,0.0],[-123.550263,45.599334,272.65854304004233,0.0],[-123.550316,45.599292,275.1334297598548,0.0],[-123.550324,45.599224,276.7297100801378,0.0],[-123.550286,45.59901,279.1455999999971,0.0],[-123.550339,45.598667,285.64474447978677,0.0],[-123.550271,45.598575,284.4643159999255,0.0],[-123.550133,45.598434,284.01535136011296,0.0],[-123.55008,45.598346,285.11459839990823,0.0],[-123.550011,45.598083,292.3087999998768,0.0],[-123.549943,45.598018,294.7577139197403,0.0],[-123.549492,45.597766,300.8722944000202,0.0],[-123.549149,45.597515,299.0147999999508,0.0],[-123.548798,45.597194,293.60986944013786,0.0],[-123.548737,45.597095,291.421096800099,0.0],[-123.548737,45.597026,291.0136214400862,0.0],[-123.548813,45.596866,293.26799999983996,0.0],[-123.548882,45.596611,296.1577699201939,0.0],[-123.548913,45.596,295.52911999992455,0.0],[-123.548897,45.59584,293.25000319995564,0.0],[-123.548707,45.595527,285.38342687978684,0.0],[-123.548623,45.595336,279.44674176017026,0.0],[-123.548623,45.59523,276.27920000012546,0.0],[-123.548684,45.595176,275.01920000000564,0.0],[-123.548836,45.595134,275.54479999998193,0.0],[-123.548897,45.595085,274.4041351998793,0.0],[-123.54892,45.59502,271.9120639999078,0.0],[-123.548905,45.594787,259.4225767997928,0.0],[-123.54937,45.594902,261.81684799994724,0.0],[-123.549965,45.595085,258.9959999998907,0.0],[-123.550522,45.595165,258.3414448000648,0.0],[-123.550522,45.595165,258.3414448000648,0.0],[-123.55056,45.595172,258.87519999998403,0.0],[-123.551446,45.594337,243.21014784005763,0.0],[-123.551407,45.59431,241.16768639993367,0.0],[-123.550911,45.594539,241.94199999993134,0.0],[-123.550797,45.594547,241.35701727998486,0.0],[-123.550583,45.594272,236.79586495997822,0.0],[-123.550698,45.593757,232.34427743995064,0.0],[-123.550637,45.593021,223.64577775995144,0.0],[-123.550698,45.592895,223.0712047999738,0.0],[-123.550904,45.59275,221.07456000007562,0.0],[-123.551224,45.592601,214.9340659200339,0.0],[-123.551896,45.592517,207.6028000000224,0.0],[-123.55214,45.592555,208.95060799992257,0.0],[-123.552224,45.592655,211.35439999999699,0.0],[-123.552247,45.592708,212.58200000001898,0.0],[-123.552315,45.592712,212.91319999994948,0.0],[-123.552407,45.592605,210.9331999999847,0.0],[-123.552331,45.592403,207.13154671994204,0.0],[-123.552132,45.592235,204.16905920003114,0.0],[-123.551865,45.592102,201.95978079994038,0.0],[-123.551835,45.591995,200.2322919999619,0.0],[-123.551903,45.591854,197.97808191996884,0.0],[-123.552063,45.591873,199.2892540800302,0.0],[-123.552887,45.592212,206.88960000003863,0.0],[-123.553086,45.592201,206.981626559985,0.0],[-123.55336,45.591892,204.70347519999407,0.0],[-123.553986,45.591232,199.02254591997445,0.0],[-123.554787,45.591026,197.61265247998023,0.0],[-123.555192,45.590843,194.43725375997641,0.0],[-123.555176,45.59053,192.2743999999932,0.0],[-123.555375,45.590312,190.38008000000914,0.0],[-123.555405,45.590129,190.0840000000485,0.0],[-123.555405,45.590129,190.0840000000485,0.0],[-123.555375,45.590312,190.38008000000914,0.0],[-123.555176,45.59053,192.2743999999932,0.0],[-123.555192,45.590805,194.10480000000325,0.0],[-123.555192,45.590805,194.10480000000325,0.0],[-123.555176,45.59053,192.2743999999932,0.0],[-123.555375,45.590312,190.38008000000914,0.0],[-123.555428,45.589984,189.89195007995835,0.0],[-123.554986,45.589412,185.54880000002868,0.0],[-123.554932,45.58879,178.1303488000051,0.0],[-123.555108,45.588401,175.87599999999725,0.0],[-123.555047,45.58834,175.2172000000237,0.0],[-123.554955,45.58826,173.94399999997404,0.0],[-123.554955,45.58826,173.94399999997404,0.0],[-123.555047,45.58834,175.2172000000237,0.0],[-123.555314,45.588218,174.5237420799447,0.0],[-123.55552,45.587951,172.28657919996346,0.0],[-123.555726,45.587787,171.36000000003196,0.0],[-123.556649,45.587566,173.04457728004326,0.0],[-123.557297,45.587421,168.46192095997728,0.0],[-123.557648,45.587356,166.91199999999617,0.0],[-123.557984,45.58739,166.22401919997353,0.0],[-123.558327,45.587383,166.048006720068,0.0],[-123.558526,45.587341,165.68680000005588,0.0],[-123.559472,45.587303,164.33275263997663,0.0],[-123.559701,45.587394,166.74964576005718,0.0],[-123.560448,45.587211,165.75875712004827,0.0],[-123.560845,45.587207,165.13649840000545,0.0],[-123.561142,45.587249,167.51976064005171,0.0],[-123.561593,45.586925,173.50112800004257,0.0],[-123.561936,45.586627,176.14702336004697,0.0],[-123.562165,45.586334,177.44181119983858,0.0],[-123.562203,45.58583,177.73603039994714,0.0],[-123.562203,45.58506,173.56385279997048,0.0],[-123.562562,45.583988,186.41236224001824,0.0],[-123.562562,45.583988,186.41236224001824,0.0],[-123.562584,45.583915,187.8063744000568,0.0],[-123.56186,45.582946,177.2131071999229,0.0],[-123.56176,45.582439,181.9283712002031,0.0],[-123.561432,45.582012,180.79897855994938,0.0],[-123.561158,45.581562,171.28360384016284,0.0],[-123.561043,45.581138,166.337464639985,0.0],[-123.56099,45.58094,164.03372799999897,0.0],[-123.56099,45.5806,163.10752000002483,0.0],[-123.560891,45.580444,164.57468351999515,0.0],[-123.560944,45.580322,166.8366758399463,0.0],[-123.560944,45.580139,169.2994406399565,0.0],[-123.560898,45.579715,172.2527471999805,0.0],[-123.560982,45.579521,172.87190111999612,0.0],[-123.561158,45.579395,173.16880000002175,0.0],[-123.561333,45.579124,173.79880000001708,0.0],[-123.561333,45.578968,173.79880000001708,0.0],[-123.561432,45.578765,173.84480000001304,0.0],[-123.561577,45.578701,173.32280000000083,0.0],[-123.561623,45.578575,173.1776360000105,0.0],[-123.561608,45.578414,173.36106751995663,0.0],[-123.561799,45.578189,172.36246256007212,0.0],[-123.561974,45.57809,170.54360639991552,0.0],[-123.562096,45.57796,168.48751360001384,0.0],[-123.562203,45.577915,166.72461520001303,0.0],[-123.562272,45.577926,166.2303577600322,0.0],[-123.562272,45.577926,166.2303577600322,0.0],[-123.562348,45.577938,165.75524992002386,0.0],[-123.562409,45.578037,165.87223263998663,0.0],[-123.562531,45.578136,165.27016128006045,0.0],[-123.562684,45.578113,166.71323136003204,0.0],[-123.562912,45.577968,168.6037324799697,0.0],[-123.562951,45.577568,169.42028543993672,0.0],[-123.56289,45.577472,166.6968767998562,0.0],[-123.562706,45.577377,161.26921952001754,0.0],[-123.562287,45.577022,160.70169056001075,0.0],[-123.562256,45.576873,161.64999999999168,0.0],[-123.562325,45.576732,162.92439999999783,0.0],[-123.562523,45.576587,163.44330591998332,0.0],[-123.562737,45.57648,162.34409920001636,0.0],[-123.563027,45.576168,160.67509312001542,0.0],[-123.562958,45.575645,159.87497279999718,0.0],[-123.562958,45.575401,157.4231999999722,0.0],[-123.562851,45.575195,154.22870559998086,0.0],[-123.56289,45.575023,152.47629759997594,0.0],[-123.563202,45.574829,154.64145568004025,0.0],[-123.563424,45.574344,154.49957375999486,0.0],[-123.564164,45.573776,152.17760000003545,0.0],[-123.565056,45.573192,151.3679999999722,0.0],[-123.565697,45.572807,151.75476783997672,0.0],[-123.566262,45.572837,151.51082047998645,0.0],[-123.566987,45.572605,152.94105759999354,0.0],[-123.567421,45.572574,161.64437920003024,0.0],[-123.567673,45.572494,161.70374751996349,0.0],[-123.568032,45.572425,162.9175040000867,0.0],[-123.568444,45.572265,156.65055360005883,0.0],[-123.568787,45.572238,155.1652342399572,0.0],[-123.569573,45.572021,154.84829536005273,0.0],[-123.569985,45.572139,165.35484320004122,0.0],[-123.570145,45.57212,169.17771199983787,0.0],[-123.570267,45.572036,169.3544345599164,0.0],[-123.570321,45.571914,166.56498496020242,0.0],[-123.570435,45.57183,167.27723200004004,0.0],[-123.570687,45.571773,170.1036000001086,0.0],[-123.5709,45.571628,169.63219199971064,0.0],[-123.570885,45.571861,178.39222800014707,0.0],[-123.571564,45.571353,191.4482092798729,0.0],[-123.571732,45.57106,184.71473919996393,0.0],[-123.572152,45.570716,194.51339264003,0.0],[-123.572205,45.570373,180.70349279973627,0.0],[-123.572365,45.570056,193.23137920081496,0.0],[-123.572243,45.569721,173.31837968001489,0.0],[-123.572297,45.569515,184.85774480074153,0.0],[-123.572182,45.569114,190.3179673599374,0.0],[-123.57219,45.568737,203.15108640043871,0.0],[-123.572396,45.568031,207.1169695998306,0.0],[-123.57248,45.567356,204.3007999999545,0.0],[-123.572609,45.567443,204.5995999999709,0.0],[-123.572693,45.567733,205.91758592000005,0.0],[-123.572808,45.567939,211.49989504005532,0.0],[-123.572983,45.568096,215.50483071992434,0.0],[-123.573151,45.568187,218.5225575999906,0.0],[-123.573334,45.568126,218.55043456003978,0.0],[-123.573624,45.567832,211.01065727995763,0.0],[-123.574067,45.567497,210.74002512009608,0.0],[-123.573746,45.567619,207.74452416001472,0.0],[-123.573578,45.567722,206.47520000007717,0.0],[-123.573617,45.567581,203.19312767988956,0.0],[-123.573792,45.567409,202.4006668798875,0.0],[-123.573922,45.567047,191.08200864007486,0.0],[-123.574341,45.566822,182.26960000009058,0.0],[-123.574845,45.566841,183.1069975998261,0.0],[-123.575226,45.566928,186.5219302398495,0.0],[-123.575448,45.566936,185.36742911995918,0.0],[-123.575806,45.566852,178.87039999987087,0.0],[-123.576821,45.567005,180.29960000003302,0.0],[-123.577134,45.566944,178.98450815998186,0.0],[-123.577485,45.566989,181.54133839996646,0.0],[-123.577874,45.566871,180.47719999987658,0.0],[-123.578316,45.566535,175.90640000005214,0.0],[-123.578797,45.566368,178.12039999986882,0.0],[-123.579125,45.566078,181.01160000006757,0.0],[-123.579545,45.565406,184.07169760000465,0.0],[-123.579995,45.56517,183.81003199999884,0.0],[-123.580407,45.565101,187.26215983990096,0.0],[-123.580842,45.565074,187.88768832008031,0.0],[-123.582711,45.564682,178.3212198399212,0.0],[-123.583252,45.564563,168.99999999996794,0.0],[-123.583603,45.564559,166.5776420801247,0.0],[-123.583817,45.56472,172.15894080006714,0.0],[-123.583893,45.564846,176.47578464011892,0.0],[-123.584076,45.564884,179.00091391994513,0.0],[-123.584374,45.564773,175.6685676801191,0.0],[-123.584816,45.564544,166.74417919994067,0.0],[-123.585412,45.564189,160.30739712008597,0.0],[-123.585816,45.563877,152.22521215981635,0.0],[-123.586129,45.563777,152.5680000000532,0.0],[-123.586442,45.563796,156.56400000016947,0.0],[-123.586579,45.563758,156.8124000000048,0.0],[-123.586655,45.563667,154.68480000000477,0.0],[-123.586709,45.563484,151.7090617600244,0.0],[-123.586953,45.56311,151.71119999993334,0.0],[-123.587197,45.562889,151.63880000001905,0.0],[-123.587456,45.562755,149.24901120009363,0.0],[-123.587586,45.562709,147.77159999993933,0.0],[-123.587616,45.562713,147.90120000007255,0.0],[-123.587616,45.562713,147.90120000007255,0.0],[-123.587586,45.562709,147.77159999993933,0.0],[-123.587845,45.562728,148.67256640000207,0.0],[-123.588051,45.562828,152.249200000055,0.0],[-123.588364,45.563003,157.67560000004914,0.0],[-123.588608,45.562999,157.57479999994393,0.0],[-123.588929,45.5629,155.0626719999785,0.0],[-123.589249,45.563003,157.88864224009092,0.0],[-123.589661,45.563194,161.7092000000489,0.0],[-123.589837,45.563449,168.8070870400044,0.0],[-123.590027,45.563392,170.35132864012263,0.0],[-123.590638,45.56298,170.22727040006833,0.0],[-123.590935,45.562698,166.6356847999658,0.0],[-123.591408,45.562088,155.89546752010924,0.0],[-123.592125,45.561817,161.1056399997312,0.0],[-123.592721,45.561305,159.14730159976597,0.0],[-123.593102,45.56108,160.4812735999954,0.0],[-123.593483,45.560787,170.6318408002453,0.0],[-123.593911,45.560367,177.57769744024782,0.0],[-123.594033,45.559871,174.1879999998573,0.0],[-123.593987,45.55957,169.88757119998368,0.0],[-123.594292,45.559593,174.3479999999854,0.0],[-123.594864,45.559841,184.94101183988874,0.0],[-123.595231,45.560165,192.8495407999638,0.0],[-123.596016,45.560485,193.65566079992232,0.0],[-123.59787,45.560825,204.5260000001149,0.0],[-123.598137,45.56076,198.76959040005462,0.0],[-123.59845,45.560771,207.94664800025598,0.0],[-123.59861,45.560733,208.85295519971177,0.0],[-123.598977,45.560718,206.4555043199989,0.0],[-123.599404,45.560592,188.89890815982696,0.0],[-123.599671,45.560619,183.08748304013002,0.0],[-123.599854,45.560688,185.60678783993794,0.0],[-123.600403,45.56081,193.6209375998314,0.0],[-123.60064,45.560802,189.22938240010453,0.0],[-123.600289,45.560707,189.2133913600281,0.0],[-123.600052,45.560581,179.19325247999657,0.0],[-123.59974,45.560375,168.22760000002953,0.0],[-123.599907,45.560344,166.41741632003047,0.0],[-123.600174,45.560405,172.3097264000536,0.0],[-123.600503,45.560394,176.50636128012667,0.0],[-123.600754,45.560306,173.72566783993247,0.0],[-123.600915,45.560462,176.29523840001747,0.0],[-123.601059,45.560321,172.86838111999862,0.0],[-123.601342,45.560997,175.24757087992674,0.0],[-123.602051,45.561893,180.1128854399077,0.0],[-123.602364,45.562084,182.24362496001243,0.0],[-123.602875,45.562263,184.3992400000994,0.0],[-123.603127,45.562271,183.49483568012397,0.0],[-123.603356,45.562179,181.16069696003038,0.0],[-123.603417,45.562068,179.13722623988934,0.0],[-123.603692,45.561832,179.0453555199621,0.0],[-123.604035,45.561779,181.64711439994926,0.0],[-123.604188,45.561702,183.75246207999535,0.0],[-123.603997,45.561592,187.93065088024824,0.0],[-123.603592,45.561565,185.68647679996113,0.0],[-123.603051,45.561634,176.98894271996747,0.0],[-123.603432,45.56147,188.85712639997618,0.0],[-123.603798,45.561408,197.49782271995878,0.0],[-123.604706,45.561397,206.38509472001007,0.0],[-123.605355,45.561508,207.1735615999278,0.0],[-123.60595,45.561584,226.86028799989418,0.0],[-123.606064,45.561653,225.18298752013376,0.0],[-123.606186,45.561862,220.33761727986953,0.0],[-123.606507,45.562061,222.08354431980845,0.0],[-123.606797,45.562103,227.24447743997877,0.0],[-123.607094,45.56221,229.3881792000766,0.0],[-123.607369,45.562263,235.7384308801413,0.0],[-123.607789,45.562618,237.36676191989037,0.0],[-123.608033,45.562778,241.26692992017948,0.0],[-123.608033,45.562778,241.26692992017948,0.0],[-123.608063,45.562797,242.04927264000887,0.0],[-123.608399,45.562767,254.17197232014013,0.0],[-123.608208,45.56266,250.2646912001541,0.0],[-123.608391,45.562591,258.5071902399825,0.0],[-123.608399,45.562477,261.33685216016966,0.0],[-123.608147,45.562366,254.36277568013566,0.0],[-123.608178,45.562221,258.11252095985907,0.0],[-123.608056,45.562049,259.37440448005447,0.0],[-123.60801,45.561733,264.9859999999337,0.0],[-123.608033,45.561408,273.9679865601253,0.0],[-123.607781,45.561283,271.3391123199788,0.0],[-123.607598,45.561138,272.9995020799754,0.0],[-123.607346,45.561065,272.9052608000573,0.0],[-123.607071,45.561092,269.923309439987,0.0],[-123.606904,45.561042,270.05667583998405,0.0],[-123.606583,45.560825,276.98134399998054,0.0],[-123.606446,45.560768,276.7457715199705,0.0],[-123.606225,45.560749,273.7085319998837,0.0],[-123.60608,45.560672,271.6016000001266,0.0],[-123.606034,45.560596,271.32079999991447,0.0],[-123.606118,45.560535,272.9538351998428,0.0],[-123.606324,45.560516,280.2035353600254,0.0],[-123.60656,45.56055,282.9646399999955,0.0],[-123.606736,45.560569,282.27088063999764,0.0],[-123.606881,45.560523,280.97787392003863,0.0],[-123.607033,45.560413,277.96000815994165,0.0],[-123.607239,45.560375,276.22181999993325,0.0],[-123.607399,45.560413,275.3309985599266,0.0],[-123.607636,45.560588,276.6455705600156,0.0],[-123.608155,45.560745,276.2223119999267,0.0],[-123.608521,45.560977,278.53866096003344,0.0],[-123.608872,45.561077,279.27813247994004,0.0],[-123.609231,45.561092,283.8213977600385,0.0],[-123.609498,45.561054,283.8421190399249,0.0],[-123.609765,45.5611,285.69864000011785,0.0],[-123.610077,45.561164,293.42557888005535,0.0],[-123.610413,45.561286,314.21057855997054,0.0],[-123.610672,45.561302,323.35875455969295,0.0],[-123.610955,45.561241,330.9147120002762,0.0],[-123.611107,45.561103,336.44030352036566,0.0],[-123.611344,45.560962,344.3931187202027,0.0],[-123.611489,45.560783,347.5633910402735,0.0],[-123.611535,45.560623,343.70062560011803,0.0],[-123.611573,45.560443,335.8668328002638,0.0],[-123.611611,45.560287,328.5252663999447,0.0],[-123.611748,45.560127,323.30612288030954,0.0],[-123.611985,45.560043,328.472400000167,0.0],[-123.612336,45.559997,338.5460000001008,0.0],[-123.612656,45.559955,345.2636000001289,0.0],[-123.612999,45.55978,341.92754880017446,0.0],[-123.613236,45.559566,332.01040511984377,0.0],[-123.613472,45.559547,330.48571392008876,0.0],[-123.613617,45.559661,335.59985503983626,0.0],[-123.613907,45.560012,347.0131667200784,0.0],[-123.614228,45.560237,345.47080000012875,0.0],[-123.614396,45.560478,356.2244774402804,0.0],[-123.614502,45.56071,368.21200319998195,0.0],[-123.614617,45.560752,368.32011264013227,0.0],[-123.614777,45.560733,364.1088286398705,0.0],[-123.614937,45.560638,355.65331423989755,0.0],[-123.615082,45.560577,349.09160000008615,0.0],[-123.615281,45.560581,344.3138748800271,0.0],[-123.615609,45.560691,343.4801572798303,0.0],[-123.615853,45.560852,345.9371999998343,0.0],[-123.615967,45.561019,354.5448000001006,0.0],[-123.616204,45.561065,357.62555839991074,0.0],[-123.616356,45.561134,363.59760000007145,0.0],[-123.616616,45.561092,367.3597491199881,0.0],[-123.616692,45.560905,355.61308159987954,0.0],[-123.616822,45.560634,340.3534361600025,0.0],[-123.617074,45.560417,328.6893596800949,0.0],[-123.617287,45.560401,328.4564375998805,0.0],[-123.617623,45.560619,342.6706710403235,0.0],[-123.618042,45.560806,345.6640115198655,0.0],[-123.618233,45.561126,355.9756809600056,0.0],[-123.618317,45.561149,355.28646095990973,0.0],[-123.618638,45.561119,344.68549823975593,0.0],[-123.61895,45.561218,342.96174399981624,0.0],[-123.619385,45.561347,346.57557279992693,0.0],[-123.619622,45.561363,354.00600000027066,0.0],[-123.619767,45.561302,357.92677663969585,0.0],[-123.619843,45.561187,357.21118736002154,0.0],[-123.619912,45.561069,356.74373440003484,0.0],[-123.619851,45.560947,351.939325599863,0.0],[-123.619889,45.560817,351.2978070400198,0.0],[-123.619965,45.560768,353.57152959978987,0.0],[-123.620011,45.56068,355.0816000002915,0.0],[-123.619957,45.560615,352.5774543999712,0.0],[-123.619851,45.560447,347.6234492798733,0.0],[-123.619889,45.560348,349.3073132800289,0.0],[-123.619935,45.560436,351.6825183999023,0.0],[-123.620019,45.560512,355.38654975993666,0.0],[-123.620118,45.560626,361.05040000028816,0.0],[-123.620209,45.560852,367.6099225600641,0.0],[-123.620301,45.560653,371.82627311986516,0.0],[-123.620308,45.560527,371.94721535963345,0.0],[-123.62027,45.560371,369.5892064002625,0.0],[-123.620446,45.560066,376.32218112004784,0.0],[-123.620553,45.559982,380.15039231997355,0.0],[-123.620713,45.559955,386.4945783998589,0.0],[-123.620865,45.559761,384.8814567998794,0.0],[-123.620904,45.559574,376.79439999971873,0.0],[-123.620743,45.559345,357.4592648002463,0.0],[-123.620621,45.559215,345.8641832000683,0.0],[-123.620629,45.559146,343.8007999997062,0.0],[-123.620942,45.559017,358.1603571199171,0.0],[-123.621056,45.558944,365.5075251196516,0.0],[-123.6213,45.55886,378.8838400002991,0.0],[-123.621384,45.558799,382.4586860803173,0.0],[-123.621369,45.558738,380.86987936004266,0.0],[-123.621254,45.558685,374.84929119966426,0.0],[-123.621094,45.558322,362.69051327987535,0.0],[-123.62111,45.558197,360.01156320008573,0.0],[-123.621155,45.558078,358.6748672001279,0.0],[-123.621239,45.558006,360.0908060800934,0.0],[-123.621529,45.557846,367.8915580797527,0.0],[-123.621697,45.557815,373.7068655998805,0.0],[-123.62185,45.557792,377.6547839998306,0.0],[-123.621964,45.55772,376.6637568003312,0.0],[-123.621972,45.557609,369.59812607994877,0.0],[-123.621926,45.557411,356.2476272001499,0.0],[-123.621895,45.557235,344.39893999976687,0.0],[-123.621918,45.557132,340.6655999999316,0.0],[-123.62204,45.557052,340.8780031999082,0.0],[-123.622551,45.556991,357.2976286399197,0.0],[-123.622773,45.556892,361.1427526397662,0.0],[-123.622941,45.556724,358.674319360034,0.0],[-123.623261,45.556613,366.8749814399892,0.0],[-123.623421,45.556533,374.5463999996698,0.0],[-123.623536,45.556484,380.4576000000932,0.0],[-123.623551,45.556438,381.6564000002895,0.0],[-123.623368,45.556266,375.44721151995236,0.0],[-123.62336,45.556129,377.0802176002845,0.0],[-123.623292,45.556076,375.0239667203498,0.0],[-123.623017,45.556053,362.26800000028334,0.0],[-123.62278,45.555957,348.8004000003666,0.0],[-123.622658,45.555873,343.84284928008486,0.0],[-123.622681,45.555744,347.078800000053,0.0],[-123.622826,45.555576,357.9048460801931,0.0],[-123.622849,45.555328,361.5100000001298,0.0],[-123.622925,45.555164,369.8143199997898,0.0],[-123.622925,45.555053,372.49163999978435,0.0],[-123.622803,45.555019,369.0585072001032,0.0],[-123.622368,45.55513,352.42324480004606,0.0],[-123.62201,45.55508,353.88777600033427,0.0],[-123.621804,45.555126,348.75176063986805,0.0],[-123.621552,45.555133,347.58219456015536,0.0],[-123.621056,45.555301,334.9948275200102,0.0],[-123.620698,45.555339,331.57449440023254,0.0],[-123.620583,45.555313,331.0365608000181,0.0],[-123.620507,45.555202,331.42262912010176,0.0],[-123.62056,45.555049,335.4534655999599,0.0],[-123.620781,45.554901,345.28399999975136,0.0],[-123.620972,45.554813,352.6945529597534,0.0],[-123.621094,45.554672,361.3062745600484,0.0],[-123.621026,45.554565,360.7596448001022,0.0],[-123.62101,45.554454,362.7645567999378,0.0],[-123.620942,45.554401,362.27521632004215,0.0],[-123.62056,45.554382,348.98321280010305,0.0],[-123.620232,45.554317,346.9660512001466,0.0],[-123.620003,45.554248,356.2058111999625,0.0],[-123.619889,45.554126,364.700095680252,0.0],[-123.619744,45.554084,365.6619955197551,0.0],[-123.619408,45.554115,357.3083775998238,0.0],[-123.619225,45.554206,352.2185439999598,0.0],[-123.619004,45.55445,333.33615999989405,0.0],[-123.618699,45.554752,320.34055423986763,0.0],[-123.618569,45.554801,320.33520000016074,0.0],[-123.618485,45.554748,323.3412000000674,0.0],[-123.618477,45.55447,339.8219295999083,0.0],[-123.618416,45.554279,345.15720895995133,0.0],[-123.61821,45.554092,339.2292416003868,0.0],[-123.618157,45.553859,346.02902687965513,0.0],[-123.617997,45.553676,353.0001286398553,0.0],[-123.617798,45.553688,347.74354687978933,0.0],[-123.617478,45.553939,332.77489855996777,0.0],[-123.617203,45.554012,328.4558860799068,0.0],[-123.61702,45.554119,324.0387264001064,0.0],[-123.616646,45.554141,334.0240745598545,0.0],[-123.616021,45.554241,328.3792755203155,0.0],[-123.615838,45.554214,323.4522982397658,0.0],[-123.615609,45.554061,322.6087889603145,0.0],[-123.615326,45.553932,325.19148543986137,0.0],[-123.615105,45.553867,321.98581359989765,0.0],[-123.615059,45.553833,319.8344651199767,0.0],[-123.615059,45.553833,319.8344651199767,0.0],[-123.615029,45.55381,318.42915040012616,0.0],[-123.615174,45.553722,319.2020588799247,0.0],[-123.615471,45.553638,322.64079551997924,0.0],[-123.615845,45.5536,328.8983199998922,0.0],[-123.616105,45.553512,333.79264960004696,0.0],[-123.616341,45.553352,336.47714112012886,0.0],[-123.616509,45.553081,331.25678431962126,0.0],[-123.616616,45.55294,330.53027839965876,0.0],[-123.616875,45.552787,334.6981999998306,0.0],[-123.617325,45.552471,340.3901159995597,0.0],[-123.617524,45.552154,336.64598016019863,0.0],[-123.617676,45.552013,338.2275724802206,0.0],[-123.61802,45.551738,340.3208704000576,0.0],[-123.618302,45.551563,344.6394908800463,0.0],[-123.61834,45.55141,341.064352000103,0.0],[-123.618248,45.551292,339.4864486399035,0.0],[-123.61789,45.551086,334.5624000000928,0.0],[-123.617676,45.550937,334.2513785601059,0.0],[-123.617554,45.550865,334.6236847999286,0.0],[-123.61747,45.550697,335.1706063999304,0.0],[-123.617425,45.550292,334.85382399991954,0.0],[-123.617486,45.550167,336.9554009599793,0.0],[-123.617669,45.550037,341.88248336012083,0.0],[-123.617798,45.549957,345.8888860797652,0.0],[-123.617806,45.549884,346.62899712007817,0.0],[-123.617714,45.549812,343.29263360024584,0.0],[-123.617455,45.549709,332.7438888001954,0.0],[-123.617386,45.549652,330.8658508798837,0.0],[-123.617455,45.54948,333.4347360002076,0.0],[-123.617463,45.549369,335.6300457600585,0.0],[-123.617379,45.549289,334.5092764799509,0.0],[-123.617234,45.54919,331.0392767998005,0.0],[-123.617135,45.549034,334.6836000001256,0.0],[-123.617066,45.548892,339.06479999981,0.0],[-123.616845,45.548763,338.7015367999116,0.0],[-123.616601,45.548648,338.4294060800412,0.0],[-123.616189,45.5485,339.1608000001356,0.0],[-123.616005,45.548469,339.21353760008736,0.0],[-123.615586,45.548599,334.337157119919,0.0],[-123.615113,45.548557,334.47915535993866,0.0],[-123.614495,45.548789,327.8247056000134,0.0],[-123.614251,45.548847,326.25018287993646,0.0],[-123.614029,45.548839,327.2025902399606,0.0],[-123.614029,45.548839,327.2025902399606,0.0],[-123.613869,45.548789,329.02724207996,0.0],[-123.613663,45.54874,328.87882559992863,0.0],[-123.613144,45.54874,318.54346240011307,0.0],[-123.612977,45.548683,314.9319204800423,0.0],[-123.61303,45.548511,313.92839999975945,0.0],[-123.613419,45.54824,322.4860895997407,0.0],[-123.613785,45.547927,324.92171279978004,0.0],[-123.613869,45.547721,320.117129919904,0.0],[-123.614251,45.547359,314.78933679986545,0.0],[-123.614251,45.547359,314.78933679986545,0.0],[-123.614251,45.547359,314.78933679986545,0.0],[-123.614121,45.547424,313.4356403198698,0.0],[-123.61364,45.547809,315.2563104001778,0.0],[-123.613343,45.548034,309.52660096007304,0.0],[-123.613106,45.548194,306.3436377601774,0.0],[-123.61274,45.548355,299.89660800007545,0.0],[-123.612267,45.548641,297.9352000001554,0.0],[-123.611771,45.548992,290.78790912006167,0.0],[-123.611535,45.549137,289.7208000001451,0.0],[-123.611352,45.549194,286.905067519926,0.0],[-123.611725,45.54887,285.73140000025035,0.0],[-123.611344,45.549049,282.286453759942,0.0],[-123.611039,45.549152,279.5117862400583,0.0],[-123.611214,45.548995,278.04949280001176,0.0],[-123.611382,45.548847,275.4744195202173,0.0],[-123.611405,45.548686,266.76196319993363,0.0],[-123.61168,45.548545,267.53000000018847,0.0],[-123.612,45.548271,270.73551999973176,0.0],[-123.611626,45.548351,257.20395583986965,0.0],[-123.612198,45.547954,267.50992128012047,0.0],[-123.611924,45.548023,258.92707776009627,0.0],[-123.612374,45.547653,257.1934284798936,0.0],[-123.611954,45.547786,250.6392729599932,0.0],[-123.612145,45.547615,248.9456319999763,0.0],[-123.612366,45.547386,244.62442303996383,0.0],[-123.612381,45.547321,242.9983390398776,0.0],[-123.612328,45.547275,240.30324800009586,0.0],[-123.612404,45.547168,238.62879999991992,0.0],[-123.612374,45.547077,234.59680000012372,0.0],[-123.612206,45.547073,230.1607999999228,0.0],[-123.612015,45.54718,228.51199999989058,0.0],[-123.611939,45.547283,230.48411152018005,0.0],[-123.611855,45.547412,233.72440960021234,0.0],[-123.611687,45.547489,232.14710128004953,0.0],[-123.611519,45.547538,227.66584576016666,0.0],[-123.611367,45.547637,226.13254336012068,0.0],[-123.611191,45.547908,230.14111936018097,0.0],[-123.610863,45.548149,230.07807247993725,0.0],[-123.610367,45.548355,226.1314535999453,0.0],[-123.609948,45.548587,225.39289792000224,0.0],[-123.609765,45.548656,222.67328639992118,0.0],[-123.60978,45.548645,222.6053760000451,0.0],[-123.60978,45.548645,222.6053760000451,0.0],[-123.609948,45.548522,222.90650752002247,0.0],[-123.610146,45.548377,221.88280000009013,0.0],[-123.610543,45.548107,216.68362896025084,0.0],[-123.610878,45.547836,215.33279999982733,0.0],[-123.611283,45.54721,210.08437280000172,0.0],[-123.611306,45.547,206.34991999991738,0.0],[-123.611558,45.546661,200.68360000003167,0.0],[-123.611588,45.54647,196.19439999995734,0.0],[-123.611588,45.546184,189.72479999990196,0.0],[-123.611313,45.546405,191.57055439995102,0.0],[-123.611016,45.546588,190.51010304018638,0.0],[-123.610688,45.546779,185.14963583991084,0.0],[-123.610566,45.546821,182.63858112019537,0.0],[-123.610505,45.546737,179.6092000000674,0.0],[-123.610482,45.546287,173.38134272008995,0.0],[-123.610512,45.546024,169.54111744007275,0.0],[-123.610589,45.545875,166.68160000013086,0.0],[-123.610795,45.54573,166.8573279999145,0.0],[-123.610932,45.545555,167.1199104001212,0.0],[-123.611054,45.545532,169.32496511993523,0.0],[-123.611207,45.545543,173.15919391987404,0.0],[-123.611306,45.545482,174.21563263997177,0.0],[-123.611268,45.545372,170.90316031991674,0.0],[-123.611138,45.545333,167.51648767992762,0.0],[-123.611084,45.545303,165.77966208007564,0.0],[-123.6111,45.545249,164.9989439997919,0.0],[-123.611306,45.545093,164.38489568002385,0.0],[-123.611748,45.544689,162.3320000001063,0.0],[-123.611794,45.544574,161.00720000002275,0.0],[-123.611764,45.544456,157.70239999977184,0.0],[-123.611649,45.544498,155.877875839941,0.0],[-123.61155,45.544643,157.0083679998963,0.0],[-123.611359,45.544746,155.35278944002297,0.0],[-123.611229,45.544712,153.02008959986253,0.0],[-123.611191,45.544589,149.23606480015414,0.0],[-123.611229,45.544456,146.6813247997637,0.0],[-123.61142,45.544281,146.80670079986788,0.0],[-123.611809,45.544139,150.32369487990758,0.0],[-123.611977,45.543956,147.78477759997565,0.0],[-123.612137,45.543598,141.9852000000658,0.0]]]}},
              {"type":"Feature","properties":{"id":"65fb6481-df5b-4a0f-bcfb-248e39ec5716","updated_date":"2018-11-27T22:27:47Z","time_created":"2018-11-27T22:27:04Z","last_updated_on_server":"2018-11-27T22:27:47.856","db_insert_date":"2018-11-27T22:27:04Z","deleted":false,"title":"Gnat Creek Hatchery Hike (short)","public":true,"color":"#ff0000","hexcolor":"#ff0000","is_active":true,"revision":70,"notes":"https://www.oregonhikers.org/field_guide/Gnat_Creek_Hike","track_type":"route","routing_mode":"pedestrian","uploaded_gpx_to_osm":null,"flag":null,"source":null,"cover_photo_id":null,"distance":7450.2559008006,"total_ascent":281.211050239196,"total_descent":283.378830239116,"stopped_time":0.0,"total_time":0.0,"average_speed":0,"moving_time":0.0,"moving_speed":0,"preferred_link":"/datasummary/track/65fb6481-df5b-4a0f-bcfb-248e39ec5716/","user_displayname":"taylor.morris","username":"taylor.morris@gmail.com","user_email":"taylor.morris@gmail.com","user_id":515547,"favorite_count":0,"comment_count":0,"user_photo_count":0,"latitude":46.156426789258866,"longitude":-123.48839377823585},"style":{"stroke":"#ff0000"},"geometry":{"type":"MultiLineString","coordinates":[[[-123.488091,46.168994,92.43726463998117,0.0],[-123.488114,46.168979,93.01618495992834,0.0],[-123.488152,46.16893,94.43365759994028,0.0],[-123.488167,46.168857,95.65948448006665,0.0],[-123.488183,46.168777,96.59159072013136,0.0],[-123.488183,46.168697,97.19132192009525,0.0],[-123.488175,46.16864,97.49743999994686,0.0],[-123.488167,46.168582,97.45795424006282,0.0],[-123.488167,46.168437,96.72652784003775,0.0],[-123.48819,46.168334,96.45556160004075,0.0],[-123.488221,46.168281,96.48618895995945,0.0],[-123.488236,46.168209,96.21043903998962,0.0],[-123.488259,46.168071,95.56112143998034,0.0],[-123.488266,46.16798,95.7871999999702,0.0],[-123.488266,46.167938,95.93839999997215,0.0],[-123.48819,46.167892,95.55680000001473,0.0],[-123.48806,46.167831,94.8404000000329,0.0],[-123.487999,46.167793,94.7192854399921,0.0],[-123.487954,46.167736,95.57722752005705,0.0],[-123.487961,46.167694,96.56547072005193,0.0],[-123.487946,46.167659,97.26150911994843,0.0],[-123.487916,46.167617,97.96762175999011,0.0],[-123.48774,46.167484,99.13119999997252,0.0],[-123.487649,46.167423,100.01320000004785,0.0],[-123.487603,46.167381,100.74039999997683,0.0],[-123.487595,46.167243,104.16040000001362,0.0],[-123.487572,46.167057,105.55382784000192,0.0],[-123.487572,46.166725,106.84443200000123,0.0],[-123.487549,46.166606,107.03852576000004,0.0],[-123.487488,46.166564,107.0,0.0],[-123.487465,46.166519,107.0,0.0],[-123.487343,46.16645,107.0,0.0],[-123.487275,46.166439,107.0,0.0],[-123.487252,46.166439,107.0,0.0],[-123.487252,46.166439,107.0,0.0],[-123.487198,46.166378,106.96080000000609,0.0],[-123.487053,46.166267,106.5611999999918,0.0],[-123.486901,46.166217,106.47798032000263,0.0],[-123.486764,46.166175,106.73019200002062,0.0],[-123.486542,46.166007,107.35458976000223,0.0],[-123.486443,46.165943,107.51789296002022,0.0],[-123.486374,46.165973,108.05920000001515,0.0],[-123.486344,46.165988,108.2751999999814,0.0],[-123.486222,46.165874,107.89360000002398,0.0],[-123.486153,46.165813,107.77599999999416,0.0],[-123.48597,46.165782,107.81520000000035,0.0],[-123.485901,46.165714,107.5704000000045,0.0],[-123.485848,46.165603,107.17079999999021,0.0],[-123.485825,46.165485,107.50800000002323,0.0],[-123.485817,46.165466,107.6447999999848,0.0],[-123.485856,46.165462,107.6736000000144,0.0],[-123.485955,46.165576,107.0736000000054,0.0],[-123.486153,46.165721,107.44479999998623,0.0],[-123.486306,46.165664,106.68880000000206,0.0],[-123.486352,46.165596,106.27840000001504,0.0],[-123.486367,46.165531,106.33703407998064,0.0],[-123.486359,46.16547,106.99845920002637,0.0],[-123.486321,46.165431,107.48001104001128,0.0],[-123.486329,46.165405,107.72474480000562,0.0],[-123.486344,46.165382,107.93503231998605,0.0],[-123.486397,46.165355,108.18708240001152,0.0],[-123.486443,46.165348,108.38715455996591,0.0],[-123.486413,46.165298,108.86208095999686,0.0],[-123.486306,46.165302,108.76442048002995,0.0],[-123.486275,46.165313,108.67158800001953,0.0],[-123.486245,46.165287,108.91759760000669,0.0],[-123.486252,46.165195,110.79229120004842,0.0],[-123.486268,46.165069,113.60700735991873,0.0],[-123.486222,46.165016,114.46441215995709,0.0],[-123.486107,46.164916,116.42952448004544,0.0],[-123.486046,46.164749,121.25139615998602,0.0],[-123.486039,46.164665,124.11347760001847,0.0],[-123.486054,46.164566,127.73962943998445,0.0],[-123.486092,46.164489,130.45376447988554,0.0],[-123.486107,46.164455,131.63423760010537,0.0],[-123.486046,46.164333,136.15235872002526,0.0],[-123.485924,46.164287,137.95980351994987,0.0],[-123.485901,46.164218,140.29178272006104,0.0],[-123.485787,46.164058,147.34629568014574,0.0],[-123.485634,46.163982,150.35307904014914,0.0],[-123.485474,46.163925,152.65726400005542,0.0],[-123.485352,46.163921,153.17617663988733,0.0],[-123.485245,46.163902,154.10320000003344,0.0],[-123.485146,46.163852,155.1136000000438,0.0],[-123.484887,46.163913,150.564399999962,0.0],[-123.484482,46.163799,151.5064000000939,0.0],[-123.484345,46.163688,153.28218880007523,0.0],[-123.484269,46.163581,154.92926543993414,0.0],[-123.484116,46.163425,155.2308000000918,0.0],[-123.484047,46.163356,154.98240000010503,0.0],[-123.484002,46.16323,156.18664320012485,0.0],[-123.483941,46.163097,157.28637984002427,0.0],[-123.483918,46.162967,159.25621024002803,0.0],[-123.48391,46.162849,161.230513599842,0.0],[-123.483857,46.162666,161.67920896000527,0.0],[-123.483811,46.162532,160.74980416011783,0.0],[-123.483864,46.162376,162.24159231990592,0.0],[-123.48391,46.162239,162.65739039985735,0.0],[-123.483948,46.162124,163.69270783995864,0.0],[-123.483948,46.162021,163.90569535995505,0.0],[-123.483941,46.161903,163.78880000003562,0.0],[-123.48391,46.161842,163.01119999990135,0.0],[-123.483849,46.161773,161.3776000001494,0.0],[-123.483826,46.161731,160.64679999984583,0.0],[-123.483819,46.161586,159.94839999992087,0.0],[-123.483826,46.16143,159.56319999984464,0.0],[-123.483857,46.161342,159.7287564799868,0.0],[-123.484093,46.16122,162.85000000002742,0.0],[-123.484368,46.16109,166.20983040009006,0.0],[-123.484627,46.160949,168.1679419201082,0.0],[-123.484734,46.160892,169.39520000003415,0.0],[-123.484871,46.160831,172.24220191998188,0.0],[-123.484986,46.160781,174.4853907201758,0.0],[-123.485169,46.160633,177.14839999990818,0.0],[-123.485329,46.160499,180.1238876797777,0.0],[-123.485436,46.160385,182.98386880024745,0.0],[-123.485505,46.160354,185.37228160011887,0.0],[-123.485734,46.160255,191.97519999981319,0.0],[-123.486069,46.160114,198.91120000001206,0.0],[-123.486168,46.160095,200.5732416000863,0.0],[-123.48629,46.160068,202.22325119997498,0.0],[-123.48639,46.159965,202.511999999997,0.0],[-123.486489,46.159847,202.23840000007385,0.0],[-123.486519,46.159725,200.91360000004215,0.0],[-123.486481,46.159641,198.8628795199706,0.0],[-123.486413,46.159595,196.71846320004104,0.0],[-123.48626,46.159538,191.6213503999823,0.0],[-123.486176,46.159515,188.78213119998227,0.0],[-123.486146,46.159473,186.80137664009834,0.0],[-123.486138,46.159408,185.10569983989438,0.0],[-123.486428,46.159286,190.4025753601127,0.0],[-123.486764,46.159164,193.69727231982597,0.0],[-123.486817,46.159137,194.05639968006153,0.0],[-123.486855,46.159061,192.9721776001134,0.0],[-123.486878,46.15903,192.59537280009445,0.0],[-123.486931,46.159038,193.56043776003827,0.0],[-123.486969,46.159008,193.670894080055,0.0],[-123.487099,46.158946,195.77600416002315,0.0],[-123.487237,46.158863,198.34888351967578,0.0],[-123.487381,46.158676,201.68385151996623,0.0],[-123.487496,46.158592,204.306590719715,0.0],[-123.487626,46.158512,206.06615552023686,0.0],[-123.487748,46.15834,204.3558271999759,0.0],[-123.487877,46.158184,203.17273855989092,0.0],[-123.488022,46.158,201.65104000003288,0.0],[-123.488144,46.157901,203.20528448014866,0.0],[-123.488228,46.157855,204.2831648000982,0.0],[-123.488297,46.157749,204.3188982400562,0.0],[-123.488312,46.157722,204.58515711987184,0.0],[-123.488312,46.157722,204.58515711987184,0.0],[-123.488366,46.15763,205.4628735999864,0.0],[-123.488366,46.157577,205.41799743999252,0.0],[-123.488328,46.157474,204.4029913599048,0.0],[-123.488297,46.157421,202.77399856005295,0.0],[-123.48832,46.157299,201.15019840006096,0.0],[-123.488358,46.15718,200.2436928000745,0.0],[-123.488465,46.1571,202.08168000009672,0.0],[-123.488587,46.156993,205.0883179198941,0.0],[-123.48877,46.156898,208.24051520003655,0.0],[-123.488877,46.156841,210.153383840041,0.0],[-123.489029,46.1567,213.34147200003395,0.0],[-123.489228,46.156558,215.65919999995663,0.0],[-123.489342,46.156478,215.90399999995248,0.0],[-123.489388,46.156433,215.91120000003662,0.0],[-123.489411,46.156387,215.7371625600558,0.0],[-123.489419,46.156318,215.00444735996916,0.0],[-123.489434,46.156063,212.6764000000519,0.0],[-123.489487,46.155971,212.72472591998732,0.0],[-123.489609,46.155879,212.8541905599993,0.0],[-123.48993,46.155784,212.86715519999132,0.0],[-123.489983,46.155746,212.7048412800075,0.0],[-123.490006,46.155658,212.36880000000906,0.0],[-123.489884,46.155509,212.34761023999258,0.0],[-123.489823,46.155479,212.46158767999611,0.0],[-123.489731,46.155387,212.3807748799826,0.0],[-123.489655,46.155303,212.09080000001268,0.0],[-123.489586,46.155185,212.0064128000064,0.0],[-123.489579,46.155078,211.9775609600325,0.0],[-123.489563,46.155021,211.86466784002528,0.0],[-123.489533,46.154941,211.91771311995157,0.0],[-123.489586,46.15485,212.83438400000733,0.0],[-123.489647,46.154788,213.7781254400286,0.0],[-123.489625,46.154758,213.73748000003246,0.0],[-123.489541,46.154758,212.86922912002242,0.0],[-123.489495,46.154762,212.3767376000609,0.0],[-123.48948,46.154743,212.29962559998995,0.0],[-123.48948,46.154697,212.39562240000458,0.0],[-123.489487,46.15427,216.91259040004124,0.0],[-123.48948,46.154052,221.3423232000015,0.0],[-123.48948,46.153964,222.84522239996804,0.0],[-123.489495,46.153846,224.15389920001655,0.0],[-123.489487,46.153724,224.06226047999374,0.0],[-123.489464,46.153602,223.81012735998578,0.0],[-123.489441,46.153442,220.28789823995226,0.0],[-123.489457,46.153305,217.93160000003968,0.0],[-123.489441,46.153163,216.71639631998391,0.0],[-123.48935,46.153125,214.88500000005348,0.0],[-123.489266,46.153129,213.48665056000956,0.0],[-123.489167,46.153114,211.636947519934,0.0],[-123.489052,46.153034,208.12393344002516,0.0],[-123.488999,46.152957,206.70128544019047,0.0],[-123.488701,46.152664,197.99840000016889,0.0],[-123.488488,46.15237,195.68436480009373,0.0],[-123.488312,46.151935,196.96242239997082,0.0],[-123.488259,46.151706,198.05021568001703,0.0],[-123.488274,46.151626,198.16101311997912,0.0],[-123.48832,46.15155,197.68847999998755,0.0],[-123.488373,46.151428,197.73210623994774,0.0],[-123.488411,46.151203,197.9312916799936,0.0],[-123.488419,46.150932,197.92519999992737,0.0],[-123.488404,46.150756,197.13557504003663,0.0],[-123.488457,46.150573,196.04395855998865,0.0],[-123.488457,46.150428,195.22676415997194,0.0],[-123.488511,46.150283,194.67042448001962,0.0],[-123.488579,46.150157,194.88440000000514,0.0],[-123.488617,46.150001,195.04270528003696,0.0],[-123.488663,46.149898,194.5706070400172,0.0],[-123.48874,46.149787,194.0386048000619,0.0],[-123.488755,46.149608,193.9143967999963,0.0],[-123.488823,46.14952,194.10816320000148,0.0],[-123.488869,46.149436,194.13675328001167,0.0],[-123.488923,46.149318,194.74270431999554,0.0],[-123.488968,46.149234,194.8679065600018,0.0],[-123.489075,46.149181,193.99051600000297,0.0],[-123.489136,46.149131,193.21697535996776,0.0],[-123.489136,46.149108,193.1433164799711,0.0],[-123.489121,46.149013,193.03094608002465,0.0],[-123.489083,46.148948,193.3535046400786,0.0],[-123.489052,46.148838,194.04955008000502,0.0],[-123.489075,46.148719,194.75114400000444,0.0],[-123.489121,46.148666,194.80097088003683,0.0],[-123.489266,46.148574,194.50937535993788,0.0],[-123.489434,46.148479,194.47291743994222,0.0],[-123.489533,46.148384,195.624847360028,0.0],[-123.489693,46.148258,195.80986047998857,0.0],[-123.489754,46.148151,196.1233078399803,0.0],[-123.489838,46.147991,196.53433567996586,0.0],[-123.489876,46.147846,196.98396416003993,0.0],[-123.489922,46.147632,197.8919999999125,0.0],[-123.490037,46.147499,197.7475204799462,0.0],[-123.490181,46.147388,198.04687487994778,0.0],[-123.490204,46.147388,197.8478899199582,0.0],[-123.490471,46.147239,198.8188000000107,0.0],[-123.490876,46.147014,202.1137843200175,0.0],[-123.491028,46.146938,203.00931712000192,0.0],[-123.491227,46.14685,204.0408959999657,0.0],[-123.491334,46.146804,205.11938687993404,0.0],[-123.491585,46.146678,207.64120959999426,0.0],[-123.491753,46.146526,211.8134108799944,0.0],[-123.491936,46.146411,215.53878015995693,0.0],[-123.492157,46.146301,216.6327999999919,0.0],[-123.49247,46.146236,216.2087999999967,0.0],[-123.492768,46.146228,216.15839999999503,0.0],[-123.49302,46.146163,217.60373760002142,0.0],[-123.493187,46.146095,217.89150880004956,0.0],[-123.493378,46.146011,218.64569536006934,0.0],[-123.493645,46.1459,219.14055999996557,0.0],[-123.493905,46.145797,218.99278639999085,0.0],[-123.494072,46.145721,220.1805804800258,0.0],[-123.494072,46.145668,220.11555584002622,0.0],[-123.493805,46.145576,218.0513727999945,0.0],[-123.493645,46.145439,219.30999119996517,0.0],[-123.493615,46.145309,220.67522640004495,0.0],[-123.493645,46.145191,222.05920000003562,0.0],[-123.493744,46.145046,223.98160000001656,0.0],[-123.494118,46.144588,228.30211328000672,0.0],[-123.494332,46.144348,231.96774655999002,0.0],[-123.494408,46.144096,235.56755456006658,0.0],[-123.494439,46.143997,236.8171433600125,0.0],[-123.494561,46.14392,237.3383903999768,0.0],[-123.494744,46.143764,239.54870272007523,0.0],[-123.494805,46.14368,240.76580799993917,0.0],[-123.494881,46.143444,244.550925439869,0.0],[-123.494881,46.143444,244.550925439869,0.0],[-123.494805,46.14368,240.76580799993917,0.0],[-123.494744,46.143764,239.54870272007523,0.0],[-123.494561,46.14392,237.3383903999768,0.0],[-123.494439,46.143997,236.8171433600125,0.0],[-123.494408,46.144096,235.56755456006658,0.0],[-123.494332,46.144348,231.96774655999002,0.0],[-123.494118,46.144588,228.30211328000672,0.0],[-123.493744,46.145046,223.98160000001656,0.0],[-123.493645,46.145191,222.05920000003562,0.0],[-123.493615,46.145309,220.67522640004495,0.0],[-123.493645,46.145439,219.30999119996517,0.0],[-123.493805,46.145576,218.0513727999945,0.0],[-123.494072,46.145668,220.11555584002622,0.0],[-123.494072,46.145721,220.1805804800258,0.0],[-123.493905,46.145797,218.99278639999085,0.0],[-123.493645,46.1459,219.14055999996557,0.0],[-123.493378,46.146011,218.64569536006934,0.0],[-123.493187,46.146095,217.89150880004956,0.0],[-123.49302,46.146163,217.60373760002142,0.0],[-123.492768,46.146228,216.15839999999503,0.0],[-123.49247,46.146236,216.2087999999967,0.0],[-123.492157,46.146301,216.6327999999919,0.0],[-123.491936,46.146411,215.53878015995693,0.0],[-123.491753,46.146526,211.8134108799944,0.0],[-123.491585,46.146678,207.64120959999426,0.0],[-123.491334,46.146804,205.11938687993404,0.0],[-123.491227,46.14685,204.0408959999657,0.0],[-123.491028,46.146938,203.00931712000192,0.0],[-123.490876,46.147014,202.1137843200175,0.0],[-123.490471,46.147239,198.8188000000107,0.0],[-123.490204,46.147388,197.8478899199582,0.0],[-123.490181,46.147388,198.04687487994778,0.0],[-123.490037,46.147499,197.7475204799462,0.0],[-123.489922,46.147632,197.8919999999125,0.0],[-123.489876,46.147846,196.98396416003993,0.0],[-123.489838,46.147991,196.53433567996586,0.0],[-123.489754,46.148151,196.1233078399803,0.0],[-123.489693,46.148258,195.80986047998857,0.0],[-123.489533,46.148384,195.624847360028,0.0],[-123.489434,46.148479,194.47291743994222,0.0],[-123.489266,46.148574,194.50937535993788,0.0],[-123.489121,46.148666,194.80097088003683,0.0],[-123.489075,46.148719,194.75114400000444,0.0],[-123.489052,46.148838,194.04955008000502,0.0],[-123.489083,46.148948,193.3535046400786,0.0],[-123.489121,46.149013,193.03094608002465,0.0],[-123.489136,46.149108,193.1433164799711,0.0],[-123.489136,46.149131,193.21697535996776,0.0],[-123.489075,46.149181,193.99051600000297,0.0],[-123.488968,46.149234,194.8679065600018,0.0],[-123.488923,46.149318,194.74270431999554,0.0],[-123.488869,46.149436,194.13675328001167,0.0],[-123.488823,46.14952,194.10816320000148,0.0],[-123.488755,46.149608,193.9143967999963,0.0],[-123.48874,46.149787,194.0386048000619,0.0],[-123.488663,46.149898,194.5706070400172,0.0],[-123.488617,46.150001,195.04270528003696,0.0],[-123.488579,46.150157,194.88440000000514,0.0],[-123.488511,46.150283,194.67042448001962,0.0],[-123.488457,46.150428,195.22676415997194,0.0],[-123.488457,46.150573,196.04395855998865,0.0],[-123.488404,46.150756,197.13557504003663,0.0],[-123.488419,46.150932,197.92519999992737,0.0],[-123.488411,46.151203,197.9312916799936,0.0],[-123.488373,46.151428,197.73210623994774,0.0],[-123.48832,46.15155,197.68847999998755,0.0],[-123.488274,46.151626,198.16101311997912,0.0],[-123.488259,46.151706,198.05021568001703,0.0],[-123.488312,46.151935,196.96242239997082,0.0],[-123.488488,46.15237,195.68436480009373,0.0],[-123.488701,46.152664,197.99840000016889,0.0],[-123.488999,46.152957,206.70128544019047,0.0],[-123.489052,46.153034,208.12393344002516,0.0],[-123.489167,46.153114,211.636947519934,0.0],[-123.489266,46.153129,213.48665056000956,0.0],[-123.48935,46.153125,214.88500000005348,0.0],[-123.489441,46.153163,216.71639631998391,0.0],[-123.489457,46.153305,217.93160000003968,0.0],[-123.489441,46.153442,220.28789823995226,0.0],[-123.489464,46.153602,223.81012735998578,0.0],[-123.489487,46.153724,224.06226047999374,0.0],[-123.489495,46.153846,224.15389920001655,0.0],[-123.48948,46.153964,222.84522239996804,0.0],[-123.48948,46.154052,221.3423232000015,0.0],[-123.489487,46.15427,216.91259040004124,0.0],[-123.48948,46.154697,212.39562240000458,0.0],[-123.48948,46.154743,212.29962559998995,0.0],[-123.489495,46.154762,212.3767376000609,0.0],[-123.489541,46.154758,212.86922912002242,0.0],[-123.489625,46.154758,213.73748000003246,0.0],[-123.489647,46.154788,213.7781254400286,0.0],[-123.489586,46.15485,212.83438400000733,0.0],[-123.489533,46.154941,211.91771311995157,0.0],[-123.489563,46.155021,211.86466784002528,0.0],[-123.489579,46.155078,211.9775609600325,0.0],[-123.489586,46.155185,212.0064128000064,0.0],[-123.489655,46.155303,212.09080000001268,0.0],[-123.489731,46.155387,212.3807748799826,0.0],[-123.489823,46.155479,212.46158767999611,0.0],[-123.489884,46.155509,212.34761023999258,0.0],[-123.490006,46.155658,212.36880000000906,0.0],[-123.489983,46.155746,212.7048412800075,0.0],[-123.48993,46.155784,212.86715519999132,0.0],[-123.489609,46.155879,212.8541905599993,0.0],[-123.489487,46.155971,212.72472591998732,0.0],[-123.489434,46.156063,212.6764000000519,0.0],[-123.489419,46.156318,215.00444735996916,0.0],[-123.489411,46.156387,215.7371625600558,0.0],[-123.489388,46.156433,215.91120000003662,0.0],[-123.489342,46.156478,215.90399999995248,0.0],[-123.489228,46.156558,215.65919999995663,0.0],[-123.489029,46.1567,213.34147200003395,0.0],[-123.488877,46.156841,210.153383840041,0.0],[-123.48877,46.156898,208.24051520003655,0.0],[-123.488587,46.156993,205.0883179198941,0.0],[-123.488465,46.1571,202.08168000009672,0.0],[-123.488358,46.15718,200.2436928000745,0.0],[-123.48832,46.157299,201.15019840006096,0.0],[-123.488297,46.157421,202.77399856005295,0.0],[-123.488328,46.157474,204.4029913599048,0.0],[-123.488366,46.157577,205.41799743999252,0.0],[-123.488366,46.15763,205.4628735999864,0.0],[-123.488297,46.157749,204.3188982400562,0.0],[-123.488228,46.157855,204.2831648000982,0.0],[-123.488144,46.157901,203.20528448014866,0.0],[-123.488022,46.158,201.65104000003288,0.0],[-123.487877,46.158184,203.17273855989092,0.0],[-123.487748,46.15834,204.3558271999759,0.0],[-123.487626,46.158512,206.06615552023686,0.0],[-123.487496,46.158592,204.306590719715,0.0],[-123.487381,46.158676,201.68385151996623,0.0],[-123.487237,46.158863,198.34888351967578,0.0],[-123.487099,46.158946,195.77600416002315,0.0],[-123.486969,46.159008,193.670894080055,0.0],[-123.486931,46.159038,193.56043776003827,0.0],[-123.486878,46.15903,192.59537280009445,0.0],[-123.486855,46.159061,192.9721776001134,0.0],[-123.486817,46.159137,194.05639968006153,0.0],[-123.486764,46.159164,193.69727231982597,0.0],[-123.486428,46.159286,190.4025753601127,0.0],[-123.486138,46.159408,185.10569983989438,0.0],[-123.486146,46.159473,186.80137664009834,0.0],[-123.486176,46.159515,188.78213119998227,0.0],[-123.48626,46.159538,191.6213503999823,0.0],[-123.486413,46.159595,196.71846320004104,0.0],[-123.486481,46.159641,198.8628795199706,0.0],[-123.486519,46.159725,200.91360000004215,0.0],[-123.486489,46.159847,202.23840000007385,0.0],[-123.48639,46.159965,202.511999999997,0.0],[-123.48629,46.160068,202.22325119997498,0.0],[-123.486168,46.160095,200.5732416000863,0.0],[-123.486069,46.160114,198.91120000001206,0.0],[-123.485734,46.160255,191.97519999981319,0.0],[-123.485505,46.160354,185.37228160011887,0.0],[-123.485436,46.160385,182.98386880024745,0.0],[-123.485329,46.160499,180.1238876797777,0.0],[-123.485169,46.160633,177.14839999990818,0.0],[-123.484986,46.160781,174.4853907201758,0.0],[-123.484871,46.160831,172.24220191998188,0.0],[-123.484734,46.160892,169.39520000003415,0.0],[-123.484627,46.160949,168.1679419201082,0.0],[-123.484368,46.16109,166.20983040009006,0.0],[-123.484093,46.16122,162.85000000002742,0.0],[-123.483857,46.161342,159.7287564799868,0.0],[-123.483826,46.16143,159.56319999984464,0.0],[-123.483819,46.161586,159.94839999992087,0.0],[-123.483826,46.161731,160.64679999984583,0.0],[-123.483849,46.161773,161.3776000001494,0.0],[-123.48391,46.161842,163.01119999990135,0.0],[-123.483941,46.161903,163.78880000003562,0.0],[-123.483948,46.162021,163.90569535995505,0.0],[-123.483948,46.162124,163.69270783995864,0.0],[-123.48391,46.162239,162.65739039985735,0.0],[-123.483864,46.162376,162.24159231990592,0.0],[-123.483811,46.162532,160.74980416011783,0.0],[-123.483857,46.162666,161.67920896000527,0.0],[-123.48391,46.162849,161.230513599842,0.0],[-123.483918,46.162967,159.25621024002803,0.0],[-123.483941,46.163097,157.28637984002427,0.0],[-123.484002,46.16323,156.18664320012485,0.0],[-123.484047,46.163356,154.98240000010503,0.0],[-123.484116,46.163425,155.2308000000918,0.0],[-123.484269,46.163581,154.92926543993414,0.0],[-123.484345,46.163688,153.28218880007523,0.0],[-123.484482,46.163799,151.5064000000939,0.0],[-123.484887,46.163913,150.564399999962,0.0],[-123.485146,46.163852,155.1136000000438,0.0],[-123.485245,46.163902,154.10320000003344,0.0],[-123.485352,46.163921,153.17617663988733,0.0],[-123.485474,46.163925,152.65726400005542,0.0],[-123.485634,46.163982,150.35307904014914,0.0],[-123.485787,46.164058,147.34629568014574,0.0],[-123.485901,46.164218,140.29178272006104,0.0],[-123.485924,46.164287,137.95980351994987,0.0],[-123.486046,46.164333,136.15235872002526,0.0],[-123.486107,46.164455,131.63423760010537,0.0],[-123.486092,46.164489,130.45376447988554,0.0],[-123.486054,46.164566,127.73962943998445,0.0],[-123.486039,46.164665,124.11347760001847,0.0],[-123.486046,46.164749,121.25139615998602,0.0],[-123.486107,46.164916,116.42952448004544,0.0],[-123.486222,46.165016,114.46441215995709,0.0],[-123.486268,46.165069,113.60700735991873,0.0],[-123.486252,46.165195,110.79229120004842,0.0],[-123.486245,46.165287,108.91759760000669,0.0],[-123.486275,46.165313,108.67158800001953,0.0],[-123.486306,46.165302,108.76442048002995,0.0],[-123.486413,46.165298,108.86208095999686,0.0],[-123.486443,46.165348,108.38715455996591,0.0],[-123.486397,46.165355,108.18708240001152,0.0],[-123.486344,46.165382,107.93503231998605,0.0],[-123.486329,46.165405,107.72474480000562,0.0],[-123.486321,46.165431,107.48001104001128,0.0],[-123.486359,46.16547,106.99845920002637,0.0],[-123.486367,46.165531,106.33703407998064,0.0],[-123.486352,46.165596,106.27840000001504,0.0],[-123.486306,46.165664,106.68880000000206,0.0],[-123.486153,46.165721,107.44479999998623,0.0],[-123.485955,46.165576,107.0736000000054,0.0],[-123.485856,46.165462,107.6736000000144,0.0],[-123.485817,46.165466,107.6447999999848,0.0],[-123.485825,46.165485,107.50800000002323,0.0],[-123.485848,46.165603,107.17079999999021,0.0],[-123.485901,46.165714,107.5704000000045,0.0],[-123.48597,46.165782,107.81520000000035,0.0],[-123.486153,46.165813,107.77599999999416,0.0],[-123.486222,46.165874,107.89360000002398,0.0],[-123.486344,46.165988,108.2751999999814,0.0],[-123.486374,46.165973,108.05920000001515,0.0],[-123.486443,46.165943,107.51789296002022,0.0],[-123.486542,46.166007,107.35458976000223,0.0],[-123.486764,46.166175,106.73019200002062,0.0],[-123.486901,46.166217,106.47798032000263,0.0],[-123.487053,46.166267,106.5611999999918,0.0],[-123.487198,46.166378,106.96080000000609,0.0],[-123.487252,46.166439,107.0,0.0],[-123.487275,46.166439,107.0,0.0],[-123.487343,46.16645,107.0,0.0],[-123.487465,46.166519,107.0,0.0],[-123.487488,46.166564,107.0,0.0],[-123.487549,46.166606,107.03852576000004,0.0],[-123.487572,46.166725,106.84443200000123,0.0],[-123.487572,46.167057,105.55382784000192,0.0],[-123.487595,46.167243,104.16040000001362,0.0],[-123.487603,46.167381,100.74039999997683,0.0],[-123.487649,46.167423,100.01320000004785,0.0],[-123.48774,46.167484,99.13119999997252,0.0],[-123.487916,46.167617,97.96762175999011,0.0],[-123.487946,46.167659,97.26150911994843,0.0],[-123.487961,46.167694,96.56547072005193,0.0],[-123.487954,46.167736,95.57722752005705,0.0],[-123.487999,46.167793,94.7192854399921,0.0],[-123.48806,46.167831,94.8404000000329,0.0],[-123.48819,46.167892,95.55680000001473,0.0],[-123.488266,46.167938,95.93839999997215,0.0],[-123.488266,46.16798,95.7871999999702,0.0],[-123.488259,46.168071,95.56112143998034,0.0],[-123.488236,46.168209,96.21043903998962,0.0],[-123.488221,46.168281,96.48618895995945,0.0],[-123.48819,46.168334,96.45556160004075,0.0],[-123.488167,46.168437,96.72652784003775,0.0],[-123.488167,46.168582,97.45795424006282,0.0],[-123.488175,46.16864,97.49743999994686,0.0],[-123.488183,46.168697,97.19132192009525,0.0],[-123.488183,46.168777,96.59159072013136,0.0],[-123.488167,46.168857,95.65948448006665,0.0],[-123.488152,46.16893,94.43365759994028,0.0],[-123.488114,46.168979,93.01618495992834,0.0],[-123.487999,46.169059,90.26948464006105,0.0]]]}}
            ]
          }

      },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#c20ed5",
            "line-width": 1.5
        }
    });
  });

    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = `<div class="popups"><h3>${e.features[0].properties.name}</h3> <h4>Drive time from Portland: ${e.features[0].properties.driveTime}</h4><a href=${e.features[0].properties.url}>Oregon Hikers</a></div>`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseenter', 'route', function (e) {
        var coordinates = e.features[0].geometry.coordinates[0].slice();
        var distanceMiles = parseFloat(e.features[0].properties.distance * .000621371).toFixed(2);
        var description = `<div class="popups"><h3>${e.features[0].properties.title}</h3><a href=https://gaiagps.com${e.features[0].properties.preferred_link}>Gaia Maps Route</a>
        <h4>Distance: ${distanceMiles} miles</div>`;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // 2018-11-21 TODONE: ok good job good effort! Don't forget to load in your API key when you start again. Figure out a plan for process.env stuff later for deployment. The map is loading adhoc geojson features and mapping them! The popups are working and building small HTML snippets with template strings for features.props. Math.abs code around line 48 came from Mapbox's docs.
    //
    // You need to work on cleaning and normalizing the data from combo.js. It's close but not a perfect match for the GeoJSON data used here. Once you have that data outputting how you want, expect to just dump it in here. New trailheads don't spring up everyday and right now you're working on something resembling 'MVP' so have fun with it and don't get too hung up on that part. Once you have that data, you have that data.
    //
    // Next big steps are adding in all of the trailheads after readying the data, editing Mapbox map to highlight trails and FS roads, getting launch data from state's website, standing it up?
    //
    // 2018-11-22 TODO: You got the URL and Info scrapers working in separate files. Using request-promise-native now. Constructor makes the data GeoJSON compliant. The trailheads are all loading to the map! API key removed again.
    //
    //  Next steps: editing Mapbox map to highlight trails and FS roads, getting launch data from state's website, ~getting GAIA routes geoJSON (are they lines?) and adding for interesting hikes/fishing in the area, standing it up?
