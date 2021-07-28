// $("document").ready(function(){
//  
// })
$("Button").css("background-color", "red");
$("Button").css("color", "white");
//Same $ is used for querySelector and querySelectorAll.

console.log($("button").css("color"));
console.log($("button").css("fontSize"));
console.log($("button").css("fontFamily"));

$("h1").addClass("big-title margin-50");
setTimeout(function(){
  $("h1").removeClass("big-title");
}, 3000)