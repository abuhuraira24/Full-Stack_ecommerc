import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
      <Route path="/" />
    </Router>
  );
}

export default App;
