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
    // <>
    <div >
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" defaultValue="https://jsonplaceholder.typicode.com/todos" />
          <button data-testid="click-form" className="button-64" type="submit">GO!</button>
        </label>
      </form>
      <textarea className="textarea" name="textarea" rows="4" cols="50">

  </textarea>
      <section className="methods">
        <button
          className="button-64"
          onClick={() => {
            setMethods((methods) => "GET");
          }}
        >
          <span class="text">GET</span>
          
        </button>
        <button
          className="button-64"
          onClick={() => {
            setMethods((methods) => "POST");
          }}
        >
          <span class="text">POST</span>
          
        </button>
        <button
          className="button-64"
          onClick={() => {
            setMethods((methods) => "PUT");
          }}
          id="PUT"
        >
          <span class="text"> PUT</span>
         
        </button>
        <button
          className="button-64"
          onClick={() => {
            setMethods((methods) => "DELETE");
          }}
        >
          <span class="text">DELETE</span>
          
        </button>
      </section>
    </div>
  );
}

export default Form;
