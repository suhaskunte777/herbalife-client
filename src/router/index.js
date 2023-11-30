import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        meta: { requiresAuth: true },
        component: () => import('../components/AuthLayout.vue'),
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../views/Dashboard.vue')
            },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Guest',
        meta: { isGuest: true },
        component: () => import('../components/GuestLayout.vue'),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import('../views/Auth/Login.vue')
            },
            {
                path: '/register',
                name: 'Register',
                component: () => import('../views/Auth/Register.vue')
            },
            {
                path: '/request-password',
                name: 'RequestPassword',
                component: () => import('../views/Auth/RequestPasswordReset.vue'),
                meta: {
                    requiresGuest: true
                }
            },
            {
                path: '/reset-password/:token',
                name: 'resetPassword',
                component: () => import('../views/Auth/ResetPassword.vue'),
                meta: {
                    requiresGuest: true
                }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: () => import('../views/NotFound.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.authenticated) {
        next({ name: 'Login' });
    } else if (store.state.authenticated && (to.meta.isGuest)) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
});

export default router;
