$(document).ready(function(){
		var config = document.querySelector('.container');
		var mixer = mixitup(config);
		
		// WayPoint //
		$(".js--service-section").waypoint(function(direction){
			if (direction == "down"){
				$("nav").addClass("sticky");
			}
			else{
				$("nav").removeClass("sticky");
			}
		});
});
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}