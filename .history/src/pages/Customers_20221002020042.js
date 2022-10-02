import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
import CustomersBody  from '../components/CustomersBody/CustomersBody';

function Customers() {
  
  return (
    <> 
    <TopNavbar title="Customers" />
    <div  className='cus' ><CustomersBody /></div>   
    <p className='customers'>Dera Customers</p> 
    </>
    
  )
}

export default Customers