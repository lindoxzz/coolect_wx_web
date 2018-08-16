
const routers = [
    {
        path: '/',
        meta: {
            title: '主页'
            },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path: '/about',
                meta: {
                    title: '内容'
                    },
                component: (resolve) => require(['./views/about.vue'],resolve)
            }
        ]
    }
    // {
    //         path: '/',
    //         meta: {
    //             title: '主页'
    //             },
    //         component: (resolve) => require(['./views/index.vue'], resolve)
    // },
    // {
    //     path: '/about',
    //     meta: {
    //         title: '内容'
    //         },
    //     component: (resolve) => require(['./views/about.vue'], resolve)
    // }
];
export default routers;