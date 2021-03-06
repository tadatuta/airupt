({
    block: 'b-page',
    title: 'The mobile app search engine: Android and iPhone apps',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'js', url: '//static.airomo.com/js/api.airomo.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'Appcurl is mobile app search engine for the smartphone & tablet users. Appcurl helps you explore and find Android and Iphone(iOS) apps that matches your life style.' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'app search, app search engine, android app search, iphone app search, mobile app search, ios app search engine, android app search engine, app discovery, mobile app discovery, ios app reviews, android app reviews, share ios apps, share android apps, like ios app in facebook, like android app in facebook, ios app blog, android app blog, mobile social network, mobile social search, app social search, ios app recommendation, android app recommendation, view friends apps' }}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    url: 'http://apps.airomo.com/'
                },
                {
                    elem: 'layout-right',
                    content: [
                        {
                            block: 'header-search',
                            url: '//appcurl.com/',
                            content: [
                                {
                                    elem: 'input',
                                    name: 'q',
                                    placeholder: 'Search'
                                }
                            ]
                        },
                        {
                            block: 'dashboard',
                            content: [
                                {
                                    elem: 'item',
                                    elemMods: { type: 'notification' },
                                    content: {
                                        elem: 'icon'
                                    }
                                },
                                {
                                    elem: 'item',
                                    elemMods: { type: 'sync' },
                                    content: {
                                        elem: 'icon'
                                    }
                                }
                            ]
                        },
                        {                        
                            block: 'dropdown',
                            mods: { theme: 'white' },
                            mix: [ { block: 'user' } ],
                            content: [
                                {
                                    elem: 'switcher',
                                    content: [
                                        {
                                            block: 'avatar'
                                        },
                                        {
                                            block: 'user',
                                            elem: 'username',
                                            tag: 'span',
                                            content: 'You'
                                        }
                                    ]
                                },
                                {
                                    elem: 'popup',
                                    content: {
                                        block: 'menu',
                                        mix: [ { block: 'dropdown', elem: 'menu' }, { block: 'user', elem: 'menu' } ],
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mix: [
                                                        {
                                                            block: 'user',
                                                            elem: 'link',
                                                            mods: { type: 'login' }
                                                        }
                                                    ],
                                                    /* TODO: not to hardcode links */
                                                    url: 'http://www.airomo.com/?next=http://www.appcurl.com/',
                                                    content: 'Login'
                                                }
                                            },
                                            {
                                                elem: 'item',                                            
                                                content: {
                                                    block: 'b-link',
                                                    mix: [
                                                        {
                                                            block: 'user',
                                                            elem: 'link',
                                                            mods: { type: 'profile' }
                                                        }
                                                    ],
                                                    url: 'http://www.airomo.com/profile/',
                                                    content: 'My profile'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mix: [
                                                        {
                                                            block: 'user',
                                                            elem: 'link',
                                                            mods: { type: 'settings' }
                                                        }
                                                    ],
                                                    url: 'http://www.airomo.com/settings/profile.html',
                                                    content: 'Settings'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'b-link',
                                                    mix: [
                                                        {
                                                            block: 'user',
                                                            elem: 'link',
                                                            mods: { type: 'logout' }
                                                        }
                                                    ],
                                                    content: 'Log out'
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }                    
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'appcurl-logo'
                },
                {
                    block: 'appcurl-search',
                    content: [
                        {
                            block: 'input',
                            placeholder: 'Search Mobile Apps...'
                        },
                        {
                            block: 'button',
                            content: 'Search'
                        }
                    ]
                },
                {
                    block: 'app-categories',
                    content: [
                        {
                            block: 'app-category',
                            mods: { cat: 'books' },
                            url: '//apps.airomo.com/#category=1',
                            content: 'Books & Reference'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'business' },
                            url: '//apps.airomo.com/#category=2',
                            content: 'Business'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'education' },
                            url: '//apps.airomo.com/#category=3',
                            content: 'Education'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'entertainment' },
                            url: '//apps.airomo.com/#category=4',
                            content: 'Entertainment'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'finance' },
                            url: '//apps.airomo.com/#category=5',
                            content: 'Finance'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'games' },
                            url: '//apps.airomo.com/#category=6',
                            content: 'Games'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'health' },
                            url: '//apps.airomo.com/#category=7',
                            content: 'Health & Fitness'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'lifestyle' },
                            url: '//apps.airomo.com/#category=8',
                            content: 'Lifestyle'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'media' },
                            url: '//apps.airomo.com/#category=9',
                            content: 'Media & Video'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'medical' },
                            url: '//apps.airomo.com/#category=10',
                            content: 'Medical'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'music' },
                            url: '//apps.airomo.com/#category=11',
                            content: 'Music & Audio'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'navigation' },
                            url: '//apps.airomo.com/#category=12',
                            content: 'Navigation'
                        },
                        {
                            block: 'app-category',
                            mods: { type: 'top' },
                            url: '//apps.airomo.com/#top',
                            content: 'Top Charts'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'news' },
                            url: '//apps.airomo.com/#category=13',
                            content: 'News & Magazines'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'photography' },
                            url: '//apps.airomo.com/#category=14',
                            content: 'Photography'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'productivity' },
                            url: '//apps.airomo.com/#category=15',
                            content: 'Productivity'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'shopping' },
                            url: '//apps.airomo.com/#category=16',
                            content: 'Shopping'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'social' },
                            url: '//apps.airomo.com/#category=17',
                            content: 'Social'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'sports' },
                            url: '//apps.airomo.com/#category=18',
                            content: 'Sports'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'utilities' },
                            url: '//apps.airomo.com/#category=19',
                            content: 'Utilities'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'weather' },
                            url: '//apps.airomo.com/#category=20',
                            content: 'Weather'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'travel' },
                            url: '//apps.airomo.com/#category=21',
                            content: 'Travel & Local'
                        },
                        {
                            block: 'app-category',
                            mods: { cat: 'personalization' },
                            url: '//apps.airomo.com/#category=22',
                            content: 'Personalization'
                        },
                        {
                            elem: 'caption',
                            content: 'Discover the apps that matter.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'serp',
            content: [
                {
                    elem: 'layout-col',
                    mods: { position: 'left' },
                    content: {
                        block: 'serp-filter',
                        content: [
                            {
                                elem: 'title',
                                content: 'Result Filter'
                            },
                            {
                                elem: 'caption',
                                content: 'Platforms'
                            },
                            {
                                elem: 'filter',
                                content: [
                                    {
                                        block: 'checkbox'
                                    },
                                    {
                                        elem: 'number',
                                        content: '100500'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    elem: 'layout-col',
                    mods: { position: 'center' },
                    content: [
                        {
                            elem: 'statistics',
                            content: [
                                '13952 apps found and ',
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: '2130 apps'
                                },
                                ' with "sms" in the title'
                            ]
                        },
                        {
                            elem: 'apps',
                            content: [
                                {
                                    block: 'app',
                                    content: [
                                        {
                                            elem: 'icon'
                                        },
                                        {
                                            block: 'rating'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            mix: [ { block: 'app', elem: 'title' } ],
                                            content: 'app title'                                    
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            mix: [ { block: 'app', elem: 'category' } ],
                                            content: 'app category'
                                        },
                                        {
                                            block: 'b-link',
                                            url: '#',
                                            mix: [ { block: 'app', elem: 'store', mods: { store: 'market' } } ],
                                            content: 'market'
                                        },
                                        {
                                            block: 'app-social',
                                            content: [
                                                {
                                                    elem: 'likes',
                                                    content: '0'
                                                },
                                                {
                                                    elem: 'comments',
                                                    content: '0'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'layout-col',
                    mods: { position: 'right' },
                    content: [
                        {
                            block: 'right-coll',
                            content: 'right collumn'
                        }
                    ]
                }
            ]     
        },
        {
            block: 'store-badges',
            content: [
                {
                    block: 'b-link',
                    url: 'https://play.google.com/store/apps/details?id=com.airomo.appcurl',
                    mix: [ { block: 'store-badge', mods: { store: 'google-play' } } ]                    
                }
            ]
        },
        {
            block: 'footer',
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
    ]
})