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
                '<a href="index.html"><span class="feather icon-home align-middle"></span></a>',
            ],
            bottom: [
                '<a href="#/"><span class="feather icon-facebook align-middle"></span></a>',
                '<a href="#/"><span class="feather icon-instagram align-middle"></span></a>',
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
                    '<a href="#panel-menu"><i class="feather icon-menu ml-2 align-middle"></i> <span>منو</span></a>',
                    '<a href="#panel-account"><i class="feather icon-user ml-2 align-middle"></i> <span>اکانت</span></a>',
                    '<a href="#panel-cart"><i class="feather icon-shopping-cart ml-2 align-middle"></i> <span>سبد خرید</span></a>',
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