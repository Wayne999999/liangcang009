/*********************************登录页面**************************************/
//即时编辑
var str = [];
$(".innerPro").focusin(function(){
	if($(this).val()==str[$(".innerPro").index(this)]){
		$(this).val("");
	}
})
for(var i=0;i<3;i++){
	str[i]=$(".innerPro").eq(i).val();
}
$(".innerPro").focusout(function(){
	var a=$(".innerPro").index(this);
	//console.log(a);
	var str2 = $(this).val();
	if(!$(this).val()){
		$(this).val(str[a]);
	}
})


