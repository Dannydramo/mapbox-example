mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnlkcmFtbyIsImEiOiJjbGdybTdwbWkwcGd3M3Ntc214ZzdyM2ZnIn0.Us8fAstFoIKEcTpfJrc4hg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setUpMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
    setUpMap([-2.24, 53.48])
}

function setUpMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl()

    map.addControl(nav)

    var direction = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(direction, 'top-left')
}


