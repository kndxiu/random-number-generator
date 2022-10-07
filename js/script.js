const numbers = document.querySelectorAll(".numbers .num");
const kremowka = document.getElementById("kremowka");
const barka = document.getElementById("barka");
const gen = document.getElementById("gen");
const num = document.getElementById("num");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");

let separated = [0, 0, 0, 0,];
let randInt;
gen.addEventListener("click", () => {
    randInt = Math.floor(Math.random() * 100000);
    const separated = randInt.toString().padStart(5, 0).split('').map(Number);

    if(randInt == 2137){
        papiez();
    }

    num.style.transform = "perspective(500px) rotateX(" + (separated[separated.length - 5] * 36) + "deg";
    num1.style.transform = "perspective(500px) rotateX(" + (separated[separated.length - 4] * 36) + "deg";
    num2.style.transform = "perspective(500px) rotateX(" + (separated[separated.length - 3] * 36) + "deg";
    num3.style.transform = "perspective(500px) rotateX(" + (separated[separated.length - 2] * 36) + "deg";
    num4.style.transform = "perspective(500px) rotateX(" + (separated[separated.length - 1] * 36) + "deg";
})

function papiez(){
    kremowka.style.display = "unset";
    barka.play();
    document.querySelector("body").style.backgroundImage = "url('../assets/bg.gif')";
}