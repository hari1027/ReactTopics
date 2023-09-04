import React from 'react';
export class Employee extends React.Component{
    constructor(){
        super()
        this.state={
            ename:"Hari",
            eid:"101",
            esalary:"30000",
        
        }
       
        
    }
     ShowEmpData(){
          
        this.setState({
            ename:"Archu",
            eid:"102",
            esalary:"40000"
        })
    }

    
    

    render() {
        return (<div>
            <h1> Name is : {this.state.ename} </h1>
            <h2> Id is : {this.state.eid}</h2>
            <h3> Salary is : {this.state.esalary}</h3>

            <button onClick={this.ShowEmpData.bind(this)}>Show</button>
        </div>)
    }
}