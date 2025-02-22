import '../styles/forms.css'
import { Link } from 'react-router-dom';

const Burro = () => {
  return (
    <div className='formulario'>
      <h1>Recuperar senha</h1>
      <form action="">
      <input type="email" name="email" placeholder="Email de recuperação" required/>
      <button type="submit">Enviar</button>
      </form>
      <Link className="linkform" to={"/"}>voltar ao login</Link>
    </div>
  )
}

export default Burro