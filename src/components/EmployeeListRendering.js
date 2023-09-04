import React from 'react'
export function EmployeeListRendering({employeeee}) {
    return(
        <div>
            <h2>
            Name:{employeeee.name} <br></br>
            Id:{employeeee.id}<br></br>
            Salary:{employeeee.sal}<br></br>
            </h2>
        </div>
    )
}
export default EmployeeListRendering