document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

const greetingText ="Goog morning!";
const weatherCondition = "sunny" ;
const userLocation = "New York ";
let temperature = 22.8673;
let weatherText = "O tempo está nublado em Londres e a temperatura lá fora é de 22°C."
    
    
