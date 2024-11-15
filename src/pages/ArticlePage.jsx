import axios from "axios";
import React, { useEffect, useState } from "react";

function ArticlePage({ url }) {
  const [error, setError] = useState(null);
  console.log(url);

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "500px",
          overflowY: "scroll",
          border: "1px solid #ddd",
          padding: "10px",
        }}
      >
        <p>Sorry This Website doesn't allow Iframes :</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        overflowY: "scroll",
        border: "1px solid #ddd",
        padding: "10px",
      }}
    >
      {
        <iframe
          title="Page Preview"
          src={url}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          onError={(error) => setError(`error +${error}`)}
        />
      }
    </div>
  );
}

export default ArticlePage;
