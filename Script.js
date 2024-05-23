function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName === '' || itemQuantity === '') {
        alert('Por favor, preencha todos os campos');
        return;
    }

    const itemList = document.getElementById('item-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        ${itemName} - Quantidade: ${itemQuantity} 
        <button onclick="removeItem(this)">Remover</button>
    `;
    itemList.appendChild(listItem);

    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
