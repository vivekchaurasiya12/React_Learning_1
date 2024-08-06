// WRITING PROGRAM USING REACT 

const heading = React.createElement("h1",{id:"heading"},"hii how are you");
// createElement takes three value first the element which you want to create and 2nd its attribute name and the third content which you want to put
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// WRITING PROGRAM USING JS
// let heading = document.createElement("h1")
// heading.innerHTML = "how are you"
//  let root = document.getElementById("root")
//  root.appendChild(heading)


//Creation of nested tag in react

// like this 
{/* <div id="parent">
        <div id="child">
        <h1>I am a h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am a h1 tag")));

const demo = ReactDOM.createRoot(document.getElementById("demo"));

demo.render(parent);


//Creation of nested tag in react
  
{/* <div id="parent">
        <div id="child1">
        <h1>I am a h1 tag</h1>
        <h2>I am a h2 tag</h2>
        </div>
        <div id="child2">
        <h1>I am a h1 tag</h1>
        <h2>I am a h2 tag</h2>
        </div>
</div> */}

const parent1 = React.createElement("div",{id:"parent1"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am a h1 tag"),React.createElement("h2",{},"I am a h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am a h1 tag"),React.createElement("h2",{},"I am a h2 tag")])]);

const elem = ReactDOM.createRoot(document.getElementById("elem"));

elem.render(parent1);