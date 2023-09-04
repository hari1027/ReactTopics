import React from 'react'
import AddEmployee from './AddEmployee'
import EmployeeInfo from './EmployeeInfo'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


export function Header() {
  return (
      <Router>
    <div><h1>Header</h1>
            <Nav>
                <Link to="/add">Add</Link> &nbsp;
                <Link to="/info">info</Link> &nbsp;
            <Routes>
            <Route path="/add" element={<AddEmployee></AddEmployee>}></Route>
            <Route path="/info" element={<EmployeeInfo></EmployeeInfo>}></Route>
            </Routes>
            </Nav>
        
        
    </div>
    </Router>
  )
}

export default Header