import React, { Component } from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API"


class EmployeeContainer extends Component {
    state = {
        result:{},
        search: ""
    };

    searchEmployees = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

render() {
    return (
        <div>
       <Header>
           Employee Directory
           <br></br>
           <h3>Look for employee in the search bar!</h3>
        </Header>
        
       <SubHeader>
           <div className="container" id="labelBar">
               <ul>
                   <li>Image</li>
                   <li>Name</li>
                   <li>Phone Number</li>
                   <li>Email</li>
                   <li>DOB</li>
                </ul>
           </div>
        </SubHeader>
        <EmployeeDetail
            src={this.state.result.thumbnail}
            name={this.state.result.first}
            email={this.state.result.email}
            dob={this.state.result.dob}
            >
        </EmployeeDetail>
       </div>
    )
}
}
export default EmployeeContainer;