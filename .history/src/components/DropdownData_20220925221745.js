import {  IoPersonOutline } from "react-icons/io5";
import { TiGroup} from "react-icons/ti";
import OnePort365 from "../../assets/img/CHI.JPG";


export const SidebarData = [
    {
        title:'Temoc',
        path:'/',
        image: {OnePort365},
        cName:'nav-text'
    },
     {
        title:'Carbon',
        path:'/admin',
        image:<IoPersonOutline />,
        cName:'nav-text'
    }, 
     {
        title:'Lava',
        path:'/customers',
        image: <TiGroup />,
        cName:'nav-text'
    }, 
     
]