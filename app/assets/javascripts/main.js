$(document).ready(function(){

var eventListeners = function() {

  $(window).scroll(function(){
  var window_top = $(window).scrollTop() - 1; // the "12" should equal the margin-top value for nav.stick
  var div_top = $('#jnav').offset().top - 3;
  if ($(window).width() > 1200) {
    if (window_top > div_top) {
      $('nav').addClass('navbar-fixed-top');
      $('#about').addClass('big-margin');
    } else {
      $('nav').removeClass('navbar-fixed-top');
      $('#about').removeClass('big-margin');
    }
  }
  });

  $('.navbar-left a').click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash, 500);
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

