import Cards from "./components/Cards.jsx";
import Posts from "./components/Posts.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact Component={Cards} />
        <Route path="/posts/:id" Component={Posts}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
