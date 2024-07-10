import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 当路径为 /时，渲染 views下的 index.vue，即首页
        {
            path: "/",
            name: "index",
            component: () => import("@/views/index.vue"),
            children: [
                // 中医方剂
                {
                    path: 'prescription',
                    name: 'prescription',
                    component: () => import("@/views/Prescription.vue")
                },
                // 中医药材
                {
                    path: 'medicine-herbs',
                    name: 'medicine-herbs',
                    component: () => import("@/views/MedicineHerbs.vue"),
                    children: [
                        {
                            path: 'page',
                            name: 'medicine-herbs-page',
                            component: () => import("@/views/MedicineHerbs.vue"),
                        }
                    ]
                },
                // 知识图谱
                {
                    path: 'knowledge-graph',
                    name: 'knowledge-graph',
                    component: () => import('@/views/KnowledgeGraph.vue')
                },
            ]
        },

    ],
});

export default router;
