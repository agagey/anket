$(document).ready(function(){

	window.prettyPrint && prettyPrint();

	// init slider
	$("#SliderSingle").slider({ from: 0, to: 100, step: 25, round: 0, smooth: true, dimension: 'Х', skin: "round" });

	// mobile menu click
	$(".top-menu__mobile").click(function(){
		$(".top-menu a").toggleClass("show");
	});

	// select click
	$(".personal-info__fields-select").click(function(){
		$(".personal-info__fields-dropdown").toggleClass("show");
	});

	// slect dayof born
	$(".personal-info__fields-dropdown ul li").click(function(){
		$(".personal-info__fields-select span").html($(this).text());
		$(".personal-info__fields-dropdown").removeClass("show");
	});
});
