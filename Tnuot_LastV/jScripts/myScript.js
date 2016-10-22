$(document).ready(function () {

    //מעבר טאב על תפריטים
    $("ul li > a").focus(function () {
        //פתיחת תפריט של תנועות נוער
        if (($(this).parents("ol").parents("li").attr('id') == "Noar") || ($(this).parents("li").attr('id') == "Noar")) {
            $("#Noar a").css("color", "white");
            $("#Noar").css({
                "height": "40px",
                "background-color": "#404040",
                "-webkit-border-radius": "4px",
                "border-radius": "4px"
            });
        }
        else {
            $("ul li ol").css("display", "");
            $("#Noar> a").css("color", "black");
            $("#Noar").css({
                "height": "40px",
                "backgroundColor": ""
            });
        }

        $(this).parents("li").find("ol").show();
        $(".Quote").css("display", "");
    });


    //מעבר עכבר על סרגל תנועות במידה ויש פוקוס על תנועה מסוימת
    $("#Tnuah_Nav li > a, #Terms li > a").hover(function () {
        $(".Quote").css("display", "");
        $(this).find(".Quote").css("display", "block");
    }, function () {
        $(".Quote").css("display", "");
    });

    //מעבר טאב על סרגון תנועות תחתון
    $("#Tnuah_Nav li > a , h3 a").focus(function () {

        $(".Quote").css("display", "");
        $(this).find(".Quote").css("display", "block");
    });

    $("#Terms li > a").focus(function () {
        $(".Quote").css("display", "");
        $(this).parents("li").find(".Quote").css("display", "block");
    });

    //מעבר עכבר על ציטוט
    $(".Tnoha a").hover(function () {

        var ExposedAll = $("#Hide").css('display');
        if (ExposedAll == "none") {
            $(this).find(".Show").hide();
            $(this).find(".Hidden").show();
        }

    }, function () {

        var ExposedAll = $("#Hide").css('display');
        if (ExposedAll == "none") {
            $(this).find(".Show").show();
            $(this).find(".Hidden").hide();
        }
    });

    //חשיפה/הסתרת תנועות
    $("#triangle").click(function () {
        var ExposedTnua = $(".Hidden").css('display');
        if (ExposedTnua == "none") {

            $(".Show").hide();
            $(".Hidden").show();

            $("#Exposed").hide();
            $("#Hide").show();
        }
        else {

            $(".Show").show();
            $(".Hidden").hide();

            $("#Exposed").show();
            $("#Hide").hide();
        }

    });

    //מצב הסקרול כאשר מנווטים באמצעות מקש טאב
    $(".Tnoha a").focus(function () {

        var TnuoaFocus = $(this).index(".Tnoha a");

        var scrollPane = $(".scroll-pane"),
            scrollContent = $(".scroll-content");
        if (TnuoaFocus < 3) {
            $(".ui-slider-handle.ui-state-default.ui-corner-all").css("left", 100 + "%");
            scrollContent.css("margin-left", -2300);
        }
        else if (TnuoaFocus < 12) {
            var scrollposition = 100 - ((TnuoaFocus - 2) * 11);
            $(".ui-slider-handle.ui-state-default.ui-corner-all").css("left", scrollposition + "%");
            var scrollContentposition = -2116 + (250 * (TnuoaFocus - 2));
            scrollContent.css("margin-left", scrollContentposition);
        }
        else if (TnuoaFocus == 13) {
            $(".ui-slider-handle.ui-state-default.ui-corner-all").css("left", 0 + "%");
            scrollContent.css("margin-left", 0);
        }
    });


    //simple accordion
    if ($('.Accordion').length > 0) {
        $('.Accordion').accordion();
        //האקורדיון בעמוד למי מיועד יהיה סגור בהרצה
        $('.Accordion .Ages').accordion({
            collapsible: true,
            active: false
        });

        //סגירה חוזרת של טאב באקורדיון
        var $header = $('h3'), $content = $('.allData');
        $header.click(function () {
            var $this = $(this),
                $relatedContent = $this.next();

            if ($relatedContent.is(':visible')) { // If the tab is already open
                $relatedContent.slideUp('fast');
                $this.find('.icon-active').removeClass('icon-active');
                $this.removeClass('header-active');

            } else { // if the tab is closed

                // Close any other opened tabs
                $content.slideUp('fast');
                $header.removeClass('header-active');
                $header.find('span').removeClass('icon-active');

                // Open related tab
                $relatedContent.slideDown('fast');
                $this.find('span').addClass('icon-active');
                $this.addClass('header-active');
            }
        });

    }

    //תמונות מתחלפות
    
        $("#slideshow > div:gt(0)").hide();

        setInterval(function () {
            $('#slideshow > div:first')
              .fadeOut(500)
              .next()
              .fadeIn(500)
              .end()
              .appendTo('#slideshow');
        }, 3000);

    });

