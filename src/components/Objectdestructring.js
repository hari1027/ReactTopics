import React from'react'

export function Objectdestructring(props){
    const{name,id,mobile}=props
    return(
        <div>
            <h1>ObjectDestructring</h1>
              <p>
                Name :{name}<br></br>
                id :{id}<br></br>
                mobile :{mobile}<br></br>
              </p>
        </div>
    )
}