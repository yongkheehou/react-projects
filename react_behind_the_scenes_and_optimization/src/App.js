import React, { useState, useCallback } from "react";

import "./App.css";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/demo/Demo_output";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("1");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
