import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <form class="form-inline">
            <input 
                value={props.search}
                onChange={props.handleInputChange}
                class="form-control mr-sm-5" 
                type="search" 
                placeholder="Search Employee" 
                aria-label="Search"
                id="employee"
            />
            <datalist id="employees">
                {props.employees.map(employee => (
                    <option value={employee} key={employee} />
                ))}
            </datalist>
            <button class="btn btn-outline-success my-2 my-sm-0"
            onClick={props.handleFormSubmit} 
            type="submit">Search</button>
        </form>
    )
}

export default SearchBar;