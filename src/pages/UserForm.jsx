import { useState } from "react"
import Header from "../components/common/header";

export const UserForm = () => {
    const [user,setUser] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const [errors,setErrors] = useState({
        usernameErr:"",
        emailErr:"",
        passwordErr:"",
        confirmPasswordErr:''
    });

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.id] : e.target.value
        })
        handleError(e.target.id,e.target.value,user.password);
    }
    const handleError = (field,value,password)=>{
        if(field === "username"){
            setErrors({
                ...errors,
                usernameErr : value.length ===0? "This field is required":value.length < 3?"user name should be greater than 3 chars":null 
            })
        }
        if(field === "email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setErrors({
                ...errors,
                emailErr:value.length === 0 ? "this field is required":value.length < 3?"invalid email":!emailRegex.test(value)?"email should include @":null
            })
        }
        if(field === "password"){
            setErrors({
                ...errors,
                passwordErr: value.length === 0? "this field is required":value.length < 3?"short password":value.length > 30 ?"too long password":null
            })
        }
        if(field === "confirmPassword"){
            setErrors({
                ...errors,
                confirmPasswordErr:value.length === 0? "this field is required":value !== password ? "the password do not match":null
            })
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
  const newErrors = {};
  if (user.username === "") {
    newErrors.usernameErr = "This field is required.";
  }
  if (user.email === "") {
    newErrors.emailErr = "This field is required.";
  }
  if (user.password === "") {
    newErrors.passwordErr = "This field is required.";
  }
  if (user.confirmPassword === "") {
    newErrors.confirmPasswordErr = "This field is required.";
  }
  setErrors({
    ...errors,
    ...newErrors,
  })
        console.log(user);
    }
  return (
    <>
    <Header/>
    <div className="container py-5">
        <form>
  <div className="form-group">
    <label htmlFor="username">user name</label>
    <input type="text" className="form-control" id="username" aria-describedby="userNameHelp" placeholder="Enter user name" value={user.username} onChange={handleChange}/>
    {errors.usernameErr && <small id="userNameHelp" className="form-text text-danger">{errors.usernameErr}</small>}
  </div>
  <div className="form-group my-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={user.email} onChange={handleChange}/>
    {errors.emailErr && <small id="emailHelp" className="form-text text-danger">{errors.emailErr}</small>}
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" value={user.password} onChange={handleChange} placeholder="Password"/>
    {errors.passwordErr && <small id="emailHelp" className="form-text text-danger">{errors.passwordErr}</small>}
  </div>
  <div className="form-group my-3">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" className="form-control" id="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="confirm password"/>
    {errors.confirmPasswordErr && <small id="emailHelp" className="form-text text-danger">{errors.confirmPasswordErr}</small>}
  </div>
  <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
</form>
    </div>
    </>
  )
}
