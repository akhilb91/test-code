import React, { Component } from "react";
import CustomTextbox from "./CustomTextbox";

class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceText: "",
      fillText: "",
    };
  }

  handleChange = (event) => {
    this.setState({ sourceText: event.target.value });
  };
  handleButtonClick = () => {
    const { sourceText } = this.state;
    this.setState({
      fillText: sourceText,
    });
    console.log(sourceText);
  };

  render() {
    const { sourceText, fillText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={sourceText}
          onChange={this.handleChange}
        ></input>
        <button onClick={() => this.handleButtonClick()}>Update Textbox</button>
        <CustomTextbox text={fillText} />
      </div>
    );
  }
}

export default BaseContainer;
