var icon = document.querySelector(".icon");
var menu = document.querySelector(".menubox");
var counter = 0;
icon.addEventListener("click",function(){
    if(counter==0)
   {
    menu.style.display = "block";
    counter = 1;
   } else {
    menu.style.display = "none";
    counter = 0;
   }
})

//
var nav = document.querySelector('.nav');
var aboutNav=document.querySelector('.aboutNav');
var exploreNav=document.querySelector('.exploreNav');
var carNav=document.querySelector('.carsNav');
var about = document.querySelector('.about');
var cars = document.querySelector('.cars');
var explore = document.querySelector('.explore');
var resAbout=document.querySelector('.resAbout');
var resExplore=document.querySelector('.resExplore');
var resCar = document.querySelector('.resCar');

resAbout.addEventListener("click",function(){
  about.style.display = "flex"; 
  cars.style.display = "none";
  explore.style.display = "none";
  menu.style.display = "none";
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
})
resExplore.addEventListener("click",function(){
  about.style.display = "none"; 
  cars.style.display = "none";
  explore.style.display = "flex";
  menu.style.display = "none";
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
})
resCar.addEventListener("click",function(){
  about.style.display = "none"; 
  cars.style.display = "block";
  explore.style.display = "none";
  menu.style.display = "none";
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
})

//
aboutNav.addEventListener("click",function(){
    about.style.display = "flex"; 
    cars.style.display = "none";
    explore.style.display = "none";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
})
exploreNav.addEventListener("click",function(){
    about.style.display = "none"; 
    cars.style.display = "none";
    explore.style.display = "flex";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
})

carNav.addEventListener("click",function(){
    about.style.display = "none"; 
    cars.style.display = "block";
    explore.style.display = "none";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.933)";

})

//Image Cursor Part
var elem = document.querySelectorAll('.elem');

elem.forEach(function(val){

    val.addEventListener("mouseenter",function () {
      val.childNodes[3].style.opacity = 1;
      console.log("Entered")
    })
    val.addEventListener("mouseleave",function () {
        val.childNodes[3].style.opacity = 0; 
        console.log("Mouse Leaved ")
      })
      val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x  +"px" ;
        val.childNodes[3].style.top = dets.y - 120 +"px" ;
      })
})


