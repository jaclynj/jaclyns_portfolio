$(document).ready(function(){

// //thing for class
//   $(document).on("ajax:before", function(){
//     $("#repos").html('<img src="assets/ajax-loader.gif" alt="loading...">')
//   });



// $(document).on("ajaxStart", function(){
//   console.log("ajax start");
// });

// $(".butts").on("click", function(evnt, data){
//     console.log( evnt, data);
//     evnt.preventDefault();
//     $.ajax({
//         url: "https://api.github.com/users/jaclynj/repos",
//         dataType: "json",
//         type: "get",
//         success:function(data){
//             setTimeout(function(){
//                 var m = _.map(data, function(obj) {return obj['name'] + "<br>"});
//                 $('#repos').html(m);
//             }, 1000);
//         }
//     });
// });
// //end thing for class



var eventListeners = function() {

  $(window).scroll(function(){
  var window_top = $(window).scrollTop() - 1; // the "12" should equal the margin-top value for nav.stick
  var div_top = $('#jnav').offset().top;
    if (window_top > div_top) {
      $('nav').addClass('navbar-fixed-top');
    } else {
      $('nav').removeClass('navbar-fixed-top');
    }
  });

  $('.navbar-left a').click(function(e){

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
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        // var theID;
        // var divPos;
        // var divHeight;

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $(theID+"-nav").addClass("active");
                console.log("adding class to "+theID);
            } else {
                $(theID+"-nav").removeClass("active");
                console.log("removing class from "+theID);
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

