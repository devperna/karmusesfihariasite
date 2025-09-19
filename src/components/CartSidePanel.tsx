
import React, { useState } from 'react';
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

  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [observations, setObservations] = useState('');

  const handleCheckout = () => {
    const phoneNumber = '5544999776990'; // Substituir pelo número do WhatsApp da loja
    const message = `*Novo Pedido Karmu's Esfihas*

*Itens:*
${cartItems.map(item => `${item.quantity}x ${item.nome} - R$ ${(item.preco * item.quantity).toFixed(2)}`).join('\n')}

*Total:* R$ ${getCartTotal().toFixed(2)}

*Opção de Entrega:* ${deliveryOption === 'delivery' ? 'Entrega' : 'Retirar na Loja'}

*Observações:*
${observations || 'Nenhuma'}

Gostaria de fazer o pedido!
`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
  };

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className={`cart-side-panel ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Seu Pedido</h3>
        <CloseButton onClick={toggleCart} variant="white" />
      </div>
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p className="text-center mt-4">Seu carrinho está vazio.</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id} className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <span className="fw-bold">{item.nome}</span>
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
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Ex: Tirar a cebola da esfiha de calabresa."
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Opção de Entrega:</Form.Label>
            <Form.Check 
              type="radio" 
              name="deliveryOption" 
              id="delivery" 
              label="Entrega" 
              checked={deliveryOption === 'delivery'}
              onChange={() => setDeliveryOption('delivery')}
            />
            <Form.Check 
              type="radio" 
              name="deliveryOption" 
              id="pickup" 
              label="Retirar na Loja" 
              checked={deliveryOption === 'pickup'}
              onChange={() => setDeliveryOption('pickup')}
            />
        </Form.Group>
        <Button variant="warning" className="w-100 fw-bold" onClick={handleCheckout} disabled={cartItems.length === 0}>Finalizar Pedido via WhatsApp</Button>
      </div>
    </div>
  );
};
