import React from 'react'
import './Register.css'
const Edit = () => {
  return (
    <div>
        <center>
        <h2 style={{textAlign:"center"}}>Edit form</h2><br/>
        <form className='form-horizontal' autoComplete='off'>
            <div className='form-group'>
            <div className='input_section'>
                <label className='control-label '>First Name:</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='input_section'>
                <label  className='control-label'>Last Name:</label>
                
                    <input type="text" className='form-control'/>
                </div>
                <div className='input_section'>
                <label  className='control-label'>E-mail:</label>
                
                    <input type="email" className='form-control'/>
                </div>
                <button type='button' className='submit'>Save</button>
            </div>
        </form>
        </center>
    </div>
  )
}
export default Edit;
