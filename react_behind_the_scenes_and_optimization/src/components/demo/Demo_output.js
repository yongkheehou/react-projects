import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("2");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default DemoOutput;
