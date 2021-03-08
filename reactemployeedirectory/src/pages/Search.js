import React, { useState, useEffect } from "react";
import API from "../components/utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import FooterSearch from "../components/FooterSearch/FooterSearch";

function Search() {
  const [empArray, setArray] = useState([]);

  useEffect(() => {
    loadEmployeeBatch();
  }, []);

  function loadEmployeeBatch() {
    API.getEmployees()
      .then((employeeBatch) => {
        setArray(employeeBatch);
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
        <SearchForm employees={empArray} setTable={setArray} />
       

        <h1>EfficienCorp Employee Table</h1>
        <button onClick={sortIds} className="btn btn-success">
          Sort Id's
        </button>

        <button onClick={sortNames} className="btn btn-warning">
          Sort First Names
        </button>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Profile Pic</th>
          </tr>
        </thead>
        <tbody>
            {empArray.map((emp) => (
              <SearchResults
                key={emp.id}
                id={emp.id}
                firstName={emp.firstName}
                lastName={emp.lastName}
                email={emp.email}
                picture={emp.picture}
              />
            ))}
          </tbody>
        </table>
        <FooterSearch />
      </div>
    </>
  );
}

export default Search;
