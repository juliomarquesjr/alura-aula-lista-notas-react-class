import React, { Component } from 'react';
class TabelaNotas extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <table class="table caption-top">
                        <caption>Lista de Notas Cadastradas</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Texto da Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.passandoNotas.map((nota, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row" key={index}>{index + 1}</th>
                                            <td>{nota.titulo}</td>
                                            <td>{nota.texto}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TabelaNotas;