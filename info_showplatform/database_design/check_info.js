




function make_base_auth(user, password) {
    var tok = user + ':' + password;
	
    var hash = btoa(tok);
    return 'Basic ' + hash;
}




$(document).ready(function(){
	function check_info(){}
	var uusername=getCookie("username");
	var ppassword=getCookie("password");
	var uuid;
	

	

	$.ajaxSetup({ cache: false ,async:false });
	var str="http://api.fanqiechaodan.info/isUser/?username=";
	str=str+uusername+"&password="+ppassword;
	str+="%2F%3Fformat%3Djson&format=json";


	var oRequest = new XMLHttpRequest();
	var sURL = str;
       

	
	


	$.ajax({ 
		type:'GET',
		url:str,
	
		
		dataType:"json",
		

		beforeSend:function (e) {
		
		
		
		
		e.setRequestHeader('Authorization ', make_base_auth(uusername, ppassword));
		
		
		
		} ,
		success:function(data){
			
			
				  
		
			var html = [];
    		
           
		    html.push("<div id=\"all\"");
		    html.push("<div id=\"username\">");
		    html.push("username",":",uusername,"<br/>");
		   	$.each(data,function(index,d){
		   		if ( (index=="url")||(index=="id"))
		   			
		   			return ;
				html.push("<div id=index>");
            	            
				
                html.push(index,":",d,"<br/>");
				
          
				html.push("</div>");
            });
			
			html.push("</div>");

            
            

            $("#check_info").append(html.join('')).css("background-color", "white");
			

		}
					
     
		
		}); 
        

    

});


