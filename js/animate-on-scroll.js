$(document).ready(function(){
    // element 1
    $('#services').css('opacity', 0);
    $('#services').waypoint(function() {
        $('#services').addClass('fadeInLeft');
    }, { offset: '50%' });

});