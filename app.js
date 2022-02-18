// add eventhandler in submit btn and get data from input to another place
document.getElementById('detail-submit-btn').addEventListener('click', function () {
    const inputField = document.getElementById('buyer-details-input');
    const inputValue = inputField.value;
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = inputValue;
    inputField.value = '';
})
document.getElementById('add-details-btn').addEventListener('click', function () {
    // get input field
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');
    const infoTable = document.getElementById('info-table');

    // Error handling
    if (itemName.value == '' || itemPrice.value < 0 || itemPrice.value == '' || itemQuantity.value < 0 || itemQuantity.value == '') {
        itemName.value = '';
        itemPrice.value = '';
        itemQuantity.value = '';
        return
    }

    const total = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);

    // create dynamic element with js
    let tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    // create a dynamic class with js
    td3.classList.add('item-total');

    // set input value of new element
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = total;

    // appendChild in to tr
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // appendchild into parentchild
    infoTable.appendChild(tr);
    // clear input field
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
    // call function
    totalCalculation();

})
//getting all calculation of price create a function
function totalCalculation() {
    const displaySubTotal = calculateSubTotal();
    document.getElementById('sub-total').innerText = displaySubTotal;
    const tax = displaySubTotal * .2;
    document.getElementById('tax').innerText = tax;
    const grandTotal = displaySubTotal + tax;
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('grand-total-2').innerText = grandTotal;

}
//getting subtotal create a function which call in main function
function calculateSubTotal() {
    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total');
    for (const element of cost) {
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}
