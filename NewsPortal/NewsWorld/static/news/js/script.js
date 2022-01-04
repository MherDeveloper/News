 $(document).ready(function() {
    $('#selectVal').on('change', function() {
                this.form.submit();
     });

  var time = 0;
    $('.open-menu').on('click', function() {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({ 'max-width': '100%', transition: '0.3s' })
            $('.menu-cnt').css({ width: '200px', transition: '0.4s', 'text-align' : 'center' });
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function() {
                time++;
                $(this).css({ 'transition-delay': '0.' + time + 's' });
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({ width: '0%' });
            $('body').removeClass('body_fix');
            time = 0;
            var menu_li = $(".sidenav ul li");
            $(menu_li).each(function() {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({ 'opacity': '0', transition: '0.2s' })
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function() {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({ width: '0%' });
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function() {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({ 'opacity': '0', transition: '0.2s' })
            }
        })
    })


    function copyRight(){
        let date = new Date()
        let year = date.getFullYear()
        $('.year').text(year)
        
      }

      copyRight()

$(window).scroll( function(){

    
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

       
        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1',
                'margin-top': '30px' },800);

        }    
    }); 
}); 

$(window).scroll(function(event) {
   if($(this).scrollTop()> 20) {
    $('#up').fadeIn(500)
} else{
    $('#up').fadeOut(500)
}
});

 $('#up').click(function(event) {
    
     $("html, body").animate({
            scrollTop: 0
        }, 1000);

 });

 $("a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
              });
            }
        });



 });

 let slideIndex = 1;

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
  let dots = document.getElementsByClassName("demo");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex-1].className += " active";
  
}