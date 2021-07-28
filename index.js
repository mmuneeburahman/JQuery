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

var btns = $("button")
btns.set(0).text("Click Me");
console.log(btns.get(0));
console.log(btns);
// btns[0].text("Click Me");
// btns[0].css("background-color", "green");
