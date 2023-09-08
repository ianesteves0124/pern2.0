import React from "react";

function App() {
  const topic = "REACT";
  const age = 39;
  const like = ["JSX", "REACT", "REDUX"];
  return (
    <div id="someId">
      <h1 id="header-Id">{topic} IS AWESOME!!!</h1>
      <h2>{age}</h2>
      <h1>{like}</h1>
      <h2>{String(true)}</h2>
      {
        true ? <h3>TEST</h3> : <h2>UNTEST</h2>
      }
      {
        like.map((likes) => (<li key={likes}>{likes}</li>))
        
      }
    </div>
  );
}

export default App;
