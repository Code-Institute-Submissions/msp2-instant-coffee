


//Map & Markers 

      /* function initMap() {
            let map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: 54.973978,
                    lng: -1.613225
                },
                mapTypeId: "roadmap",
            });
    
            let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

            let locations = [
                //North East
                { lat: 55.671262, lng: -1.801049 },
                { lat: 54.994902, lng: -1.605828 },
                { lat: 54.986690, lng: -1.576851 },
                { lat: 54.975140, lng: -1.612531 },
                { lat: 54.976174, lng: -1.608318 },
                { lat: 54.973158, lng: -1.608064 },
                { lat: 54.971661, lng: -1.612712 },
                { lat: 54.508650, lng: -1.353513 },
                
                //Cumbria etc
                { lat: 54.508650, lng: -1.353513 },
                { lat: 54.377713, lng: -2.906120 },
                { lat: 54.377274, lng: -2.814145 },
                { lat: 54.049218, lng: -2.802881 },
                { lat: 54.049256, lng: -2.802413 },
                { lat: 53.872840, lng: -2.389402 },
                { lat: 53.879154, lng: -2.357658 },
                { lat: 53.753997, lng: -2.361750 },
                { lat: 53.747422, lng: -2.483861 },
                { lat: 53.760124, lng: -2.697572 },
                { lat: 53.757319, lng: -2.701515 },
                { lat: 53.648704, lng: -2.317076 },
                { lat: 53.479008, lng: -3.023117 },
                { lat: 53.403720, lng: -2.982081 },
                { lat: 53.402568, lng: -2.976352 },
                { lat: 53.401643, lng: -2.970013 },
                { lat: 53.423715, lng: -3.064382 },
                { lat: 53.412316, lng: -3.051291 },
                { lat: 53.416660, lng: -2.766256 },
                { lat: 53.047751, lng: -2.995620 },
                { lat: 53.326339, lng: -3.832241 },
                { lat: 53.524012, lng: -2.492864 },

                //Greater Manchester
                { lat: 53.524012, lng: -2.492864 },
                { lat: 53.482404, lng: -2.234001 },
                { lat: 53.482664, lng: -2.235285 },
                { lat: 53.484630, lng: -2.235886 },
                { lat: 53.482940, lng: -2.246025 },
                { lat: 53.481047, lng: -2.248874 },
                { lat: 53.474249, lng: -2.248368 },
                { lat: 53.473241, lng: -2.299898 },
                { lat: 53.447484, lng: -2.291862 },
                { lat: 53.391458, lng: -2.237584 },
                { lat: 53.387755, lng: -2.351209 },

                //North & West Yorkshire
                { lat: 54.573861, lng: -1.235452 },
                { lat: 54.282099, lng: -0.398634 },
                { lat: 54.121175, lng: -1.191946 },
                { lat: 53.961204, lng: -1.084948 },
                { lat: 53.960775, lng: -1.085216 },
                { lat: 53.960291, lng: -1.084643 },
                { lat: 53.960350, lng: -1.079545 },
                { lat: 53.958352, lng: -1.077916 },
                { lat: 53.958501, lng: -1.078034 },
                { lat: 53.997376, lng: -1.529658 },
                { lat: 53.995273, lng: -1.538644 },
                { lat: 53.993854, lng: -1.541916 },
                { lat: 53.993085, lng: -1.545396 },
                { lat: 54.071229, lng: -2.009590 },
                { lat: 54.069449, lng: -2.283512 },
                { lat: 53.961639, lng: -2.015063 },
                { lat: 53.926304, lng: -1.820899 },
                { lat: 53.905881, lng: -1.693948 },
                { lat: 53.903263, lng: -1.690022 },
                { lat: 53.835040, lng: -1.791734 },
                { lat: 53.823623, lng: -1.578866 },
                { lat: 53.826568, lng: -1.534630 },
                { lat: 53.801004, lng: -1.550383 },
                { lat: 53.798115, lng: -1.547495 },
                { lat: 53.799002, lng: -1.541744 },
                { lat: 53.798146, lng: -1.547212 },
                { lat: 53.795471, lng: -1.545054 },
                { lat: 53.793610, lng: -1.548380 },
                { lat: 53.791657, lng: -1.552947 },
                { lat: 53.791398, lng: -1.537144 },
                { lat: 53.647745, lng: -1.781266 },
                { lat: 53.647159, lng: -1.781329 },
                { lat: 53.621275, lng: -1.885280 },
                { lat: 53.569765, lng: -1.789023 },

                //South & East Yorkshire
                { lat: 54.082697, lng: -0.191764 },
                { lat: 53.743182, lng: -0.337417 },
                { lat: 53.742474, lng: -0.333668 },
                { lat: 53.739130, lng: -0.335426 },
                { lat: 53.392876, lng: -1.475659 },
                { lat: 53.380577, lng: -1.476201 },
                { lat: 53.381213, lng: -1.467701 },
                { lat: 53.377431, lng: -1.467195 },
                { lat: 53.230442, lng: -0.539333 },
                { lat: 53.229315, lng: -0.540370 }


                
                ];

            let markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location, 
                    label: labels[i % labels.length]
                });
            });

             let markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
/*

let modal = document.getElementById('#tickets'); 

let btn = document.getElementById('#click-this');

btn.onclick = function() {
    modal.style.display = 'block';
}#

*/
function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.973978, lng: -1.613225 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  
  const input = document.getElementById("type-location");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
  
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
    
  });
}



