import React from 'react'
import {useState} from 'react'

export function AddEmployee() {
    const [ename,setname]=useState('')
    const [eid,setid]=useState('')
    const [esal,setsal]=useState('')
    const [emobilenum,setmobilenum]=useState('')

    const addEmployee =(e)=>{
        e.preventDefault()
        console.log(ename,eid,esal,emobilenum)
    }


  return (
    <div><h1>AddEmployee</h1>
        <form name="MyForm">
            <label>EmployeeName: </label>
            <input type="text"  onChange={(e)=>setname(e.target.value)}></input><br></br>
            <label>EmployeeId: </label>
            <input type="text" onChange={(e)=>setid(e.target.value)} ></input><br></br>
            <label>EmployeeSalary: </label>
            <input type="text"  onChange={(e)=>setsal(e.target.value)} ></input><br></br>
            <label>EmployeeMobileNum: </label>
            <input type="text"  onChange={(e)=>setmobilenum(e.target.value)}></input><br></br>
            <button type="submit" onClick={addEmployee}>Submit</button>

        </form>
    </div>
  )
}

export default AddEmployee