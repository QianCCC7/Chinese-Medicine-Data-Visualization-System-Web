import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 当路径为 /时，渲染 views下的 index.vue，即首页
        {
            path: "/",
            name: "index",
            component: () => import("@/views/index.vue"),
            children: [{
                path: "/header",
                name: "header",
                component: () => import("@/components/Header.vue")
            }, {
                path: "/ls",
                name: "ls",
                component: () => import("@/components/LeftSide.vue"),
            }],
        },
    ],
});

export default router;
