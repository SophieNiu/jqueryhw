// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}

$(function(){
	$('#useBilling').click(function(){
	    if ($(this).is(':checked')) {
	        var inputOne = $("#billing");
			var inputTwo = $("#home");
			inputTwo.val(inputOne.val());
	    } else {
	        $('#home:input').val('');
	    }
	 });
});

