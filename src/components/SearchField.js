import React, { Component } from "react";

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      gifName: "",
      rating: "all",
      allGifs: [],
      filteredGifs: [],
    };
  }

  //it will update any time you enter a search
  handleChange = (event) => {
    console.log("inside handleChange");
    this.setState({ gifName: event.target.value });
  };

  //it will get data from appi
  getData = async () => {
    console.log("inside getData");
    try {

      //it will give a response from appi
      let response = await fetch(
        "https://api.giphy.com/v1/gifs/search?q=" +
          this.state.gifName +
          "&api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8"
      );

      //it will print an error if something will go wrong
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      //it will return data object
      let responseObject = await response.json();

      this.setState({
        allGifs: responseObject.data,
        filteredGifs: responseObject.data
      })
    }

    catch (error) {
      console.log(error);
    }
  };

  //localhost alert if it is empty
  handleSearch=()=>{
    if(this.state.gifName === ""){
      alert("no results")
    }
    else{
      this.getData();
      this.setState({
        rating: "all"
      })
    }
  };

  //base in the drop menu it will change the rating
  handleRating=(event)=>{
    console.log("inside handle rating");
    this.setState({rating: event.target.value});
  };

  //it will get the rating and filter the original
  handleFilter=()=>{
    switch(this.state.rating){
      case "g":
        this.setState({
          filteredGifs: this.state.allGifs.filter(gif => gif.rating === "g")
        })
        break;
      case "pg":
        this.setState({
          filteredGifs: this.state.allGifs.filter(gif => gif.rating === "pg")
        })
        break;
      case "pg-13":
        this.setState({
          filteredGifs: this.state.allGifs.filter(gif => gif.rating === "pg-13")
        })
        break;
      default:
        this.setState({
          filteredGifs: this.state.allGifs
        })
    }
  }
  
  render() {
    return (
      <div id="search-filter-field">

        <div id="search-field">
          <label id="search-text" for="ratings">Enter a Keyword:</label>
          <input
            id="search-input"
            type="text"
            name="searchInput"
            placeholder="Search for a gif!"
            onChange={this.handleChange}
          />
          <button id="search-btn" onClick={() => this.handleSearch()}>Search</button>
        </div>
        
        <div id="filter-field">
          <label id="filter-text" for="ratings">Filter by rating:</label>
          <select id="dropdown" name="ratings" onChange={this.handleRating}>
            <option value="all" selected>Show all</option>
            <option value="g">G (General Audience)</option>
            <option value="pg">PG (Parental Guidance Suggested)</option>
            <option value="pg-13">PG-13 (Parents Strongly Cautioned)</option>  
          </select>
          <button id="filter-btn" onClick={() => this.handleFilter()}>Filter</button>
        </div>

        <div id="gif-field">
          {this.state.filteredGifs.map(gif=>{
              return <img class="gif" src={gif.images.original.url}/>
          })}
        </div>

      </div>
    );
  }
}