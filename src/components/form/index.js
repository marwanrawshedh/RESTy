import React, { useState } from "react";
import "./form.scss";

function Form(props) {
  const [methods, setMethods] = useState("GET");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: methods,
      url: e.target.url.value,
      // url: "e.target.url.value",
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" defaultValue="https://jsonplaceholder.typicode.com/todos" />
          <button data-testid="click-form" type="submit">GO!</button>
        </label>
      </form>
      <section className="methods">
        <button
          className="b"
          onClick={() => {
            setMethods((methods) => "GET");
          }}
        >
          GET
        </button>
        <button
          className="b"
          onClick={() => {
            setMethods((methods) => "POST");
          }}
        >
          POST
        </button>
        <button
          className="b"
          onClick={() => {
            setMethods((methods) => "PUT");
          }}
          id="PUT"
        >
          PUT
        </button>
        <button
          className="b"
          onClick={() => {
            setMethods((methods) => "DELETE");
          }}
        >
          DELETE
        </button>
      </section>
    </>
  );
}

export default Form;
