$(document).ready(function () {
  // Initialize modal and parallax
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({
    full_width: true,
  });
  $(".my-carousel").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#my-modal"));
  instance.open();
}
