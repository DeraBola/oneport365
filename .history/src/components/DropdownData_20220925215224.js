import { IoDocumentText, IoPersonOutline } from "react-icons/io5";
import { TiThLarge, TiGroup, TiMap } from "react-icons/ti";
import { BiMerge } from "react-icons/bi";
import { BsFillFileEarmarkMinusFill, BsTruck } from "react-icons/bs";


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
        path:'/customers',
        image: <TiGroup />,
        cName:'nav-text'
    }, 
     
]