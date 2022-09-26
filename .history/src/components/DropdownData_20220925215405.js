import {  IoPersonOutline } from "react-icons/io5";
import { TiThLarge, TiGroup} from "react-icons/ti";
import OnePort365 from "../../assets/img/CHI.JPG";


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