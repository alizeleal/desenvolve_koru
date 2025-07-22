// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
	{
		id: 1,
		name: "Smartphone",
		price: 500,
		stock: 10,
		category: "Eletrônicos",
		reviews: [4, 5, 3, 5, 4],
	},
	{
		id: 2,
		name: "Notebook",
		price: 1200,
		stock: 5,
		category: "Eletrônicos",
		reviews: [5, 4, 5, 5, 3],
	},
	{
		id: 3,
		name: "Camiseta",
		price: 25,
		stock: 20,
		category: "Vestuário",
		reviews: [4, 3, 4, 5],
	},
	{
		id: 4,
		name: "Cafeteira",
		price: 100,
		stock: 8,
		category: "Cozinha",
		reviews: [3, 2, 5, 4, 2],
	},
	{
		id: 5,
		name: "Fones de Ouvido",
		price: 80,
		stock: 15,
		category: "Eletrônicos",
		reviews: [4, 4, 5, 5, 5, 4],
	},
	{
		id: 6,
		name: "Calça Jeans",
		price: 45,
		stock: 0,
		category: "Vestuário",
		reviews: [4, 3, 4],
	},
	{
		id: 7,
		name: "Liquidificador",
		price: 70,
		stock: 3,
		category: "Cozinha",
		reviews: [3, 4, 3, 5],
	},
]


// Mostrar uma lista formatada de todos os produtos usando forEach
inventory.forEach(product => {
    console.log(`ID: ${product.id}, Nome: ${product.name}, Preço: R$${product.price}, Estoque: ${product.stock}, Categoria: ${product.category}`);
}); 

// Filtrar produtos que estão em estoque (stock > 0)
const inStockProducts = inventory.filter(product => product.stock > 0);
console.log("Produtos em estoque:", inStockProducts);

// Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const electronicsUnder1000 = inventory.filter(product => product.category === "Eletrônicos" && product.price < 1000);
console.log("Eletrônicos com preço abaixo de R$1000:", electronicsUnder1000)

// Verificar se há algum produto sem estoque
const hasOutOfStock = inventory.some(product => product.stock === 0);
console.log("Há produtos sem estoque:", hasOutOfStock);

// Verificar se todos os produtos têm pelo menos uma avaliação (review)
const allHaveReviews = inventory.every(product => product.reviews.length > 0);
console.log("Todos os produtos têm avaliações:", allHaveReviews);

// Encontrar o índice do produto "Cafeteira"
const coffeeMakerIndex = inventory.findIndex(product => product.name === "Cafeteira");
console.log("Índice do produto 'Cafeteira':", coffeeMakerIndex);

// Encontrar o primeiro produto da categoria "Vestuário"
const firstClothingProduct = inventory.find(product => product.category === "Vestuário");
console.log("Primeiro produto da categoria 'Vestuário':", firstClothingProduct);

// Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function searchProducts(term) {
    return inventory.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
}   
console.log("Busca por 'fone':", searchProducts("fone"));

// Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
inventory.forEach(product => {
    const totalReviews = product.reviews.reduce((acc, review) => acc + review, 0);
    product.averageRating = totalReviews / product.reviews.length;
});
console.log("Produtos com média de avaliações:", inventory);

// Encontrar o produto com a maior média de avaliações
const highestRatedProduct = inventory.reduce((highest, product) => {
    return (highest.averageRating || 0) > product.averageRating ? highest : product;
}, {});
console.log("Produto com a maior média de avaliações:", highestRatedProduct);
