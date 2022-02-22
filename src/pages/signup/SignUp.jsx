import React, { Component } from 'react'
import {Link, Navigate} from "react-router-dom"

export default class SignUp extends Component {
  constructor(){
    super();
    this.state ={
      username: '',
      password: '',
      passwordNew: '',
      isSignup: false
    }; 
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault()
    if(this.state.password === this.state.passwordNew){
        const newUser = {
          username: this.state.username,
          password : this.state.password
        }
        fetch(`/users/`, {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => response.json())
        .then(data=>{
          alert('Signup successfully')
          this.setState({
            isSignup: true
          })
        })
        .catch(error=>{
          console.log(error)
        })

    }else{
      alert("Password is not match")
    }
  }

  render() {
    if(this.state.isSignup){
      return <Navigate to={'/'}/>
    }
    return (
        <div>
          <form onSubmit={ this.submitHandler}>
          <div>
            Username:
            <input 
            type = "text" 
            value = {this.state.username} 
            name = "username" 
            placeholder='Please enter username' 
            onChange={this.changeHandler}/>
          </div>

          <div>
            password:
            <input 
            type = "password" 
            value = {this.state.password} 
            name ="password" 
            placeholder='Please enter your password' 
            onChange={this.changeHandler}/>  
          </div>

          <div>
            enter password again:
            <input 
            type = "password"  
            name = "passwordNew"
            value = {this.state.passwordNew}
            placeholder='Please enter your password again'
            onChange={this.changeHandler}/>   
          </div>

          <div>
            <button type = "submit">submit</button>
          </div>
          </form>

          <form>
            <Link to={"/signin"}>cancel</Link>
          </form>
        </div>
    )
    
  }
}
