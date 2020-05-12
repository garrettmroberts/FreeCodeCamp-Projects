import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Row from "./Components/Row";
import Col from "./Components/Col";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

class App extends Component {
  state = {
    markdown: ""
  };

  componentDidMount() {
    const intialVal= document.getElementById("editor").value;
    this.setState({markdown: intialVal});
  };

  updateState = event => {
    this.setState({markdown: event.target.value});
  };

  render() {
    return (
      <Wrapper>
        <Row>
          <Col breakpoint="md" size="12">
            <h1 className="text-center pt-5">Markdown Previewer</h1>
            <Editor func={this.updateState} />
          </Col>
        </Row>
        <Row>
          <Col breakpoint="md" size="12">
            <Preview state={this.state} />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default App;
