

// Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto

const arrayProducts = [
    { name: "leite", category: "laticínio" },
    { name: "pão", category: "padaria" },
    { name: "queijo", category: "laticínio" },
    { name: "manteiga", category: "laticínio" },
    { name: "café", category: "bebida" }
];
const formattedProducts = arrayProducts.map((product) => `${product.name} - ${product.category}`);

console.log("Produtos formatados:", formattedProducts);




// Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)

const arrayProducts2 = [
    { name: "leite", preco: 5.50 },
    { name: "pão", preco: 1.00 },
    { name: "queijo", preco: 5.49},
    { name: "manteiga", preco: 11.6 },
    { name: "café", preco: 35.50 }
];

const productsWithTax = arrayProducts2.map((product) => ({
    ...product,     
    preco: (product.preco * 1.15).toFixed(2) 
}));

console.log("Produtos com impostos:", productsWithTax);


// Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
let totalValue = 0;
arrayProducts2.forEach((product) => {
    totalValue += product.preco*1.15;
});
console.log("Valor total dos produtos:", totalValue.toFixed(2));