import React from 'react'

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div className='flex-container'>
        <div className='flex-child' id='service1'>
        <h3>Get a free quotation with us today!</h3>
        </div>
        <div className='flex-child'id='service2'>
          <ol>
            <li>Web design</li>
            <br />
            <li>Digital Marketing</li>
          </ol>
        </div>


      </div>
    </div>
  )
}

export default Services