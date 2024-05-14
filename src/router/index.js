import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 当路径为 /时，渲染 views下的 index.vue，即首页
        {
            path: "/",
            name: "index",
            component: () => import("@/views/index.vue"),
            children: [
                {
                    path: 'test1',
                    name: 'test1',
                    component: () => import("@/components/Test1.vue"),
                },
                {
                    path: 'test2',
                    name: 'test2',
                    component: () => import("@/components/Test2.vue")
                },
            ]
        },

    ],
});

export default router;
