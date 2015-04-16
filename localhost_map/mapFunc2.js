
var markers = [];
var map;

//--------------------- SKAPAR MARKERSARRAYEN FRÅN DATABASEN ----------------------------------------

function createMarkerArray(markerData,markersTemp) {
    for (var i = 0; i < markerData.length; i++) {
        var currentMarker = [];
        currentMarker.latitude = markerData[i].Latitude;
        currentMarker.longitude = markerData[i].Longitude;
        currentMarker.description = markerData[i].Description;
        currentMarker.category = markerData[i].Category;
        currentMarker.picture = markerData[i].Picture;
        currentMarker.title = markerData[i].title;
        markersTemp.push(currentMarker); // Detta lägger in markern som objekt i array kallad markers som kan kommas åt överallt
    }
}


//------------------------SKAPAR INFOWINDOW-------------------------------------------------
function createInfoWindow(markers) {
    console.log("infowindow()");
    for (var i = 0; i < markers.length; i++) {
        console.log("infowindow(index)"+ i);
        markers[i].contentstring = '<div id="content">' +
        '<h1 >' + markers[i].category + '</h1>' +
        '<div id="bodyContent">' +
        '<p>' + markers[i].description + '<br><br><img id="thumbnail" src="' + markers[i].picture + '"> </p>' +
        '</div>' +
        '</div>';
    }
}

//------------------------SÄTTER UT MARKERS FRÅN ARRAYEN TILL KARTAN-----------------------------
function markersToMap(markers) {

        console.log(markers);
        for (var i = 0; i < markers.length; i++) {

                console.log("infowindow2(index)" + i);
                markers[i].postion = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);

                var infowindow = new google.maps.InfoWindow({
                    content: markers[i].contentstring
                });

                var icon = markers[i].category + ".png"; //För att en marker ska få rätt ikon efter kategori måste bildfilen heta sin kategori och vara i png-format.
                var newMarker = new google.maps.Marker({
                    position: markers[i].postion,
                    map: map,
                    icon: icon,
                    title: markers[i].contentstring,
                    animation: google.maps.Animation.DROP
                });

                markers[i].marker = newMarker; // markers.marker kommer åt googlemaps-markern som objekt, tex markers[index].marker.setMap(null)

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent(this.title);
                    infowindow.open(map, this);

                });
            }

    }

//-------------------SIDAN LADDAS OCH SKAPAR EN MAP -----------------------------

        function onloading() {
            // KARTAN LADDAS IN
            var mapCenter = new google.maps.LatLng(59.858056, 17.644722);
            var mapOptions = {
                center: mapCenter,
                zoom: 13,
                scrollwheel: false
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);


//-------------HÄMTAR JSON OBJEKT--------------------------------------------------------------

            $.ajax({
                type: "GET",
                url: "getdata.php",
                dataType: "json",
                success: function (data) {
                    createMarkerArray(data, markers);
                }
            });


            createInfoWindow(markers);

            console.log("markersToMap()");
            markersToMap(markers);
            console.log("markersToMap()klar ");
        };


//-------------------------- ÖVRIGA FUNKTIONER--------------------------------------

        function hideCategory(category) {
            for (i = 0; i < markers.length; i++) {
                if (markers[i].category == category) {
                    markers[i].marker.setMap(null);
                }
            }
        }

        function showCategory(category) {
            for (i = 0; i < markers.length; i++) {
                if (markers[i].category == category) {
                    markers[i].marker.setMap(map);
                }
            }
        }

        function switchCheckbox(checkBox) {
            if (checkBox.checked) {
                showCategory(checkBox.value);
            }
            else {
                hideCategory(checkBox.value);
            }
        }



//-----------FUNKTION FÖR ATT PLACERA UT MARKER MANUELLT---------------
/*  var markersArray = [];
 google.maps.event.addListener(map, 'click', function(event) {
 placeMarker(event.latLng);
 document.getElementById("latFld").value = event.latLng.lat();
 document.getElementById("lngFld").value = event.latLng.lng();

 });



 function placeMarker(location) {
 // first remove all markers if there are any
 deleteOverlays();

 var marker = new google.maps.Marker({
 position: location,
 map: map,
 draggable :true
 });

 markersArray.push(marker);
 google.maps.event.addListener(marker, 'drag', function(event) {

 document.getElementById("latFld").value = event.latLng.lat();
 document.getElementById("lngFld").value = event.latLng.lng()

 })

 }

 function deleteOverlays() {
 if (markersArray) {
 for (i in markersArray) {
 markersArray[i].setMap(null);
 }
 markersArray.length = 0;
 }
 }

*/
