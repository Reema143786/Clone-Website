document.getElementById('addItem').addEventListener('click', addItem);
document.getElementById('orderForm').addEventListener('input', calculateTotal);

function addItem() {
    const orderItems = document.getElementById('orderItems');
    const newItem = document.createElement('div');
    newItem.className = 'order-item';
    newItem.innerHTML = `<label for="itemDescription">Item Description:</label>
        <input type="text" class="itemDescription" required>
        
        <label for="quantity">Quantity:</label>
        <input type="number" class="quantity" value="1" min="1" required>
        
        <label for="price">Price:</label>
        <input type="number" class="price" value="0" min="0" step="0.01" required>
    `;
    orderItems.appendChild(newItem);
}

function calculateTotal() {
    const items = document.querySelectorAll('.order-item');
    let subtotal = 0;

    items.forEach(item => {
        const quantity = item.querySelector('.quantity').value;
        const price = item.querySelector('.price').value;
        subtotal += quantity * price;
    });

    const taxes = subtotal * 0.1;  // Assuming 10% tax
    const total = subtotal + taxes;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('taxes').textContent = taxes.toFixed(2);
    document.getElementById('totalAmount').textContent = total.toFixed(2);
}


