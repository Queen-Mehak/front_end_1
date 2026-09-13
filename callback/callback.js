const output = document.getElementById("orderStatus");

function show(message) {
    output.innerHTML += `<p>${message}</p>`;
}
function orderPlaced(nextTask) {
    setTimeout(() => {
        show("Order placed successfully");
        nextTask();
    }, 2000);
}
function makePayment(nextTask) {
    setTimeout(() => {
        show("Payment completed");
        nextTask();
    }, 2000);

}

function updateStock(nextTask) {
    setTimeout(() => {
        show("Stock updated");
        nextTask();
    }, 2000);
}

function notifyCustomer(nextTask) {
    setTimeout(() => {
        show("Customer notified");
        nextTask();
    }, 2000);
}

orderPlaced(() => {
    makePayment(() => {
        updateStock(() => {
            notifyCustomer(() => {
                show("✨Order process completed✨");
                show("🤗Thank you for shopping with us! 🛒");
            });
        });
    });
});
