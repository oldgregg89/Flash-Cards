// $(document).ready(function() {
//   $(".click").click(function() {
//   $(".answer").toggle();
//   })
// })

$(document).ready(function(){
  $(".flashcard").click(function(){
    $(this).children().toggle();
  });
});
