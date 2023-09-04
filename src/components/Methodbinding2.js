import React from 'react'

export function FullName(props) {
  return (
    <div>
        <h1>FullName is child component to Methodbinding component</h1>
    <button onClick={props.getFullNameHandler}>Get FullName</button>
    </div>
  )
}
export default FullName

