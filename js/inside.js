$(document).ready(function(){
	$(".list_show_section1 li").click(function(){
		var clickTab1 = $(this).attr('rel'),
			clickTab2 = $(this).children('img').attr('alt'),
			clickTab3 = $(this).children('img').attr('title'),
			clickTab4 = $(this).children('img').attr('rel');
		$("#box_1 img").attr('src','./images/pic_'+clickTab2+'.jpg');
		$("#info_1 h3").html(clickTab1);
		$("#info_1 p").html(clickTab3);
		$("#info_1 div#description").html(clickTab4);
		$("#inside_1").addClass('toshow');
		setTimeout(function(){
			$("#back_1").fadeIn(300);
			$("#box_1").fadeIn(300);
			$("#info_1").fadeIn(300);
		},300);
	});

	$("#back_1").click(function(){
		$("#back_1").fadeOut(300);
		$("#box_1").fadeOut(300);
		$("#info_1").fadeOut(300);
		setTimeout(function(){
			$("#box_1 img").attr('src','');
			$("#info_1 h3").html('');
			$("#info_1 p").html('');
			$("#inside_1").removeClass('toshow');
		},300);
	});

	$(".list_show_section2 li").click(function(){
		var clickTab1 = $(this).attr('rel'),
			clickTab2 = $(this).children('img').attr('alt'),
			clickTab3 = $(this).children('img').attr('title'),
			clickTab4 = $(this).children('img').attr('rel');
		$("#box_2 img").attr('src','./images/pic_'+clickTab2+'.jpg');
		$("#info_2 h3").html(clickTab1);
		$("#info_2 p").html(clickTab3);
		$("#info_2 div#description").html(clickTab4);
		$("#inside_2").addClass('toshow');
		setTimeout(function(){
			$("#back_2").fadeIn(300);
			$("#box_2").fadeIn(300);
			$("#info_2").fadeIn(300);
		},300);
	});

	$("#back_2").click(function(){
		$("#back_2").fadeOut(300);
		$("#box_2").fadeOut(300);
		$("#info_2").fadeOut(300);
		setTimeout(function(){
			$("#box_2 img").attr('src','');
			$("#info_2 h3").html('');
			$("#info_2 p").html('');
			$("#inside_2").removeClass('toshow');
		},300);
	});

	$(".list_show_section3 li").click(function(){
		var clickTab1 = $(this).attr('rel'),
			clickTab2 = $(this).children('img').attr('alt'),
			clickTab3 = $(this).children('img').attr('title'),
			clickTab4 = $(this).children('img').attr('rel');
		$("#box_3 img").attr('src','./images/pic_'+clickTab2+'.jpg');
		$("#info_3 h3").html(clickTab1);
		$("#info_3 p").html(clickTab3);
		$("#info_3 div#description").html(clickTab4);
		$("#inside_3").addClass('toshow');
		setTimeout(function(){
			$("#back_3").fadeIn(300);
			$("#box_3").fadeIn(300);
			$("#info_3").fadeIn(300);
		},300);
	});

	$("#back_3").click(function(){
		$("#back_3").fadeOut(300);
		$("#box_3").fadeOut(300);
		$("#info_3").fadeOut(300);
		setTimeout(function(){
			$("#box_3 img").attr('src','');
			$("#info_3 h3").html('');
			$("#info_3 p").html('');
			$("#inside_3").removeClass('toshow');
		},300);
	});
});