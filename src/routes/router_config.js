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
            path: "/Video",
            name: "video",
            component: ()=>import("../views/Video"),
        },
        {
            path: "/Comment",
            name: "comment",
            component: ()=>import("../views/Comment"),
        },
        {
            path: "/Airtle",
            name: "airtle",
            component: ()=>import("../views/Airtle"),
        },
        {
            path: "/Activity",
            name: "activity",
            component: ()=>import("../views/Activity"),
        },
        {
            path: "/Login",
            name: "login",
            component: ()=>import("../views/Login"),
        },
        {
            path: "/Register",
            name: "register",
            component: ()=>import("../views/Register"),
        },
    ]
}

export default router_config;
