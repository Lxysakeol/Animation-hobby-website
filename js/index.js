
var i = 0;
var time;

$(function(){
	
/*轮播图自动播放效果 开始*/
$('.ig').eq(0).show().siblings().hide();
timer();
/*单击左按钮切换*/
$('.left_button').click(function(){
	clearInterval(time);
	if(i==0){
		i=5;
	}else if(i==-1){
		i=5;
		}
	i--;
	$(".banner-dian li").eq(i).addClass("dian-switch")
	.siblings("li").removeClass("dian-switch");
	show();
 });		
/*单击右按钮切换*/
$('.right_button').click(function(){
	clearInterval(time);
	if(i==4){
		i=-1;
		}
		i++;
		$(".banner-dian li").eq(i).addClass("dian-switch")
		.siblings("li").removeClass("dian-switch");
		show();
});
		
function timer(){
	time = setInterval(function(){
		    i++;
			show();
			if(i==4){
				i=-1;
				}else if(i==5){
					i=-1;
					}				
		$(".banner-dian li").eq(i).addClass("dian-switch")
		.siblings("li").removeClass("dian-switch");
			},3000);
};

function show(){
	$('.ig').eq(i).fadeIn(300).siblings().fadeOut(300);
	};
	
/*点击小圆点切换*/
function selectdian(e){
	i=e.index();
	$(".banner-dian li").eq(i).addClass("dian-switch")
	.siblings("li").removeClass("dian-switch");
	$(".ig").eq(i).fadeIn(300).siblings(".ig").fadeOut(300);
	}
$(".banner-dian li").click(function(){
	selectdian($(this));
	});
/*鼠标移入轮播图停止轮播*/
$(".banner-wrap").mouseover(function(){
	clearInterval(time);
	$(".banner-wrap .left_button").fadeIn(300).siblings(".right_button").fadeIn(300);
	});
/*鼠标移出轮播图停止轮播*/
$(".banner-img").mouseout(function(){
 timer();
 $(".banner-wrap .left_button").fadeOut(300).siblings(".right_button").fadeOut(300);
	})

/*轮播图自动播放效果 结束*/	

/*角色图鉴开始*/

var $testimonialsDiv = $('.testimonials');
if ($testimonialsDiv.length && $.fn.owlCarousel) {
	$testimonialsDiv.owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
	});
}

var $galleryDiv = $('.img-gallery');
if ($galleryDiv.length && $.fn.owlCarousel) {
	$galleryDiv.owlCarousel({
		nav: false,
		center: true,
		loop: true,
		autoplay: true,
		dots: true,
		navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			}
		}
	});
}
// <!--角色图鉴结束-->

// <!--滚动条显隐开始-->
$(window).scroll(function(){
	var x_top = $(document).scrollTop();
	/*console.log(x_top);*/
	if(x_top>300){
		$("#j-box").fadeIn(300);
		}else{
			$("#j-box").fadeOut(300);
			}
	});	
// <!--滚动条显隐结束-->
// <!--快速跳转开始-->
$("#j-box a").click(function(){
	$("html,body").animate({
		scrollTop:$($(this).attr("href")).offset().top +"px"
		},500);
		return false;
	});
$("#j-box a").mouseenter(function(){
	$(this).css("color","#00AEFF").siblings("a").css("color","#000");
	});
$("#j-box a").mouseleave(function(){
	$(this).css("color","#000");
	})	
// <!--快速跳转结束-->
// <!--热门角色简介开始-->
$(".roles-dian p").click(function(){
	$(this).addClass("long_dian").siblings().removeClass("long_dian");
	var c=$(this).index();
	$(".roles-box .js-box").eq(c).fadeIn(300).siblings(" .js-box").fadeOut(300);
	})
	
// <!--热门角色简介结束-->

// <!--热门动漫开始-->
$(".introduction-box .rm-box").eq(0).show().siblings(".rm-box").hide();
$(".introduction-box .rm-nav p").click(function(){
	var a = $(this).index();
	$(".introduction-box .rm-box").eq(a).fadeIn(200).siblings(".rm-box").fadeOut(200);
	$(this).addClass("rm-first").siblings().removeClass("rm-first");
	});
	
$(".introduction-box .rm-nav p").mouseenter(function(){
	$(this).css("fontSize","20px").siblings().css("fontSize","14px");
	});
	
$(".introduction-box .rm-nav p").mouseleave(function(){
	$(".introduction-box .rm-nav p").css("fontSize","14px");
	});
// <!--热门动漫结束-->
});	

	
