$(document).ready(function(){
	$(window).bind("scroll resize load",scrollPositionUpdate);

	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $("header .navigation li.selected").removeClass("selected");

	    $(this).closest("li").addClass("selected");

	    $('html, body').animate({scrollTop: Math.max(0, $($.attr(this, 'href')).offset().top - 64)}, 500);
	});
});
function scrollPositionUpdate(){
	var scrollPos = $(document).scrollTop();
	if(scrollPos > 150 ){$("header").addClass("scroll");}
	else{$("header").removeClass("scroll");}
	
    $('.navigation li a').each(function () {
        var href = $(this).attr("href");
        if(href == "#"){return;}

        var refElement = $(href);
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation li').removeClass("selected");
            $(this).closest("li").addClass("selected");
        }
    });
}