import React, { useState } from "react";

function SearchForm(props) {
  const [input, setInput] = useState();

  const handleInputChange = (e) => {
    setInput(e.target.value);
    let lC = e.target.value.toLowerCase();
    let newArr = props.employees.filter(employee => employee.firstName.toLowerCase().indexOf(lC) !== -1 );
    props.setTable(newArr);
   } 

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={(e)=> handleInputChange(e)}
          type="text"
          className="form-control"
          placeholder="Search For an EfficienCorp Employee"
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
