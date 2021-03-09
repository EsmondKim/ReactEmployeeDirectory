import React, { useState } from "react";

function SearchForm(props) {
  const [input, setInput] = useState();

  const handleInputChange = (e) => {
    if (e !== "") {
      setInput(e.target.value);
      let lC = e.target.value.toLowerCase();
      let newArr = props.employees.filter(
        (employee) => employee.firstName.toLowerCase().indexOf(lC) !== -1
      );
      props.setArray(newArr);
      console.log(newArr);
      if (lC.trim() === "") {
        props.setArray([]);
        console.log("Search bar is empty.");
        return;
      }
    }
  };

  return (
    <>
      <form>
        <div className="form-group">
          <br />
          <h5 className="justify-content-center text-center">
            Hit refresh in your browswer at any time to get a new table of
            EfficienCorp employees to search or sort.
          </h5>
          <h5
            className="justify-content-center text-center"
            style={{ color: "blue" }}
          >
            Feel free to narrow the table by searching for an employee's first
            name.
          </h5>
          <label htmlFor="search">Search:</label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            placeholder="Search For an EfficienCorp Employee By First Name"
          />
          <h6>Filtered search results will appear below.</h6>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
