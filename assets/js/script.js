$(document).ready(function() {
    // var width = window.innerWidth;
    // document.querySelector("--nav'").style.width = width;
    // $('.--nav').width(width)

    $('body').css('overflow-x', 'hidden');

    var zero = 0;
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > zero) {
            $(".--nav").addClass('nav-background'),
                $("nav .--nav-item").addClass('color-black');

        } else {
            $(".--nav").removeClass('nav-background'),
                $("nav .--nav-item").removeClass('color-black');
        }

    })
    var twohundred = 200;
    $(window).on('scroll', () => {
        $('.back-to-top').toggleClass('display-inline',
            $(window).scrollTop() > twohundred);
        hundred = $(window).scrollTop();

    })
    $('a.back-to-top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });



    // show /hide navbar
    $('.navbar-toggler').click(() => {
        $('.nav--container').toggleClass('navbar--show');

        $('.toggler-icon').toggleClass('close-icon');
        $('.toggler-icon:nth-child(2)').toggle(300);
        $('.toggler-icon:nth-child(1)').toggleClass('rotate45');

        $('.toggler-icon:nth-child(3)').toggleClass('rotate-45');
    })

})
var y = $(window).scrollTop();
if (y > 0) {
    $("nav .logo").stop().animate({
        width: '140px',
        height: '140px'
    }, 500);
} else if (y == 0) {
    $("nav .logo").stop().animate({
        width: '170px',
        height: '170px'
    }, 500);
};



function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
}

$(".button").on("click tap", function() {
    toggleSidebar();
});

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        toggleSidebar();
    }
});

(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function(value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);

    }

});
$('textarea').blur(function() {
    $('#hire textarea').each(function() {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('textarea + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('textarea + label + span').css({ 'opacity': 0 });
        }
    });
});

$('#hire .field:first-child input').blur(function() {
    $('#hire .field:first-child input').each(function() {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({ 'opacity': 0 });
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function() {
    $('#hire .field:nth-child(2) input').each(function() {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 1 });
        } else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({ 'opacity': 0 });
        }
    });
});