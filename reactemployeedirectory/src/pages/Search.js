import React, { useState, useEffect } from "react";
import API from "../components/utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import ResColumns from "../components/ResColumns/ResColumns";

function Search() {
  const [search, setSearch] = useState("");
  const [employee, setEmployee] = useState("");

  useEffect(() => {
    loadEmployeeBatch();
  }, []);

  function loadEmployeeBatch() {
    API.getEmployees()
      .then((employeeBatch) => {
        console.log(employeeBatch);
        setEmployee(employeeBatch);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const handleInputChange = (event) => {
  //   setSearch(event.target.value);
  //   let searchedEmpArr = search.filter(employee => employee.firstName)

  // };

  return (
    <>
      <div className="container">
      <SearchForm></SearchForm>
      <h1>EfficienCorp Employee Table</h1>
      <table className="table table-striped">
        <ResColumns />
        <tbody>
          {employee.map((employee) => (
            <SearchResults
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              thumbnail={employee.picture}
            />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Search;




