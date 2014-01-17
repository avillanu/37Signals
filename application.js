$(document).ready(function(){
    $('#panel1').hover(function() {
    	document.getElementById('frustrationfree').innerHTML ='Are you still managing projects with email? Are you still using Excel for your todo-lists? Its time to upgrade to basecamp. Manage projects and collaborate with your team and clients the modern way.' ;
    	document.getElementById('frustrationfree').style.fontSize = "14px";
    	$('#arrow1').show();
    },
    	function(){
    	document.getElementById('frustrationfree').innerHTML ='Frustration-free web-based apps for collaboration, sharing information, and making decision.';
  		document.getElementById('frustrationfree').style.fontSize = "20px";
  		$('#arrow1').hide();
    });	

    $('#panel2').hover(function() {
    	document.getElementById('frustrationfree').innerHTML ='Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20.000.000 contacts are tracked using Highrise.' ;
    	document.getElementById('frustrationfree').style.fontSize = "14px";
    	$('#arrow2').show();
    },
    	function(){
    	document.getElementById('frustrationfree').innerHTML ='Frustration-free web-based apps for collaboration, sharing information, and making decision.';
  		document.getElementById('frustrationfree').style.fontSize = "20px";
  		$('#arrow2').hide();
    });	

    $('#panel3').hover(function() {
    	document.getElementById('frustrationfree').innerHTML ='Share ideas, discussions, concept, images, code samples, videos, mockups, and documents in a real-time private chat room. Its game changing. We couldnt run our own business without Campfire.' ;
    	document.getElementById('frustrationfree').style.fontSize = "14px";
    	$('#arrow3').show();
    },
    	function(){
    	document.getElementById('frustrationfree').innerHTML ='Frustration-free web-based apps for collaboration, sharing information, and making decision.';
  		document.getElementById('frustrationfree').style.fontSize = "20px";
  		$('#arrow3').hide();
    });	


});
