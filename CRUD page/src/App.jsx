import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const APIserver = axios.create({
  baseURL: "http://localhost:3333",
});

function App() {
  const [users, setUsers] = useState([0]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    APIserver.get("/usuarios").then((response) => {
      setUsers(response.data);
      console.log(response.data)
    });
  }, []);

  function newUser() {
    APIserver.post('/usuarios', {
      age,
      name,
    }).then(response => {
      console.log(response)
    })
  }
  
  return (
    <div className="crud-page">
      <h1> Usuarios: </h1>

      <ul>
        {users.map(user => {
            <li key={user.name}>
              {user.name}
            </li>;
        })}
      </ul>

      <form onSubmit={newUser}>
        <h2> Adicionar novo usuarios</h2>
        <input placeholder="nome" onChange={event => setName(event.target.value)} />
        <input placeholder="idade" onChange={event => setAge(event.target.value)} />
        <button> Cadastrar </button>
      </form>
    </div>
  );
}

export default App;
