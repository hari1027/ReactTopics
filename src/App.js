import logo from './logo.svg';
import  dhanush from './dhanush.jpg';
import './App.css';
import {Hello} from './components/Hello.js';
import {Welcome} from './components/Welcome.js';
import {Form} from './components/Form.js';
import {Helloprops} from './components/Helloprops.js';
import {Employee} from './components/Employee.js';
import {UpdateCounter} from './components/UpdateCounter.js';
import {TwoWayBindingDemo} from './components/TwoWayBindingDemo.js';
import {Objectdestructring} from './components/Objectdestructring.js';
import {EventHandling} from './components/EventHandling.js';
import {FullName} from './components/Methodbinding2.js';
import { Methodbinding } from './components/Methodbinding.js';
import { ParentComp } from './components/ParentComp.js';
import { Condition } from './components/ConditionRendering.js';
import { ListRendering } from './components/ListRendering.js';
import { EmployeeRendering} from './components/EmployeeRendering.js';
import {KeyRendering} from './components/Key.js';
import { MyStyleSheets } from './components/MyStyleSheets.js';
import styles from './CssStyles.module.css';
import './External.css';
import { MyForm } from './components/MyForm.js';
import { ParentCompLifeCycle } from './components/ParentCompLifeCycle.js';
import { FragmentDemo } from './components/FragmentDemo.js';
import {RegularComp} from './components/RegularComp.js';
import {PureComp} from './components/PureComp.js';
import DemoOnReference from './components/DemoOnReference.js';
import AddEmployee from './components/AddEmployee.js';
import EmployeeInfo from './components/EmployeeInfo.js';
import Header from './components/Header.js';
import EmployeeListRendering from './components/EmployeeListRendering';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My react applications</h1>
        
          <Header/>
          
          </header>
          
        
    </div>
  );
}

export default App;
