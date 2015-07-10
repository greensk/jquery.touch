(function ($) {
    var isIn = function (x, y, areaX, areaY, areaWidth, areaHeight) {
        return x >= areaX && y >= areaY &&
            x <= (areaX + areaWidth) && y <= (areaY + areaHeight);
    };
    var isTouch = function (x1, y1, width1, height1, x2, y2, width2, height2) {
        return isIn(x1, y1, x2, y2, width2, height2) ||
            isIn(x1 + width1, y1, x2, y2, width2, height2) ||
            isIn(x1 + width1, y1 + height1, x2, y2, width2, height2) || 
            isIn(x1, y1 + height1, x2, y2, width2, height2);
    };
    $.fn.touch = function (touchWith) {
        $touchWith = $(touchWith);
        for (var i = 0; i < $touchWith.length; i++) {
            var $element = $($touchWith[i]),
                elementOffset = $element.offset(),
                $current = $(this),
                currentOffset = $current.offset();
            if (
                isTouch(
                    elementOffset.left,
                    elementOffset.top,
                    $element.width(),
                    $element.height(),
                    currentOffset.left,
                    currentOffset.top,
                    $current.width(),
                    $current.height()
                )
            ) {
                return true
            }
        }
        return false;
    };
})(jQuery);
