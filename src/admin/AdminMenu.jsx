import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = props => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
              Selecione uma opção
            </a>
            <Link to={"/admin/portifolio"} className="list-group-item list-group-item-action">Portifólio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
