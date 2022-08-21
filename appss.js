const circle = document.getElementById("circle");
const color = document.querySelector("#colores");
const container = document.querySelector(".container");
const controles = document.querySelector('#cuadrocontroles');

circle.className = "circle";

function prueba() {
    const controles = document.querySelector('#cuadrocontroles');
    controles.addEventListener('input',(e)=>{console.log(e.target.children);
    const datos = [...e.target.children];
    const filtrados = datos.filter(element=> element.value !=='').map(e=>e.value);
    console.log(filtrados);
    });

    
}

prueba()


const saturacion = document.querySelector("#saturacion");
const transparencia = document.querySelector("#transparencia");
const brillo = document.querySelector("#brillo");
const contraste = document.querySelector("#contraste");
const difuminado = document.querySelector("#difuminado");
const areatexto = document.getElementById("areatexto");


const spanSat = document.querySelector("#satspan");
const spantrans = document.querySelector("#transpan");
const spanbri = document.querySelector("#brispan");
const spancontraste = document.querySelector("#contrasteSpan");
const spandifu = document.querySelector("#difuspan");


function colorinche() {
    document.getElementById("colores").addEventListener("input", cambioColor);
}
colorinche();


function cambioColor() {
  circle.style.backgroundColor = color.value;
  areatexto.textContent = `
    Background-color:  ${color.value} 
    saturate(${saturacion.value}%) 
    blur(${difuminado.value}px)
    opacity(${transparencia.value}%)
    brightness(${brillo.value}%)
    contrast(${contraste.value}%)
    `;

  cambia();
}

cambioColor();
saturacion.addEventListener("input",(e) => {(spanSat.innerHTML = e.target.value);});
transparencia.addEventListener("input",(e) => (spantrans.innerHTML = e.target.value));
brillo.addEventListener("input", (e) => (spanbri.innerHTML = e.target.value));
contraste.addEventListener("input",(e) => (spancontraste.innerHTML = e.target.value));
difuminado.addEventListener("input",(e) => (spandifu.innerHTML = e.target.value));

function cambia() {
  saturacion.addEventListener("input", filtro);
  difuminado.addEventListener("input", filtro);
  transparencia.addEventListener("input", filtro);
  brillo.addEventListener("input", filtro);
  contraste.addEventListener("input", filtro);

}
cambia();

function filtro() {
  circle.style.filter = `saturate(${saturacion.value}%)  blur(${difuminado.value}px) opacity(${transparencia.value}%) 
  brightness(${brillo.value}%) contrast(${contraste.value}%)`
}
