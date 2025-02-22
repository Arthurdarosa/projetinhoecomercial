import {useEffect, useState} from 'react'
import Navegante from './navegante'
import { Link } from 'react-router-dom';
import produtosData from "../data/produtos.json";
import Produto from './Produtos'

const lojinha = ({addcarrinho}) => {
  const [produtos, setprodutos] = useState([]);
  
  useEffect(() => {
    // Carregando os produtos do mock JSON
    // Em um cenário real, você poderia fazer uma requisição HTTP aqui
    setprodutos(produtosData);
  }, []);

  console.log(produtos)
  console.log(addcarrinho)


  return (
    <div>
        <Navegante />
        <div>
          <h1 className='aga1'>Catálogo de Produtos</h1>
          <div className="produto-container">
            {produtos.map((product) => (
              <Produto
                key={product.id}
                produto={product}
                addcarrinho={addcarrinho}
           />
        ))}
      </div>
    </div>
    </div>
  )
};

export default lojinha;