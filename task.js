const cartItems = document.getElementById('cartItems');
const totalElement = document.getElementById('total');
const emptyMessage = document.createElement('div');
emptyMessage.textContent = 'Cart is empty';
emptyMessage.style.display = 'none'; 
emptyMessage.style.fontWeight = 'bold'; 
emptyMessage.style.fontSize = '18px'; 
emptyMessage.style.color = 'red'; 
emptyMessage.style.textAlign='center';
cartItems.parentNode.insertBefore(emptyMessage, cartItems); 

function updateTotal() {
    let total = 0;
    const items = cartItems.getElementsByClassName('cart-item');

   
    if (items.length === 0) {
        totalElement.textContent = 'Total: $0.00'; 
        emptyMessage.style.display = 'block'; 
        return; 
    } else {
        emptyMessage.style.display = 'none'; 
    }

    for (let item of items) {
        const price = parseFloat(item.querySelector('p').textContent.replace('Price: $', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);

        
        if (quantity > 0) {
            total += price * quantity;
        }
    }

    totalElement.textContent = `Total: $${total.toFixed(1)}`; 
    
}


cartItems.addEventListener('click', function(event) {
    const item = event.target.closest('.cart-item');
    if (!item) return;

    if (event.target.classList.contains('increase')) {
        const quantityElement = item.querySelector('.quantity');
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1; 
    } else if (event.target.classList.contains('decrease')) {
        const quantityElement = item.querySelector('.quantity');
        const currentQuantity = parseInt(quantityElement.textContent);
        
      
        if (currentQuantity > 0) {
            quantityElement.textContent = currentQuantity - 1;
             
        }
    } else if (event.target.classList.contains('remove')) {
        item.remove(); 
    }
    
    updateTotal(); 
});


updateTotal();
