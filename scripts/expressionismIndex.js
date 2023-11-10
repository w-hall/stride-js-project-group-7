"use strict";

let pagetop;
let bodyTag = document.querySelector("body");
let floatingBox = document.getElementById("box");
let introDiv = document.getElementById('intro');

let slideIndex = 1;
showSlides(slideIndex);
hideDots();
hideSlideshow();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function removeContent() {
  let noOfChildren = introDiv.children.length;

  for (let i = 0; i < noOfChildren; i++) {
    introDiv.removeChild(introDiv.children[noOfChildren - 1]);
    noOfChildren--;
  }
}

function hideSlideshow() {
  let slideshow = document.getElementsByClassName('slideshow-container');
  for (let i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
}

function hideDots() {
  let dots = document.getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.display = "none";
  }
}

function showSlideshow() {
  let slideshow = document.getElementsByClassName('slideshow-container');
  for (let i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "inline-block";
  }
}

function showDots() {
  let dots = document.getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.display = "inline-block";
  }
}

window.addEventListener('scroll', function() {
  pagetop = window.pageYOffset;
  /* console.log(pagetop) */

  switch (true) {
    case pagetop < 100: {
      hideDots();
      hideSlideshow();

      introDiv.innerHTML = "<h1>Welcome!<br><br><br><br><br></h1> <p>make sure to have your window full screen for the best experience.<br><br><br>please keep scrolling to learn more about expressionism <br> <br> . <br> <br> . <br> <br> . </p>";

      bodyTag.className = "one";
      document.getElementById("box").style.textAlign = "center";
    } break;

    case pagetop < 200: {
      hideDots();
      hideSlideshow();

      removeContent();

      introDiv.innerHTML = "<h2>Ex·pres·sion·ism</h2> <h2><i>noun</i><br><br> a style of painting, music, or drama in which the artist or writer seeks to express emotional experience rather than impressions of the external world.</h2>";

      bodyTag.className = "two";
      document.getElementById("box").style.textAlign = "left";
    } break;

    case pagetop < 300: {
      hideDots();
      hideSlideshow();

      removeContent();

      introDiv.innerHTML = " <h2>E  x  p  r  e  s  s  i  o  n  i  s  m</h2> <p>g    a    l    l    e    r    y</p>";

      bodyTag.className = "three";
      document.getElementById("box").style.textAlign = "center";
    } break;

    case pagetop < 350: {
      hideSlideshow();
      hideDots();

      removeContent();

      introDiv.innerHTML = "<h2>E  x  p  r  e  s  s  i  o  n  i  s  m</h2> <p>g    a    l    l    e    r    y</p>";

      bodyTag.className = "four";
      document.getElementById("box").style.textAlign = "center";
    } break;

    case pagetop < 570: {
      showSlideshow();
      showDots();

      removeContent();

      introDiv.innerHTML = "<h2>E  x  p  r  e  s  s  i  o  n  i  s  m</h2> <p>g    a    l    l    e    r    y</p>";

      bodyTag.className = "four";
      document.getElementById("box").style.textAlign = "center";
    } break;


    case pagetop < 600: bodyTag.className = "four"; break;
    default: {
      introDiv.innerHTML = "<h2> . <br> <br> . <br> <br> . <br> <br> Thanks for visiting!</h2> <p>Share what you thought.</p>";
      hideSlideshow();
      hideDots();
      bodyTag.className = "five";
    }
  }
});


/* let noOfChildren = introDiv.children.length;
console.log(`Scrolling. # of children in div id "intro": ${noOfChildren} ${introDiv.children[0]} `); */