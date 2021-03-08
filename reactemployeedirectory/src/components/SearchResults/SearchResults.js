import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>
          <img src={props.thumbnail} alt="profile"></img>
        </td>
      </tr>
    </tbody>
  );
}

export default SearchResults;
