import React from 'react'
import './Styles.css';

export class MyForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            departmentName: '',
            dob: '',
            age: '',
            experience: '',
            address: '',
            gender: '',

            marksOn10th: '',
            marksOn12th: '',
            marksOnUG: '',
            marksOnPG: '',
            marksOnMS: '',
            marksOnPhd: '',

            highestQualification: '',
            email: '',
            mobileNumber: '',

            ThreeDDrawing: '',
            SiteAnalysis: '',
            StructuralAnalysis: '',
            Surveying: '',
            SolidMechanics: '',
            FluidMechanics: '',

        }
    }

    firstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    departmentNameHandler = (event) => {
        this.setState({
            departmentName: event.target.value

        })
    }

    DOBHandler = (event) => {
        this.setState({
            dob: event.target.value
        })
    }

    AgeHandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    ExperienceHandler = (event) => {
        this.setState({
            experience: event.target.value
        })
    }

    addressHandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    HighestQualHandler = (event) => {
        this.setState({
            highestQualification: event.target.value
        })
    }

    MarkHandler1 = (event) => {
        this.setState({
            marksOn10th: event.target.value

        })
    }

    MarkHandler2 = (event) => {
        this.setState({
            marksOn12th: event.target.value

        })
    }

    MarkHandler3 = (event) => {
        this.setState({
            marksOnUG: event.target.value

        })
    }

    MarkHandler4 = (event) => {
        this.setState({
            marksOnPG: event.target.value

        })
    }

    MarkHandler5 = (event) => {
        this.setState({
            marksOnMS: event.target.value

        })
    }

    MarkHandler6 = (event) => {
        this.setState({
            marksOnPhd: event.target.value

        })
    }

    EmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    MobileHandler = (event) => {
        this.setState({
            mobileNumber: event.target.value
        })
    }

    SkillSetHandler1 = (event) => {
        this.setState({
            ThreeDDrawing: event.target.value
        })
    }

    SkillSetHandler2 = (event) => {
        this.setState({
            SiteAnalysis: event.target.value
        })
    }

    SkillSetHandler3 = (event) => {
        this.setState({
            StructuralAnalysis: event.target.value
        })
    }

    SkillSetHandler4 = (event) => {
        this.setState({
            Surveying: event.target.value
        })
    }

    SkillSetHandler5 = (event) => {
        this.setState({
            SolidMechanics: event.target.value
        })
    }

    SkillSetHandler6 = (event) => {
        this.setState({
            FluidMechanics: event.target.value
        })
    }

    formHandler = (event) => {
        event.preventDefault()
        alert(`${this.state.firstName} ${this.state.lastName}  ${this.state.departmentName} ${this.state.ThreeDDrawing} ${this.state.SiteAnalysis}  ${this.state.StructuralAnalysis}  ${this.state.Surveying}  ${this.state.SolidMechanics}  ${this.state.FluidMechanics} ${this.state.dob} ${this.state.age} ${this.state.experience} ${this.state.address} ${this.state.gender} ${this.state.highestQualification} ${this.state.marksOn10th} ${this.state.marksOn12th} ${this.state.marksOnUG} ${this.state.marksOnPG} ${this.state.marksOnMS} ${this.state.marksOnPhd} ${this.state.email} ${this.state.mobileNumber}`)
        console.log(`${this.state.firstName} ${this.state.lastName}  ${this.state.departmentName} ${this.state.ThreeDDrawing} ${this.state.SiteAnalysis}  ${this.state.StructuralAnalysis}  ${this.state.Surveying}  ${this.state.SolidMechanics}  ${this.state.FluidMechanics} ${this.state.dob} ${this.state.age} ${this.state.experience} ${this.state.address} ${this.state.gender} ${this.state.highestQualification} ${this.state.marksOn10th} ${this.state.marksOn12th} ${this.state.marksOnUG} ${this.state.marksOnPG} ${this.state.marksOnMS} ${this.state.marksOnPhd} ${this.state.email} ${this.state.mobileNumber}`)
        
      
}



    render() {
        return (
            <form onSubmit={this.formHandler}>
                <table class="borderClass">

                    <tr>
                        <td ><label>FirstName: </label></td>
                        <td ><input type="text" value={this.state.firstName} onChange={this.firstNameHandler} required pattern="[A-Z]{1}[a-z]{1,}" /></td>
                    </tr><br></br>

                    <tr>
                        <td><label>LastName: </label></td>
                        <td><input type="text" value={this.state.lastName} onChange={this.lastNameHandler} pattern="[A-Z]{1}[a-z]{1,}" /></td>
                    </tr><br></br>

                    <tr>
                        <td> <label>DepartmentName: </label> </td>
                        <td><select value={this.state.departmentName} onChange={this.departmentNameHandler} required>

                            <option value='hidden selected'></option>
                            <option value='mechatronics'>Mechatronics Dep</option>
                            <option value='chemical'>Chemical Dep</option>
                            <option value='mechanical'>Mechanical Dep</option>
                            <option value='civil'>Civil Dep</option>

                        </select></td>
                    </tr><br></br>

                    <tr>
                        <td> <label>SkillSets: </label> </td>
                        <td>
                            <input type="Checkbox" value="ThreeDDrawing" name="SkillSets" onChange={this.SkillSetHandler1} /><label>ThreeDDrawing</label>,<br></br>
                            <input type="checkbox" value="SiteAnalysis" name="SkillSets" onChange={this.SkillSetHandler2} /><label>SiteAnalysis</label><br></br>
                            <input type="checkbox" value="StructuralAnalysis" name="SkillSets" onChange={this.SkillSetHandler3} /><label>StructuralAnalysis</label><br></br>
                            <input type="checkbox" value="Surveying" name="SkillSets" onChange={this.SkillSetHandler4} /><label>Surveying</label><br></br>
                            <input type="checkbox" value="SolidMechanics" name="SkillSets" onChange={this.SkillSetHandler5} /><label>SolidMechanics</label><br></br>
                            <input type="checkbox" value="FluidMechanics" name="SkillSets" onChange={this.SkillSetHandler6} /><label>FluidMechanics</label><br></br>
                        </td>
                    </tr>


                    <tr>
                        <td><label>DOB: </label></td>
                        <td><input type="date" name="DOB" required onChange={this.DOBHandler} /></td>
                    </tr><br></br>





                    <tr>
                        <td> <label>Age: </label> </td>
                        <td> <input type="number" min="20" max="60" name="Age" required onChange={this.AgeHandler} /></td>
                    </tr><br></br>



                    <tr>
                        <td><label>Experience: </label></td>
                        <td> <input type="number" min="0" max="40" name="Experience" required onChange={this.ExperienceHandler} /> </td>
                    </tr><br></br>





                    <tr>
                        <td><label>Address: </label></td>
                        <td><textarea value={this.state.address} onChange={this.addressHandler} required></textarea></td>
                    </tr><br></br>


                    <tr>
                        <td><label>Gender: </label></td>
                        <td><input type="radio" value="Male" name="gender" required onChange={this.genderHandler} /><label>Male</label>
                            <input type="radio" value="Female" name="gender" onChange={this.genderHandler} /><label>Female</label>
                            <input type="radio" value="Others" name="gender" onChange={this.genderHandler} /><label>Others</label></td>
                    </tr><br></br>




                    <tr>
                        <td> <label>Highest Qualification: </label></td>
                        <td> <select value={this.state.highestQualification} onChange={this.HighestQualHandler} required>
                            <option value='hidden selected'></option>
                            <option value='10th grade'>10th grade</option>
                            <option value='12th grade'>12th grade</option>
                            <option value='Btech (or) B.E'>B.tech (or) B.E</option>
                            <option value='Mtech (or) M.E'>M.tech (or) M.E</option>
                            <option value='M.s'>M.s</option>
                            <option value='P.hd'>P.hd</option>
                        </select></td>
                    </tr><br></br>


                    <tr>
                        <td><label>Marks: </label> <br></br></td>
                        <td>

                            <label>10th Grade: </label><input type="number" min="0" max="100" name="Marks" onChange={this.MarkHandler1} /> <br></br>
                            <label>12th Grade: </label><input type="number" min="0" max="100" name="Marks" onChange={this.MarkHandler2} /> <br></br>
                            <label>B.tech (or) B.E: </label><input type="number" min="0" max="100" name="Marks" onChange={this.MarkHandler3} /> <br></br>
                            <label>M.tech (or) M.E: </label><input type="number" min="0" max="100" name="Marks" onChange={this.MarkHandler4} /> <br></br>
                            <label>M.s: </label><input type="number" min="0" max="100" name="Marks" onChange={this.MarkHandler5} /><br></br>
                            <label>P.hd: </label><input type="number" min="0" max="100" name="Marks" onChange={this.MarkHandler6} /> <br></br>   </td>

                    </tr><br></br>


                    <tr >
                        <td> <label>Email: </label></td>
                        <td> <input type="email" name="Email" required onChange={this.EmailHandler} /></td>
                    </tr><br></br>

                    <tr>
                        <td> <label>Mobile Number: </label></td>
                        <td> <input type="text" value={this.state.mobileNumber} onChange={this.MobileHandler} required pattern="[6-9]{1}[0-9]{9,9}" /></td>
                    </tr><br></br>
                </table>
                <br></br>

                <button Style="align:center;margin-bottom:13px;font-size:25px" type="submit" size="10px">Submit</button>
            </form>

        )
    }
}