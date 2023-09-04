import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
        name:"Hari"
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
        console.log("rendering Pure Components")
    return (
      <div>PureComponent
        {this.state.name}
      </div>
    )
  }
}

export default PureComp