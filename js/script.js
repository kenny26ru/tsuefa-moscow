$(document).ready(function(){
        $('.desc_1_hero').slick({
				prevArrow: '<button type="button" class="desc_1_slick-prev"><i class="fas fa-angle-double-left"></i></button>',
				nextArrow: '<button type="button" class="desc_1_slick-next"><i class="fas fa-angle-double-right"></i></button>',
        dots: false,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false
              }
            }
          ]
        });
      });

$(document).ready(function(){
        $('.gallery_slider').slick({
          dots: true,
          dotsClass: "dots",
          infinite: true,
          speed: 1500,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true, 
          prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false
              }
            }
          ]
        });
      });
