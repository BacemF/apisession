import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import Details from "./Components/Details";

function App() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(list);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((list) => setList(list))
      .then(setLoading(false))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<UserList users={list} loading={loading} />}
          />
          <Route path="/info/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
