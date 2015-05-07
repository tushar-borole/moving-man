(function ($, window, document, undefined) {
    var elm = this;
    $.fn.walk = function () {
        this.css("position", "absolute");

        var appendDiv = '<div>' +
            '<img id="boyWalking" src="images/animBoy.gif"/>' +
            '<img id="boyStopped"" src="images/animBoyStopped.png"/>' +
            '</div>';
        this.boyWalking = $("#boyWalking");
        this.boyStopped = $("#boyStopped");
        this.walkingBoy = $(this);
        this.append(appendDiv);
        $("#boyWalking").css("display", "none");
        $("#boyStopped").css("display", "block");
        return this
    };

    var walkBoy = function () {
        console.log(this.boyWalking);
        $("#boyWalking").css("display", "block");
        $("#boyStopped").css("display", "none");
    };

    var stopBoy = function () {
        $("#boyWalking").css("display", "none");
        $("#boyStopped").css("display", "block");

    };
    $.walk = {}
    $.walk.defaults = {
        duration: 1000
    };
    var option = $.extend({}, $.walk.defaults, option);


    var resetRotate = function () {
        $("#walk").css({
            '-ms-transform': 'rotate(0deg)',
            /* IE 9 */
            '-webkit-transform': 'rotate(0deg)',
            /* Chrome, Safari, Opera */
            'transform': 'rotate(0deg)'
        });

    };

    var rotateY = function (rotate) {
        $("#walk").css({
            '-ms-transform': 'rotateY(' + rotate + 'deg)',
            /* IE 9 */
            '-webkit-transform': 'rotateY(' + rotate + 'deg)',
            /* Chrome, Safari, Opera */
            'transform': 'rotateY(' + rotate + 'deg)'
        });

    };
    var rotateZ = function (rotate) {
        $("#walk").css({
            '-ms-transform': 'rotateZ(' + rotate + 'deg)',
            /* IE 9 */
            '-webkit-transform': 'rotateZ(' + rotate + 'deg)',
            /* Chrome, Safari, Opera */
            'transform': 'rotateZ(' + rotate + 'deg)'
        });

    };

    var moveRightStatus = true;
    var moveRight = function () {
        if (moveRightStatus) {
            moveRightStatus = false;
            walkBoy();
            resetRotate();
            rotateY(0);
            $("#walk").stop();
            $("#walk").animate({
                "left": "+=50px"
            }, {
                duration: 1000,
                queue: false
            });
            setTimeout(function () {
                stopBoy();
                moveRightStatus = true;
            }, 1000);
        }

        ;
    };

    var moveLeftStatus = true;
    var moveLeft = function () {
        if (moveLeftStatus) {
            walkBoy();
            resetRotate();
            rotateY(180);
             $("#walk").stop();
            $("#walk").animate({
                "left": "-=50px"
            }, "slow");
            setTimeout(function () {
                stopBoy();
            }, 1000);
        }
    };

    var moveBottomStatus = true;
    var moveBottom = function () {
        if (moveBottomStatus) {
            walkBoy();
            resetRotate();
            rotateZ(90);
             $("#walk").stop();
            $("#walk").animate({
                "top": "+=50px"
            }, "slow");
            setTimeout(function () {
                stopBoy();
            }, 1000);
        };

    };
    var moveTopStatus = true;
    var moveTop = function () {
        if (moveTopStatus) {
            walkBoy();
            resetRotate();
            rotateZ(265);
             $("#walk").stop();
            $("#walk").animate({
                "top": "-=50px"
            }, "slow");
            setTimeout(function () {
                stopBoy();
            }, 1000);
        }

    };


    $(document).keydown(function (e) {
        var keyCode = e.keyCode || e.which;
        var arrow = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        switch (keyCode) {
        case arrow.left:
            moveLeft()
            break;
        case arrow.up:
            moveTop()
            break;
        case arrow.right:
            moveRight()
            break;
        case arrow.down:
            moveBottom()
            break;
        }
    });

})(jQuery, window, document);