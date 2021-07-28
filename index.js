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

$("h1").text("Good Bye");
$("button").text("Don't Click Me");
$("button").html("Don't <i>Click</i> Me");


$("img").addClass("square-200");
$("img").attr("src", "drum.jpg");
$("a").attr("href", "https://www.yahoo.com");

console.log($("h1").attr("class"));
  $("h1").click(function(){
    $("h1").addClass("big-title margin-50");
    $("h1").css("color", "purple");
  setTimeout(function(){
    $("h1").removeClass("big-title");
    $("h1").css("color", "black");
  }, 300)
})

$("button").click(function(){
  console.log($("h1").css("color"));
  if(($("h1").css("color"))==="rgb(0, 0, 0)")
    $("h1").css("color", "pink");
  else
    $("h1").css("color", "black");
})

$(document).keypress(function(event){
  $("h1").text(event.key);
  console.log(event.key);
})

$("button").on("mouseover",function(){
  $("button").css("font-size", "120%");
  // setTimeout(function(){
  //   $("button").css("font-size", "100%");
  // }, 200)
})

$("button").on("mouseleave",function(){
  $("button").css("font-size", "100%");
  // setTimeout(function(){
   
  // }, 200)
})