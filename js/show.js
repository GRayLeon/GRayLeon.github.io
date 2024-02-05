$(document).ready(function(){
	var s1 = 0;
	var s2 = 0;
	var s3 = 0;

	$("span.show_section1").hover(function(){
		$(".hover_section1").addClass("hover");
	},function(){
		$(".hover_section1").removeClass("hover");
	});

	$(".show_section1").click(function(){
		
		$("html,body").animate({scrollTop:$("#section1").offset().top},300);

		if ( s1 == 0 ) {

			var index = $("span.show_section1").index(this),
			index2 = index+1;
			$("#show_section1").css("display","flex");
			setTimeout(function(){
				$("#show_section1").addClass('toShow');
			},10);
			$("ul#select_show_section1 li").removeClass('active');
			$("ul#select_show_section1 li").eq(index).addClass('active');	
			setTimeout(function(){
				$("#list_show_section1_0"+index2).fadeIn(300);
				$(".show_bottom").addClass('toShow');
				$("#close_1").addClass('toShow');
				$("#wrapper").addClass('lock');
			},300);

			s1 = 1;
		}

		else if ( s1 == 1 ) {
			var index = $("li.show_section1").index(this),
			index2 = index+1;
			$("ul#select_show_section1 li").removeClass('active');
			$("ul#select_show_section1 li").eq(index).addClass('active');
			$('.list_show_section1').hide();
			$("#list_show_section1_0"+index2).fadeIn(300);
		}	

	});

	$("#close_1").click(function(){

		$("#wrapper").removeClass('lock');
		$("html,body").animate({scrollTop:$("#section1").offset().top},300);
		$(".show_bottom").removeClass('toShow');
		$("#close_1").removeClass('toShow');
		$('.list_show_section1').fadeOut(300);
		setTimeout(function(){
			$("#show_section1").removeClass('toShow');
		},300);
		setTimeout(function(){
			$("#show_section1").css("display","none");
		},600);

		s1 = 0;

	});






	$("#pic_note li.show_section2").hover(function(){
		if( s2 == 0 ) {
			$("#pic_note li.show_section2").addClass('active');
			$(this).removeClass('active');
		}
	},function(){
		if( s2 == 0 ) {
			$("#pic_note li.show_section2").removeClass('active');
		}
	});

	$(".show_section2").click(function(){

		$("html,body").animate({scrollTop:$("#section2").offset().top},300);

		if ( s2 == 0 ) {

			var index = $(this).attr('rel');
			index2 = parseInt(index)+1;
			$("#show_section2").css("display","flex");
			setTimeout(function(){
				$("#show_section2").addClass('toShow');
			},10);
			$("#select_show_section2 li").removeClass('active');
			$("#select_show_section2 li").eq(index).addClass('active');
			setTimeout(function(){
				$("#list_show_section2_0"+index2).fadeIn(300);
				$(".show_bottom").addClass('toShow');
				$("#close_2").addClass('toShow');
			},300);

			s2 = 1;
		}

		else if ( s2 == 1 ) {
			var index = $("#select_show_section2 li").index(this),
			index2 = index+1;
			$("#select_show_section2 li").removeClass('active');
			$("#select_show_section2 li").eq(index).addClass('active');
			$('.list_show_section2').hide();
			$("#list_show_section2_0"+index2).fadeIn(300);
		}

	});

	$("#close_2").click(function(){

		$("html,body").animate({scrollTop:$("#section2").offset().top},300);

		$(".show_bottom").removeClass('toShow');
		$("#close_2").removeClass('toShow');
		$('.list_show_section2').fadeOut(300);
		setTimeout(function(){
			$("#show_section2").removeClass('toShow');
		},300);
		setTimeout(function(){
			$("#show_section2").css("display","none");
		},600);
		$("#pic_note li.show_section2").removeClass('active');

		s2 = 0;
	});





	$("#code_note .show_section3").hover(function(){
		$("#code_note .show_section3").addClass('active');
		$(this).removeClass('active');
	},function(){
		$("#code_note .show_section3").removeClass('active');
	});

	$(".show_section3").click(function(){

		$("html,body").animate({scrollTop:$("#section3").offset().top},300);

		if ( s3 == 0 ) {
			var index = $("#code_note li").index(this),
			index2 = index+1;
			$("#show_section3").css("display","flex");
			setTimeout(function(){
				$("#show_section3").addClass('toShow');
			},10);
			$("ul#select_show_section3 li").removeClass('active');
			$("ul#select_show_section3 li").eq(index).addClass('active');	
			setTimeout(function(){
				$("#list_show_section3_0"+index2).fadeIn(300);
				$(".show_bottom").addClass('toShow');
				$("#close_3").addClass('toShow');
			},300);

			s3 = 1;
		}

		else if ( s3 == 1 ) {
			var index = $("ul#select_show_section3 li").index(this),
			index2 = index+1;
			$("ul#select_show_section3 li").removeClass('active');
			$("ul#select_show_section3 li").eq(index).addClass('active');
			$('.list_show_section3').hide();
			$("#list_show_section3_0"+index2).fadeIn(300);
		}	

	});

	$("#close_3").click(function(){

		$("html,body").animate({scrollTop:$("#section3").offset().top},300);

		$(".show_bottom").removeClass('toShow');
		$("#close_3").removeClass('toShow');
		$('.list_show_section3').fadeOut(300);
		setTimeout(function(){
			$("#show_section3").removeClass('toShow');
		},300);
		setTimeout(function(){
			$("#show_section3").css("display","none");
		},600);

		s3 = 0;

	});
});