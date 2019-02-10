import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
    console.log("hello world! 😁");
    return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
