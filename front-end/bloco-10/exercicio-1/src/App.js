import logo from './logo.svg';
import './App.css';
import React from 'react'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDos = ['surfar', 'estudar React', 'jantar com a Mardjoli', 'ver meus pais']

function App() {
  return toDos.map ((tasks) => Task(tasks))
}

export default App;
