import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar';
import { useParams } from 'react-router-dom';

function EditPage() {
 const params = useParams()

 useEffect(() => {
   
 }, [params ])
 

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