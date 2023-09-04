import React from 'react';
import ChildComp from './ChildComp';
export class ParentComp extends React.Component{
 
    constructor(){
        super()
        this.state={
            name:"I am from parent"
        }
    }

    render(){
        return(
            <div>
                <h1>ParentComponent</h1>
                <ChildComp fromParent={this.state.name}></ChildComp>
            </div>

        )
    }
}