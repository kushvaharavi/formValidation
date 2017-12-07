$(document).ready(function(){

	//first name validation
			$("#fname").change(function() {

				var fname = $("#fname").val();
				var fnameRegex = /^([ \.]?[a-zA-Z]+)+$/;
				if(fnameRegex.test(fname) && !fname==""){
					$("#fname").addClass("input_tick");
					$("#fnamestatus").hide();
					
					$("#fname").css("border" , "2px solid green");       
					
					
				} else {
					
					$("#fname").removeClass("input_tick");
					$("#fnamestatus").addClass("error");
					$("#fnamestatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter Valid First Name');
					$("#fnamestatus").show();
					$("#fname").css("border" , "2px solid red");
					$("#myForm").submit(function(e){
						e.preventDefault();
					});
					return false;


				}
			});




	//lname name validation
	$("#lname").change(function() {
		
		var lname = $("#lname").val();
		var lnameRegex = /^([ \.]?[a-zA-Z]+)+$/;
		if(lnameRegex.test(lname) && !lname==""){
			$("#lnamestatus").hide();
			
			$("#lname").css("border" , "2px solid green");
			$("#lname").addClass("input_tick");
		} else {
			$("#lname").removeClass("input_tick");
			
			$("#lnamestatus").addClass("error");
			$("#lnamestatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter Valid Last Name');
			$("#lnamestatus").show();
			$("#lname").css("border" , "2px solid red");
			$("#myForm").submit(function(e){
				e.preventDefault();
			});
			return false;
			
			
		}
	});




	//email validation
	$("#email").change(function() {
		
		var email = $("#email").val();
		var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(emailRegex.test(email) && !email==""){
			$("#checkingbar").html('<img style="width:50px;" src="loader.gif">&nbsp;');
			$.ajax("ajaxValidation.php",{
				type: "POST", 
				data: {email:email},
				success: function(response){
					if(response == 2){
						$("#checkingbar").hide();
						
						$("#emailstatus").addClass("error");
						$("#emailstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Email Already exist');
						$("#email").css("border" , "2px solid red");
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;
						

					} 
					else{
						$("#checkingbar").hide();
						$("#emailstatus").hide();
						$("#email").addClass("input_tick");
						$("#email").css("border" , "2px solid green");
						

					} 			
				}
			});

		} else {
			$("#emailstatus").hide();
			$("#checkingbar").hide();
			$("#email").removeClass("input_tick");
			
			$("#emailstatus").addClass("error");
			$("#emailstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter Valid Email');
			$("#emailstatus").show();
			$("#email").css("border" , "2px solid red");
			$("#myForm").submit(function(e){
				e.preventDefault();
			});
			return false;
			
			
		}
	});



	 //validation for gender field
	 $("#male").click(function(){
	 	$("#female").css("background" , "darkgray");
	 	$("#male").css("background" , "green");
	 	$("#female").attr("checked" , "false");
	 	$("#female").css("box-shadow" , "0 0 5px 0px gray inset");
	 	$("#malestatus").show();
	 	$("#femalestatus").hide();
	 	$("#genderstatus").hide();
	 	$("#malestatus").html('<img style="width:25px;" src="tick.gif"/>&nbsp; ');
	 });

	 $("#female").click(function(){
	 	$("#male").css("background" , "darkgray");
	 	$("#female").css("background" , "green");
	 	$("#male").attr("checked" , "false");
	 	$("#male").css("box-shadow" , "0 0 5px 0px gray inset");
	 	$("#femalestatus").show();
	 	$("#femalestatus").html('<img style="width:25px;" src="tick.gif"/>&nbsp; ');
	 	$("#malestatus").hide();
	 	$("#genderstatus").hide();
	 }); 


	 if($("#year").click(function(){
	 	var male = $("#male:checked").val()?true:false;
	 	var female = $("#female:checked").val()?true:false;
	 	if(male == false && female == false) {
	 		$("#male").css("background" , "red");
	 		$("#female").css("background" , "red");
	 		$("#genderstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; select your gender first');
	 		$("#myForm").submit(function(e){
	 			e.preventDefault();
	 		});
	 		return false;
	 	}
	 }));



	//validation for date of birth
					//Year
					
					$("#year").change(function(){

						if(0 === $("#year").prop('selectedIndex')){
							$("#year").css("border" , "2px solid red");
							$("#myForm").submit(function(e){
								e.preventDefault();
							});
							$("#dobstatus").hide();
							$("#yearstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; select your birth year');
						}
						else{
							$("#year").css("border" , "2px solid green");

						}

					});




					//Month
					
					$("#month").change(function(){
						if(0 === $("#month").prop('selectedIndex')){
							$("#month").css("border" , "2px solid red");
							$("#myForm").submit(function(e){
								e.preventDefault();
							});
							return false;
							$("#dobstatus").hide();
							$("#monthstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; select your birth month');
						}
						else{
							$("#month").css("border" , "2px solid green");
						}
					});



				//Date
				
				$("#date").change(function(){
					if(0 == $("#date").prop('selectedIndex')){
						$("#date").css("border" , "2px solid red");
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						$("#dobstatus").hide();
						$("#datestatus").html('<img style="width:17px;" src="error.png"/>&nbsp; select your birth day');
					}else
					{
						$("#date").css("border" , "2px solid green");
					}
				});


				$("#city").click(function(){
					var year = 0 == $("#year").prop('selectedIndex');
					var month = 0 == $("#month").prop('selectedIndex');
					var date = 0 == $("#date").prop('selectedIndex');
					if(year && month && date){
						$("#dobstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; select your DOB first');
					}
					else{
						$("#dobstatus").html('<img style="width:25px;" src="tick.gif"/>&nbsp; ');
					}
				});





				//city validation
				$("#city").change(function(){


					var city = $("#city").val();
					var cityRegex = /^([ \.]?[a-zA-Z]+)+$/;
					if(cityRegex.test(city) && !city==""){
						$("#city").addClass("input_tick");
						$("#city").css("border" , "2px solid green");
					} else {
						$("#citystatus").hide();
						$("#city").removeClass("input_tick");
						$("#citystatus").addClass("error");
						$("#citystatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter Valid City Name');
						$("#citystatus").show();
						$("#city").css("border" , "2px solid red");
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;


					}

				});



				//phone validation
				$("#phone").change(function(){

					var numbers = /^[0-9]+$/; 
					var phone = $("#phone").val();
					if (phone == "") {
						$("#phone").removeClass("input_tick");
						$("#phonestatus").addClass("error");
						$("#phone").css("border" , "2px solid red");
						$("#phonestatus").hide();
						$("#phonestatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter your mobile number');
						$("#phonestatus").show();
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;

					}else if(!(numbers.test(phone))){  

						$("#phone").css("border" , "2px solid red");
						$("#phone").removeClass("input_tick");
						$("#phonestatus").addClass("error");
						$("#phonestatus").hide();
						$("#phonestatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter valid mobile number');
						$("#phonestatus").show();
						$("#phone").focus();
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;

					}else if(phone.length<10 || phone.length>10){  

						$("#phone").css("border" , "2px solid red");
						$("#phonestatus").addClass("error");
						$("#phone").removeClass("input_tick");
						$("#phonestatus").hide();
						$("#phonestatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Phone number should be 10 digit');
						$("#phonestatus").show();
						$("#phone").focus();
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;

					}else
					{
						$("#phonestatus").hide();
						$("#phone").css("border" , "2px solid green");
						$("#phone").addClass("input_tick");
					}

				});





				//pin validation
				$("#pin").change(function(){

					var numbers = /^[0-9]+$/; 
					var pin = $("#pin").val();
					if (pin == "") {

						$("#pin").css("border" , "2px solid red");
						$("#pin").removeClass("input_tick");
						$("#pinstatus").addClass("error");
						$("#pinstatus").hide();
						$("#pinstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter your mobile number');
						$("#pinstatus").show();
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;

					}else if(!(numbers.test(pin))){  

						$("#pin").css("border" , "2px solid red");
						$("#pin").removeClass("input_tick");
						$("#pinstatus").addClass("error");
						$("#pinstatus").hide();
						$("#pinstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; Enter valid pin number');
						$("#pinstatus").show();
						$("#pin").focus();
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;

					}else if(pin.length<6 || pin.length>6){  

						$("#pin").css("border" , "2px solid red");
						$("#pin").removeClass("input_tick");
						$("#pinstatus").addClass("error");
						$("#pinstatus").hide();
						$("#pinstatus").html('<img style="width:17px;" src="error.png"/>&nbsp; pin number should be 06 digit');
						$("#pinstatus").show();
						$("#pin").focus();
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						return false;

					}else
					{
						$("#pinstatus").hide();
						$("#pin").addClass("input_tick");
						$("#pin").css("border" , "2px solid green");
						
						$("#pinstatus").show();
						return true;
					}
				});


		




				
				$("#submit").click(function(){
					var fname = $("#fname").val();
					var lname = $("#lname").val();
					var email = $("#email").val();
					var male = $("#male:checked").val()?true:false;
				    var female = $("#female:checked").val()?true:false;
					var gender = (male || female);
					var year = 0 == $("#year").prop('selectedIndex');
					var month = 0 == $("#month").prop('selectedIndex');
					var date = 0 == $("#date").prop('selectedIndex');
					var city = $("#city").val();
					var phone = $("#phone").val();
					var pin = $("#pin").val();

					if(fname=='' && lname=='' && email=='' && gender==false && year==true && month==true && date==true && city=='' && phone=='' && pin=='')
					{
						$("#myForm").submit(function(e){
							e.preventDefault();
						});
						$("#fillerr").html('Please FIll All The Form First then Submit');
						$("#fillerr").css("display","initial");
						return false;

					}
					else{
						$("#fillerr").css("display","none");
						$( "form:first" ).submit();
					}
					

				});
				
});				
			