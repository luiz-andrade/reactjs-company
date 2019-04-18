import React, { Component } from 'react'
import config, { storage } from '../firebase-config'


class AdminPortifolio extends Component {
  constructor(props) {
    super(props)

    this.gravaPortifolio = this.gravaPortifolio.bind(this)
  }

  gravaPortifolio(e) {
    e.preventDefault();

    // Salvando imagem
    const arquivo = this.imagem.files[0];
    const {name, size, type} = arquivo

    if (type.match(/image/))
    {
      const ref = storage.ref(name)
      
      ref.put(arquivo)
      .then(img => {
        img.ref.getDownloadURL()
          .then(downloadURL => {

            const novoPortifolio = {
              titulo: this.titulo.value,
              descricao: this.descricao.value,
              imagem: downloadURL
            }
                    
            config.push(`portifolio`,{
              data: novoPortifolio
            }).then(msg =>{
              console.log("Registro salvo");
              
            }).catch(err => {
              console.log("o envio falhou: ", err);
            })
          })
      })
    }
    else {
      alert("Selecione uma imagem valida")
      return false;
    }
    
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">

          <h2 className="page-header">Admin portifolio</h2>

            <form onSubmit={this.gravaPortifolio}>

              <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input type="text" className="form-control" name="titulo" id="titulo" placeholder="Digite o titulo" ref={(ref) => this.titulo = ref} />
              </div>

              <div className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao" id="descricao" rows="3" className="form-control" placeholder="Digite aqui" ref={(ref) => this.descricao = ref}></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="imagem">Imagem</label>
                <input type="file" className="form-control" name="imagem" id="imagem" ref={(ref) => this.imagem = ref } />
              </div>

              <button type="submit" className="btn btn-sm btn-success">Salvar</button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPortifolio
