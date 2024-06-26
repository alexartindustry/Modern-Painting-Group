$(document).ready(function(){
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $('#opennav').on('click', function(e) {
      document.getElementById("mySidenav").style.top = "0";
      document.getElementById("mySidenav").style.opacity = "1";
  });

  $('#closenav').on('click', function(e) {
     document.getElementById("mySidenav").style.top = "-100%";
     document.getElementById("mySidenav").style.opacity = "0";
  });

  $('.sidenav a[href*="#"]').on('click', function(e) {
    $(this).parent('li').find('.sub-menu').slideToggle();
  });

  $('.sidenav a').on('click', function(e) {
    if(!$(this).parent('li').hasClass('has-children')) {
      document.getElementById("mySidenav").style.top = "-100%";
      document.getElementById("mySidenav").style.opacity = "0";
    }
  });

  $( ".hover .item" ).hover(
    function() {
      $( ".hover .item" ).addClass('filter');
      $(this).removeClass('filter');
    }, function() {
      $( ".hover .item" ).removeClass('filter');
    }
  );

  /*more items*/

  $ind = 5;
  $num = 6;
  $count = 0;

  $( ".photos .item" ).each(function( index ) {
     $count++;
  });


  $(document).on('click', '.morepr', function(e){ 

    $screenTop = $(window).scrollTop();

    $ind = showMore($ind, $num, $screenTop, $count);
  });

  function showMore(ind, num, top, all) {

      for($i = ind+1; $i <= ind+num; $i++) {
      /*$('html, body').animate({ scrollTop: top}, 0);*/

        $('.photos .item').eq($i).slideToggle();

        if(($i == all) || ((ind+num)==all)) {
          $('.morepr').parent('.btn-block').css('display','none');
        }
      }
    $ind = ind + num;
    return $ind;
  }


});


