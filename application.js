$(document).ready(function(){
    $('#panel1').hover(function() {
    	document.getElementById('frustrationfree').innerHTML ='Are you still managing projects with email? Are you still using Excel for your todo-lists? Its time to upgrade to basecamp. Manage projects and collaborate with your team and clients the modern way.' ;
    	document.getElementById('frustrationfree').style.fontSize = "14px";
    	$('#arrow1').show();
    },
    	function(){
    	document.getElementById('frustrationfree').innerHTML ='Frustration-free web-based apps for collaboration, sharing information, and making decision.';
  		document.getElementById('frustrationfree').style.fontSize = "20px";
    });	
});
