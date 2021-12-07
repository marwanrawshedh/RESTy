import React from 'react';
import ReactJson from 'react-json-view'
function Results(props) {
  return (
    <>
    <h2> Results </h2>
    
    <ReactJson src={props.data} />
    </>
  );
}

export default Results;