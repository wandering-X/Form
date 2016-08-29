
<?php
header('Content-Type:text/html; charset=utf-8');
$username = $_POST['username'];
$name = "用户名为：".$username;
if (isset($_POST['sex'])) {
	$sex="性别为：".$_POST['sex'];
	echo $name."\n".$sex;
}else{
	echo $name;
}
?> 
