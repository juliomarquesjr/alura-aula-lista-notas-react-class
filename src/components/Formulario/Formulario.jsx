import React, { Component } from 'react';
import TabelaNotas from '../TabelaNotas/';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this._titulo = "";
    this._texto = "";
  }

  _handleTitulo(evento) {
    evento.stopPropagation();
    this._titulo = evento.target.value;
    //console.log(this._titulo);
  }

  _handleTexto(evento) {
    evento.stopPropagation();
    this._texto = evento.target.value;
    //console.log(this._texto);
  }

  _criarNota(evento) {
    evento.preventDefault(); //Para o submit do formulário
    evento.stopPropagation(); //Impede a propagação do evento
    this.props.passandoCriarNota(this._titulo, this._texto);
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col">
            <form onSubmit={this._criarNota.bind(this)}>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Titulo</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="titulo-nota" onChange={this._handleTitulo.bind(this)} />
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Nota em Texto</label>
                <div className="col-sm-10">
                  <textarea rows={4} className="form-control" id="texto-nota" onChange={this._handleTexto.bind(this)} />
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary btn-md btn-left">Cadastrar Nota</button>
              </div>
            </form>
          </div>

          <div className="col">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>Funcionamento</h2>
              <p>Ao adicionar os <strong>TITULO</strong> e a <strong>MENSAGEM</strong>, os dados são salvos e enviados para a tabela, atualizando o estado do <strong>React.js</strong> automaticamente.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Formulario;