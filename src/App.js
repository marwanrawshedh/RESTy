import React from "react";
import { useState } from "react";
import "./app.scss";
import axios from "axios";
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

function App(props) {
  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const callApi = (requestParams) => {
    // mock output
    setIsLoading(true);
    axios
      .get(requestParams.url)
      .then((res) => {
        setData((faker) => res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    setRequestParams(requestParams);
  };
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method }</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && 
      <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
