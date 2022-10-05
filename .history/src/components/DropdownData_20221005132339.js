import {  IoPersonOutline } from "react-icons/io5";
import { TiGroup} from "react-icons/ti";
import Temco from "../assets/img/Rectangle 184.png";
import Dera from "../assets/img/Rectangle 184.png";

export const DropdownData = [
    {
        title:'Temoc',
        path:'/',
        image: Temco ,
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