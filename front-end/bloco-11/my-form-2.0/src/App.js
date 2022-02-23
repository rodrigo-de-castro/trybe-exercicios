import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './forms';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      forms: "",
    };
  }

  addNewForm = (form) => {
    this.setState ({
      forms: form,
    })
  }

  render() {
  const { forms } = this.state
  return (
    <div className="App">
      <Form addNew={this.addNewForm}/>
      <div className="Form-filled">
      <p> Nome: {forms.nome}</p>
      <p> Email: {forms.email}</p>
      <p> CPF: {forms.cpf}</p>
      <p> Endereço: {forms.endereco}</p>
      <p> Cidade: {forms.cidade}</p>
      <p> Estado: {forms.estado}</p>
      <p> Tipo Domicílio: {forms.tipo}</p>
      <p> Currículo: {forms.curriculo}</p>
      <p> Cargo: {forms.cargo}</p>
      <p> Descrição: {forms.descricao}</p>
      </div>
    </div> )
  ;
}
}
export default App;
