//AIzaSyChBmcJRQtAYgp4GHoIPa7Q3AshVLgI0Uo

function initMap() {
    var position = {
        lat: 49.20997,
        lng: 16.599419
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 16,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
}