
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:2,
        nav:true,
        loop:true
      }
    },
   
  });
});
// function generateRandomHeights() {
//   var cards = document.getElementsByClassName('card');
//   var minHeight = 60; // Minimum height for the cards
//   var maxHeight = 121; // Maximum height for the cards

//   for (var i = 0; i < cards.length; i++) {
//     var randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
//     cards[i].style.height = randomHeight + 'vh';
//   }
// }

// Call the function when the page finishes loading
window.addEventListener('load', generateRandomHeights);
window.onscroll = function () {
  if (scrollY > 200) {
    header.classList.add("headerFixed")
    btnTop.style.display = "block"
    btnTop.addEventListener("click", function () {
      window.scroll({
        top: "0",
        behavior: "smooth"
      })
    })
  }
  else {
    header.classList.remove("headerFixed")
    btnTop.style.display = "none"

  }
}





imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
