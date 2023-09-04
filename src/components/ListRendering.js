import React from 'react'
export function ListRendering() {

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
    let EmployeeList=Employees.map(employees=>(<h2>
        Name:{employees.name}<br></br>
        Id:{employees.id}<br></br>
        Salary:{employees.sal}<br></br></h2>
    ))

    return(
        <div>
            <h1>ListRendering</h1>
            <div>
            {
             
              EmployeeList
            }
            </div>
            
        </div>

    )
}