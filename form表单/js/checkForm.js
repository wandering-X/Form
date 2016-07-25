
$('#city').change(function(){
	var area=[
	['重庆-1','重庆-2','重庆-3'],
	['杭州-1','杭州-2','杭州-3'],
	['成都-1','成都-2','成都-3'],
	['北京-1','北京-2','北京-3'],
	['广东-1','广东-2','广东-3'],
	['天津-1','天津-2','天津-3']
	];
	var option=$(this).find('option:selected').val();
	for(var i=0;i<$(this).find('option').length;i++){
		if($('#area').val()!=0){ 
			$("#area option[value!=0]").remove(); 
		} 
		if (option=='city-'+(i+1)) {
			for(var j=0;j<area[i].length;j++){
				$('#area').append("<option>"+area[i][j]+"</option>");
				$('#area').children().last().attr("value","area-"+(i+1)+"-"+(j+1));
			}
		}
	}
});

$('#myForm form').submit(function(){
	var username=$(this).find('#username').val();
	var password=$(this).find('#psd').val();
	var password2=$(this).find('#psd2').val();
	var sex=$(this).find('.sex input').val();
	var usernameError="";
	var psdError="";
	var psd2Error="";

	$('#myForm form').find('.usernameError').empty();
	$('#myForm form').find('.psdError').empty();
	$('#myForm form').find('.psd2Error').empty();

	if(username=='') {
		usernameError="用户名必填！";
		$('#myForm form').find('.usernameError').html(usernameError);
		$('#myForm form').find('#username').focus();
		return false;
	}
	else if(!password) {
		psdError="密码必填！";
		$('#myForm form').find('.psdError').html(psdError);
		$('#myForm form').find('#psd').focus();
		return false;
	}
	else if (password.length<6) {
		psdError="密码长度必须大于6位！";
		$('#myForm form').find('.psdError').html(psdError);
		$('#myForm form').find('#psd').focus();
		return false;
	}
	else if (!password2) {
		psd2Error="请确认密码！";
		$('#myForm form').find('.psd2Error').html(psd2Error);
		$('#myForm form').find('#psd2').focus();
		return false;
	}
	else if(password!=password2){
		psd2Error="密码输入不一致！";
		$('#myForm form').find('.psd2Error').html(psd2Error);
		$('#myForm form').find('#psd2').focus();
		return false;
	}
	else{
		$('#myForm form').find('.usernameError').empty();
		$('#myForm form').find('.psdError').empty();
		$('#myForm form').find('.psd2Error').empty();
		return true;
	}
});
function checkForm(){
	$('#myForm form').submit();
}
