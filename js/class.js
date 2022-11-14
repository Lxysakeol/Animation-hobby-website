// JavaScript Document
var a = $("#top-wrap-cv").children().length;
var b = $("#top-wrap-staff").children().length;
var sum =0;

$(function(){
	
	if(a<=5){
	sum = a*25;
	$("#top-wrap-cv").css("height",sum + "px").siblings(".more").hide();
    }else if(a>5){
	$("#top-wrap-cv").css("height","265px");
		}
		
	if(b<=5){
	sum = b*30;
	$("#top-wrap-staff").css("height",sum + "px").siblings(".more").hide();
    }else if(a>5){
	$("#top-wrap-staff").css("height","280px");
		}
	
	
	
			
	$("#cv-more").click(function(){
		var c = a*25;
		$("#top-wrap-cv").animate({height:c+"px"},300).siblings("#cv-more").hide();
		});
	
	$("#staff-more").click(function(){
		var c =b*30
		$("#top-wrap-staff").animate({height:c+"px"},300).siblings("#staff-more").hide();
		});
		
	$(".tv-box .tv-box-content").eq(0).show().siblings(".tv-box-content").hide();
	$(".tv-box .tv-box-title .tv-box-j").click(function(){
		var m = $(this).index();
		console.log(m);
		$(".tv-box .tv-box-content").eq(m-1).fadeIn(100).siblings(".tv-box-content").fadeOut(100);
		});
	
	});