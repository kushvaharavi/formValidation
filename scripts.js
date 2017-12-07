				
function validateForm() {



				//Validation for first name field
				var fname = document.getElementById("fname").value;
				var letters = /^[A-Za-z]+$/;
				 if (fname == "") {
				 	document.getElementById("fname").placeholder = "First Name must be filled out";
				 	document.getElementById("fname").style.border = "2px solid red";
				 	document.getElementById("fname").value = "";
				 	return false;  
				 }else if(fname.match(letters))  
				 {  
				 	document.getElementById("fname").style.border = "2px solid green";	
				 	
				 }  
				 else  
				 {  
				 	document.getElementById("fname").placeholder = "Enter character value only in First Name";
				 	document.getElementById("fname").style.border = "2px solid red"; 
				 	document.getElementById("fname").value = "";
				 	document.getElementById("fname").focus();
				 	return false;  
				 }  


	




				//Validation for last name field
				
				var lname = document.getElementById("lname").value;
				if (lname == "") {
					document.getElementById("lname").placeholder = "Last Name must be filled out";
					document.getElementById("lname").style.border = "2px solid red";
					document.getElementById("lname").value = "";
					document.getElementById("lname").focus();
					return false;
				}else if(lname.match(letters)){  
					 document.getElementById("lname").style.border = "2px solid green";	
				}else
				{
					
					document.getElementById("lname").placeholder = "Enter character value only in Last Name";
					document.getElementById("lname").style.border = "2px solid red";
					document.getElementById("lname").value = "";
					document.getElementById("lname").focus();
					return false; 
				} 





				//Validation for email
				var email = document.getElementById("email").value;
				var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				 if (email == "") {
				 	document.getElementById("email").placeholder = "Email must be filled out";
				 	document.getElementById("email").style.border = "2px solid red";
				 	document.getElementById("email").value = "";
				 	return false;  
				 }else if(email.match(emailRegex))  
				 {  
				 	document.getElementById("email").style.border = "2px solid green";	
				 	
				 }  
				 else  
				 {  
				 	document.getElementById("email").placeholder = "Please enter a valid Email id";
				 	document.getElementById("email").style.border = "2px solid red"; 
				 	document.getElementById("email").value = "";
				 	document.getElementById("email").focus();
				 	return false;  
				 }  





				//validation for gender field
				
				var male = document.getElementById("male").checked;
				var female = document.getElementById("female").checked;
				if(male == false && female == false) {
					document.getElementById("male").style.background  = "red";
					document.getElementById("female").style.background  = "red";
					return false;
				}else if(document.getElementById("male").checked){
					document.getElementById("male").style.background  = "green";
					document.getElementById("female").checked = false;
					document.getElementById("female").style.background  = "darkgray";
					document.getElementById("female").style.boxShadow = "0 0 5px 0px gray inset";
				}
				else if (document.getElementById("female").checked ) {
					document.getElementById("female").style.background  = "green";
					document.getElementById("male").checked = false;
					document.getElementById("male").style.background  = "darkgray";	
					document.getElementById("male").style.boxShadow = "0 0 5px 0px gray inset";
				} 





				//validation for date of birth
					//Year
					
					if(0 === document.getElementById("year").selectedIndex){
						document.getElementById("year").style.border = "3px solid red";
						return false;
					}
					else{
						document.getElementById("year").style.border = "2px solid green";

					} 



					//Month
					
					if(0 === document.getElementById("month").selectedIndex){
						document.getElementById("month").style.border = "3px solid red";
						return false;
					}
					else{
						document.getElementById("month").style.border = "2px solid green";	
					} 


				//Date
				
				if(0 == document.getElementById("date").selectedIndex){
					document.getElementById("date").style.border = "3px solid red";
					return false;
				}else
				{
					document.getElementById("date").style.border = "2px solid green";	
				} 






				//validation for city field
				
				var city = document.getElementById("city").value;
				if(city == "") {
					document.getElementById("city").placeholder = "City must be filled out";
					document.getElementById("city").style.border = "2px solid red";
					document.getElementById("city").value = "";
					document.getElementById("city").focus();
					return false;
				}else if(city.match(letters)){  
					document.getElementById("city").style.border = "2px solid green";	
				}else
				{
					
					document.getElementById("city").placeholder = "Enter character value only in City Name";
					document.getElementById("city").style.border = "2px solid red";
					document.getElementById("city").value = "";
					document.getElementById("city").focus();
					return false;  
				} 





				//validation for phone field
				var numbers = /^[0-9]+$/; 
				var phone = document.getElementById("phone").value;
				if (phone == "") {
					document.getElementById("phone").placeholder = "Phone must be filled out";
					document.getElementById("phone").style.border = "2px solid red";
					document.getElementById("phone").value = "";
					document.getElementById("phone").focus();
					return false;
				}else if(!(phone.match(numbers))){  
					document.getElementById("phone").placeholder = "Enter numeric value only in Phone no";
					document.getElementById("phone").style.border = "2px solid red";
					document.getElementById("phone").value = "";
					document.getElementById("phone").focus();
					return false;  
				}else if(phone.length<10){  
					document.getElementById("phone").placeholder = "Phone number must be at least 10 characters long";
					document.getElementById("phone").style.border = "2px solid red";
					document.getElementById("phone").value = "";
					document.getElementById("phone").focus();
					return false;  
				}else
				{
					document.getElementById("phone").style.border = "2px solid green";	
				} 






				//validation for pin field
				
				var pin = document.getElementById("pin").value;
				if (pin == "") {
					document.getElementById("pin").placeholder = "Pin must be filled out";
					document.getElementById("pin").style.border = "2px solid red";
					document.getElementById("pin").value = "";
					document.getElementById("pin").focus();
					return false;
				}else if(!(pin.match(numbers))){  
					document.getElementById("pin").placeholder = "Enter numeric value only in Pin no";
					document.getElementById("pin").style.border = "2px solid red";
					document.getElementById("pin").value = "";
					document.getElementById("pin").focus();
					return false;  
				}else if(pin.length<6 || pin.length>6){  
					document.getElementById("pin").placeholder = "Pin number must be 06 characters long only";
					document.getElementById("pin").style.border = "2px solid red";
					document.getElementById("pin").value = "";
					document.getElementById("pin").focus();
					return false;  
				}else
				{
					document.getElementById("pin").style.border = "2px solid green";	
				} 
				

			}


