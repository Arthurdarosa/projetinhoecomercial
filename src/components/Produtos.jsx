import React, { useState } from "react";

const Produtos = ({ produto, addcarrinho }) => {
    const [quantidade, setquantidade] = useState(1);
    console.log("produto:", produto)
    if (!produto) {
        return <p>Produto não encontrado</p>;
    }

    return (
        <div className="produto">
            <h3>{produto.name}</h3>
            <p>${produto.price.toFixed(2)}</p>
            <div className="cart-buttons">
                <select value={quantidade} onChange={(e) => setquantidade(Number(e.target.value))}>
                    {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                </select>
                <button onClick={() => addcarrinho(produto, quantidade)}>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
};

export default Produtos;
