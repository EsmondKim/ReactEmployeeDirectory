import React from "react";
import Container from "../Container/Container";
import Col from "../Col/Col";
import Row from "../Row/Row";
import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import API from "../utils/API.js";

class Search extends React.Component {
  state = {
    results: [],
    search: "",
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {}

  searchDogs = (query) => {
    API.search(this.state.search)
      .then((res) => {
        console.log("HEY!", res);
        const imageUrl = res.data.message;

        const newResults = this.state.results;
        newResults.unshift(imageUrl);
        this.setState({
          results: newResults,
        });
      })
      .catch((err) => console.log("Oh no!", err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchDogs(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col" size="md-8">
            <Card heading={"Search for a Pupper to Begin"}>
              {this.state.results.length > 0 ? (
                this.state.results.map((res) => <img alt={res} src={res} />)
              ) : (
                <h3>No results to display</h3>
              )}
            </Card>
          </div>

          <div className="col" size="md-4">
            <Card heading="Search">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                value={this.state.search}
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
