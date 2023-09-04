import React from 'react'

export function EventHandling(){

       var name="hari";
       console.log(name)
       
    
    function EventClick(value){
       name = value
        console.log(name)
       
    }
    return (
        <div>
            <h1>EventHandling</h1>
            <h2>{name}</h2>
            <button onClick={()=>{EventClick('venky')}} >click</button>
            
           
            
            
        </div>
    )

}