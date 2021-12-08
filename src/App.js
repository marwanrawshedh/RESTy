import React from "react";
import { useEffect, useReducer } from "react";
import "./app.scss";
import axios from "axios";
import History from "./components/history/History";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
const initialState = {
  data: {},
  isLoading: false,
  methods: { method: "", url: "{}" },
  history: [],
};
const reducer = (state = initialState, action) => {
  switch (action.s) {
    case "data":
      return { ...state, data: action.d };
    case "method":
      return { ...state, methods: action.d };
    case "false":
      return { ...state, isLoading: action.d };
    case "true":
      return { ...state, isLoading: action.d };
    default:
      return state;
  }
};
function App(props) {
  const [red, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(!(red.methods.url === "{}")){
    let tr = { s: "false", d: true };
    let fs = { s: "true", d: false };
    dispatch(tr);
    red.history.push(red.methods);
    axios
      .get(red.methods.url)
      .then((res) => {
        const m = { s: "data", d: res.data };
        dispatch(m);
        dispatch(fs);
      })
      .catch((err) => {
        dispatch(fs);
      });}
  }, [red.methods.url, red.methods.method]);

  const callApi = (formData) => {
    let form = { s: "method", d: formData };
    dispatch(form);
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {red.methods.method}</div>
      <div>URL: {red.methods.url}</div>
      <Form handleApiCall={callApi} />
      {red.isLoading && <h1>Loading ...</h1>}
      {!red.isLoading && <Results data={red.data} />}
      <History history={red.history} handleApiCall={callApi} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
