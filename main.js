
// ANIMATION 
const logo = document.querySelector(".logo");
const slidehome = document.querySelector(".slidehome");
const h1 = document.querySelector("h1");
const barreformprojet = document.querySelector(".barreformprojet");
const iconehand = document.querySelector(".iconehand");
const iconeprojet = document.querySelector(".iconeprojet");
const iconedraw = document.querySelector(".iconedraw");
const barreformusine = document.querySelector(".barreformusine");
const barreformcontact = document.querySelector(".barreformcontact");
const map = document.querySelector("iframe");

const TL1 = new TimelineMax({paused:true});

TL1
.staggerFrom(logo,1,{y:-100,opacity:0},0.3)
.staggerFrom(slidehome,2,{y:40,opacity:0},0.3,'-=0.8')
.from(h1,2.5,{width:0,ease:"power1.out"})
.from(barreformprojet,2.5,{width:0,ease:"power1.out"})
.from(barreformusine,2.5,{width:0,ease:"power1.out"})
.from(barreformcontact,2.5,{width:0,ease:"power1.out"})
.from(map,3,{y:60,opacity:0}, '-=2')
//.from(slidehome,1,{y:-40,opacity:100}, '-=0.5')
TL1.play();

window.addEventListener('scroll',()=>{

    const{scrollTop,clientHeight} = document.documentElement;

    const topElementToTopViewport = iconehand.getBoundingClientRect().top;
    const topProjet = iconeprojet.getBoundingClientRect().top;
    const topDraw = iconedraw.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed()-
     clientHeight *0.50){iconehand.classList.add('active')}

    if(scrollTop > (scrollTop + topProjet).toFixed()-
     clientHeight *0.60){iconeprojet.classList.add('active')}

     if(scrollTop > (scrollTop + topDraw).toFixed()-
     clientHeight *0.70){iconedraw.classList.add('active')}


})
