// initialize and add the map
function initMap() {
  // your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, position at location
  const marker = new google.maps.Maker({ position: loc, map: map });
}


// Smooth Scrolling

$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
}
// });
