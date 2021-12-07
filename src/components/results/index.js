import React from 'react';
import ReactJson from 'react-json-view'
function Results(props) {
  return (
    <>
    <h2 data-testid="data" > Results </h2>
    
    <ReactJson src={props.data} data-testid="data" />
    </>
  );
}

export default Results;