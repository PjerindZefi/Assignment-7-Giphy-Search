import React, { Component } from "react";
import App from '../App';
import { Link } from "react-router-dom";

class RandomSearch extends React.Component {
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
          "https://api.giphy.com/v1/gifs/random?api_key=W8fWbmNISlnnYSoZC6fsnCxrmYHlodt8"
        )
          .then(response => response.json())
          .then((res) => {
              console.log(res.data)
            this.setState({
                gifList: [...this.state.gifList, res.data]
            });
            console.log(this.state.gifList);
          })
      }

      handleRandom=()=>{
        this.getData();
        <Link to="./Random"></Link>
      }

      render() {
        return (

            <div>
                <br/><br/>
            { this.state.gifList.map(gif => {
                return (
                    <img id="gif" src={gif.images.original.url} alt="gif"/>
                )
    
            })}
            </div>
            
            )}
        }
    
    export default RandomSearch;
    