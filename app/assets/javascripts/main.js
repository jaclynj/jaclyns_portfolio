$(document).ready(function(){

var eventListeners = function() {

  $(window).scroll(function(){
    // topScroll();
    detectNav();
  });

  $(window).resize(function() {
    detectNav();
    detectHeight();
  });

  // var topScroll = function() {
  //   var window_top = $(window).scrollTop() - 1;
  //   var div_top = $('#jnav').offset().top;
  //   if (window_top = 6) {
  //     $(window).on("scroll", function(){
  //       $('html,body').scrollTo(div_top, 800);
  //       $(window).off("scroll");
  //     });
  //   }
  // };

  var detectNav = function(){
    var window_top = $(window).scrollTop() - 1; // the "12" should equal the margin-top value for nav.stick
    var div_top = $('#jnav').offset().top - 3;
    if ($(window).width() > 1080 && window_top > div_top) {
      $('nav').addClass('navbar-fixed-top');
      $('#about').addClass('big-margin');
    } else {
      $('nav').removeClass('navbar-fixed-top');
      $('#about').removeClass('big-margin');
    }
  };

var detectHeight = function() {
  if ($(window).width() >= 1085) {
    $('#jackieIMG').css("display","inline");
    $('#intro').removeClass("col-md-12");
    $('#intro').addClass("col-md-6");
    $('nav').addClass('thin-nav');
    $('nav').removeClass('fat-nav');
    $('.navbar-brand').addClass("col-sm-4");
    $('.navbar-brand').removeClass("col-sm-12");
    $('.navbar-left').removeClass("col-sm-9");
    $('.navbar-left').addClass("col-sm-5");
    $('#navbar-right').addClass("col-sm-2");
    $('#navbar-right').removeClass("col-sm-3");
  } else {
    $('#intro').addClass("col-md-12");
    $('#intro').removeClass("col-md-6");
    $('#jackieIMG').css("display","none");
    $('nav').removeClass('thin-nav');
    $('nav').addClass('fat-nav');
    $('.navbar-brand').removeClass("col-sm-4");
    $('.navbar-brand').addClass("col-sm-12");
    $('.navbar-left').removeClass("col-sm-5");
    $('.navbar-left').addClass("col-sm-9");
    $('#navbar-right').addClass("col-sm-3");
    $('#navbar-right').removeClass("col-sm-2");
  }
};
  detectHeight();

  $('.navbar-left a').click(function(e){
    e.preventDefault();
    // scrollEl = ($(this.hash).offset().top - 100);
    // window.scrollTo( 0, scrollEl, { duration: "slow" } );
    $('html,body').scrollTo(($(this.hash).offset().top - 90), 800);
  });

  var aChildren = $(".navbar-left li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop() + 130; // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top + 0; // get the offset of the div from the top of page
            var divHeight = $(theID).height() + 135; // get the height of the div in question
            if (windowPos > divPos && windowPos < (divPos + divHeight)) {
                $(theID+"-nav").addClass("active");
            } else {
                $(theID+"-nav").removeClass("active");
            }
        }


        if(windowPos + windowHeight == docHeight) {
            if (!$(".navbar-left li:last-child").hasClass("active")) {
                var navActiveCurrent = $(".active a").attr("href");
                $(navActiveCurrent).removeClass("active");
                $(".navbar-left li:last-child").addClass("active");
            }
        }
    });

};


eventListeners();
});

$(window).load( function(){
  $("#loading").css("display", "none");
  $(".content").fadeIn(600);
});
