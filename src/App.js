import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Hello React </h1>
      <p>React app to build  GitHub Actions CI/CD</p>
      <button onClick={() => alert("CI/CD Working!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
