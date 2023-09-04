import React, { Component } from 'react'
import FullName from './Methodbinding2';
export class Methodbinding extends Component {
 constructor(props)
 {
    super(props)
    this.state={
        myName:"Haran"
    }
    this.FullName=this.getFullName.bind(this);//binding a method as a prop in the component
 }
 getFullName(){
    alert('Hari ' + this.state.myName)
    
 }
  render() {
    return (
      <div>
          <h1>Methodbinding</h1>
          <FullName getFullNameHandler= {this.FullName}></FullName>
          
      </div>
    )
  }
}