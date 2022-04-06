$('#form').submit(function(e) {
  $('#name').text($("#name-input").val());
    e.preventDefault();
  });

$( document ).ready(function() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
    });
    $('#name').text(params.key);
});