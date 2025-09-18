
import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Button, Badge, Modal, Tabs, Tab } from 'react-bootstrap';
import { useCart } from './context/CartContext';
import { CartSidePanel } from './components/CartSidePanel';
import { MenuItemCard } from './components/MenuItemCard';
import {
  destaqueId,
  combos,
  esfihasTradicionais,
  esfihasPremiumSalgadas,
  esfihasTradicionaisDoces,
  esfihasPremiumDoces,
  bebidas,
  MenuItem
} from './data/menuData';

// Encontra o item de destaque
const allItems = [...esfihasTradicionais, ...esfihasPremiumSalgadas, ...esfihasTradicionaisDoces, ...esfihasPremiumDoces];
const destaqueItem = allItems.find(item => item.id === destaqueId);

const App = () => {
  const { toggleCart, getCartItemCount, isAnimating, addToCart } = useCart();
  
  const [modalShow, setModalShow] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState({ src: '', name: '' });

  const handleImageClick = (src: string, name: string) => {
    setSelectedImageData({ src, name });
    setModalShow(true);
  };

  return (
    <div className="App">
      <Navbar bg="white" variant="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo/logo.png" width="120" className="d-inline-block align-top" alt="Karmu's Esfihas Logo"/>
          </Navbar.Brand>
          <div className="navbar-center-text mx-auto">
            Deus é Fiel
          </div>
          <Button variant="outline-secondary" onClick={toggleCart} className={`cart-button ${isAnimating ? 'cart-pop' : ''}`}>
            Carrinho
            <Badge pill bg="warning" text="dark" className="ms-2">{getCartItemCount()}</Badge>
          </Button>
        </Container>
      </Navbar>

      <CartSidePanel />

      <Container className="my-5">
        {destaqueItem && (
          <div className="destaque-semana">
            <h2 className="mb-4 text-center section-title">Destaque da Semana</h2>
            <Row className="align-items-center">
              <Col md={5}>
                <img src={destaqueItem.imagem} alt={destaqueItem.nome} className="img-fluid rounded-3" style={{cursor: 'pointer'}} onClick={() => handleImageClick(destaqueItem.imagem, destaqueItem.nome)}/>
              </Col>
              <Col md={7}>
                <h3 className="fw-bold">{destaqueItem.nome}</h3>
                <p className="lead text-muted">{destaqueItem.descricao}</p>
                <p className="h4 fw-bold current-price">R$ {destaqueItem.preco.toFixed(2)}</p>
                <Button variant="warning" size="lg" onClick={() => addToCart(destaqueItem)}>Adicionar ao Pedido</Button>
              </Col>
            </Row>
          </div>
        )}

        <hr className="feature-divider" />

        <div className="menu-tabs">
            <Tabs defaultActiveKey="combos" id="menu-tab-system" className="mb-5" justify>
                <Tab eventKey="combos" title="Combos">
                    <Row xs={1} md={2} lg={3}>{combos.map(item => <MenuItemCard key={item.id} item={item} onImageClick={handleImageClick} />)}</Row>
                </Tab>
                <Tab eventKey="tradicionais" title="Tradicionais Salgadas">
                    <Row xs={1} md={3} lg={4}>{esfihasTradicionais.map(item => <MenuItemCard key={item.id} item={item} onImageClick={handleImageClick} />)}</Row>
                </Tab>
                <Tab eventKey="premium" title="Premium Salgadas">
                    <Row xs={1} md={3} lg={4}>{esfihasPremiumSalgadas.map(item => <MenuItemCard key={item.id} item={item} onImageClick={handleImageClick} />)}</Row>
                </Tab>
                <Tab eventKey="doces" title="Tradicionais Doces">
                    <Row xs={1} md={3} lg={4}>{esfihasTradicionaisDoces.map(item => <MenuItemCard key={item.id} item={item} onImageClick={handleImageClick} />)}</Row>
                </Tab>
                <Tab eventKey="premium-doces" title="Premium Doces">
                    <Row xs={1} md={3} lg={4}>{esfihasPremiumDoces.map(item => <MenuItemCard key={item.id} item={item} onImageClick={handleImageClick} />)}</Row>
                </Tab>
                <Tab eventKey="bebidas" title="Bebidas">
                    <Row xs={1} md={3} lg={4}>{bebidas.map(item => <MenuItemCard key={item.id} item={item} onImageClick={handleImageClick} />)}</Row>
                </Tab>
            </Tabs>
        </div>

      </Container>

      <footer className="text-center p-3 mt-5 bg-light">
        <Container>
          <p className="text-muted">&copy; 2025 Karmu's Esfihas. Todos os direitos reservados.</p>
        </Container>
      </footer>

      <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImageData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImageData.src} alt={selectedImageData.name} className="img-fluid w-100" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
