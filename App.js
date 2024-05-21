import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" tabIndex={5}>
    Hello I'm the Title
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="head" tabIndex={5}>
      Namaste React Functional Component
    </h1>
    <h2 className="head1" tabIndex={5}>
      Functional Component
    </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
