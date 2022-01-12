import React, { Component } from "react";
import App from '../App';
import SearchField from "./SearchField";

class TrendingGifs extends React.Component {
  constructor() {
    super();
    this.state = {
      gifList: []
    };
    this.componentDidMount=this.componentDidMount.bind(this);
  }

  componentDidMount() {
    console.log("In Mount");
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8"
    )
      .then(response => response.json())
      .then((res) => {
          console.log(res.data)
        this.setState({
          gifList: res.data,
        });
        console.log(this.state.gifList);
      })
  }


  render() {
    return (
        
        <div>
        { this.state.gifList.map(gif => {
            return (
                <img class="gif" src={gif.images.original.url} alt="gif"/>
            )

        })}
        </div>
        )}
    }

export default TrendingGifs;