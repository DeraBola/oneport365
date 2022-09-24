import { IoDocumentText, IoPersonOutline } from "react-icons/io5";
import { TiThLarge, TiGroup, TiMap } from "react-icons/ti";
import { BiMerge } from "react-icons/bi";
import { BsFillFileEarmarkMinusFill, BsTruck } from "react-icons/bs";


export const SidebarData = [
    {
        title:'Dashboard',
        top:'/',
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
        path:'/shipments',
        image: <BsTruck />,
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
        image: <BiMerge  />,
        cName:'nav-text'
    },
     {
        title:'Invoices',
        path:'/invoices  ',
        image:<BsFillFileEarmarkMinusFill /> ,
        cName:'nav-text'
    },
]