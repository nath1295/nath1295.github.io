$(".innerjump").css('margin-top',$("nav").css("height"));
var jumpheight = window.innerHeight-Number($("nav").css("height").slice(0,-2))+"px";
$(".innerjump").css('min-height',jumpheight);
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});


function deleteshow() {
	var windowWidth = window.innerWidth;
	if(windowWidth >= 992){
		$('div.navbar-collapse').removeClass('show');
		$('li.nav-item').removeClass('shrink');	
	}else{
		$('li.nav-item').addClass('shrink');
		$('div.navbar-collapse').css('display','none');		
	};
	var jumpht = window.innerHeight-Number($("nav").css("height").slice(0,-2))+"px";
	$(".innerjump").css('min-height',jumpht);
	}
deleteshow()

var navHeight = parseInt($('nav').css('height'), 10);
$(".nav-item").click(function() {
	$('.nav-item').removeClass('active');
	$(this).addClass('active');
	if(window.innerWidth<922){
		$('#navbarSupportedContent').slideToggle(400);
	};
    $('html, body').animate({
        scrollTop: $($(this).children('a').attr('name')).offset().top-navHeight
    }, 600);
});

$(window).scroll(function() {
	var windtop = $(window).scrollTop()+navHeight;
	$('.innerjump').each(function(i) {
            if (($(this).position().top-windtop)<=0) {
                $('.nav-item.active').removeClass('active');
                $('.nav-item').eq(i).addClass('active');
            }
        })
})

$(".navbar-toggler").on('click',function(){
	$('#navbarSupportedContent').slideToggle(400)	
})

function downloadcv() { 
    var element = document.createElement('a'); 
    element.setAttribute('href', 'https://drive.google.com/file/d/16tQWQHvBKKX6jt3BA8uvQD7QUZyRvv5W/view'); 
    element.setAttribute('download', 'Nathan_CV'); 
    element.setAttribute('target', '_blank'); 
	document.body.appendChild(element); 
    element.click(); 
    document.body.removeChild(element); 
}

function buttontolink() { 
    var element = document.createElement('a'); 
    element.setAttribute('href', $(this).attr('href')); 
    element.setAttribute('target', '_blank'); 
	document.body.appendChild(element); 
    element.click(); 
    document.body.removeChild(element); 
}

$('#comment').on('submit', function(e){
	e.preventDefault();
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var email = $('#email').val();
	var message = $('message').val();
	var til;
	if((fname==='') && (lname)===''){
		til='Sir/Madam'
	}else{
		if(fname===''){
			til==="Mr/Mrs/Ms/ "+lname;
		}else{
			til = fname;
		}
	}
	alert('Thank you for your message, '+til+'. I will get back to you ASAP!');
	$(this)[0].reset();
})

$(".getcv").on("click",downloadcv)
$(".social").on("click",buttontolink)
window.addEventListener('resize',deleteshow)
