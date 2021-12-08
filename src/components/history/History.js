import React from "react";
import "../form/form.scss";
function History(props) {
  
  return (
    <pre>
      {props.history.map((item) => {
        return (
          <div>
            <hr></hr>
            <p>{`method:${item.method}  url:${item.url}`}</p>
            <button className="button-64"
              onClick={() =>
                props.handleApiCall({
                    method: item.method,
                  url: item.url,
                })
            }
            >
              go
            </button>
                <hr></hr>
          </div>
        );
      })}
    </pre>
  );
}

export default History;
