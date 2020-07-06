const router_config={
    mode: "history",//路由模式
    routes: [//路径匹配页面懒加载动态导入
        {
            path: "/",
            name: "index",
            component: ()=>import("../views/Index"),
        },
        {
            path: "/Photo",
            name: "photo",
            component: ()=>import("../views/Photo"),
        },
        {
            path: "/Index",
            name: "index",
            component: ()=>import("../views/Index"),
        },
    ]
}

export default router_config;
