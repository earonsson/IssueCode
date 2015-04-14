
var markers = [];
var map;

<<<<<<< HEAD
function initialize() {

=======

function initialize() {


>>>>>>> origin/master
//-----------------------------SKAPAR KARTA OCH LAMPA 1---------------------------------
    var marker1 = [];

    var myLatlng = new google.maps.LatLng(59.858056, 17.644722);
    var category = "Lampor";

    var mapOptions = {
        center: myLatlng,
        zoom: 13,
        scrollwheel: false

    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    var contentString = '<div id="content">' +
        '<h1 >Lampor</h1>' + '<h2> Trasig lykta</h2>' +
        '<div id="bodyContent">' +
        '<p>Trasig lykta på testvägen 1 <br><br><img src="toolsIcon.png" width="40px" height="40px"></p>' +
        '</div>' +
        '</div>';

    marker1[0] = myLatlng;
    marker1[1] = category;
    marker1[2] = contentString;

    //-----------------SKAPAR LAMPA 2----------------------------------
    var marker3 = [];

    //-------------VARIABLERNAS VÄRDEN KOMMER ERHÅLLAS FRÅN DATABASEN------------------------
    var myLatlng3 = new google.maps.LatLng(59.8715930, 17.6323310);
    var category3 = "Lampor";
    var titleInput = "Söndersparkad lampa";
    var description = "Någon vandal har gjort sönder min fina lampa"
    var picture = "lightpole.jpg"

    var contentString3 = '<div id="content">' +
        '<h1 >' + category3 + '</h1>' + '<h2> ' + titleInput + '</h2>' +
        '<div id="bodyContent">' +
        '<p>' + description + '<br><br><img id="thumbnail" src="' + picture + '"> </p>' +
        '</div>' +
        '</div>';

    marker3[0] = myLatlng3;
    marker3[1] = category3;
    marker3[5] = titleInput;
    marker3[3] = description;
    marker3[4] = picture;
    marker3[2] = contentString3;


// -------------------------------------------------------------

// ------------------SKAPAR VÄGGROP---------------------------

    var marker2 = [];
    var myLatlng2 = new google.maps.LatLng(59.8629080, 17.6143430);
    var category2 = "Roads";
    var contentString2 = '<div id="content">' +
        '<h1 >Vägar</h1>' + '<h2> Väggropar</h2>' +
        '<div id="bodyContent">' +
        '<p>Luthagen lider av många väggropar, fixa! <br><br><img src="toolsIcon.png" width="40px" height="40px"> </p>' +
        '</div>' +
        '</div>';

    marker2[0] = myLatlng2;
    marker2[1] = category2;
    marker2[2] = contentString2;
//------------------------------------------------------------------


//--------------------SKAPAR MARKERS PÅ KARTAN FRÅN ARRAY-----------------------

    markers[0] = marker1;
    markers[1] = marker2;
    markers[2] = marker3;

    for (i = 0; i < markers.length; i++) {
        var infowindow = new google.maps.InfoWindow({
            content: markers[i][2] + '<img src="toolsIcon.png" width="40px" height="40px">'
        });
        var icon = '';
        if (markers[i][1] == "Lampor") {
            icon = 'lamp.png';
        }
        if (markers[i][1] == "Roads") {
            icon = 'traffic.png';
        }


        var marker = new google.maps.Marker({
            position: markers[i][0],


            map: map,
            icon: icon,
            title: markers[i][2],
            animation: google.maps.Animation.DROP
        });
        markers[i][3] = marker;


        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(this.title);
            infowindow.open(map, this);

        });

    }
    ;

    //-----------FUNKTION FÖR ATT PLACERA UT MARKER MANUELLT---------------
    var markersArray = [];
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



}


//-------------------------- ÖVRIGA FUNKTIONER--------------------------------------

    function hideCategory(category) {
    for (i = 0; i < markers.length; i++) {
        if (markers[i][1] == category) {
            markers[i][3].setMap(null);
            //document.getElementById("button1").onclick=showLamp();
        }
    }
}

    function showCategory(category) {
        for (i = 0; i < markers.length; i++) {
            if (markers[i][1] == category) {
                markers[i][3].setMap(map);
                //document.getElementById("button1").onclick=showLamp();
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

    function clickAdd(){



    }

    function getLatlng(index){
        return markers[index][0];
    }


    function getCategory(index){
        return markers[index][1];

    }

    function getTitle(index){
        return markers[index][2];
    }

    function getDescription(index){
        return markers[index][3];
    }

    function getPicture(index){
            return markers[index][4];
    }




//--------------------------------------------------------------------------

google.maps.event.addDomListener(window, 'load', initialize);




