import React, { useState } from "react";
import API from "../components/utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";

function Search(props) {
  const [responseData, setResponseData] = useState([]);

  const [userInputVal, setInputVal] = useState();
  const [empSrchResult, setEmpSrchResult] = useState(props.employees);

  function getUserButtonClicked() {
    API.getRandomUser()
      .then((json) => setResponseData(json))
      .then(console.log(responseData))
      .catch((error) => console.log(error));
  }
  console.log("This is the res before return", responseData);
  return (
    <div>
      <h1>
        Click Below To Select An EfficienCorp Employee User At Random. All
        EfficienCorp Employees Are Happy And Grateful. Join Us And Become An
        EfficienCorp User.
      </h1>
      <button onClick={(e) => getUserButtonClicked(e)} type="button">
        Click For An Employee Record
      </button>
      <h2>responseData</h2>
      {responseData[0] === undefined ? (
        <></>
      ) : (
        responseData.map((results) => {
          //console.log("This is the results", results);
          return (
            <h1>
              Hello World!
              {/* {("Give me the JSON Stringify!!", JSON.stringify(results))} */}
            </h1>
          );
        })
      )}
    </div>
  );
}

export default Search;

// import React, { Component } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

// class Search extends Component {
//   state = {
//     search: "",
//     breeds: [],
//     results: [],
//     error: "",
//   };

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getBaseBreedsList()
//       .then((res) => this.setState({ breeds: res.data.message }))
//       .catch((err) => console.log(err));
//   }

//   handleInputChange = (event) => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then((res) => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch((err) => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Breed!</h1>
//           <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             breeds={this.state.breeds}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;
