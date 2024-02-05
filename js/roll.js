$(document).ready(function(){

	$("ul#menu li").click(function(){
		var index = $("ul#menu li").index(this);

		if ( index == 0 ) {
			$("html,body").animate({scrollTop:$("#first .page:last-child").offset().top},300);
		}

		else if ( index == 1 ) {
			$("html,body").animate({scrollTop:$("#section1").offset().top},300);
		}

		else if ( index == 2 ) {
			$("html,body").animate({scrollTop:$("#section2").offset().top},300);
		}

		else if ( index == 3 ) {
			$("html,body").animate({scrollTop:$("#section3").offset().top},300);
		}

		if ( index == 4 ) {
			$("html,body").animate({scrollTop:$("#last").offset().top},300);
		}
	});

});