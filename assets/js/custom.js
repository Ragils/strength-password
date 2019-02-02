$(document).ready(function(){
  $("#pass").keyup(function(){
  	strength();
  });
});

function strength(){
	var valu = document.getElementById("pass").value;
	var indicator = document.getElementById("status");
	var counter=0;

	if(valu != ""){
		if (valu.length<=5) {
			counter = 1;
		}
		if (valu.length>=5 && valu.length<=10) {
			counter = 2;
		}
		if (valu.length>=10 && valu.length<=15) {
			counter = 3;
		}

		if (counter == 1) {
			indicator.innerHTML="WEAK";
			$(indicator).removeClass("text-dark");
			$(indicator).addClass("text-danger").removeClass("text-warning").removeClass("text-success");
		}
		if (counter == 2) {
			indicator.innerHTML="GOOD";
			$(indicator).removeClass("text-dark");
			$(indicator).addClass("text-warning").removeClass("text-danger").removeClass("text-success");
		}
		if (counter == 3) {
			indicator.innerHTML="STRONG";
			$(indicator).removeClass("text-dark");
			$(indicator).addClass("text-success").removeClass("text-danger").removeClass("text-warning");
		}
	}if (valu == ""){
		indicator.innerHTML="Enter password to try";
		$(indicator).addClass("text-dark").removeClass("text-warning").removeClass("text-success").removeClass("text-danger");
	}
}
