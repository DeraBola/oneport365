import React from "react";
import DashBoard from "../../assets/img/dashboard.png";
import Admin from "../../assets/img/admin.png";
import Customers from "../../assets/img/custmer.png";





export const SidebarData = [
    {
        title:'Dashboard',
        path:'/dashboard',
        image:DashBoard,
        cName:'nav-text'
    },
     {
        title:'Admin',
        path:'/admin',
        image:Admin ,
        cName:'nav-text'
    }, 
     {
        title:'Customers',
        path:'/customers ',
        image:Customers,
        cName:'nav-text'
    },
]