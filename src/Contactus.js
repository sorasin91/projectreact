import React from 'react'

function Contactus() {
  let form = () => {
    alert("Your detail has been submitted!");
  }
  return (
    <div>
      <div className='flex-container'>
        <div className='flex-child' id='box1'>
          <h3>Want to know how we can help your business?</h3>
          <h1>Let's Talk!</h1>
        </div>

        <div className='flex-child' id='box2'>
          <h3>Start talking with us by click the icon </h3>
          <h1>
            <a href='https://web.whatsapp.com/' target='blank'><img src='icons8-whatsapp-48.png' style={{ padding: '10px', justifyContent: 'center' }} /></a>

            <a href='https://github.com/' target='blank'><img src='github.png' style={{ padding: '10px', justifyContent: 'center' }} /></a>

            <a href='https://discord.com/' target='blank'><img src='icons8-discord-48.png' style={{ padding: '10px', justifyContent: 'center' }} /></a>
          </h1>
        </div>
      </div>

      <div className='flex-container'>

        <div className='flex-child' id='box3'>
          <h3>Have any questions?</h3>
          <h1>Let's get in touch!</h1>
        </div>

        {/* Form section */}
        <div className='flex-child' id='form'>

          <form>
            <table>
              <tr>
                <td><label>First Name: </label></td>
                <td><input type='text' placeholder='Enter your first name' />
                </td>
              </tr>

              <tr>
                <td><label>Last Name: </label></td>
                <td><input type='text' placeholder='Enter your last name' /></td>
              </tr>

              <tr>
                <td><label>Email: </label></td>
                <td><input type='Email' placeholder='Enter your email address' /></td>
              </tr>

              <tr>
                <td><label>Tel Number: </label></td>
                <td><input type='tel' placeholder='Enter your contact number' /></td>
              </tr>

              <tr>
                <td><label>Message: </label></td>
                <td><textarea cols={'30'} rows={'5'} placeholder='Enter your message'></textarea></td>
              </tr>

              <tr>
                <td><button onClick={form}>Submit</button></td>
              </tr>

            </table>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contactus