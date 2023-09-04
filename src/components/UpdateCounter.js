import React from 'react';
export class UpdateCounter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
            count1:0,
            count2:0,
            
        }
    }
    incCounter(){
        this.setState({
            count :this.state.count +1
        })
    }
    decCounter(){
        this.setState({
            count :this.state.count -1
        })
    }
    mulCounter(){
        this.setState({
        
            count1 :this.state.count1 +5 ,
            count2 : this.state.count2 +1
            
        })
    }
    render(){
        return (
            <div>
                <h1>count :{this.state.count}</h1>
                <h1>count1 :5 x {this.state.count2} = {this.state.count1}</h1>
                <button onClick={()=>this.incCounter()}>Inc</button>
                <button onClick={()=>this.decCounter()}>Dec</button>
                <button onClick={()=>this.mulCounter()}>Mul</button>
                
            </div>
        )
    }
}