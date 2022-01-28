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
