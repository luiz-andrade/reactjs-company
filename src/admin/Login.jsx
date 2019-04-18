import React, { Component } from 'react'
import { auth } from '../firebase-config'
import { Redirect } from 'react-router-dom'
// import withUnmounted from '@ishawnwang/withunmounted'
import sessaoUsuario from './Sessao';


class Login extends Component {
  // _isMounted = false;
  // hasUnmounted = false;

  constructor(props) {
    super(props)

    this.email = null
    this.senha = null

    this.state ={
      estaLogando:  false,
      erro: false,
      erroLogin: ""
    }

    this.autenticarUsuario = this.autenticarUsuario.bind(this)

  }

  autenticarUsuario() {
    this.setState({ estaLogando: true, erro: false})

    auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(user => {
        // console.log('usuario logado', user)
        this.setState({ erro: false, estaLogando: false})
        sessaoUsuario.logado = true;
        
      })
      .catch(error => {
        this.setState({ estaLogando: false, erro: true })
        console.log('Erro autenticar: ', error);
        var errorCode=  error.code
        var errorMessage = error.message
        if (errorCode === "auth/user-not-found") {
          this.setState({erroLogin: "Usuário inválido ou não cadastrado."})

        }
        if (errorCode === "auth/wrong-password") {
          this.setState({erroLogin: "A senha é inválida ou o usuário não possui uma senha."})

        }
                
      })
    
  }

  // componentDidMount(){
  //   this._isMounted = true;
  // }

  // componentWillUnmount() {
  //   this._isMounted = false;

  // }

  render() {
    if (sessaoUsuario.logado) {
      return <Redirect to='/admin' />
      
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-4 col-sm-4 well">
            <h2 className="page-header">Organização</h2>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="usuario@email.com" ref={(ref) => this.email = ref} />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" className="form-control" id="senha"  ref={(ref) => this.senha = ref}  />
                { this.state.erro &&
                  <small id="emailHelp" className="form-text text-muted">{this.state.erroLogin}</small>
                }
              </div>

              <button type="button" disabled={this.state.estaLogando} className="btn btn-primary" onClick={this.autenticarUsuario}>Enviar</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Login
// export default withUnmounted(Login)
