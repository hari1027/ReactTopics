import React from 'react'
import { ChildCompLifeCycle } from './ChildCompLifeCycle';
import './Styles.css';
export class ParentCompLifeCycle extends React.Component {
    constructor() {
        super()
        this.state = {
            name:"Hari"
        }
        console.log("parent constructor invoked")
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps of parent component")
        return null
    }

    componentDidMount(){
        console.log("parent component mounted")
        
    }

    render(){
        return(
            <div>
                Parent Comp LifeCycle
               
                <ChildCompLifeCycle/>
            </div>

        )
    }
}