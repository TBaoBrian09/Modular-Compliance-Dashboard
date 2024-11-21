import React from "react";
import ReactDOM from "react-dom/client";
import "@aws-amplify/ui-react/styles.css";
import DashApp from "./dashApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DashApp />);