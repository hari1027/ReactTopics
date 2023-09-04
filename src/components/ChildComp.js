import React from 'react'
export class ChildComp extends React.Component
{  
    render(){
        return(
            <div>
            <h2> ChildComponent </h2>
            <h2>{this.props.fromParent} </h2>
            </div>
        )
    }
        
    
}
export default ChildComp
