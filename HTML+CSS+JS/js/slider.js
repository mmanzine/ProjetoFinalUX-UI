//Portfolio slider

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