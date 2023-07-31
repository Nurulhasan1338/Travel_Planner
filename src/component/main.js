import React from 'react';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Card from "./sub-component/card"


const Main = () => {
  return (
    <div className='container w-75 d-flex flex-column justify-content-center align-items-center mt-5'>
    <div className='d-flex w-100 justify-content-center'> 
      
      <Textarea name="search" placeholder="Type in here…" variant="soft" className="w-100 mx-3" />

      <Button variant="solid" color="success" className='px-3'>Search</Button>

     </div>

    <div className='w-100 mt-5'>
        <div className='row '>
            <div className='col m-3'>
            <Card/>
            </div>
            <div className='col m-3'>
            <Card/>
            </div>
            <div className='col m-3'>
            <Card/>
            </div>
          
        </div>
    </div>
    </div>
  )
}

export default Main
