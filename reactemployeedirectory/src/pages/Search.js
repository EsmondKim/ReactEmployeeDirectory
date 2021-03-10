import React, { useState, useEffect } from "react";
import API from "../components/utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import EmployeeBatch from "../components/EmployeeBatch/EmployeeBatch";
import Footer from "../components/Footer/Footer";

function Search() {
  const [empArray, setArray] = useState([]);
  const [unfltrdArray, setUnfltrd] = useState([]);

  useEffect(() => {
    loadEmployeeBatch();
  }, []);

  function loadEmployeeBatch() {
    API.getEmployees()
      .then((employeeBatch) => {
        setUnfltrd(employeeBatch);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const sortNames = () => {
    let empNames = [...unfltrdArray];
    empNames.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    setUnfltrd(empNames);
  };

  const sortIds = () => {
    let empIds = [...unfltrdArray];
    empIds.sort((a, b) => (a.id > b.id ? 1 : -1));
    setUnfltrd(empIds);
  };

  return (
    <div className="container">
      <SearchForm employees={unfltrdArray} setArray={setArray} />
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
          {empArray.length === 0 ? (
            <p>No search results.</p>
          ) : (
            empArray.map((emp) => (
              <SearchResults
                key={emp.id}
                id={emp.id}
                firstName={emp.firstName}
                lastName={emp.lastName}
                email={emp.email}
                picture={emp.picture}
              />
            ))
          )}
        </tbody>
      </table>
      <h1>EfficienCorp Employee Table</h1>
      <button onClick={sortIds} className="btn btn-secondary">
        Sort Id's
      </button>
      <button onClick={sortNames} className="btn btn-primary">
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
          {unfltrdArray.map((emp) => (
            <EmployeeBatch
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
      <Footer />
    </div>
  );
}

export default Search;
