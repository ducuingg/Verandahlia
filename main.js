
// ANIMATION 
const logo = document.querySelector(".logo");
const slidehome = document.querySelector(".slidehome");
const h1 = document.querySelector("h1");
const barreform = document.querySelector(".barreform");
const map = document.querySelector("iframe");

const TL1 = new TimelineMax({paused:true});

TL1
.staggerFrom(logo,1,{y:-100,opacity:0},0.3)
.staggerFrom(slidehome,1,{y:40,opacity:0},0.3,'-=0.8')
.from(h1,2.5,{width:0,ease:"power1.out"})
.from(barreform,2.5,{width:0,ease:"power1.out"})
.from(map,3,{y:60,opacity:0}, '-=2')
//.from(slidehome,1,{y:-40,opacity:100}, '-=0.5')

TL1.play();

function image(src,width,height, alt){
    let a = document.createElement("img");
    let block=document.getElementById("galerie");

    a.src=src;
    a.width=width;
    a.height=height;
    a.alt=alt;
   block.appendChild(a);
}
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
image("images/produits/verriere.jpg", 200,110,"verriere");
