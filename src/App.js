import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [users]);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div className="Users" key={user.id}>
            <p> {user.id}</p>
            <p>{user.title}</p>
            <img src={user.thumbnailUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
