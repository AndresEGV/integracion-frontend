import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios("https://integracion-backend.onrender.com/");

      setUsers(data);
    };

    getUsers();
  }, []);

  const arrayUsers = users.map((user) => (
    <li key={user.id}>
      <p>{user.nombre}</p>
      <p>{user.email}</p>
    </li>
  ));

  return <ul>{arrayUsers}</ul>;
}

export default App;
