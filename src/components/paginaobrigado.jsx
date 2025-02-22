import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const paginaobrigado = ({ clearCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Extrair cartItems do estado do roteador
  const items = location.state?.cartItems ?? [];

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Limpa o carrinho quando a página é montada
  useEffect(() => {
    // A função clearCart será chamada apenas quando a página é desmontada
    return () => clearCart();
  }, []);

  return (
    <div className="thank-you-page">
      <h1 className="aga1">Obrigado por sua compra!</h1>
      <p>Seu pedido foi concluído com sucesso.</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button className="botao" onClick={() => navigate("/")}>Voltar ao Catálogo</button>
    </div>
  );
};

export default paginaobrigado;