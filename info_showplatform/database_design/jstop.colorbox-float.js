//*********colorbox*************//
//Close
function dialog_close(){
  $.fn.colorbox.close();
}
//Demo
function dialog_to_iframeDemo(){
       $.fn.colorbox({href:"/demo_html_1.html",iframe:true, innerWidth:340, innerHeight:340});
}

//瀛愯彍鍗�

//鐧诲綍 娉ㄥ唽  璁㈤槄 濡備綍鍘�
function dialog_to_Login(){
       $.fn.colorbox({href:"/login.html?t=" + Math.random()});
}

function dialog_to_Regsiter(){
       $.fn.colorbox({href:"/member_register.html?t=" + Math.random()});
}

function dialog_to_Regsiter_ok(){
       $.fn.colorbox({href:"/register-ok.html?t=" + Math.random()});
}

function dialog_to_EmailSub(){
       $.fn.colorbox({href:"/email-sub.html?t="+ Math.random()});
}

function dialog_to_Contact(){
       $.fn.colorbox({href:"/contact-us.html?t="+ Math.random()});
}
function dialog_to_Goto(){
       $.fn.colorbox({href:"/go-to.html?t="+ Math.random()});
}

function dialog_to_Goto_from_about(p){
       $.fn.colorbox({href:"/go-to.php?t="+ Math.random()+"&location="+encodeURIComponent(p)});
}

function dialog_to_Legal(){
       $.fn.colorbox({href:"/legal-notices.html?t="+ Math.random()});
}
function dialog_to_Privacy(){
       $.fn.colorbox({href:"/privacy-notices.html?t="+ Math.random()});
}
function dialog_to_FloorPlan(){
       $.fn.colorbox({href:"/floor-plan.html?t="+ Math.random()});
}

function dialog_to_book_d(){
	  store_book_watch(2);	
      $.fn.colorbox({href:"/register-d.html?t=" + Math.random()});
}

function dialog_to_book_j(){
	  store_book_watch(1);	
      $.fn.colorbox({href:"/register-j.html?t=" + Math.random()});
}
function dialog_to_member_register(){
      $.fn.colorbox({href:"/member_register.html?t=" + Math.random()});
}
function dialog_to_position_detail(id){
      $.fn.colorbox({href:"/About/jobDetail.php?id=" + id});
}
/**
 * @todu dialog to show roomPic via switch
 * @author sonic 2012-04-29
 */
function dialog_to_roomPic(a){
	var a = a;
	$.fn.colorbox({href:"/Apartment/dialog-room-"+a+".html?t="+ Math.random()});
	/*
	switch (a){
	 case "1-1" :
	 	alert(a);
	 	break;
	 case "1-2" :
	 	alert(a);
	 	break;
	}*/
}



$(document).ready(function(){
	 $('#go-min-hub').click(function(){
		//alert("鏁鏈熷緟");
		window.open('http://digihub.antinganting.com.cn/read/','_blank');
	 });
	 $('#go-min-pin').click(function(){
		//alert("鏁鏈熷緟");
		window.open('http://digihub.antinganting.com.cn/read/','_blank');
	 });
	 $('.ensite').click(function(){
		alert("鏁鏈熷緟");
	 });

	 $('#logobtn').click(function(){
		window.location.href = "/index.php";
	 });

	 fufilllogin();

 });

 function store_book_watch(type){
	$.post("/store_book_watch.php?t="+Math.random(),
			{ 
				type:type
			},
			function(data){
				var item = eval("("+data+")");
				if(item.result == "INPUT_INVALID"){
					 
				} 
		}); 
 }

function getQueryParamVal(name) {
	var query = window.location.search.split('?')[1];
	var param_value = "";

	if (query) {
		var params = query.split('&');

		$.each(params, function() {
			var param = this.split('=');
			var param_name = param[0];

			if (param_name == name) {
				param_value = decodeURIComponent(param[1]);
				return false;
			};
		});
	};

	return param_value;
}

function fufilllogin(){
	var uid = getCookie("jiating_uid");
	var username = getCookie("jiating_username");
	if(uid){
		$("#loginBar_login").html('<span class="inline-block login_text" style="width:197px">娆㈣繋鎮� '+ username +'锛� <a href="/Life_hub/member/">浼氬憳涓績</a> | <a href="/user/login_out.php">閫€鍑�</a></span>');
	}else{
		$("#loginBar_login").html('<a href="javascript:dialog_to_Login();">鐧诲綍</a> / <a href="javascript:dialog_to_Regsiter();">娉ㄥ唽</a>');
	} 	
}

function setCookie(name,value)
{
    var exp  = new Date();
    exp.setTime(exp.getTime() + 12*60*60*1000);
    document.cookie = name + "="+ encodeURIComponent (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]); return null;
}

function deleteCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}