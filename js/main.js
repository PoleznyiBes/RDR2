$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['block1', 'block2', 'block3', 'block4'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000
    });
});

$(document).ready(function() {
    $('.block_title').click(function(event) {
      if ($('.block').hasClass('one')) {
$('.block_title').not($(this)).removeClass('active');
$('.block_text').not($(this).next()).slideUp(300);
      }
$(this).toggleClass('active').next().slideToggle(300);
});

});



$(document).ready(function() {
    $('.block_chartres').click(function(event) {
      if ($('.flex').hasClass('one')) {
$('.block_title').not($(this)).removeClass('active');
$('.block_text').not($(this).next()).slideUp(300);
      }
$(this).toggleClass('active').next().slideToggle(300);
});

});
