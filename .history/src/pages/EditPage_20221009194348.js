import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
import { useParams }

function EditPage() {


  return (
      <>
    <TopNavbar title="Shipments" />
    <div  className='customers_container'>
      <div className="customers">EditPage</div>
      </div>
    </>
  )
}

export default EditPage