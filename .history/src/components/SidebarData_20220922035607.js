import 


import DashBoard from "../assets/img/dashboard.png";
import Admin from "../assets/img/admin.png";
import Customers from "../assets/img/custmer.png";
import Shipments from "../assets/img/shipment.png";
import Tracking from "../assets/img/tracking.png";
import Documents from "../assets/img/document.png";
import Rates from "../assets/img/rates.png";
import Quotes from "../assets/img/quotes.png";
import Invoices from "../assets/img/Invoices.png";


export const SidebarData = [
    {
        title:'Dashboard',
        path:'/',
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
     {
        title:'Tracking',
        path:'/tracking',
        image:Tracking,
        cName:'nav-text'
    }, 
    {
        title:'Documents',
        path:'/documents',
        image:Documents,
        cName:'nav-text'
    }, 
    {
        title:'Rates',
        path:'/rates',
        image:Rates,
        cName:'nav-text'
    }, 
     {
        title:'Quotes',
        path:'/quotes',
        image:Quotes ,
        cName:'nav-text'
    },
     {
        title:'Invoices',
        path:'/invoices  ',
        image:Invoices ,
        cName:'nav-text'
    },
]