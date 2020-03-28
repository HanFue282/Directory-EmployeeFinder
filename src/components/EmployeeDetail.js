import React from "react";

function EmployeeDetail(props) {
    return (
        <div className="text-center">
            <img alt={props.src} className="img-fuild" src={props.src} />
            <h3>{props.name}</h3> 
            <h3>{props.phone}</h3>
            <h3>{props.email}</h3>
            <h3>{props.dob}</h3>
        </div>
    )
}

export default EmployeeDetail;