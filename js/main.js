jQuery(document).ready(function($) {
 
  //Check to see if the window is top if not then display button
 $(window).scroll(function(){

  // Show button after 500px
  var showAfter = 500;
  if ( $(this).scrollTop() > showAfter ) { 
   $('#myBtn').fadeIn();
  } else { 
   $('#myBtn').fadeOut();
  }
 });

 $(window).scroll(function() {
 
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $('#header').hide();
  }else { 
    $('#header').show();
   }
});

 //Click event to scroll to top
 $('#myBtn').click(function(){
  $('html, body').animate({scrollTop : 0},100);
  return false;
 });

 //show/hide about
 $("#ka").click(function(){
  $(".hide1").show(800);
  $(".hide2, .hide3, .hide4").hide();
  $('.about').css({
    'padding-top': '5vh'
  });
});
 $("#kapec").click(function(){
  $(".hide1, .hide3, .hide4").hide();
  $(".hide2").show(800);
  $('.about').css({
    'padding-top': '5vh'
  });
});
 $("#kadaveida").click(function(){
  $(".hide1, .hide2, .hide4").hide();
  $(".hide3").show(800);
  $('.about').css({
    'padding-top': '5vh'
  });
});
 $("#kas").click(function(){
  $(".hide1, .hide2, .hide3").hide();
  $(".hide4").show(800);
  $('.about').css({
    'padding-top': '5vh'
  });
});

// show hide fakti
$('#aks').click(function(){
$('#fakti').show(1800);
$('.phy').css({
  'padding-top': '5vh'
});
$('.phy p').css({
  'text-align': 'left'
});
});

// hide fakti
$('#aizv, #aizvsp, #aizvne').click(function(){
$('#fakti, #sponk, #spong, #needsr, #needsf').hide(500);
$('.spon, .needs').css({
  'padding-top': '35vh'
});
$('.phy').css({
  'padding-top': '25vh'
});
$('.phy p').css({
  'text-align': 'center'
});
});

// show hide spon needs
$('#spon1').click(function(){
$('#spong').show(500);
$('#sponk').hide(500);
$('#needsr').hide(500);
$('#needsf').hide(500);
$('.spon').css({
  'padding-top': '5vh'
});
$('.needs').css({
  'padding-top': '35vh'
});
});

$('#spon2').click(function(){
$('#sponk').show(500);
$('#spong').hide(500);
$('#needsr').hide(500);
$('#needsf').hide(500);
$('.spon').css({
  'padding-top': '5vh'
});
$('.needs').css({
  'padding-top': '35vh'
});
});

$('#needs1').click(function(){
$('#needsr').show(500);
$('#needsf').hide(500);
$('#sponk').hide(500);
$('#spong').hide(500);
$('.needs').css({
  'padding-top': '5vh'
});
$('.spon').css({
  'padding-top': '35vh'
});
});

$('#needs2').click(function(){
$('#needsf').show(500);
$('#needsr').hide(500);
$('#sponk').hide(500);
$('#spong').hide(500);
$('.needs').css({
  'padding-top': '5vh'
});
$('.spon').css({
  'padding-top': '35vh'
});
});

});

// Slideshows
var slideIndex = 1;
  
function plusDivs(n) {
  slideIndex = slideIndex + n;
  showDivs(slideIndex);
}

function showDivs(n) {
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

showDivs(1);
