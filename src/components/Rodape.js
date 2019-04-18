import React from 'react'
import {Link} from 'react-router-dom'

const Rodape = props => {
    return (
        <footer className='container-fluid text-center'>
            <Link to='/myPage' title='Ir para o Topo'></Link>
        
                <span className='glyphicon glyphicon-chevron-up'></span>

            <p><b>Curso Reginaldo Santos</b> <kbd>React: Criando um site para empresas</kbd> </p>
            <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>
    )
}

export default Rodape