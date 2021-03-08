import React, { useState } from "react";

function SearchForm(props) {
  console.log("Search Form Function");
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
        <br />
        <h5 className="justify-content-center text-center">
          Hit refresh in your browswer at any time to get a new table of
          EfficienCorp employees to search or sort.
        </h5>
        <br />
        <h6 className="justify-content-center text-center">
          Feel free to narrow the table by searching for an employee's first
          name.
        </h6>
        <label htmlFor="search">Search:</label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          className="form-control"
          placeholder="Search For an EfficienCorp Employee BY FIRST NAME"
        />
        <h7>
          (After searching, a page refresh is required if you wish to receive a
          new list of employees.)
        </h7>
      </div>
    </form>
  );
}

export default SearchForm;
