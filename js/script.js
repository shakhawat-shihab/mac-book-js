/* choosing components for computer */
function componentSelection(name, price) {
    document.getElementById(name).innerText = price;
}

/*calculate the sum of all the price*/
function calculateSubtotal() {
    const basePrice = parseInt(document.getElementById('base-price-id').innerText);
    const memoryPrice = parseInt(document.getElementById('extra-memory-id').innerText);
    const storagePrice = parseInt(document.getElementById('extra-storage-id').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-id').innerText);
    const subtotal = basePrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('subtotal-id').innerText = subtotal;
    document.getElementById('total-id').innerText = subtotal;
}

/*click event for memory select*/
//8 GB clicked
document.getElementById('btn-8gb').addEventListener('click', function () {
    var price = componentSelection('extra-memory-id', 0);
    calculateSubtotal();
});
//16 GB clicked
document.getElementById('btn-16gb').addEventListener('click', function () {
    var price = componentSelection('extra-memory-id', 180);
    calculateSubtotal();
});

/*click event for storage select*/
// 256 GB clicked
document.getElementById('btn-256gb').addEventListener('click', function () {
    var price = componentSelection('extra-storage-id', 0);
    calculateSubtotal();
});
// 512 GB clicked
document.getElementById('btn-512gb').addEventListener('click', function () {
    var price = componentSelection('extra-storage-id', 100);
    calculateSubtotal();
});
// 1 TB clicked
document.getElementById('btn-1tb').addEventListener('click', function () {
    var price = componentSelection('extra-storage-id', 180);
    calculateSubtotal();
});

/*click event for delivery select*/
//Free Delivery
document.getElementById('btn-delv1').addEventListener('click', function () {
    var price = componentSelection('delivery-id', 0);
    calculateSubtotal();
});
//Paid Delivery
document.getElementById('btn-delv2').addEventListener('click', function () {
    var price = componentSelection('delivery-id', 20);
    calculateSubtotal();
});

/*promo code and taking 20% discount*/
document.getElementById('promo-submit-id').addEventListener('click', function () {
    var promoCode = document.getElementById('promo-input-id').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        var subTotal = parseInt(document.getElementById('subtotal-id').innerText);
        var totalAmount = subTotal - subTotal * 0.20;
        document.getElementById('total-id').innerText = totalAmount.toFixed(2);
        //clear the text of promocode input
        document.getElementById('promo-input-id').value = '';
    }
});