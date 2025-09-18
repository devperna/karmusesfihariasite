
import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, ListGroup, Form, CloseButton } from 'react-bootstrap';

export const CartSidePanel = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    getCartTotal,
    clearCart
  } = useCart();

  const handleCheckout = () => {
    alert('Pedido enviado com sucesso! (Isso é uma demonstração)');
    clearCart();
  };

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className={`cart-side-panel ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Seu Pedido</h3>
        <CloseButton onClick={toggleCart} />
      </div>
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id} className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <span>{item.nome}</span>
                  <strong>R$ {(item.preco * item.quantity).toFixed(2)}</strong>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div className="quantity-controls">
                    <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
                  </div>
                  <Button variant="link" size="sm" className="text-danger" onClick={() => removeFromCart(item.id)}>Remover</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
      <div className="cart-footer">
        <div className="d-flex justify-content-between fs-5 mb-3">
          <strong>Total:</strong>
          <strong>R$ {getCartTotal().toFixed(2)}</strong>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Observações:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ex: Tirar a cebola da esfiha de calabresa."/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Opção de Entrega:</Form.Label>
            <Form.Check type="radio" name="deliveryOption" id="delivery" label="Entrega" defaultChecked />
            <Form.Check type="radio" name="deliveryOption" id="pickup" label="Retirar na Loja" />
        </Form.Group>
        <Button variant="success" className="w-100" onClick={handleCheckout} disabled={cartItems.length === 0}>Finalizar Pedido</Button>
      </div>
    </div>
  );
};
