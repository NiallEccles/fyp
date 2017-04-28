(function($) {

var rover=$('#rover'), 
	ground=$("#ground"),
	beams=$("#beams"),
	background=$("#ground_1_"),
	lander=$("#lander");


	TweenLite.to(rover, 1, {opacity:1});


})(jQuery);


var modal = document.getElementById('myModal');
var btn = document.getElementById("miranda");
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



