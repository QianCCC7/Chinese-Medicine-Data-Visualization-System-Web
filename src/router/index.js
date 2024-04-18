import { createRouter, createWebHistory } from "vue-router";
import index from "@/views/index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 当路径为 /时，渲染 views下的 index.vue，即首页
        {
            path: "/",
            name: "index",
            component: index,
        },
    ],
});

export default router;
