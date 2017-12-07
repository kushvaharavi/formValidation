$(document).ready(function(){
	
	$("#submit").click(function(e) {
		
		var check = validateForm();

		if (!check) {
			e.preventDefault();
		}
	});



	function validateForm(){


		//Validation for first name field
		var fname = $("#fname").val();
		var letters = /^([ \.]?[a-zA-Z]+)+$/;
		if (fname == "") {
			$("#fname").attr("placeholder", "First Name must be filled out");
			$("#fname").css("border" , "2px solid red");
			$("#fname").text("");
			$("#fname").focus();
			$("#myForm").submit(function(e){
				e.preventDefault();
			});
			return false;
		}else if(letters.test(fname))  
		{  
			$("#fname").css("border" , "2px solid green");	

		}  
		else  
		{  
			$("#fname").attr("placeholder" , "Enter character value only in First Name");
			$("#fname").css("border" , "2px solid red");
			$("#fname").val("");
			$("#fname").focus();
			$("#myForm").submit(function(e){
				e.preventDefault();
			}); 
			return false;
		}




		//Validation for Last name field
		var fname = $("#lname").val();
		var letters = /^[A-Za-z]+$/;
		if (fname == "") {
			$("#lname").attr("placeholder", "Last Name must be filled out");
			$("#lname").css("border" , "2px solid red");
			$("#lname").text("");
			$("#lname").focus();
			$("#myForm").submit(function(e){
				e.preventDefault();
			});
			return false;
		}else if(letters.test(fname))  
		{  
			$("#lname").css("border" , "2px solid green");	

		}  
		else  
		{  
			$("#lname").attr("placeholder" , "Enter character value only in Last Name");
			$("#lname").css("border" , "2px solid red");
			$("#lname").val("");
			$("#lname").focus();
			$("#myForm").submit(function(e){
				e.preventDefault();
			});
			return false; 
		}


		//Validation for email
		var email = $("#email").val();
		var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email == "") {
			$("#email").attr("placeholder" , "Email must be filled out");
			$("#email").css("border" , "2px solid red");
			$("#email").val("");
			$("#email").focus();
			$("#myForm").submit(function(e){
				e.preventDefault();
			});  
			return false;
		}else if(emailRegex.test(email))  
		{  
			$("#email").css("border" , "2px solid green");	

		}  
		else  
		{  
			$("#email").attr("placeholder" , "Please enter a valid Email id");
			$("#email").css("border" , "2px solid red"); 
			$("#email").val("");
			$("#email").focus();
			$("#myForm").submit(function(e){
				e.preventDefault();
			});
			return false;
		}


				 //validation for gender field

				 var male = $("#male:checked").val()?true:false;
				 var female = $("#female:checked").val()?true:false;
				 if(male == false && female == false) {
				 	$("#male").css("background" , "red");
				 	$("#female").css("background" , "red");
				 	$("#myForm").submit(function(e){
				 		e.preventDefault();
				 	});
				 	
				 }else if($("#male:checked").val()?true:false){
				 	$("#male").css("background" , "green");
				 	$("#female").attr("checked" , "false");
				 	$("#female").css("background" , "darkgray");
				 	$("#female").css("box-shadow" , "0 0 5px 0px gray inset");
				 }
				 else if ($("#female:checked").val()?true:false) {
				 	$("#female").css("background" , "green");
				 	$("#male").attr("checked" , "false");
				 	$("#male").css("background" , "darkgray");
				 	$("#male").css("box-shadow" , "0 0 5px 0px gray inset");
				 } 




				//validation for date of birth
					//Year
					
					if(0 === $("#year").prop('selectedIndex')){
						$("#year").css("border" , "3px solid red");
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;
					}
					else{
						$("#year").css("border" , "3px solid green");

					} 



					//Month
					
					if(0 === $("#month").prop('selectedIndex')){
						$("#month").css("border" , "3px solid red");
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;
					}
					else{
						$("#month").css("border" , "3px solid green");
					} 


				//Date
				
				if(0 == $("#date").prop('selectedIndex')){
					$("#date").css("border" , "3px solid red");
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				}else
				{
					$("#date").css("border" , "3px solid green");
				} 



				//validation for city field
				
				var city = $("#city").val();
				if(city == "") {
					$("#city").attr("placeholder" , "City must be filled out");
					$("#city").css("border" , "2px solid red");
					$("#city").val("");
					$("#city").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				}else if(letters.test(city)){  
					$("#city").css("border" , "2px solid green");
				}else
				{
					
					$("#city").attr("placeholder" , "Enter character value only in City Name");
					$("#city").css("border" , "2px solid red");
					$("#city").val("");
					$("#city").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				} 





				//validation for phone field
				var numbers = /^[0-9]+$/; 
				var phone = $("#phone").val();
				if (phone == "") {
					$("#phone").attr("placeholder" ,  "Phone must be filled out");
					$("#phone").css("border" , "2px solid red");
					$("#phone").val("");
					$("#phone").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				}else if(!(numbers.test(phone))){  
					$("#phone").placeholder = "Enter numeric value only in Phone no";
					$("#phone").css("border" , "2px solid red");
					$("#phone").val("");
					$("#phone").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				}else if(phone.length<10 || phone.length>10){  
					$("#phone").attr("placeholder" , "Phone number must be at least 10 characters long");
					$("#phone").css("border" , "2px solid red");
					$("#phone").val("");
					$("#phone").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				}else
				{
					$("#phone").css("border" , "2px solid green");
				} 






				//validation for pin field
				
				var pin = $("#pin").val();
				if (pin == "") {
					$("#pin").attr("placeholder" ,  "Pin must be filled out");
					$("#pin").css("border" , "2px solid red");
					$("#pin").val("");
					$("#pin").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;
				}else if(!(numbers.test(pin))){  
					$("#pin").attr("placeholder" ,"Enter numeric value only in Pin no");
					$("#pin").css("border" , "2px solid red");
					$("#pin").val("");
					$("#pin").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					}); 
					return false;
				}else if(pin.length<6 || pin.length>6){  
					$("#pin").attr("placeholder" , "Pin number must be 06 characters long only");
					$("#pin").css("border" , "2px solid red");
					$("#pin").val("");
					$("#pin").focus();
					$("#myForm").submit(function(e){
						e.preventDefault();
					}); 
					return false;
				}else
				{
					$("#pin").css("border" , "2px solid green");
					return true;	
				} 



			}







		});




