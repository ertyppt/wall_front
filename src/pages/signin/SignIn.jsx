import React, { Component } from 'react'
import {Link, Navigate } from "react-router-dom"

export default class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loginUsername:'',
      loginPassword:'',
      isLogin: false
    }
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) =>{
      let login = false

      for(let i = 0; i < this.state.users.length; i++){
          if(this.state.loginUsername === this.state.users[i].username && this.state.loginPassword === this.state.users[i].password){
                login = true
                break
          }
      }
    
      if(!login){
        alert("check your password or username")
      }else{
        this.setState({
          isLogin: true
        })
        
      }
      
  }

  componentDidMount(){
    fetch('/users/')
    .then(res => res.json())
    .then((res)=>{
        this.setState({
            users: res
        })
    })
    .catch(error =>{
        this.setState({error})
    })
  }

  render() {
    if(this.state.isLogin) {
      return <Navigate  to="/wall" />
    }
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            username:
            <input 
            type="text" 
            name="loginUsername" 
            value={this.state.loginUsername}
            placeholder='Please enter username' 
            onChange={this.changeHandler}
            />
          </div>

          <div>
            password:
            <input type="password" 
            name="loginPassword"
            value={this.state.loginPassword}
            placeholder='Please enter password' 
            onChange={this.changeHandler}
            />
          </div>

          <button type='submit'>login</button>
        </form>

        <div>
          <Link to={'/signup'}>Register</Link>
        </div>
        <div>
          <Link to={'/guest'}>Login as a guest</Link>
        </div>
      </div>
    )
  }
}

