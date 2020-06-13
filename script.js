// Pre-loader
window.addEventListener("load" , function () {
	const loader = document.querySelector(".loader");
	loader.className += " hidden"
});
// Overlay
var mini = document.querySelectorAll('.box');
Array.from(mini).forEach(function (miniDisplay) {
	 miniDisplay.addEventListener('click',function(e) {
		 var i = 0;
		 if (i < miniDisplay.lenght) {
			 miniDisplay.style.display = "block";
		 }else{
			 miniDisplay.style.display = "none";
		 }
		 
	 })
 }) 
 // Ads
function rfbAds() {
	const rfbModel = document.querySelector(".rfbModel");
	rfbModel.style.display= " block"
}
function exit(){ 
	document.querySelector(".rfbModel").style.visibility = "hidden"; 
	} 
//Quote
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("quoteText");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
	  slideIndex = 1
	}
    if (n < 1) {
		slideIndex = slides.length
	}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//dark mode
if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
		console.log('Browser doesn\'t support dark mode');
	  }