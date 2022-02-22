import React, { Component } from 'react'

export default class GuestWall extends Component {
    constructor(){
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        fetch(`/wall/`)
        .then(res => res.json())
        .then((res)=>{
            this.setState({
                messages : res
            })
        })
        .catch(error =>{
            this.setState({error})
        })
    }

  render() {
    return (
      <div>
        <div> Post Wall</div>    
            <div>
                {this.state.messages.map((message,index)=>(
                    <li key={index}> 
                        {message.message}
                    </li>
                ))}
            </div>
      </div>
    )
  }
}
