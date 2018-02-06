import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/responsive.css';
import Sections from "./sections";
import Preview from "./preview";

class App extends Component {

  constructor(){
    super();

    this.state = {
      activePreview: undefined
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", e =>{
      if(this.state.activePreview !== undefined && e.keyCode === 27){
        this.setState({
          activePreview: undefined
        })
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.setState({
      activePreview: undefined
    }));
  }

  handlePreviewClick = (e) =>{
    const target = e.currentTarget.id;
    this.setState({
      activePreview: target
    });
  };

  handleClosePreview = (e) => {
    if(!(e.target instanceof HTMLImageElement)) {
      this.setState({
        activePreview: undefined
      })
    }
  };

  render() {
    const {activePreview} = this.state;

    return (
      <div className="App">
        <h1>Useful links</h1>
        <Sections handlePreviewClick={this.handlePreviewClick}/>
        {
          activePreview !== undefined
            ? <Preview activePreview={activePreview}
                       handleClosePreview={this.handleClosePreview}/>
            : undefined
        }

      </div>
    );
  }
}

export default App;
