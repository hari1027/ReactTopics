import React from 'react';
import './Employee.css';


function EmployeeInfo() {
  return (
    <div>
        <h1>Employee Information Of</h1>
        <h2> Hariharan</h2>
        <table>
          <thead>
            <tr>
              <th>EmployeeName</th>
              <th>EmployeeId</th>
              <th>EmployeeSalary</th>
              <th>EmployeeMobileNum</th>
              
            </tr>
           
          </thead>
        </table>
    </div>

  )
}

export default EmployeeInfo