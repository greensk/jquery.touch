$(function () {
    $(window).on('mousemove', function (ev) {
        var $unit = $('.unit');
        $unit.css({'top': ev.pageY, 'left': ev.pageX});
        $unit.toggleClass('unit-selected', $unit.touch('.brick'));
    });
});
