//轮播图
// 轮播图思路：
//   1. 改变 m_unit 的 left 值，实现移动效果
var w = $("#actionContainer ul li").innerWidth();
var a = 0;
var timer = setInterval(move,2000);

function move1(){
	if(a<=0){
			a = 5;
			$("#actionContainer ul").css({"left":-5*w});
	}
	if($("#actionContainer ul").is(":animated")){
		return;
	}
	a--;
	$("#actionContainer ul").animate({"left":-a*w},1000,function(){
		
		
		
		//$("#circles ol li").removeClass("current");
		$("#actionOpt a").eq(a).addClass("current").siblings().removeClass();
	});
	
}
function move(){
	if($("#actionContainer ul").is(":animated")){
		return;
	}
	a++;
	$("#actionContainer ul").animate({"left":-a*w},1000,function(){
		if(a>=5){
			a = 0;
			$("#actionContainer ul").css({"left":0});
		}
		
		
		//$("#circles ol li").removeClass("current");
		$("#actionOpt a").eq(a).addClass("current").siblings().removeClass();
	});
}
$(".next-btn").click(move);
$(".pre-btn").click(move1);
$("#actionContainer").mouseover(function(){
	
	
	clearInterval(timer);
});
	
$("#actionContainer").mouseout(function(){
	timer = setInterval(move,2000);
})