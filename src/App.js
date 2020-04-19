import React, { useState, Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Row from "./Components/Row";
import Col from "./Components/Col";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [state, setState] = useState({
    markdown: ""
  });

  return (
    <Wrapper>
      <Row>
        <Col breakpoint="md" size="12">
          <h1 className="text-center pt-5">Markdown Previewer</h1>
          <Editor setState={setState} />
        </Col>
      </Row>
      <Row>
        <Col breakpoint="md" size="12">
          <Preview state={state} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default App;
