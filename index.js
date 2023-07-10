import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

const IndexPage = ({ onButtonClick }) => {
  // Custom styles and background image
  const pageStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    background: "url('https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/object-detection-illustration.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "15px",
    boxSizing: "border-box",
    color: "#fff",
  };

  const titleStyles = {
    fontSize: "40px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "black",
  };
  const title2Styles = {
    fontSize: "30px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "black",
  };
  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    background: "blue",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textTransform: "uppercase",
  };

  const lineStyles = {
    fontSize: "20px",
    margin: "0",
    textTransform: "uppercase",
    color: "black",
  };

  const footerStyles = {
    fontSize: "20px",
    marginTop: "16px",
    textTransform: "uppercase",
    color: "black",
  };

  return (
    <div style={pageStyles}>
      <div>
        <h1 style={titleStyles}>Welcome to the Object Detection Web App</h1>
      </div>
      <div>
      <h1 style={title2Styles}>&nbsp;&nbsp;&nbsp;Using Tensorflow and React JS</h1>
      </div>
      <h1 style={lineStyles}>Click on the button to start detecting</h1>
      <button style={buttonStyles} onClick={onButtonClick}>
        Start
      </button>
      <footer style={footerStyles}>Done by Ganesha Ram G</footer>
    </div>
  );
};





const Root = () => {
  const [currentPage, setCurrentPage] = React.useState("index");

  const handleButtonClick = () => {
    setCurrentPage("app");
  };

  return (
    <React.StrictMode>
      {currentPage === "index" ? (
        <IndexPage onButtonClick={handleButtonClick} />
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));