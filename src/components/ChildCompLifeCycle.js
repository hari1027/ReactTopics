import React from 'react'
import './Styles.css';
export class ChildCompLifeCycle extends React.Component {
    constructor() {
        super()
        this.state = {
            name:"Hari"
        }
        console.log("child constructor invoked")
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps of child component")
        return null
    }

    componentDidMount(){
        console.log("child component mounted")
    }

    render(){
        return(
            <div>Child Comp LifeCycle</div>

        )
    }
}