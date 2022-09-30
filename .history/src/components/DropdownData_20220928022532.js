import {  IoPersonOutline } from "react-icons/io5";
import { TiGroup} from "react-icons/ti";
import OnePort365 from "../assets/img/CHI.JPG";


export const DropdownData = [
    {
        title:'Temoc',
        path:'/',
        image: OnePort365 ,
        cName:'dropdown_link'
    },
     {
        title:'Carbon',
        path:'/admin',
        image:<IoPersonOutline />,
        cName:'dropdown_link'
    }, 
     {
        title:'Lava',
        path:'/customers',
        image: <TiGroup />,
        cName:'dropdown_link'
    }, 
     
]