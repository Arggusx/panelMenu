import { Burger, Beverage } from "./types/types"

// Artesanal Burgers
export const burgers: Burger[] = [
  {
    id: 'burger-1',
    name: "Let's Go Simples",
    description: 'Burger artesanal 150g, queijo cheddar, presunto e salada.',
    valor: '16,49',
    price: 16.49,
    image: './img/Burger/bg-2 1.png'
  },
  {
    id: 'burger-2',
    name: "Let's Go Eggs",
    description: 'Burger artesanal 150g, ovo, queijo cheddar, presunto e salada.',
    valor: '17,49',
    price: 17.49,
    image: './img/Burger/bg-2 1.png'
  },
  {
    id: 'burger-3',
    name: "Let's Go Bacon",
    description: 'Burger artesanal 150g, chips de bacon, queijo cheddar, presunto e salada.',
    valor: '24,49',
    price: 24.49,
    image: './img/Burger/bg-2 1.png'
  },
  {
    id: 'burger-4',
    name: "Let's Go Duplo",
    description: 'Burger artesanal 150g (2), queijo cheddar (2), presunto (2), cebola caramelizada e salada.',
    valor: '28,99',
    price: 28.99,
    image: './img/Burger/bg-2 1.png'
  }
];

// Traditional Burgers
export const traditionalBurgers: Burger[] = [
  {
    id: 'trad-burger-1',
    name: "Let's Go Calabresa",
    description: 'Calabresa fatiada 170g, ovo, queijo cheddar, presunto e salada.',
    valor: '16,49',
    price: 16.49,
    image: './img/Burger/bg-2 1.png'
  },
  {
    id: 'trad-burger-2',
    name: "Let's Go Frango",
    description: 'Frango em cubos 170g, ovo, queijo cheddar, presunto e salada.',
    valor: '16,49',
    price: 16.49,
    image: './img/Burger/LetsFrango 1.png'
  },
  {
    id: 'trad-burger-3',
    name: "Let's Go Calafrango",
    description: 'Calabresa fatiada 85g, frango em cubos 85g, ovo, queijo cheddar, presunto e salada.',
    valor: '17,49',
    price: 17.49,
    image: './img/Burger/LetsCalafrango 1.png'
  },
  {
    id: 'trad-burger-4',
    name: "Let's Go Carne do Sol",
    description: 'Carne do sol em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.',
    valor: '23,99',
    price: 23.99,
    image: './img/Burger/bg-2 1.png'
  },
  {
    id: 'trad-burger-5',
    name: "Let's Go Alcatra",
    description: 'Carne de alcatra em cubos 190g, ovo, queijo cheddar, cebola caramelizada, presunto e salada.',
    valor: '26,49',
    price: 26.49,
    image: './img/Burger/LetsAlcatra 1.png'
  }
];

// Soft Drinks
export const beverages: Beverage[] = [
  {
    id: 'beverage-1',
    name: 'Coca-Cola 1L',
    valor: '7,50',
    price: 7.50,
    image: './img/Refris/coca1l-2.png'
  },
  {
    id: 'beverage-2',
    name: 'Guaraná 1L',
    valor: '6,00',
    price: 6.00,
    image: './img/Refris/guarana1l.png'
  },
  {
    id: 'beverage-3',
    name: 'Coca-Cola 350ml',
    valor: '5,00',
    price: 5.00,
    image: './img/Refris/refri-1.png'
  },
  {
    id: 'beverage-4',
    name: 'Guaraná 350ml',
    valor: '5,00',
    price: 5.00,
    image: './img/Refris/refri-2.png'
  }
];

// Juices
export const juices: Beverage[] = [
  {
    id: 'juice-1',
    name: 'Acerola 400ml C/Água',
    description: 'Polpa de Fruta',
    valor: '5,00',
    price: 5.00,
    image: './img/Sucos/sucoAcerola.png'
  },
  {
    id: 'juice-2',
    name: 'Acerola 400ml C/Leite',
    description: 'Polpa de Fruta',
    valor: '6,00',
    price: 6.00,
    image: './img/Sucos/sucoAcerola.png'
  },
  {
    id: 'juice-3',
    name: 'Goiaba 400ml C/Água',
    description: 'Polpa de Fruta',
    valor: '5,00',
    price: 5.00,
    image: './img/Sucos/sucoGoiaba.png'
  },
  {
    id: 'juice-4',
    name: 'Goiaba 400ml C/Leite',
    description: 'Polpa de Fruta',
    valor: '6,00',
    price: 6.00,
    image: './img/Sucos/sucoGoiaba.png'
  },
  {
    id: 'juice-5',
    name: 'Graviola 400ml C/Água',
    description: 'Polpa de Fruta',
    valor: '5,00',
    price: 5.00,
    image: './img/Sucos/sucoGraviola.png'
  },
  {
    id: 'juice-6',
    name: 'Graviola 400ml C/Leite',
    description: 'Polpa de Fruta',
    valor: '6,00',
    price: 6.00,
    image: './img/Sucos/sucoGraviola.png'
  },
  {
    id: 'juice-7',
    name: 'Maracujá 400ml C/Água',
    description: 'Polpa de Fruta',
    valor: '5,00',
    price: 5.00,
    image: './img/Sucos/sucoMaracuja.png'
  },
  {
    id: 'juice-8',
    name: 'Maracujá 400ml C/Leite',
    description: 'Polpa de Fruta',
    valor: '6,00',
    price: 6.00,
    image: './img/Sucos/sucoMaracuja.png'
  },
  {
    id: 'juice-9',
    name: 'Caju 400ml C/Água',
    description: 'Polpa de Fruta',
    valor: '5,00',
    price: 5.00,
    image: './img/Sucos/sucoCaju.png'
  },
  {
    id: 'juice-10',
    name: 'Caju 400ml C/Leite',
    description: 'Polpa de Fruta',
    valor: '6,00',
    price: 6.00,
    image: './img/Sucos/sucoCaju.png'
  },
];

// Desserts and Others
export const desserts: Beverage[] = [
  {
    id: 'dessert-1',
    name: 'Água Mineral S/Gás',
    valor: '2,00',
    price: 2.00,
    image: './img/Sobremesa/aguaMineral-3.png'
  },
  {
    id: 'dessert-2',
    name: 'Água Mineral C/Gás',
    valor: '3,00',
    price: 3.00,
    image: './img/Sobremesa/aguaMineral-3.png'
  }
];