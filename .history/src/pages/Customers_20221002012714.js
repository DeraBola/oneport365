import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
import CustomersBody  from '../components/CustomersBody/CustomersBody';

function Customers() {
  
  return (
    <> 
    <TopNavbar title="Customers" />
    <d><CustomersBody /></section>   
    <p className='customers'>Dera Customers</p> 
    </>
    
  )
}

export default Customers