let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let h2=document.querySelector('h2');
    h2.innerText=randomColor();
    // h2.style.color=randomColor();
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor();
});
function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}