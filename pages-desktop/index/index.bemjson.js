({
    block: 'b-page',
    title: 'Airupt documentation',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            tag: 'h1',
            content: 'Project documentation'
        },
        {
            tag: 'h2',
            content: 'CSS style guide'
        },
        {
            content: [
                {
                    tag: 'ol',
                    content: [
                        {
                            tag: 'li',
                            content: 'Don\'t use id for selectors'
                        },
                        {
                            tag: 'li',
                            content: 'Avoid using tag selectors'
                        },
                        {
                            tag: 'li',
                            content: 'Avoid using cascade'
                        },
                        {
                            tag: 'li',
                            content: 'Use 4 spaces for indentation'
                        },
                        {
                            tag: 'li',
                            content: 'Write brackets on a new line'
                        },
                        {
                            tag: 'li',
                            content: 'Empty line after each block of rules'
                        },
                        {
                            tag: 'li',
                            content: 'Separate each group of properties by empty line'
                        },
                        {
                            tag: 'Always use semicolon at the end of the last property'
                        }
                    ]
                },
                {
                    tag: 'h3',
                    content: 'Example'
                },
                {
                    block: 'code',
                    mods: { lang: 'css' },
                    content: [
                        {
                            elem: 'rule',
                            selector: '.selector',
                            content: [
                                {
                                    elem: 'property',
                                    content: 'property'
                                },
                                {
                                    elem: 'value',
                                    content: 'value'
                                },
                                {
                                    elem: 'property',
                                    content: 'property'
                                },
                                {
                                    elem: 'value',
                                    content: 'value'
                                },
                                {
                                    tag: 'br'
                                },
                                {
                                    elem: 'property',
                                    content: 'property'
                                },
                                {
                                    elem: 'value',
                                    content: 'value'
                                }
                            ]
                        },
                        {
                            elem: 'rule',
                            selector: '.selector',
                            content: [
                                {
                                    elem: 'property',
                                    content: 'property'
                                },
                                {
                                    elem: 'value',
                                    content: 'value'
                                },
                                {
                                    elem: 'property',
                                    content: 'property'
                                },
                                {
                                    elem: 'value',
                                    content: 'value'
                                },
                                {
                                    elem: 'property',
                                    content: 'property'
                                },
                                {
                                    elem: 'value',
                                    content: 'value'
                                }
                            ]
                        }  
                    ]
                },
                {
                    tag: 'h3',
                    content: 'Property order'
                },
                {
                    content: [
                        [
                            {
                                tag: 'h4',
                                content: 'positioning'
                            },
                            'position<br/>',
                            'z-index<br/>',
                            'top<br/>',
                            'right<br/>',
                            'bottom<br/>',
                            'left'
                        ],
                        [
                            {
                                tag: 'h4',
                                content: 'display'
                            },
                            'display<br/>',
                            'visibility<br/>',
                            'float<br/>',
                            'clear<br/>',
                            'overflow<br/>',
                            'overflow-x<br/>',
                            'overflow-y<br/>',
                            '-ms-overflow-x<br/>',
                            '-ms-overflow-y<br/>',
                            'clip<br/>',
                            'zoom<br/>',
                            'flex-direction<br/>',
                            'flex-order<br/>',
                            'flex-pack<br/>',
                            'flex-align'
                        ],
                        [
                            {
                                tag: 'h4',
                                content: 'box model'
                            },
                            '-webkit-box-sizing<br/>',
                            '-moz-box-sizing<br/>',
                            'box-sizing<br/>',
                            'width<br/>',
                            'min-width<br/>',
                            'max-width<br/>',
                            'height<br/>',
                            'min-height<br/>',
                            'max-height<br/>',
                            'margin<br/>',
                            'margin-top<br/>',
                            'margin-right<br/>',
                            'margin-bottom<br/>',
                            'margin-left<br/>',
                            'padding<br/>',
                            'padding-top<br/>',
                            'padding-right<br/>',
                            'padding-bottom<br/>',
                            'padding-left'
                        ],
                        [
                            {
                                tag: 'h4',
                                content: 'tables and lists'
                            },
                            'table-layout<br/>',
                            'empty-cells<br/>',
                            'caption-side<br/>',
                            'border-spacing<br/>',
                            'border-collapse<br/>',
                            'list-style<br/>',
                            'list-style-position<br/>',
                            'list-style-type<br/>',
                            'list-style-image'
                        ],
                        [
                            {
                                tag: 'h4',
                                content: 'magic'
                            },
                            'content<br/>',
                            'quotes<br/>',
                            'counter-reset<br/>',
                            'counter-increment<br/>',
                            'resize<br/>',
                            'cursor<br/>',
                            'nav-index<br/>',
                            'nav-up<br/>',
                            'nav-right<br/>',
                            'nav-down<br/>',
                            'nav-left<br/>',
                            '-webkit-transition<br/>',
                            '-moz-transition<br/>',
                            '-ms-transition<br/>',
                            '-o-transition<br/>',
                            'transition<br/>',
                            '-webkit-transition-delay<br/>',
                            '-moz-transition-delay<br/>',
                            '-ms-transition-delay<br/>',
                            '-o-transition-delay<br/>',
                            'transition-delay<br/>',
                            '-webkit-transition-timing-function<br/>',
                            '-moz-transition-timing-function<br/>',
                            '-ms-transition-timing-function<br/>',
                            '-o-transition-timing-function<br/>',
                            'transition-timing-function<br/>',
                            '-webkit-transition-duration<br/>',
                            '-moz-transition-duration<br/>',
                            '-ms-transition-duration<br/>',
                            '-o-transition-duration<br/>',
                            'transition-duration<br/>',
                            '-webkit-transition-property<br/>',
                            '-moz-transition-property<br/>',
                            '-ms-transition-property<br/>',
                            '-o-transition-property<br/>',
                            'transition-property<br/>',
                            '-webkit-transform<br/>',
                            '-moz-transform<br/>',
                            '-ms-transform<br/>',
                            '-o-transform<br/>',
                            'transform<br/>',
                            '-webkit-transform-origin<br/>',
                            '-moz-transform-origin<br/>',
                            '-ms-transform-origin<br/>',
                            '-o-transform-origin<br/>',
                            'transform-origin<br/>',
                            '-webkit-animation<br/>',
                            '-moz-animation<br/>',
                            '-ms-animation<br/>',
                            '-o-animation<br/>',
                            'animation<br/>',
                            '-webkit-animation-name<br/>',
                            '-moz-animation-name<br/>',
                            '-ms-animation-name<br/>',
                            '-o-animation-name<br/>',
                            'animation-name<br/>',
                            '-webkit-animation-duration<br/>',
                            '-moz-animation-duration<br/>',
                            '-ms-animation-duration<br/>',
                            '-o-animation-duration<br/>',
                            'animation-duration<br/>',
                            '-webkit-animation-play-state<br/>',
                            '-moz-animation-play-state<br/>',
                            '-ms-animation-play-state<br/>',
                            '-o-animation-play-state<br/>',
                            'animation-play-state<br/>',
                            '-webkit-animation-timing-function<br/>',
                            '-moz-animation-timing-function<br/>',
                            '-ms-animation-timing-function<br/>',
                            '-o-animation-timing-function<br/>',
                            'animation-timing-function<br/>',
                            '-webkit-animation-delay<br/>',
                            '-moz-animation-delay<br/>',
                            '-ms-animation-delay<br/>',
                            '-o-animation-delay<br/>',
                            'animation-delay<br/>',
                            '-webkit-animation-iteration-count<br/>',
                            '-moz-animation-iteration-count<br/>',
                            '-ms-animation-iteration-count<br/>',
                            '-o-animation-iteration-count<br/>',
                            'animation-iteration-count<br/>',
                            '-webkit-animation-iteration-count<br/>',
                            '-moz-animation-iteration-count<br/>',
                            '-ms-animation-iteration-count<br/>',
                            '-o-animation-iteration-count<br/>',
                            'animation-iteration-count<br/>',
                            '-webkit-animation-direction<br/>',
                            '-moz-animation-direction<br/>',
                            '-ms-animation-direction<br/>',
                            '-o-animation-direction<br/>',
                            'animation-direction<br/>',
                            'text-align<br/>',
                            'text-align-last<br/>',
                            '-ms-text-align-last<br/>',
                            'text-align-last<br/>',
                            'vertical-align<br/>',
                            'white-space<br/>',
                            'text-decoration<br/>',
                            'text-emphasis<br/>',
                            'text-emphasis-color<br/>',
                            'text-emphasis-style<br/>',
                            'text-emphasis-position<br/>',
                            'text-indent<br/>',
                            '-ms-text-justify<br/>',
                            'text-justify<br/>',
                            'text-transform<br/>',
                            'letter-spacing<br/>',
                            'word-spacing<br/>',
                            '-ms-writing-mode<br/>',
                            'text-outline<br/>',
                            'text-transform<br/>',
                            'text-wrap<br/>',
                            'text-overflow<br/>',
                            '-ms-text-overflow<br/>',
                            'text-overflow-ellipsis<br/>',
                            'text-overflow-mode<br/>',
                            '-ms-word-wrap<br/>',
                            'word-wrap<br/>',
                            'word-break<br/>',
                            '-ms-word-break<br/>',
                            '-moz-tab-size<br/>',
                            '-o-tab-size<br/>',
                            'tab-size<br/>',
                            '-webkit-hyphens<br/>',
                            '-moz-hyphens<br/>',
                            'hyphens'
                        ],
                        [
                            {
                                tag: 'h4',
                                content: 'borders'
                            },
                            'opacity<br/>',
                            'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity<br/>',
                            '-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha<br/>',
                            '-ms-interpolation-mode<br/>',
                            'color<br/>',
                            'border<br/>',
                            'border-collapse<br/>',
                            'border-width<br/>',
                            'border-style<br/>',
                            'border-color<br/>',
                            'border-top<br/>',
                            'border-top-width<br/>',
                            'border-top-style<br/>',
                            'border-top-color<br/>',
                            'border-right<br/>',
                            'border-right-width<br/>',
                            'border-right-style<br/>',
                            'border-right-color<br/>',
                            'border-bottom<br/>',
                            'border-bottom-width<br/>',
                            'border-bottom-style<br/>',
                            'border-bottom-color<br/>',
                            'border-left<br/>',
                            'border-left-width<br/>',
                            'border-left-style<br/>',
                            'border-left-color<br/>',
                            '-webkit-border-radius<br/>',
                            '-moz-border-radius<br/>',
                            'border-radius<br/>',
                            '-webkit-border-top-right-radius<br/>',
                            '-moz-border-top-right-radius<br/>',
                            'border-top-right-radius<br/>',
                            '-webkit-border-bottom-right-radius<br/>',
                            '-moz-border-bottom-right-radius<br/>',
                            'border-bottom-right-radius<br/>',
                            '-webkit-border-bottom-left-radius<br/>',
                            '-moz-border-bottom-left-radius<br/>',
                            'border-bottom-left-radius<br/>',
                            '-webkit-border-top-left-radius<br/>',
                            '-moz-border-top-left-radius<br/>',
                            'border-top-left-radius<br/>',
                            '-webkit-border-image<br/>',
                            '-moz-border-image<br/>',
                            '-o-border-image<br/>',
                            'border-image<br/>',
                            '-webkit-border-image-source<br/>',
                            '-moz-border-image-source<br/>',
                            '-o-border-image-source<br/>',
                            'border-image-source<br/>',
                            '-webkit-border-image-slice<br/>',
                            '-moz-border-image-slice<br/>',
                            '-o-border-image-slice<br/>',
                            'border-image-slice<br/>',
                            '-webkit-border-image-width<br/>',
                            '-moz-border-image-width<br/>',
                            '-o-border-image-width<br/>',
                            'border-image-width<br/>',
                            '-webkit-border-image-outset<br/>',
                            '-moz-border-image-outset<br/>',
                            '-o-border-image-outset<br/>',
                            'border-image-outset<br/>',
                            '-webkit-border-image-repeat<br/>',
                            '-moz-border-image-repeat<br/>',
                            '-o-border-image-repeat<br/>',
                            'border-image-repeat<br/>',
                            'outline<br/>',
                            'outline-width<br/>',
                            'outline-style<br/>',
                            'outline-color<br/>',
                            'outline-offset<br/>',
                            'background<br/>',
                            'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader<br/>',
                            'background-color<br/>',
                            'background-image<br/>',
                            'background-repeat<br/>',
                            'background-attachment<br/>',
                            'background-position<br/>',
                            'background-position-x<br/>',
                            '-ms-background-position-x<br/>',
                            'background-position-y<br/>',
                            '-ms-background-position-y<br/>',
                            'background-clip<br/>',
                            'background-origin<br/>',
                            'background-size<br/>',
                            'box-decoration-break<br/>',
                            '-webkit-box-shadow<br/>',
                            '-moz-box-shadow<br/>',
                            'box-shadow<br/>',
                            '-webkit-box-shadow<br/>',
                            '-moz-box-shadow<br/>',
                            'box-shadow<br/>',
                            '-webkit-box-shadow<br/>',
                            '-moz-box-shadow<br/>',
                            'box-shadow<br/>',
                            '-webkit-box-shadow<br/>',
                            '-moz-box-shadow<br/>',
                            'box-shadow<br/>',
                            'filter:progid:DXImageTransform.Microsoft.gradient<br/>',
                            '-ms-filter:\'progid:DXImageTransform.Microsoft.gradient<br/>',
                            'text-shadow'
                        ],
                        [
                            {
                                tag: 'h4',
                                content: 'font'
                            },
                            'font<br/>',
                            'font-family<br/>',
                            'font-size<br/>',
                            'font-weight<br/>',
                            'font-style<br/>',
                            'font-variant<br/>',
                            'font-size-adjust<br/>',
                            'font-stretch<br/>',
                            'font-effect<br/>',
                            'font-emphasize<br/>',
                            'font-emphasize-position<br/>',
                            'font-emphasize-style<br/>',
                            'font-smooth<br/>',
                            'line-height'
                        ]
                    ]
                }
            ]
        }
    ]
})
