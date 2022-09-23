import React from "react";
import DashBoard from "../../assets/img/dashboard.png";
import Admin from "../../assets/img/admin.png";
import Customers from "../../assets/img/custmer.png";
import Shipments from "../../assets/img/shipment.png";
import Tracking from "../../assets/img/";
import Documents from "../../assets/img/custmer.png";
import Rates from "../../assets/img/custmer.png";
import Quotes from "../../assets/img/custmer.png";
import Invoice from "../../assets/img/custmer.png";




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
    {
        title:'Shipments',
        path:'/shipments  ',
        image:Shipments,
        cName:'nav-text'
    },
]