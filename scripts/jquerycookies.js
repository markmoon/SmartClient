// JavaScript Document
//代码来源于WEB

/*
使用方法
$(document).ready(function() {
	$('#write_cokies').click(function(){
		$.cookie('name', 'test',{expires: 7});
	});
	$('#read_ookies').click(function(){
		var test = $.cookie('name');
		alert (test);
	});
	$('#delete_cookies').click(function(){
		$.cookie('name', null);
	});
});
*/


jQuery.cookie = function(name, value, options) {
	if (typeof value != 'undefined') {
		options = options || {};
		if (value === null) {
			value = '';
			options = $.extend({}, options);
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else {
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};



function subResponse(s_name, response)
{
	if (response.length>0)
  	{
  		c_start=response.indexOf(s_name + "=");
  		if (c_start!=-1)
    	{ 
    		c_start=c_start + s_name.length+1 ;
    		c_end=response.indexOf(";",c_start);
    		if (c_end==-1) 
    			c_end=response.length;
    		return unescape(response.substring(c_start,c_end));
   	} 
  	}
	return ""
}

function delayrun(code, time) {
	var t = setTimeout(code, time);
}

function freshslider(name, stas) {
	var myselect = $('#' + name);
	myselect[0].selectedIndex = stas;
	myselect.slider('refresh');
}

function fenli(str)
{
	var splitstr = new Array();
	splitstr = str.split(':');
	return splitstr;
}

function isdigit(s)
{
	var r,re;
	re = /\d*/i; //\d表示数字,*表示匹配多个数字
	r = s.match(re);
	return (r==s)?1:0;
}
