$(document).ready(function() {
    // owl - carousel responsive code
    $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        })
        //product counter mehtod
    $(".fa-caret-left").click(function() {
        let input = $(this).parent().find("#counter")
        let count = parseInt(input.val())
        count = count <= 0 ? 0 : count - 1;
        input.val(count)
    });
    $(".fa-caret-right").click(function() {
        let input = $(this).parent().find("#counter")
        let count = parseInt(input.val())
        count = count + 1;
        input.val(count)
    });

});