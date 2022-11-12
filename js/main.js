/* ths is for dark scrolling nav var*/
var nav = document.querySelector("nav");
window.addEventListener("scroll" , function()
{

   if (window.pageYOffset > 100) 
   { 
       nav.classList.add('bg-dark' , 'shadow');
       
   }
   else
   {
       nav.classList.remove('bg-dark' , 'shadow');
   }

} );



/*-----------------------------------------------------*/

/* jquery pic swiper Trinding Movie */
$(document).ready(function () 
{
   $('.option').click(function()
   {
       $('.option').removeClass('active');
       $(this).addClass('active');
   });
});

// $(document).ready(function() { 
      
//   var currentImage = $('.swiper-slide img').attr('../img/Trinding/venom-2-tom-hardy.jpg');
 
//   $('#crrent-image img').attr('../img/Trinding/venom-2-tom-hardy.jpg', currentImage);

// });
/*----------------------end---------------------------------*/ 

 /*Initialize Swiper For Trinding*/ 
   
 var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
  },
  pagination: {
      el: ".swiper-pagination",
  },
  });
      


/***  Initialize Swiper **/

function myFunction(x) {
  if (x.matches) { // If media query matches
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

var x = window.matchMedia("(max-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*** end Initialize Swiper **/






/*swiper serice tv*/
const arrows = document.querySelectorAll(".arrow");
const arrowleft = document.querySelectorAll(".arrow-left");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => 
{
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => 
  {
    const ratio = Math.floor(window.innerWidth /400);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0)
    {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 330
      }px)`;
    } 
    else 
    {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth /400));
});

arrowleft.forEach((arrow, i) => 
{
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => 
  {
    const ratio = Math.floor(window.innerWidth /105);
    clickCounter--;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0)
    {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value + 330
      }px)`;
    } 
    else 
    {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth /105));
});


/*end swiper serice tv*/


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)





// $(document).ready(function() { 
      
//     var currentImage = $('.swiper-slide img').attr('../img/Trinding/venom-2-tom-hardy.jpg');
//       $('.swiper-slide img').attr('../img/Trinding/matrixxxxx.jpg', currentImage);
  
//   });
