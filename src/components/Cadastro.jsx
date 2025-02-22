import '../styles/forms.css'
import { Link } from 'react-router-dom';



function Cadastro () {
  return (
    <div className='formulario'>
      <h1>Cadastra-se</h1>
      <p>crie uma conta gratuitamente</p>
      <form>
        <input type="text" name="nome" placeholder="Nome de usuário" required />
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Senha" required/>
        <button type="submit">Cadastrar</button>

        </form>
        <Link className="linkform" to="/">Entrar</Link> 
        
    </div>
    
  )
}

export default Cadastro