new Mmenu(
    document.querySelector('#menu'),
    {
        extensions: ['theme-dark', 'shadow-page', 'position-right', "pagedim-black"],
        setSelected: true,
        counters: true,
        searchfield: {
            placeholder: 'محصولات و غرفه ها رو کشف کن...',
        },
        iconbar: {
            use: '(min-width: 450px)',
            top: [
                '<a href="index.html"><span class="fad fa-2x fa-home-alt align-middle"></span></a>',
            ],
            bottom: [
                '<a href="#/"><span class="fab fa-facebook-f align-middle"></span></a>',
                '<a href="#/"><span class="fab fa-instagram align-middle"></span></a>',
            ],
        },
        sidebar: {
            collapsed: {
                hideNavbar: true,
            },
            // expanded: {
            //     use: '(min-width: 992px)',
            // },
        },
        navbars: [
            {
                content: ["searchfield"],
            },
            {
                type: 'tabs',
                content: [
                    '<a href="#panel-menu"><i class="fad fa-th-large ml-2 align-middle"></i> <span>منو</span></a>',
                    '<a href="#panel-account"><i class="fad fa-user ml-2 align-middle"></i> <span>اکانت</span></a>',
                    '<a href="#panel-cart"><i class="fad fa-shopping-cart ml-2 align-middle"></i> <span>سبد خرید</span></a>',
                ],
            },
            {
                content: ['prev', 'breadcrumbs', 'close'],
            },
            {
                position: 'bottom',
                content: [
                    '<a href="index.html">Offer Kala</a>',
                ],
            },
        ],
    },
    {
        searchfield: {
            clear: true,
        },
        navbars: {
            breadcrumbs: {
                removeFirst: true,
            },
        },
    }
);