document.getElementById("btn_menu").addEventListener('click', menu);
let nav = document.getElementById("nav");

let mostrar = false;

function menu(){
    if (!mostrar){
        nav.style.display = "flex";
        mostrar = true;
    }
    else{
        nav.style.display = "none";
        mostrar = false;
    }

}