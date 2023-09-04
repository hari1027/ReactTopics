import React from 'react';
export class TwoWayBindingDemo extends React.Component{
    constructor(){
        super()
        this.state={
            num:75,
            num1:""
        }
    }
    Nochange=(event)=>{
        this.setState({
            num:this.state.num
        },()=>{
        console.log(this.state.num)
        })
    }
    onTextchange=(event)=>{
        this.setState({
            num1: event.target.value
             },()=>{
        console.log(this.state.num1)

    })
}

    render(){
        return(
            <div>
                <h1>TwoWayBinding</h1>
                <input type="text" placeholder="Enter a number" onChange={this.Nochange}
                value={this.state.num}
                />
                <p>{this.state.num}</p>

                <input type="text" placeholder="Enter a number" onChange={this.onTextchange}/>
                <p>{this.state.num1}</p>
            </div>
        )
    }
}