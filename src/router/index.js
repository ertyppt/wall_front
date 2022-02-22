import React, { Component } from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

// import App from '../pages/App'
import SignUp from '../pages/signup/SignUp'
import SignIn from '../pages/signin/SignIn'
import Wall from '../pages/wall/Wall'
import Guest from '../pages/guestwall/GuestWall'

export default class index extends Component {
  render() {
    return (
     <Router>
        <Routes>
            <Route path = '/' element = {<SignIn/>}></Route>
            <Route path = '/signup' element = {<SignUp/>}></Route>
            {/* <Route path = '/signin' element = {<SignIn/>}></Route> */}
            <Route path = '/wall' element = {<Wall/>}></Route>
            <Route path = '/guest' element = {<Guest/>}></Route>
        </Routes>
     </Router>
    )
  }
}
