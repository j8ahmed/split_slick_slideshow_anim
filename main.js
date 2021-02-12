var i = 0;
var time = 3000;
var slideTimer;
var slideshowA = document.getElementsByClassName('slideshow-a')[0];
var slideshowB = document.getElementsByClassName('slideshow-b')[0];
var slides = slideshowA.getElementsByClassName('slide');
var slidesB = slideshowB.getElementsByClassName('slide');
var slideDots = document.getElementsByClassName('dot');
function clickChangeSlide(n) {
    clearTimeout(slideTimer);
    changeSlide(n, true);
}
function changeSlide(n, manual) {
    if (n === void 0) { n = i; }
    if (manual === void 0) { manual = false; }
    //remove slide marker
    slideDots[i].classList.remove('dot-active');
    //increment i
    if (manual) {
        if (n < 0)
            i = slides.length - 1;
        else if (n > slides.length - 1)
            i = 0;
        else
            i = n;
    }
    else
        i = i < slides.length - 1 ? i + 1 : 0;
    console.log(typeof (slideshowA));
    slideshowA.style.transform = "translateX(" + (150 - i * 100) + "vw)";
    slideshowB.style.transform = "translateX(" + (-150 + i * 100) + "vw)";
    slideDots[i].classList.add('dot-active');
    slideTimer = setTimeout('changeSlide()', time);
}
window.onload = function () { return changeSlide(); };
