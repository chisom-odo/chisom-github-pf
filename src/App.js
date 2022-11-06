import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import RepoList from "./pages/RepoList/RepoList";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact element={<Error />} />
        <Route path="/repoList" exact element={<RepoList />} />
        <Route path="/error-test" element={<ErrorBoundary />} />
      </Routes>
    </Router>
  );
}

export default App;
