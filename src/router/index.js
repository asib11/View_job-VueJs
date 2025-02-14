import { createRouter, createWebHistory } from "vue-router";

import HomeViews from "@/views/HomeViews.vue";
import JobsViews from "@/views/JobsViews.vue";
import NotFound from "@/views/NotFound.vue";
import JobViews from "@/views/JobViews.vue";
import AddJobViews from "@/views/AddJobViews.vue";
import EditJobViews from "@/views/EditJobViews.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name : 'home',
            component : HomeViews,
        },
        {
            path: '/jobs',
            name : 'jobs',
            component : JobsViews,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component : JobViews
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component : AddJobViews
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component : EditJobViews
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },
    ],
});

export default router;