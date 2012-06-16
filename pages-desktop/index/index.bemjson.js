({
    block: 'b-page',
    title: 'The mobile app search engine: Android and iPhone apps',
    favicon: 'favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'Appcurl is mobile app search engine for the smartphone & tablet users. Appcurl helps you explore and find Android and Iphone(iOS) apps that matches your life style.' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'app search, app search engine, android app search, iphone app search, mobile app search, ios app search engine, android app search engine, app discovery, mobile app discovery, ios app reviews, android app reviews, share ios apps, share android apps, like ios app in facebook, like android app in facebook, ios app blog, android app blog, mobile social network, mobile social search, app social search, ios app recommendation, android app recommendation, view friends apps' }}
    ],
    content: [
        {
            block: 'header',
            content: {
                elem: 'inner',
                content: [
                    {
                        block: 'logo',
                        url: '/'                    
                    },
                    {
                        block: 'b-menu-horiz',
                        mods: { layout: 'normal' },
                        mix: [{ block: 'header-nav' }],
                        content: [
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'Home'
                                }
                            },
                            {
                                elem: 'item',
                                elemMods: { state: 'current' },
                                content: {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'Friends'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'Apps Society'
                                }
                            }
                        ]
                    },
                    {
                        block: 'search'
                    },
                    {
                        block: 'icon-panel',
                        content: [
                            'notification',
                            'sync'
                        ]
                    },
                    {
                        block: 'user',
                        content: [
                            {
                                block: 'avatar'
                            },
                            {
                                elem: 'username'
                            },
                            {
                                block: 'dropdown',
                                content: {
                                    block: 'menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: 'login'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
        },
        {
            block: 'content',
            content: {
                elem: 'inner',
                content: [
                    {
                        block: 'app-categories',
                        mix: [ { block: 'clearfix' } ],
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
            }
        },
        {
            block: 'footer',
            content: {
                elem: 'inner',
                content: [
                    {
                        block: 'copyright',
                        content: '© 2011 Airupt Inc.'
                    },
                    {
                        block: 'menu',
                        content: [
                            {
                                elem: 'item',
                                content: 'AboutHelpPlatformsTermsPrivacyAdvertisersDevelopersApp Search'
                            }
                        ]
                    }
                ]
            }
        }    
    ]
})
