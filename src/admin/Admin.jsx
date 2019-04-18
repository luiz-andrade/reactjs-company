import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from '../firebase-config'
// import withUnmounted from '@ishawnwang/withunmounted'
import sessaoUsuario from './Sessao';

import AdminMenu from './AdminMenu';
import AdminPortifolio from './AdminPortifolio'

class Admin extends Component {

  constructor(props) {
    super(props)

    this.state = {
      estaLogando: false,
      estaAutenticado: false,
      user: null
    }
  }

  componentDidMount() {
        
    // this._isMounted = true;

    // auth.onAuthStateChanged(user => {
    //   // this._isMounted = true;
    //   // console.log('red-admin', this._isMounted);
    //   if (this.hasUnmounted) {
    //     this.setState({
    //       estaLogando: false,
    //       estaAutenticado: !!user,
    //       user  // o mesmo que user: user
    //     })
    //   }
        
    // })
  }

  render() {
    if (this.state.estaLogando) {
      return (<p>Logando...</p>)
    }
       // TODO:corrigir erro ao redirecionar
       
    if (!sessaoUsuario.logado) {
      // console.log('sem login  ', this.state.estaAutenticado);
      return (<Redirect to="/login" />)
    }

    return (
      <div>
        <h1>Administrativa</h1>
        {console.log(sessaoUsuario.logado)}
        {/* <Route path='/' component={AdminMenu} />
        <Route path={`${this.props.match.url}/portifolio`} component={AdminPortifolio} /> */}

      </div>
    )
  }
}

export default Admin
