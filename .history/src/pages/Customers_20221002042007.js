import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
import CustomersBody  from '../components/CustomersBody/CustomersBody';

function Customers() {
  
  return (
    <> 
    <TopNavbar title="Customers" />
    <div  className='customers_container' ><CustomersBody /></div>
    </>
    
  )
}

export default Customers