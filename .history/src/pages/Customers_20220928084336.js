import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
import { CustomersBody } from '..components/'
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