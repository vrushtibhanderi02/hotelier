$(document).ready(function(){
     // pre-loader
     setTimeout(function(){
        $('.pre-loader').fadeOut();
      },1000);
      
      // bottom to top arrow
    var btn = $('.top-bottom');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.fadeIn();
    } else {
        btn.fadeOut();
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

      // sticky header
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');

      
    });

    
    $("#testi-sec").owlCarousel({
      items:2,
      margin:40,
      smartSpeed:3000,
      nav:true,
      dots:false,
      navText:['<i class="las la-angle-left"></i>','<i class="las la-angle-right"></i>'],
      responsive : {
          0:{
              items:1
          },
          768:{
              items:2
          }
      }
  })


    // increment in numbers
    var counted = 0;
    $(window).scroll(function() {
    
      var oTop = $('.num1-incre').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
    
            {
    
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
    
            });
        });
        counted = 1;
      }
    
    $('.sub-menu').hide();

   
    

})
    

})


// aos librabry

AOS.init({
    easing: 'ease-out-back',
    duration: 2000
  });

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })