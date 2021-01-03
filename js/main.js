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
 
 //Click event to scroll to top
 $('#myBtn').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
 });

 //show/hide about
 $("#ka").click(function(){
  $(".hide1").show(800);
  $(".hide2, .hide3, .hide4").hide();
});
 $("#kapec").click(function(){
  $(".hide1, .hide3, .hide4").hide();
  $(".hide2").show(800);
});
 $("#kadaveida").click(function(){
  $(".hide1, .hide2, .hide4").hide();
  $(".hide3").show(800);
});
 $("#kas").click(function(){
  $(".hide1, .hide2, .hide3").hide();
  $(".hide4").show(800);
});

// show hide fakti
$('#aks').click(function(){
$('#fakti').show(1800);
});
$('#aizv, #aizvsp').click(function(){
$('#fakti').hide(500);
$('#sponk').hide(500);
$('#spong').hide(500);
});

// show hide fakti
$('#spon1').click(function(){
$('#spong').show(500);
$('#sponk').hide(500);
});
$('#spon2').click(function(){
$('#sponk').show(500);
$('#spong').hide(500);
});

});





