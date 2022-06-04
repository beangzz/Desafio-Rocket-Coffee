const abrirMenu = document.getElementById("abrir-menu");
const fecharMenu = document.getElementById("fechar-menu");
const nav = document.querySelector(".nav-links");
const navItens = document.querySelectorAll(".nav-links li");
const html = document.querySelector("html")


abrirMenu.addEventListener('click', ativarBotao);
fecharMenu.addEventListener('click', ativarBotao);


function ativarBotao(){
  nav.classList.toggle("nav-active");
  abrirMenu.classList.toggle("mudar-botao");
  fecharMenu.classList.toggle("mudar-botao");
  html.classList.toggle("nav-active");
  animarItensLista();
}


function animarItensLista(){
  navItens.forEach((link,index) => {
    if(link.style.animation) {
      link.style.animation = "";
    }
     else{
      link.style.animation = `navItemFade 1s ease backwards ${index/7 + 0.3}s`;
    }
    });
  }
  
    
