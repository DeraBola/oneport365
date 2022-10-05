 
import { TiGroup} from "react-icons/ti";
import Temco from "../assets/img/Rectangle 184.png";
import Dera from "../assets/img/CHI.JPG";

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
        image:Dera ,
        cName:'dropdown_link'
    }, 
     {
        title:'Lava',
        path:'/customers',
        image: <TiGroup />,
        cName:'dropdown_link'
    }, 
     
]