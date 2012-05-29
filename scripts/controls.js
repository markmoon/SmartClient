// JavaScript Document

function control_lamp(id, stas)
{
	var mingzi = new Array();
	mingzi[0] = "keting";
	mingzi[1] = "canting";
	mingzi[2] = "chufang";
	mingzi[3] = "zhuwo";
	mingzi[4] = "ciwo";
	mingzi[5] = "kefang";
	mingzi[6] = "xishu";
	mingzi[7] = "yushi";
	mingzi[8] = "cesuo1";
	mingzi[9] = "cesuo2";
	var result = "";
	var statu = $.cookie(mingzi[id] + '_lamp');
	if (statu == stas) {
		
	} else {
		$.cookie(mingzi[id] + '_lamp',stas,{expires:7});
		var passed = $.cookie('passed');
		$.post(
		'lamps.php',
		{
			passed:passed,
			lamp:id
		},
		function(response) //ÏìÓ¦º¯Êý
		{
			
		});
	}
}