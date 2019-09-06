$(document).ready(function(){
    $(window).scroll(function(){
        $(this).scrollTop()>450?$(".navbar").addClass("solid"):$(".navbar").removeClass("solid");
        // $(this).scrollTop()>510?$(".navbar").addClass("navbar-border-botton"):$(".navbar").removeClass("navbar-border-botton");
    })
});