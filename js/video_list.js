$(function(){
	$(".content-box .nav-right a").click(function(){
		$(this).addClass("first-list").siblings("a").removeClass("first-list");
		});
	
	
		
	$(".send-btn-div .Article").focusin(function(){
		$(".send-btn-div .Article").css("background","#fff");
		});
	$(".send-btn-div .Article").focusout(function(){
		$(".send-btn-div .Article").css("background","#F0F0F0");
		});
   
	})