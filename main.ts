let i = 0;
let time = 3000;
let slideTimer;
const slideshowA = document.getElementsByClassName('slideshow-a')[0];
const slideshowB = document.getElementsByClassName('slideshow-b')[0];
let slides = slideshowA.getElementsByClassName('slide');
let slidesB = slideshowB.getElementsByClassName('slide');
let slideDots = document.getElementsByClassName('dot');

function clickChangeSlide(n){
  clearTimeout(slideTimer);
  changeSlide(n, true);
}

function changeSlide(n = i, manual = false){
  //remove slide marker
  slideDots[i].classList.remove('dot-active');  
  
  //increment i
  if(manual){
    if(n < 0) i = slides.length - 1
    else if(n > slides.length -1) i = 0
    else i = n
  }else i = i < slides.length - 1 ? i + 1 : 0
  
  
  slideshowA.style.transform = "translateX("+(150 - i * 100)+"vw)";
  slideshowB.style.transform = "translateX("+(-150 + i * 100)+"vw)";
  
  slideDots[i].classList.add('dot-active');  

  slideTimer = setTimeout('changeSlide()', time);
}

window.onload = () => changeSlide()