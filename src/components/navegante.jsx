import React from 'react'
import '../styles/navegante.css'
import { Link } from 'react-router-dom';

function navegante() {
  return (
    <div className="corpo">

        <div className="um">
            <Link className="linkpages" to="/loja">Home</Link>
            <Link className="linkpages" to="/Carrinho">Carrinho</Link>
        </div>

        <div className="dois">
            <Link className="linkpages" to="/">Sair</Link>
        </div>
    
    </div>
  )
}

export default navegante