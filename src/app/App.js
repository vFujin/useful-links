import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/responsive.css';
import Sections from "./sections";
import Preview from "./preview";

class App extends Component {

  constructor(){
    super();

    this.state = {
      clickedItem: undefined
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", e =>{
      if(this.state.clickedItem !== undefined && e.keyCode === 27){
        this.setState({
          clickedItem: undefined
        })
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.setState({
      clickedItem: undefined
    }));
  }

  handlePreviewClick = (e) =>{
    const preview = e.currentTarget.id;
    const name = e.currentTarget.dataset.name;

    this.setState({
      clickedItem: {
        preview,
        name
      }
    });
  };

  handleClosePreview = (e) => {
    if(!(e.target instanceof HTMLImageElement)) {
      this.setState({
        clickedItem: undefined
      })
    }
  };

  render() {
    const {clickedItem} = this.state;

    return (
      <div className="App">
        <h1>Useful links</h1>
        <Sections handlePreviewClick={this.handlePreviewClick}/>
        {
          clickedItem !== undefined
            ? <Preview clickedItem={clickedItem}
                       handleClosePreview={this.handleClosePreview}/>
            : undefined
        }
      </div>
    );
  }
}

export default App;
