import React, { useState, useEffect } from "react";
import API from "../components/utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import ResColumns from "../components/ResColumns/ResColumns";

function Search() {
  const [employee, setEmployee] = useState([]);
  const [empArray, setArray] = useState([]);

  useEffect(() => {
    loadEmployeeBatch();
  }, []);

  function loadEmployeeBatch() {
    API.getEmployees()
      .then((employeeBatch) => {
        console.log(employeeBatch);
        setEmployee(employeeBatch);
        setArray(employeeBatch);
        console.log(empArray)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const sortNames = () => {
    let empNames = [...empArray];
    empNames.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    setArray(empNames);
  };

  const sortIds = () => {
    let empIds = [...empArray];
    empIds.sort((a, b) => (a.id > b.id ? 1 : -1));
    setArray(empIds);
  };

  return (
    <>
      <div className="container">
        <SearchForm employee={employee} setTable={setArray} />
        <button onClick={sortIds} className="btn btn-success">
          SortId
        </button>

        <button onClick={sortNames} className="btn btn-warning">
          Order Names
        </button>

        <h1>EfficienCorp Employee Table</h1>
        <table className="table table-striped">
          <ResColumns />
          <SearchResults>
          <tbody>
            {empArray.map((employee) => (
              <SearchResults
                id={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                email={employee.email}
                thumbnail={employee.picture}
              />
            ))}
          </tbody>
          </SearchResults>
        </table>
      </div>
    </>
  );
}

export default Search;
