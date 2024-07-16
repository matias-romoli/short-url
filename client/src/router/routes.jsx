import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import App from "../App";

function Component() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </BrowserRouter>
  );
}

export default Component;
