var map;

function initMap() {
    var myLatLng = {lat: 42.713968, lng: 23.304210};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'МариДан'
    });
}


