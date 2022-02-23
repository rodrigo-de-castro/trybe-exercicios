import React from 'react';

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            curriculo: '',
            cargo: '',
            descricao: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleReset = this.handleReset.bind(this);
    }

    handleForm = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState ({[target.name]: value})
    }

    handleUpperCase = ({target}) => { 
        this.setState ({[target.name]: target.value.toUpperCase()})
    }

    handleCityVerify = ({target}) => {
       if (typeof(target.value[0])==='number'){ 
        this.setState ({[target.name]: ""})
    }
    console.log(target.value[0].parseInt);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        // Passa o state inteiro para o state do componente pai
        const {addNew} = this.props;
          addNew(this.state)
          this.setState({
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            curriculo: '',
            cargo: '',
            descricao: '',
          });
          console.log(addNew);
      }




    render() { 
        return (
      <form onSubmit={this.handleSubmit}> 
        <fieldset>
            <label htmlFor='nome'> NOME:
                <input  onKeyUp={this.handleUpperCase} onChange= {this.handleForm} maxlength='40' name='nome' value={this.state.nome} required/>
             </label>
            <label htmlFor='email'> EMAIL:
                <input  onChange= {this.handleForm} maxlength='50' name='email' value={this.state.email} required/>
            </label>
            <label htmlFor='cpf'> CPF:
                <input onChange= {this.handleForm} maxlength='11' name='cpf' value={this.state.cpf} required />
            </label>
            <label htmlFor='endereco'> ENDEREÇO:
                <input onChange= {this.handleForm} maxlength='200' name='endereco' value={this.state.endereco} required/>
            </label>
            <label htmlFor='cidade'> CIDADE:
                <input onBlur={this.handleCityVerify} onChange= {this.handleForm} maxlength='28' name='cidade' value={this.state.cidade} required/>
            </label> 
            <label htmlFor='estado'> ESTADOS:
                <select onChange= {this.handleForm} name='estado' value={this.state.estado} required>
                    <option value="SP">SP</option>
                    <option value="SC">SC</option>
                    <option value="MG">MG</option>
                </select>
            </label>
            <label htmlFor='tipo'> TIPO:
                <input onChange= {this.handleForm} name='tipo'type='radio' required value='casa'/> CASA
                <input onChange= {this.handleForm} name='tipo' type='radio' required value='apartamento'/>APARTAMENTO
            </label> 
        </fieldset>
        <fieldset>
            <label htmlFor='curriculo'> RESUMA SEU CURRICULO:
                <textarea onChange= {this.handleForm} maxlength='1000' name='curriculo' value={this.state.curriculo} required />
            </label> 
            <label htmlFor='cargo'> CARGO:
                <textarea onChange= {this.handleForm} name='cargo' maxlength='40' value={this.state.cargo} required />
            </label> 
            <label htmlFor='descricao'> DESCREVA SEU CARGO:
                <input onChange= {this.handleForm} maxlength='500' name='descricao' value={this.state.descricao} required/>
            </label>
        </fieldset>
        <button type='submit'>ENVIAR</button>
        <button type='reset' onClick={this.handleSubmit}>LIMPAR</button>
      </form> 
     ) 
    }
}

export default Form;