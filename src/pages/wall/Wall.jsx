import React, { Component } from 'react'

export default class Wall extends Component {
    constructor(){
        super();
        this.state ={
            messages: [],
            postmessage:'',
        }
    }

    componentDidMount(){
        fetch('/wall/')
        .then(res => res.json())
        .then((res)=>{
            this.setState({
                messages: res,
            })
        })
        .catch(error =>{
            this.setState({error})
        })
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        const postmessage = {message :this.state.postmessage}
        fetch(`/wall/`, {
          method: 'POST',
          body: JSON.stringify(postmessage),
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => response.json())
        .then(data=>{
          console.log(data)
          alert('post successfully please refresh the page')
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

            <form onSubmit={this.submitHandler}  >
                post your message:
                <input type="text" 
                value={this.state.postmessage}
                onChange={this.changeHandler}
                name = "postmessage" 
                placeholder='Please enter message' />     

            <button type='submit'>submit</button>
            </form>
        </div>
        )
    }
}
