import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'
 

function Customers() {
  return (
   
    <div > 
    <TopNavbar title="Customers" />
    <CustomersBody/>
   <p className='customers'>Dera Customers</p>  
    </div>
    
  )
}

export default Customers