import React from 'react'
import Navegante from './navegante'
import CartItem from "./itenscarrinho";
import CheckoutButton from "./botaofinal";

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navegante />
      <h1 className='aga1'>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p className='aga1'>O carrinho está vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
          <div className="total">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
