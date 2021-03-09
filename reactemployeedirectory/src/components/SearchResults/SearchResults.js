import React from "react";

function SearchResults(props) {
  return (
    <div className="border border-info">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Profile Pic</th>
        </tr>
      </thead>
      <table>
        <tbody>
          {props.id}
          {props.id}
          {props.firstName}
          {props.lastName}
          {props.email}
          {props.picture}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
