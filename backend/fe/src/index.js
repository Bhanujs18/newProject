import React from "react";
import  ReactDOM from "react-dom";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(<BrowserRouter>
<div class="bg"></div>

<div class="bg bg2"></div>
<App />
<div class="bg bg3"></div>

 </BrowserRouter> ,document.getElementById("root"));