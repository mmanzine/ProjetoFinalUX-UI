//Portfolio slider

  //declarando as variáveis do slider

  var sliderContainer = document.querySelector('.mm-slider-container');
  var sliderList = document.querySelector('.mm-slider-list');
  var sliderItem = document.querySelectorAll('.mm-slider-item');
  const sliderTotalItems = sliderItem.length;
  var sliderListWidth = null;
  var prevItem = document.querySelector('.mm-item-prev');
  var nextItem = document.querySelector('.mm-item-next');
  var sliderPos = 0; 
  var currentSlide = document.querySelector ('.mm-current-slide');
  var totalSlide = document.querySelector ('.mm-total-slide');
  var currentCounter = 1;

  
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

//handlers 

var nextSlideAnime = function(){
    var lastItem = sliderListWidth - containerWidth;
    if (-1*(sliderPos)===lastItem) {
        return;
    }
    sliderPos -= containerWidth;
    
    anime({
        targets: sliderList,
        translateX: sliderPos
      });    
  }

  var prevSlideAnime = function(){
    if (sliderPos===0) {
        return;
    }
    sliderPos += containerWidth;
        anime({
        targets: sliderList,
        translateX: sliderPos
      });
  }

    //counter formatter
    var counterFormatter = function(n){
        if(n < 10){
            return'0'+n;
        } else {
            return n;
        }
    }

    //counter add
    var counterAdd = function(){
        if(currentCounter >=0 && currentCounter < sliderTotalItems){
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        }
    }

       //counter remove
       var counterRemove = function(){
        if(currentCounter > 1 && currentCounter <= sliderTotalItems){
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        }
    }

    //actions
    totalSlide.innerHTML = counterFormatter (sliderTotalItems);
    

    nextItem.addEventListener ('click', function(){
    nextSlideAnime()
    counterAdd()    
    });
       
    prevItem.addEventListener ('click', function(){
    prevSlideAnime()
    counterRemove()         
    });