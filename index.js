const marcas = document.querySelector('.marcas');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.seta.esquerda');
const rightArrow = document.querySelector('.seta.direita');

let index = 0;
const total = 9;

// Função para mostrar slide
function mostrarSlide(i) {
  const offset = -i * (slides[0].offsetWidth + 40); // largura + gap
  marcas.style.transform = `translateX(${offset}px)`;
  
  // Atualiza bolinhas
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

// Setas
leftArrow.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  mostrarSlide(index);
});

rightArrow.addEventListener('click', () => {
  index = (index + 1) % total;
  mostrarSlide(index);
});


// Auto-slide a cada 5s
setInterval(() => {
  index = (index + 1) % total;
  mostrarSlide(index);
}, 4000);

// Inicializa
mostrarSlide(index);

function fotoInfo(foto){
  document.getElementsByClassName('slide').src=foto 
}

function clicar(){
  var click=document.querySelectorAll('.click')
   click.style.backgroundColor="blue"
}

// Selecção dos elementos HTML do botão e do menu.
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')

// Evento de click ao hamburguer
// menu.ClassList.toggle('ativo') adiciona ou remove a classe .ativo, fazendo o menu aparecer ou desaparecer
hamburguer.addEventListener('click',() => {
  menu.classList.toggle('ativo')
})