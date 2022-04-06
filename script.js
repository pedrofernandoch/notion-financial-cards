$('#form').submit(function(e) {
    $('#name').text($("#name-input").val());
  
    // Prevent reload page
    e.preventDefault();
  });