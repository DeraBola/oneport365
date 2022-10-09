import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';

function EditPage() {
  return (
      <>
    <TopNavbar title="Shipments" />
    <div  className='customers_container'>
      <div className="customers"></div>
      </div>
    </>
  )
}

export default EditPage