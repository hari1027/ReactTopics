import React, { Component } from 'react'

export class DemoOnReference extends Component {
  
    constructor(props) {
      super(props)
         this.inputref=React.createRef();
      }

      componentDidMount(){
          this.inputref.current.focus()
          console.log(this.inputref)
      }

      clickHandler=()=>alert(this.inputref.current.value)
    
  
    render() {
    return (
      <div>DemoOnReference <br></br>
          Name: <input type="text" ref={ this.inputref}></input><br></br>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default DemoOnReference