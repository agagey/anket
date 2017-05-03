$(document).ready(function(){

	$(".personal-info_inputs").val();

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

	// focus on input
	$(".personal-info_inputs").focus(function(){
			$(this).addClass('personal-info_not-empty');
			$("#" + $(this).attr('id') + "-label").removeClass('hidden');
			$(this).attr('placeholder', '');
	}).blur(function(){
		if ($(this).val() == '') {
			$(this).removeClass('personal-info_not-empty');
			$("#" + $(this).attr('id') + "-label").addClass('hidden');
			$(this).attr('placeholder', $(this).attr('rel'));
		} else {
		    $(this).addClass('personal-info_not-empty');
		    $("#" + $(this).attr('id') + "-label").removeClass('hidden');
		}
	});
});
