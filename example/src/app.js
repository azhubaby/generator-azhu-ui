import React from "react";
import { render } from "react-dom";
// import azhu from "../../lib/index";
import { Button } from "generator-azhu-ui";
import "../../lib/azhu.min.css";


// import { Button } from "../../src";
// import "../../scss/index.scss";

// console.log("azhu", azhu);

function App() {
    return (
        <div>
            <Button>test bTN</Button>
        </div>
    );
}

render(<App />, document.getElementById("app"));
