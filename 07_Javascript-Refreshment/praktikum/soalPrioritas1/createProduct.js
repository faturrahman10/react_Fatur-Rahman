document.addEventListener("DOMContentLoaded", function () {
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPriceInput");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const productName = productNameInput.value;
        if (productName.length > 25) {
            alert("Product Name must not exceed 25 characters.");
            return false;
        }

        const productPrice = productPriceInput.value;
        if (productPrice === "") {
            alert("Please enter a valid Product Price.");
            return false;
        }
    });
});
