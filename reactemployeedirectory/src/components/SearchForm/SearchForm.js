import React, { useState } from "react";

function SearchForm(props) {

  const [userInputVal, setInputVal] = useState();
  const [empSrchResult, setEmpSrchResult ] = useState(props.employees);
  
  const handleInputVal = (event) => {
    setInputVal(event.target.value);
    let searchedEmpArr = props.employees.filter(employee => employee.firstName);
    console.log(props.employees);
    console.log(searchedEmpArr);
    setEmpSrchResult(searchedEmpArr)
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an EfficienCorp Employee"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
