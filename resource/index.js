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

$('#loading').remove();

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



window.addEventListener('resize',deleteshow)
