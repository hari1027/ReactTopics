import React from 'react'
import EmployeeListRendering from './EmployeeListRendering'
export function EmployeeRendering() {

    let Employees=[{
        name:'hari',
        id:'101',
        sal:'10000'},
        {
            name:'archu',
            id:'102',
            sal:'20000'
        },
    ]
    let EmployeeList=Employees.map(employees => <EmployeeListRendering employeeee={employees}/>)

    return(
        <div>
            {
                EmployeeList
            }
        </div>
    )
}