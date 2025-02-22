import Burro from './components/burro';
import { useState } from 'react';
import Login from './components/Login';
import Cadastro from './components/cadastro';
import Loja from './components/lojinha';  
import Paginaobrigado from './components/paginaobrigado'
import Carrinho from './components/Carrinho';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () =>{

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        toast.info(`Quantidade atualizada no carrinho: ${product.name}`);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`${product.name} adicionado ao carrinho!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  
  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      toast.info(`Quantidade atualizada: ${product.name}`);
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: +quantity } : item
      );
    });
  };
  
  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      toast.error(`${product.name} removido do carrinho.`);
      return prevItems.filter((item) => item.id !== product.id);
    });
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esqueceu-senha" element={<Burro />} />
        <Route path="/registrar" element={<Cadastro />} />
        <Route path="/loja" element={<Loja addcarrinho={handleAddToCart} />} /> 
        <Route path="/carrinho" element={<Carrinho
         cartItems={cartItems}
         setCartItems={setCartItems}
         onUpdateCart={handleUpdateCart}
         onRemoveFromCart={handleRemoveFromCart}
         onCheckout={() => {
           if (cartItems.length > 0) {
             toast.success("Compra finalizada com sucesso!");
             setCartItems([]);
           } else {
             toast.error("Seu carrinho está vazio.");
           }
         }} />} />
        <Route path="thank-you" element={<Paginaobrigado 
                cartItems={cartItems}
                clearCart={() => setCartItems([])} />} 
                />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast-container"
      />
    </Router>
  );
}

export default App;
