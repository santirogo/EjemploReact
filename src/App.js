import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {

    let url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=0e6d52e549e6438dba4a8b01cdc4d2a9`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        })
      })
  }


  render(){

    return (
      <div className="contenedor-app">
        <Header titulo = 'Noticias'>
        </Header>
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <Noticias noticias = {this.state.noticias}>
          </Noticias>
        </div>
      </div>
    );
  }
}

export default App;
