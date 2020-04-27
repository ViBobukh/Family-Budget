import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Content from "./Content.js"

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <Content />
            </div>
        </>
    )
}

const element = <App />;

ReactDOM.render(element, document.getElementById('root'));

export default App;