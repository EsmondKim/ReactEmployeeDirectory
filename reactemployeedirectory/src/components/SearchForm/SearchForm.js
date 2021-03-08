import React, { useState } from "react";

function SearchForm(props) {
  const [input, setInput] = useState();

  const handleInputChange = (e) => {
    setInput(e.target.value);
    let lC = e.target.value.toLowerCase();
    let newArr = props.employees.filter(employee => employee.firstName.toLowerCase().indexOf(lC) !== -1 );
    console.log(props.employees);
    console.log(newArr);
    props.setTable(newArr);
    console.log(props.setFilter(newArr));
    console.log(newArr);
   } 

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={(e)=> handleInputChange(e)}
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
