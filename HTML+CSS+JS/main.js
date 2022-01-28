//declarando variáveis
let btnContact = document.querySelector('.mm-btn-contact');

let toggleModal = document.querySelectorAll('.mm-toggle-modal');

//Page preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.mm-preloader');
    pagePreloder.classList.add('mm-fade-out');
     setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//abrindo e fechando informações de Contato
btnContact.addEventListener('click', function(){
let boxContact = document.querySelector('.mm-contact-info')
boxContact.classList.toggle('mm-is-open');
this.classList.toggle('mm-change-icon');

});

//Abrindo e fechando o Modal de Orçamento

for(var i = 0; i < toggleModal.length; i++){
    toggleModal[i].addEventListener('click', function(){
var overlay = document.querySelector('.mm-overlay');
var modalOrcamento = document.querySelector('#mm-modal-orcamento');

overlay.classList.toggle('mm-is-open');
modalOrcamento.classList.toggle('mm-is-open');
modalOrcamento.classList.toggle('mm-slide-top-in');
    });
}

// Animando elementos on scroll 
var myScrollDown = document.querySelector('.mm-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
      myScrollDown.classList.toggle('mm-fade-out');
    },
    offset:'80%'
  });

  //portfolio slider

  //Declarando as variáveis do slider

var sliderContainer = document.querySelector('.mm-slider-container');
var sliderList = document.querySelector('.mm-slider-list');
var sliderItem = document.querySelectorAll('.mm-slider-item');
var sliderListWidth = null;
  //capturando larguras individuais

var containerWidth = sliderContainer.parentElement.offsetWidth;




  //passando larguras dinâmicas

  sliderContainer.style.width = containerWidth+'px';

for( var p = 0; p < sliderItem.length; p++){
    sliderItem[p].style.width = containerWidth +'px';

    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
    
}

sliderList.style.width = sliderListWidth +'px';


  //fazendo a animação do Slider onClick
  var prevItem = document.querySelector('.mm-item-prev');
  var nextItem = document.querySelector('.mm-item-next');
  var sliderPos = 0; 
  
  nextItem.addEventListener ('click', function(){
    var lastItem = sliderListWidth - containerWidth;
    if (-1*(sliderPos)===lastItem) {
        return;
    }

    sliderPos -= containerWidth;
    

    anime({
        targets: sliderList,
        translateX: sliderPos
      });
    
  })

  prevItem.addEventListener ('click', function(){
  
    if (sliderPos===0) {
        return;
    }

    sliderPos += containerWidth;
    

    anime({
        targets: sliderList,
        translateX: sliderPos
      });
      
  })