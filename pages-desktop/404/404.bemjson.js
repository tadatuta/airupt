({
    block: 'b-page',
    title: '404',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_404.css', ie: false },
        { elem: 'css', url: '_404.ie.css', ie: 'lt IE 8' },
        { elem: 'meta', attrs: { name: 'description', value: 'Appcurl is mobile app search engine for the smartphone & tablet users. Appcurl helps you explore and find Android and Iphone(iOS) apps that matches your life style.' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'app search, app search engine, android app search, iphone app search, mobile app search, ios app search engine, android app search engine, app discovery, mobile app discovery, ios app reviews, android app reviews, share ios apps, share android apps, like ios app in facebook, like android app in facebook, ios app blog, android app blog, mobile social network, mobile social search, app social search, ios app recommendation, android app recommendation, view friends apps' }}
    ],
    content: [
        {
            block: 'oops',
            content: 'Oops, looks like we couldn’t find the page you were looking for!'
        },
        {
            block: 'oops-description',
            content: [
                {
                    elem: 'para',
                    content: 'This may be caused by page being removed, renamed, or the page being temporarily unavailable.'
                },
                {
                    elem: 'para',
                    content: 'Please check the link again.'
                }
            ]
        },
        {
            block: 'return-buttons',
            content: [
                {
                    block: 'b-link',
                    mix: [ { block: 'return-buttons', elem: 'button', mods: { 'return-to': 'appcurl'} } ],
                    url: 'http://www.appcurl.com/',
                    content: 'appcurl'
                },
                {
                    block: 'b-link',
                    mix: [ { block: 'return-buttons', elem: 'button', mods: { 'return-to': 'airomo'} } ],
                    url: 'http://www.airomo.com/',
                    content: 'airomo'
                }
            ]
        },
        {
            block: 'footer',
            content: {
                elem: 'inner',
                content: [                    
                    {
                        block: 'b-menu-horiz',
                        js: false,
                        mods: { layout: 'simple' },
                        separator: ' · ',
                        mix: [ { block: 'footer-nav' } ],
                        content: [                            
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link', url: '/about.html', content: 'About'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link', url: '/privacy.html', content: 'Privacy'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link', url: '/advertisers.html', content: 'Advertisers'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link', url: '/developers.html', content: 'Developers'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link', url: '/help.html', content: 'Help'
                                }
                            }
                        ]
                    },
                    {
                        block: 'soc-links',
                        content: [
                            'Follow us on: ',
                            {
                                block: 'twitter-share',
                                mix: [{ block: 'soc-links', elem: 'twitter' }],
                                content: [
                                    {
                                        block: 'b-link',
                                        mix: [ { block: 'twitter-share', elem: 'link' } ],
                                        url: 'https://twitter.com/#!/appcurl',
                                        title: 'Twitter',
                                        target: '_blank',
                                        content: 'twitter'
                                    },
                                    {
                                        block: 'b-link',
                                        mix: [ { block: 'twitter-share', elem: 'share' } ],
                                        cls: 'twitter-share-button',
                                        url: 'https://twitter.com/share',
                                        attrs: {
                                            'data-via': 'AiruptInc',
                                            'data-hashtags': 'appcurl'
                                        },
                                        content: 'Tweet'
                                    },
                                ]
                            },
                            {
                                block: 'facebook-like',                                
                                mix: [{ block: 'soc-links', elem: 'facebook' }],                                
                                content: [                                    
                                    {
                                        block: 'b-link',
                                        mix: [ { block: 'facebook-like', elem: 'link' } ],
                                        url: 'http://www.facebook.com/Appcurl',
                                        title: 'Facebook',
                                        target: '_blank',
                                        content: 'facebook'
                                    },
                                    {
                                        elem: 'like',                                        
                                        attrs: {
                                            'data-href': 'http://www.facebook.com/Appcurl',
                                            'data-send': 'false',
                                            'data-layout': 'button_count',
                                            'data-width': '74',
                                            'data-show-faces': 'false'
                                        }
                                    }                                    
                                ]
                            }                            
                        ]
                    },
                    {
                        block: 'copyright',
                        content: '© 2012 Airupt Inc.'
                    }
                ]
            }
        }    
    ]
})