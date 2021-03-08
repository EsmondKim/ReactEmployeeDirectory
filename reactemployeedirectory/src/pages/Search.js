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

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <SearchForm handleInputChange={handleInputChange} results={search} />
      <ResColumns></ResColumns>
      <SearchResults></SearchResults>
    </>
  );
}

export default Search;
