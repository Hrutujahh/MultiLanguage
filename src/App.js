import React from "react";
import GoogleTranslate from "./components/GoogleTranslate";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <GoogleTranslate />
      </ErrorBoundary>
      <h1>Welcome to my Website</h1>
      <h1>Simple Way to Create Multilingual Website</h1>
      <h3>
        Google Translator Script Use to Convert All Over Language Simple Steps
      </h3>
    </div>
  );
};

export default App;
