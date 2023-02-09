import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import {createRouter, createWebHistory} from "vue-router"
import Add from "./components/Add.vue"
import Update from "./components/Update.vue"

const routes=[
    {
        name:"Home",
        component:Home,
        path:"/"
    },
    {
        name:"Login",
        component:Login,
        path:"/Login"
    },
    {
        name:"Add",
        component:Add,
        path:"/Add"
    },
    {
        name:"Update",
        component:Update,
        path:"/Update/:id"
    },
    {
        name:"Delete",
        component:Update,
        path:"/Delete/:id"
    }

    
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;