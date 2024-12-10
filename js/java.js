$(".toggle-icon").click(function () {
  $(".mobile-links").toggle();
});

const $dots = $(".dot");
let activeIndex = 0;
function updateDot() {
  $dots.removeClass("active").eq(activeIndex).addClass("active");
}
$(".nav-left").click(() =>
  updateDot((activeIndex = (activeIndex - 1 + $dots.length) % $dots.length))
);
$(".nav-right").click(() =>
  updateDot((activeIndex = (activeIndex + 1) % $dots.length))
);

$(document).ready(function () {
  $(".faq-question").click(function () {
    $(this).next(".faq-answer").slideToggle();
    $(this).find(".faq-toggle").toggleClass("active");
  });
});

$(document).ready(function () {
  var $carousel = $(".owl-carousel-cars");

  $carousel.owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    navText: [" ", ""], // You can customize the arrows here
    responsive: {
      0: {
        items: 2, // Shows 1 item on screens with width 0px to 599px
      },
      600: {
        items: 2, // Shows 3 items on screens with width 600px to 999px
      },
      1000: {
        items: 5, // Shows 3 items on screens 1000px and wider
      },
    },
  });

  // Adding custom navigation functionality
  $(".nav-left").click(function () {
    $carousel.trigger("prev.owl.carousel");
  });

  $(".nav-right").click(function () {
    $carousel.trigger("next.owl.carousel");
  });
});



$(".choose-plan-btn").click(function (event) {
  event.preventDefault();

  const isMonthly = $(this).hasClass("monthly-btn");

  $(".choose-plan-btn").removeClass("selected");
  $(this).addClass("selected");
  
  $(".plans-container").toggle(isMonthly);
  $(".plans-container-yearly").toggle(!isMonthly);
  
});















