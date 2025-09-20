import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Button, Badge, Modal, Tabs, Tab } from 'react-bootstrap';
import { useCart } from './context/CartContext';
import { CartSidePanel } from './components/CartSidePanel';
import { MenuItemCard } from './components/MenuItemCard';
import { VideoPlayer } from './components/VideoPlayer';
import { supabase } from './supabaseClient';
import { MenuItem } from './types';

const App = () => {
  const { toggleCart, getCartItemCount, isAnimating, addToCart } = useCart();
  
  const [modalShow, setModalShow] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState({ src: '', name: '' });
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*');
      if (error) {
        console.error('Error fetching menu items:', error);
      } else {
        setMenuItems(data);
      }
    };

    fetchMenuItems();
  }, []);

  const handleImageClick = (src: string, name: string) => {
    setSelectedImageData({ src, name });
    setModalShow(true);
  };

  const combos = menuItems.filter(item => item.category_id === 3);
  const esfihasTradicionais = menuItems.filter(item => item.category_id === 1);
  const esfihasPremiumSalgadas = menuItems.filter(item => item.category_id === 4);
  const esfihasTradicionaisDoces = menuItems.filter(item => item.category_id === 2);
  const esfihasPremiumDoces = menuItems.filter(item => item.category_id === 5);
  const bebidas = menuItems.filter(item => item.category_id === 6);

  return (
    <div className="App">
      <Navbar bg="warning" variant="light" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">
            <img src="/images/logo/logo.png" width="180" className="d-inline-block align-top" alt="Karmu's Esfihas Logo"/>
          </Navbar.Brand>

          <Button variant="outline-danger" onClick={toggleCart} className={`cart-button ${isAnimating ? 'cart-pop' : ''}`}>
            Carrinho
            <Badge pill bg="danger" className="ms-2">{getCartItemCount()}</Badge>
          </Button>
        </Container>
      </Navbar>

      <CartSidePanel />

      <Container className="my-5">
        <VideoPlayer />

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