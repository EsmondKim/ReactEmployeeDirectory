import React, { useState } from "react";

function SearchForm(props) {
  const [input, setInput] = useState();

  const handleInputChange = (e) => {
    setInput(e.target.value);
    let lC = e.target.value.toLowerCase();
    let newArr = props.employees.filter(
      (employee) => employee.firstName.toLowerCase().indexOf(lC) !== -1
    );
    props.setTable(newArr);
  };

  return (
    <form>
      <div className="form-group">
        <h4>Hit the refresh button below to get a new batch of EfficienCorp employees.</h4>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Refresh
        </button>
        <br />
        <br />
        <h5>Then feel free to search for an employee by first name.</h5>
        <label htmlFor="search">Search:</label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          className="form-control"
          placeholder="Search For an EfficienCorp Employee BY FIRST NAME"
        />
      </div>
    </form>
  );
}

export default SearchForm;
