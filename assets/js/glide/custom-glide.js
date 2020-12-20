new Glide('.glide', {
    type: 'carousel',
    direction: 'rtl',
    startAt: 0,
    perView: 6,
    autoplay: 2000,
    hoverpause: true,
    perTouch: 3,
    peek: {
        before: 70,
        after: 50,
    },
    breakpoints: {
        1024: {
            perView: 5
        },
        992: {
            perView: 4
        },
        768: {
            perView: 3
        },
        576: {
            perView: 1
        },
    }
}).mount();
new Glide('.glide1', {
    type: 'carousel',
    direction: 'rtl',
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    hoverpause: true,
    perTouch: 3,
    peek: {
        before: 70,
        after: 50,
    },
    breakpoints: {
        1024: {
            perView: 4
        },
        992: {
            perView: 3
        },
        768: {
            perView: 2
        },
        576: {
            perView: 1
        },
    }
}).mount();
new Glide('.glide2', {
    type: 'carousel',
    direction: 'rtl',
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    hoverpause: true,
    perTouch: 3,
    peek: {
        before: 70,
        after: 50,
    },
    breakpoints: {
        1024: {
            perView: 4
        },
        992: {
            perView: 3
        },
        768: {
            perView: 2
        },
        576: {
            perView: 1
        },
    }
}).mount();