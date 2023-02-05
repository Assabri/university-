// menu item start




$('.fa-times').hide();
$('.mobile-menu-item').hide();


$('.fa-align-justify').click(function(){
	$('.fa-align-justify').hide()
	$('.fa-times').show()
	$('.mobile-menu-item').slideDown()

});



$('.fa-times').click(function(){
	$('.fa-align-justify').show()
	$('.fa-times').hide()
	$('.mobile-menu-item').slideUp()

});



		// menu item close





		// responsive menu start



$('.service-up').hide();
$('.web-up').hide();



$('.service-drop').hide();
$('.web-drop').hide();





$('.service-down').click(function(){

	$('.service-up').show()
	$('.service-down').hide()
	$('.service-drop').slideDown(1000)

});

$('.service-up').click(function(){

	$('.service-down').show()
	$('.service-up').hide()
	$('.service-drop').slideUp(1000)

});










$('.web-down').click(function(){
	$('.web-up').show()
	$('.web-down').hide()
	$('.web-drop').slideDown(1000)

});

$('.web-up').click(function(){
	$('.web-down').show()
	$('.web-up').hide()
	$('.web-drop').slideUp()

});





		// responsive menu close










      // notice section start



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}






			// notice section close







		// count section start



$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});











		// count section close