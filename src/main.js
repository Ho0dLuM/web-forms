//This code is for appending images to your webpage using ".preventDefault()"

$(document).ready(function(){
  console.log('sanity check');
})

$('form').submit(function(event){
  event.preventDefault();
  var formInfoArr = $(this).serializeArray();
  console.log(formInfoArr);
  $('.results').append('<h2>' + formInfoArr[0].value +'</h2>');
  $('.results').append('<img src=' +formInfoArr[1].value+'>');
  $('.results').append('<p>'+formInfoArr[2].value+'</p>');
  // var imgName = $('#name').val();
  // var imgUrl = $('#link').val();
});
//console.log($('form').val());
