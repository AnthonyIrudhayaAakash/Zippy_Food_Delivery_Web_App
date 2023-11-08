//Using JavaScript "Hello World" is displayed by following code
// const header = document.createElement("h1");

// header.textcontent="Hello world";

// const parent = document.getElementById("container");

// parent.render(header);
 

// Using React and ReactDOM library "Hello World" is displayed by following code

const heading = React.createElement("h1",{id:"heading_hello"},"Hello World");

const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(heading);