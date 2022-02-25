
// ANIMATION 
const logo = document.querySelector(".logo");
const slidehome = document.querySelector(".slidehome");
const h1 = document.querySelector("h1");

const TL1 = new TimelineMax({paused:true});

TL1
.staggerFrom(logo,1,{y:-100,opacity:0},0.3)
.staggerFrom(slidehome,1,{y:340,opacity:0},0.3,'-=0.8')
.from(h1,2.5,{width:0,ease:"power1.out"})
//.from(slidehome,1,{y:-40,opacity:100}, '-=0.5')

TL1.play();