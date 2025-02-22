import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  
import '../styles/Login.css';
import '../styles/forms.css';
import  { useState, useEffect } from 'react';

const Typewriter  = ({text, speed = 75}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return <h1 className="wt">{displayText}</h1>;
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Aqui você pode adicionar a validação do login
    // Se o login for bem-sucedido, redireciona para a página /loja
    navigate('/loja');
  };

  return (
    <>
      <Typewriter text="Olá, sejá bem-vindo!" />
      <div className="formulario">
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="linkform" to="/esqueceu-senha">Esqueceu a senha?</Link>
          <button type="submit">Entrar</button>
          <Link className="linkform" to="/registrar">Registrar</Link>
        </form>
      </div>
    </>
  );
}

export default Login;
