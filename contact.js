
// ANIMATION 
const barreform = document.querySelector(".barreform");

window.addEventListener('load',()=>{

    const TL1 = new TimelineMax({paused:true});

TL1
.from(barreform,2.5,{width:0,ease:"power1.out"})
TL1.play();
})