const products = [
    { name: "Smartphone", category: "electronics" },
    { name: "Laptop", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "Shirt", category: "fashion" },
    { name: "Jeans", category: "fashion" },
    { name: "Dress", category: "fashion" },
    { name: "Sofa", category: "home" },
    { name: "Table", category: "home" },
    { name: "Chair", category: "home" }
];

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

// Function to display products
function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Function to filter products based on search and category
function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Event listeners
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// Initial display
displayProducts(products);
