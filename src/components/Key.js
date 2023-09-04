import React from 'react'

export function KeyRendering() {

    let Employees=[{
        id:'101',
        name:'hari',
        mob:'56783',
        sal:'10000'},
        {
            id:'102',
            name:'archu',
            mob:'53789',
            sal:'20000'
        },
    ]
    let EmployeeList=Employees.map((employees,index) => (<h2 key={index}>
        key:{index}<br></br>
        Id:{employees.id}<br></br>
        Name:{employees.name}<br></br>
        Mobile:{employees.mob}<br></br>
        Salary:{employees.sal}<br></br>
    </h2>))

    return(
        <div>
            {
                EmployeeList
            }
        </div>
    )
}