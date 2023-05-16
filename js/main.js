
let IdIcon = document.getElementById("icon") ;
let Scrolling = document.getElementById("scrolling") ;
let myIdElement = document.getElementById("show_list") ;
let nav = document.getElementById("nav");
let aboutus = document.getElementById("about-us");

console.log(Scrolling);



IdIcon.onclick = function(){
   myIdElement.classList.toggle("show");
 }
 Scrolling.onclick = function(){
   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }

 window.onscroll = function(){

  if(window.scrollY > 100  ){
    nav.classList.add('black')
  }else{
    
    nav.classList.remove('black')
  }
 
  if(window.scrollY > 900  ){
    Scrolling.style.display = "block";
  }else{
    
    Scrolling.style.display = "none";

  }
 


 }

