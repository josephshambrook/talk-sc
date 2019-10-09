import React from "react";
import ReactDOM from "react-dom";
import "./reboot.css";
import "./index.css";

// import App from "./Reel/App";
// import App from "./Buttons/App";
import Layout from "./Layout/Layout";
// import House from "./House/House";

const App = () => (
  <Layout />
);

ReactDOM.render(<App />, document.getElementById("root"));
