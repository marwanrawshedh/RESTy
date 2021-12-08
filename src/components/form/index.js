import React, { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method,setMethod]=useState("GET");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
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
          <button data-testid="click-form"  className="button-64"  type="submit">GO!</button>
        </label>
      </form>
      <textarea className="textarea" name="textarea" rows="4" cols="50">

  </textarea>
      <section className="methods">
        <button
          className="button-64"
          onClick={() => {
            setMethod((methods) => "GET");
          }}
        >
          <span className="text">GET</span>
          
        </button>
        <button
          className="button-64"
          onClick={() => {
            setMethod((methods) => "POST");
          }}
        >
          <span className="text">POST</span>
          
        </button>
        <button
          className="button-64"
          onClick={() => {
            setMethod((methods) => "PUT");
          }}
          id="PUT"
        >
          <span className="text"> PUT</span>
         
        </button>
        <button
          className="button-64"
          onClick={() => {
            setMethod((methods) => "DELETE");
          }}
        >
          <span className="text">DELETE</span>
          
        </button>
      </section>
    </div>
  );
}

export default Form;
