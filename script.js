let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      product.style.display = title.includes(filter) ? 'block' : 'none';
    });
  });
});
