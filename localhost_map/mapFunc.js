
var markers = [];
var map;

//--------------------- SKAPAR MARKERS FRÅN DATABASEN ----------------------------------------
    function addmarkerArray(markerData, list){
        for(var i =0; i <markerData.length; i++) {
            markerData[i].contentstring = '<div id="content">' +
            '<h1 >' + markerData[i].Category + '</h1>'  +
            '<div id="bodyContent">' +
            '<p>' + markerData[i].Description + '<br><br><img id="thumbnail" src="' + markerData[i].Picture + '"> </p>' +
            '</div>' +
            '</div>';
            var myLatlng2 = new google.maps.LatLng(59.8629080, 17.6143430);
            markerData[i].postion = new google.maps.LatLng(markerData[i].Latitude, markerData[i].Longitude);

            var infowindow = new google.maps.InfoWindow({
                content: markerData[i].contentstring + '<img src="toolsIcon.png" width="40px" height="40px">'
            });
            var icon = markerData[i].Category + ".png";
            var marker = new google.maps.Marker({
                position: markerData[i].postion,


                map: map,
                icon: icon,
                title: markerData[i].contentstring,
                animation: google.maps.Animation.DROP
            });
            markerData[i].marker = marker;


            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(this.title);
                infowindow.open(map, this);

            });


            var currentMarker = [];
            currentMarker.Description = markerData[i].Description;
            currentMarker.marker = markerData[i].marker;
            currentMarker.Category = markerData[i].Category;
            currentMarker.contentstring = markerData[i].contentstring;
            currentMarker.title = markerData[i].title;
            list.push(currentMarker);

        }
        };




//--------------------------------------------------------------------------


//-------------------SIDAN LADDAS -----------------------------

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
            addmarkerArray(data, markers);
        }
    });
};


//-------------------------- ÖVRIGA FUNKTIONER--------------------------------------

function hideCategory(category) {
    for (i = 0; i < markers.length; i++) {
        if (markers[i].Category == category) {
            markers[i].marker.setMap(null);
        }
    }
}

function showCategory(category) {
    for (i = 0; i < markers.length; i++) {
        if (markers[i].Category == category) {
            markers[i].marker.setMap(map);
        }
    }
}

function switchCheckbox(checkBox){
    if(checkBox.checked){
        showCategory(checkBox.value);
    }
    else{
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
