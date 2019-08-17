const menuList = [
    { 
        title: 'ホームページ', 
        key: '/home', 
        icon: 'home', 
    },
    { 
        title: '商品', 
        key: '/products', 
        icon: 'appstore', 
        children: [ 
            { 
                title: '商品区分', 
                key: '/category', 
                icon: 'bars' 
            },
            { 
                title: '商品管理', 
                key: '/product', 
                icon: 'tool' 
            }, 
        ] 
    },
    { 
        title: 'ユーザ管理', 
        key: '/user', 
        icon: 'user' 
    },
    { 
        title: '権限管理', 
        key: '/role', 
        icon: 'safety'
    },
    {
        title: 'チャート', 
        key: '/charts', 
        icon: 'area-chart', 
        children: [ 
            { 
                title: 'バール', 
                key: '/charts/bar', 
                icon: 'bar-chart' 
            },
            { 
                title: '折り線', 
                key: '/charts/line', 
                icon: 'line-chart' 
            },
            { 
                title: 'パイ', 
                key: '/charts/pie', 
                icon: 'pie-chart' 
            }, 
        ] 
    }, 
]

export default menuList