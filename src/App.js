import React from "react";
import { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [methods, setMethods] = useState({
    method: "",
    url: "{}",
  });
  useEffect(() => {
    
    setIsLoading(true);
    axios
      .get(methods.url)
      .then((res) => {
        setData((faker) => res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
      
  }, [methods.url, methods.method]);

  const callApi = (formData) => {
    

    setMethods(formData);

    
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {methods.method }</div>
      <div>URL: {methods.url}</div>
      <Form handleApiCall={callApi} />
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
