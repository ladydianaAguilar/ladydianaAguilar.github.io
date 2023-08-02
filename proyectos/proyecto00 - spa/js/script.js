//Script Preloader
let preloader=document.getElementById("preloader");
setTimeout(function(){
    preloader.style.transition="0.5s";
    preloader.style.visibility="hidden";
},3000)


//Script del Menu Hamburguesa
function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");
    let menu=document.getElementById("menu")
    menu.querySelector(".menu .bi-list").classList.toggle("bi-x");
}

//Script del botón Subir
let subir=document.getElementById("subir");
window.addEventListener("scroll", Bajar);
function Bajar(){
    //pageYOffset: 
    let posy = window.pageYOffset;
    if(posy>100){
        subir.style.display="block";
    }
    else{
        subir.style.display="none"
    }
}

//Script de la galeria
let num=1;
function adelante(){
    num++
    if(num>8)
    num=1;
let img=document.getElementById("img");
img.src="img/"+"spa0"+num+".jpg";
}

function atras(){
    num--;
    if(num<1){
    num=8;
    }
let img=document.getElementById("img");
img.src="img/"+"spa0"+num+".jpg";
}

//Script del Header
let header=document.getElementById("header");
    window.addEventListener("scroll", Scroll);
    function Scroll(){
        let ejey=window.pageYOffset;
        if(ejey>300){
            header.style.background="deeppink";
            header.style.transition="0.5s";
        }
        else{
            header.style.background="none"
            header.style.transition="0.5s";
        }

    }