import React, { Component } from 'react';
import Formulario from './components/Formulario/';
import TabelaNotas from './components/TabelaNotas/';
import './assets/App.css';
import Logo from "./assets/img/reactjs.png";

class App extends Component {
  constructor() {
    super();

    //Propriedade especial do React
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    //Criar um array com a nova nota
    const NovaNota = { titulo, texto };

    //Cria um novo array com as informações anteriores e as novas
    const novoArray = [...this.state.notas, NovaNota];

    //Atributo para atualizar o estado do this.state passando o array atualizado, contanenado.
    const novoEstado = {
      notas: novoArray
    }
    //Atributo Especial do React
    this.setState(novoEstado)

    console.log(this.state.notas);
  }

  render() {
    return (
      <section>
        <div className="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <img src={Logo} width={32} height={32}/>
              <span class="fs-4">React.js - Cadastro de Notas</span>
            </a>
          </header>
          <Formulario passandoCriarNota={this.criarNota.bind(this)} />
          <TabelaNotas passandoNotas={this.state.notas} />
        </div>
      </section>
    );
  }

}

export default App;
