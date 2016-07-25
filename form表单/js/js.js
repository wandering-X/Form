$(document).ready(function(){	
	$('#city').change(function(){
		var area=[
		['重庆-1','重庆-2','重庆-3'],
		['杭州-1','杭州-2','杭州-3'],
		['成都-1','成都-2','成都-3'],
		['北京-1','北京-2','北京-3'],
		['广东-1','广东-2','广东-3'],
		['天津-1','天津-2','天津-3']
		];

		$('#area').empty();
		var option=$(this).find('option:selected').val();
		var _html ="<option value='0' selected='selected' disabled=''>请选择地区</option>";
		for(var i=0;i<$(this).find('option').length;i++){
			if($('#area').val()!=0){ 
				$("#area option[value!=0]").remove(); 
			} 
			if (option=='city-'+(i+1)) {
				for(var j=0;j<area[i].length;j++){
					_html += "<option value="+"area-"+(j+1)+">"+area[i][j]+"</option>";
				}
			}
		}
		$('#area').html(_html);
	});

	var sex=$(this).find('.sex input').val();
	var usernameError="";
	var psdError="";
	var psd2Error="";
	var flag=false;

	$('#myForm form').find('.usernameError').empty();
	$('#myForm form').find('.psdError').empty();
	$('#myForm form').find('.psd2Error').empty();

	$('#myForm form').find('#username').blur(function(){
		var username=$(this).val();
		if(!username) {
			usernameError="用户名必填！";
			$('#myForm form').find('.usernameError').html(usernameError);
			flag=false;
		}
		else{
			$('#myForm form').find('.usernameError').empty();
			flag=true;
		}
	});
	$('#myForm form').find('#psd').blur(function(){
		var password=$(this).val();
		if(!password) {
			psdError="密码必填！";
			$('#myForm form').find('.psdError').html(psdError);
			flag=false;
		}
		else if (password.length<6) {
			psdError="密码长度必须大于6位！";
			$('#myForm form').find('.psdError').html(psdError);
			flag=false;
		}
		else{
			$('#myForm form').find('.psdError').empty();
			flag=true;
		}
	});
	$('#myForm form').find('#psd2').blur(function(){
		var password=$('#myForm form').find('#psd').val();
		var password2=$(this).val();
		if (!password2) {
			psd2Error="请确认密码！";
			$('#myForm form').find('.psd2Error').html(psd2Error);
			flag=false;
		}
		else if(password!=password2){
			psd2Error="密码输入不一致！";
			$('#myForm form').find('.psd2Error').html(psd2Error);
			flag=false;
		}
		else{
			$('#myForm form').find('.psd2Error').empty();
			flag=true;
		}
	});
	$('#myForm form').submit(function(){
		$('#myForm form').find('#username').triggerHandler('blur');
		$('#myForm form').find('#psd').triggerHandler('blur');
		$('#myForm form').find('#psd2').triggerHandler('blur');
		if ($(this).find('.usernameError').html()!="") {
			$('#myForm form').find('#username').focus();
		}
		else if ($(this).find('.psdError').html()!="") {
			$('#myForm form').find('#psd').focus();
		}
		else if ($(this).find('.psd2Error').html()!="") {
			$('#myForm form').find('#psd2').focus();
		}	
		if (!flag) {
			return false;
		}
		else{
			$.ajax({
				url:'demo.php',
				type:"post",
				dataType:'html',
				data:$('#myForm form').serialize(),
				success: function(data) {
					alert(data);
				}
			});	
		}
	});
});
function checkForm(){
	$('#myForm form').submit();
}