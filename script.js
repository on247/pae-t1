(function(){

  let navOpen=true;
  let toggle=document.getElementById("nav-toggle");
  let mainNav=document.getElementById("main-nav");

  function toggleClick(){
    if(navOpen){
      mainNav.style.display="none";
    }
    else{
      mainNav.style.display="block";
    }
    navOpen=!navOpen;
  }
  toggle.addEventListener("click",toggleClick);
})()
