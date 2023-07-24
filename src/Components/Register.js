import React,{useState} from 'react'
import './Register.css'

 const Register = () => {
     const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
     })
     const {firstname,lastname,email}={...data}
     const changeHandler = e =>{
         setData({...data,[e.target.name]:e.target.value});
     }
     const submitHandler= e =>{
         e.preventDefault();
         console.log("#########",data)
     }
  return (
    <div>
        <center>
        <h2 style={{textAlign:"center"}}>Register form</h2><br/>
        <form className='form-horizontal' autoComplete='off' onSubmit={submitHandler}>
            <div className='form-group'>
            <div className='input_section'>
                <label className='control-label '>First Name:</label>
                <input type="text" className='form-control' name="firstname" placeholder='First name'
                 value={firstname}
                 onChange={changeHandler} />
                </div>
                <div className='input_section'>
                <label  className='control-label'>Last Name:</label>
                <input type="text" className='form-control' name="lastname" placeholder='Last name'
                value={lastname} 
                onChange={changeHandler} />
                </div>
                <div className='input_section'>
                <label  className='control-label'>E-mail:</label>
                <input type="email" className='form-control' name="email" placeholder='email'
                value={email} 
                onChange={changeHandler} />
                </div>
                <button type='button' className='btn' value="Submit">Submit</button>
            </div>
        </form>
        </center>
    </div>
  )
}
export default Register;
