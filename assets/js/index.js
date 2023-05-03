const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

let show = false;

btnMenu.addEventListener('click', ()=>{
    if(!show){
        nav.style.display = "block";
        show = true;
    }
    else{
        nav.style.display = "none";
        show = false;
    }
});