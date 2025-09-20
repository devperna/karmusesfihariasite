import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onImageClick: (imageUrl: string, itemName: string) => void;
}

export const MenuItemCard = ({ item, onImageClick }: MenuItemCardProps) => {
  const { addToCart, decreaseQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);

  return (
    <Col className="mb-4">
      <Card className="h-100 card-minimalist">
        <Card.Img 
          variant="top" 
          src={item.image_url} 
          alt={item.name} 
          onClick={() => onImageClick(item.image_url, item.name)}
          className="card-img-top-minimalist"
        />
        <Card.Body className="d-flex flex-column p-3">
          <Card.Title className="fw-bold">{item.name}</Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>{item.description}</Card.Text>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <span className="current-price">R$ {item.price.toFixed(2)}</span>
              {quantity === 0 ? (
                <Button variant="warning" size="sm" onClick={() => addToCart(item)}>Adicionar</Button>
              ) : (
                <div className="quantity-controls-card">
                  <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <span className="mx-2 fw-bold">{quantity}</span>
                  <Button variant="warning" size="sm" onClick={() => addToCart(item)}>+</Button>
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};