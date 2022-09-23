import { IoDocumentText, IoPersonOutline } from "react-icons/io5";
import { TiThLarge, TiGroup, TiMap, TiMessages } from "react-icons/ti";
import { BiMerg } from "react-icons/bi";
 
 
 
import Invoices from "../assets/img/Invoices.png";


export const SidebarData = [
    {
        title:'Dashboard',
        path:'/',
        image: <TiThLarge/>,
        cName:'nav-text'
    },
     {
        title:'Admin',
        path:'/admin',
        image:<IoPersonOutline />,
        cName:'nav-text'
    }, 
     {
        title:'Customers',
        path:'/customers ',
        image: <TiGroup />,
        cName:'nav-text'
    }, 
    {
        title:'Shipments',
        path:'/shipments  ',
        image: <TiMap />,
        cName:'nav-text'
    },
     {
        title:'Tracking',
        path:'/tracking',
        image:<TiMap/> ,
        cName:'nav-text'
    }, 
    {
        title:'Documents',
        path:'/documents',
        image:<IoDocumentText />,
        cName:'nav-text'
    }, 
    {
        title:'Rates',
        path:'/rates',
        image:<IoDocumentText />,
        cName:'nav-text'
    }, 
     {
        title:'Quotes',
        path:'/quotes',
        image: <TiMessages />,
        cName:'nav-text'
    },
     {
        title:'Invoices',
        path:'/invoices  ',
        image:Invoices ,
        cName:'nav-text'
    },
]