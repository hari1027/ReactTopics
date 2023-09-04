import React, { Component } from 'react'
import MemoComp from './MemoComp.js'
export class RegularComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
          name:"hari"
   }
 }

 componentDidMount(){
     setInterval(()=>{
         this.setState({
             name:"Archu"
         
     })
 },5000)
}
  
    render() {
        console.log("rendering RegComponent")
    return (
      <div>RegularComp
          <MemoComp name={this.state.name}></MemoComp>
          {this.state.name}
      </div>
    )
  }
}

export default RegularComp