$(document).ready(function() {
	$("#exampleImagesDiv img").hover(
		function(){$(this).addClass("sel")},
		function(){$(this).removeClass("sel")}
	);
});