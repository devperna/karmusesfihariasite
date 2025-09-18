
export interface MenuItem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export interface Combo extends MenuItem {
  itens: string[];
}

// O ID do item a ser destacado. Mude este número para alterar o destaque.
export const destaqueId = 101; // 101 = 4 Queijos

// --- COMBOS ---
export const combos: Combo[] = [
  { id: 1, nome: "Combo 1", descricao: "2 Frango Cheddar, 2 Strogonoff, 2 Carne Síria, 2 Chocolate ao leite", preco: 59.92, itens: [], imagem: "images/combos/placeholder.jpg" },
  { id: 2, nome: "Combo 2", descricao: "2 Calabresa com Cebola, 2 Frango Catupiry, 2 Quatro Queijos, 2 Carne Siria", preco: 59.92, itens: [], imagem: "images/combos/placeholder.jpg" },
  { id: 3, nome: "Combo 3", descricao: "2 Bacon, 2 Carne Cheddar, 2 Pizza, 2 Mexicana", preco: 59.92, itens: [], imagem: "images/combos/placeholder.jpg" },
  { id: 4, nome: "Combo 4", descricao: "2 Cinco Queijos, 2 Calabresa e Catupiry, 2 Brocolis e Milho, 2 Lombo", preco: 59.92, itens: [], imagem: "images/combos/placeholder.jpg" },
  { id: 5, nome: "Combo 5", descricao: "1 Sensação, 1 Chocolate ao Leite, 1 Confete, 1 Chocolate Branco, Leite Ninho e Morango", preco: 29.96, itens: [], imagem: "images/combos/placeholder.jpg" },
  { id: 6, nome: "Combo Triplo", descricao: "1 Calabresa, 1 Carne Siria e 1 Pizza", preco: 22.47, itens: [], imagem: "images/combos/placeholder.jpg" },
  { id: 7, nome: "Combo Supremo", descricao: "3 Calabresa e Bacon, 2 Carne Síria, 2 Frango e Catupiry", preco: 52.43, itens: [], imagem: "images/combos/placeholder.jpg" },
];

// --- ESFIHAS TRADICIONAIS SALGADAS ---
export const esfihasTradicionais: MenuItem[] = [
    { id: 101, nome: "4 Queijos", descricao: "Mussarela, provolone, parmesão e Catupiry.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 102, nome: "5 Queijos", descricao: "Mussarela, provolone, parmesão, Catupiry e cheddar.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 103, nome: "Atum", descricao: "Mussarela, atum, tomate, cebola, azeitona e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 104, nome: "Bacon", descricao: "Mussarela, bacon e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 105, nome: "Bacon e Abacaxi", descricao: "Mussarel, bacon e abacaxi.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 106, nome: "Bacon e Milho", descricao: "Mussarela, bacon, milho e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 107, nome: "Bacon e Ovos", descricao: "Mussarela, bacon, ovos e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 108, nome: "Cachorro Quente", descricao: "Mussarela, Salsicha ao molho de tomate e batata palha", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 109, nome: "Brócolis e Bacon", descricao: "Mussarela, brócolis, bacon e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 110, nome: "Brócolis e Milho", descricao: "Mussarela, brócolis, milho e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 111, nome: "Calabresa", descricao: "Mussarela, calabresa e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 112, nome: "Calabresa e Bacon", descricao: "Mussarela, calabresa, bacon e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 113, nome: "Calabresa e Catupiry", descricao: "Mussarela, calabresa, Catupiry e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 114, nome: "Calabresa e Cebola", descricao: "Mussarela, calabresa, cebola e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 115, nome: "Calabresa e Cheddar", descricao: "Mussarela, calabresa, cheddar e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 116, nome: "Carne e Catupiry", descricao: "Mussarela, carne e Catupiry.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 117, nome: "Carne e Cheddar", descricao: "Mussarela, carne e cheddar.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 118, nome: "Carne Síria", descricao: "Carne (Tempero: cebola, tomate, limão) - Não É Possivel Retirar Os Ingredientes Do Tempero", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 119, nome: "Crocante", descricao: "Mussarela, Catupiry e batata palha.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 120, nome: "Frango e Bacon", descricao: "Mussarela, frango, bacon e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 121, nome: "Frango e Catupiry", descricao: "Mussarela, frango, Catupiry e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 122, nome: "Frango e Cheddar", descricao: "Mussarela, frango, cheddar e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 123, nome: "Frango e Milho", descricao: "Mussarela, frango, milho e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 124, nome: "Havaiana", descricao: "Mussarela, lombo e abacaxi.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 125, nome: "Lombo", descricao: "Mussarela, lombo e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 126, nome: "Marguerita", descricao: "Mussarela, tomate e manjericão.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 127, nome: "Mexicana", descricao: "Mussarela, bacon, milho, cebola, tomate, pimenta calabresa, pimentão e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 128, nome: "Milho", descricao: "Mussarela, milho e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 129, nome: "Palmito", descricao: "Mussarela, palmito e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 130, nome: "Pizza", descricao: "Mussarela, presunto, tomate e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 131, nome: "Portuguesa", descricao: "Mussarela, presunto, tomate, cebola, azeitona, ovo e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 132, nome: "Ricota", descricao: "Mussarela, ricota e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 133, nome: "Strogonoff", descricao: "Mussarela, carne e batata palha.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 134, nome: "Vegetariana", descricao: "Mussarela, palmito, tomate, milho, azeitona e orégano.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
];

// --- ESFIHAS PREMIUM SALGADAS ---
export const esfihasPremiumSalgadas: MenuItem[] = [
  { id: 201, nome: "Alcatra", descricao: "Mussarela e Alcatra.", preco: 10.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 202, nome: "Alcatra e Barbecue", descricao: "Mussarela, Alcatra e Molho Barbecue.", preco: 10.99, imagem: "images/esfihas/placeholder.jpg" },
  { id: 203, nome: "Camarão", descricao: "Mussarela e Camarão ao molho de tomate caseiro.", preco: 11.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 204, nome: "Carne Seca", descricao: "Mussarela, Carne Seca e Cebolinha.", preco: 11.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 205, nome: "Costela", descricao: "Mussarela, Costela e Cebolinha.", preco: 10.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 206, nome: "Nachos", descricao: "Mussarela, Carne Moida temperada com tomate, pimentão e pimenta e Doritos.", preco: 9.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 207, nome: "Frango e Cream Cheese", descricao: "Mussarela, frango e cream cheese.", preco: 9.49, imagem: "images/esfihas/placeholder.jpg" },
];

// --- ESFIHAS TRADICIONAIS DOCES ---
export const esfihasTradicionaisDoces: MenuItem[] = [
    { id: 301, nome: "Banana e Chocolate", descricao: "Mussarela, banana e chocolate ao leite.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 302, nome: "Banana, Doce de Leite e Canela", descricao: "Mussarela, banana, doce de leite e canela.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 303, nome: "Brigadeiro", descricao: "Mussarela, chocolate ao leite e granulado.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 304, nome: "Chocolate", descricao: "Mussarela e chocolate ao leite.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 305, nome: "Chocolate Branco", descricao: "Mussarela e chocolate branco.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 306, nome: "Chocolate Branco e Confete", descricao: "Mussarela, Chocolate Branco e Confete.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 307, nome: "Chocolate Branco e Paçoca", descricao: "Mussarela, chocolate branco e paçoca.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 308, nome: "Chocolate Branco, Leite Ninho e Morango", descricao: "Mussarela, chocolate branco, leite Ninho e morango.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 309, nome: "Chocolate e Paçoca", descricao: "Mussarela, chocolate ao leite e paçoca.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 310, nome: "Confete", descricao: "Mussarela e chocolate ao leite.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 311, nome: "Prestígio", descricao: "Mussarela, chocolate ao leite e coco.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 312, nome: "Sedução", descricao: "Mussarela, chocolate branco e morango.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
    { id: 313, nome: "Sensação", descricao: "Mussarela, chocolate ao leite, morango e leite condensado.", preco: 7.49, imagem: "images/esfihas/placeholder.jpg" },
];

// --- ESFIHAS PREMIUM DOCES ---
export const esfihasPremiumDoces: MenuItem[] = [
  { id: 401, nome: "Bombom de Uva", descricao: "Mussarela, Chocolate Forneavel ao Leite e Uva", preco: 9.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 402, nome: "Nutella", descricao: "Mussarela e Nutella", preco: 12.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 403, nome: "Leite Ninho", descricao: "Mussarela, Recheio Forneavel de Leite Ninho, Leite Ninho em Pó e Morangos.", preco: 9.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 404, nome: "Surpresa de Ninho", descricao: "Mussarela, Recheio Forneavel de Leite Ninho, Uva e Chocolate Forneavel ao Leite.", preco: 9.49, imagem: "images/esfihas/placeholder.jpg" },
  { id: 405, nome: "Cream Cheese e Goiabada", descricao: "Mussarela, Cream Cheese e Goiabada.", preco: 8.49, imagem: "images/esfihas/placeholder.jpg" },
];

// --- BEBIDAS ---
export const bebidas: MenuItem[] = [
    { id: 501, nome: "Agua Mineral com Gás Cristal Mina 500ml", descricao: "Embalagem 1un", preco: 4.90, imagem: "images/bebidas/placeholder.jpg" },
    { id: 502, nome: "Coca-Cola 600ml", descricao: "Garrafa 600ml", preco: 9.00, imagem: "images/bebidas/placeholder.jpg" },
    { id: 503, nome: "Coca-Cola Garrafa 2l", descricao: "Garrafa 2l", preco: 16.00, imagem: "images/bebidas/placeholder.jpg" },
    { id: 504, nome: "Refrigerante Guaraná 350ml Zero Antarctica", descricao: "Lata 350ml", preco: 6.50, imagem: "images/bebidas/placeholder.jpg" },
    { id: 505, nome: "Refrigerante Guaraná Antarctica Garrafa 1l", descricao: "Garrafa 1l", preco: 11.00, imagem: "images/bebidas/placeholder.jpg" },
    { id: 506, nome: "Sprite Original 2l", descricao: "Garrafa 2l", preco: 12.99, imagem: "images/bebidas/placeholder.jpg" },
    { id: 507, nome: "Água Mineral Sem Gás Crystal 500ml", descricao: "Garrafa 500ml", preco: 3.90, imagem: "images/bebidas/placeholder.jpg" },
    { id: 508, nome: "Coca-Cola Original 350ml", descricao: "Lata 350ml", preco: 5.99, imagem: "images/bebidas/placeholder.jpg" },
    { id: 509, nome: "Refrigerante Zero Açúcar Coca-Cola 2l", descricao: "Garrafa 2l", preco: 16.00, imagem: "images/bebidas/placeholder.jpg" },
    { id: 510, nome: "Coca Cola Zero Lata 350ml", descricao: "Lata 350ml", preco: 6.50, imagem: "images/bebidas/placeholder.jpg" },
    { id: 511, nome: "Refrigerante Guaraná Antarctica 2l", descricao: "Garrafa 2l", preco: 14.90, imagem: "images/bebidas/placeholder.jpg" },
];
