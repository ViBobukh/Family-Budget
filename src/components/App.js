import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Content from "./Content.js"
import '../style/App.css';

function App() {
    return (
        <>
            <Header />
            <Content />
        </>
    )
}

const element = <App />;

ReactDOM.render(element, document.getElementById('root'));

export default App;