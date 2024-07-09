function initMap() {
    var location = {lat: -22.821850, lng: -47.266840};
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
