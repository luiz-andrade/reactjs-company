/**
 *
 * CONSTROLA SE O USUARIO ESTA LOGADO OU NÃO
 *
 */
class SessaoUsuario {
  constructor() {
    process.env.NODE_ENV === "developmentx"
      ? (this._logado = true)
      : (this._logado = false);
  }

  get logado() {
    return this._logado;
  }

  get usuario() {
    return this._usuario;
  }

  set usuario(usuario) {
    this._usuario = usuario;
  }

  set logado(logado) {
    this._logado = logado;
  }
}

const sessaoUsuario = new SessaoUsuario();
export default sessaoUsuario;

/**
 * URL DO SERVIÇO PYTHON
 */

// window.location.hostname === "localhost"
//       ? (this._url_base = "http://localhost:5000")
//       : (this._url_base = "http://localhost:5000");

// const url_base = "";
//export const url_base = "http://192.168.0.197:5000";
class UrlBase {
  constructor() {
    if (process.env.NODE_ENV === "development") {
      return (this.url_base = "http://localhost:5000");
    } else {
      return (this.url_base = "http://192.168.0.197:5000");
    }
  }
}

export const url_base = new UrlBase().url_base;
