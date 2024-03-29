import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import Inicio from './components/Inicio'
import Servicos from './components/Servicos'
import Portfolio from './components/Portfolio'
import Preco from './components/Preco'
import Contato from './components/Contato';

// Administrativa
import Admin from './admin/Admin';
import Login from './admin/Login';
import AdminMenu from './admin/AdminMenu';

class App extends Component {

  render() {

    return (

      <BrowserRouter >
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/preco' component={Preco} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contato' component={Contato} />
          
          <Route path='/admin' component={AdminMenu} />
          <Route path='/login' component={Login} />
          
          
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
