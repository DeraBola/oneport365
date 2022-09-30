import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
 

function Customers() {

  return (
    <> 
    <TopNavbar title="Customers" />
    <CustomersBody />
    <p className='customers'>Dera Customers</p> 
    </>
    
  )
}

export default Customers