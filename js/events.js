//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("HEY!")
  })
}

function frameIt() {
  $('img').on(load, function() {
    $(this).addClass('.tasty')
    $(this).css('border', "solid 2px red")
  })
}

$(document).ready(function(){

// call functions here

});
