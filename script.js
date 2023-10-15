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
