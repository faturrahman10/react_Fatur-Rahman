document.addEventListener("DOMContentLoaded", function () {
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const submitButton = document.getElementById("submitButton");
    const selectOptionInput = document.getElementById("selectOption");
    const fileInput = document.getElementById("fileInput");

    submitButton.addEventListener("click", function (e) {
        const productName = productNameInput.value;
        if (productName.length > 25) {
            alert("Product Name must not exceed 25 characters.");
            e.preventDefault();
            return false;
        }

        if (/[@#{}]/.test(productName)) {
            alert("Name must not contain symbols.");
            e.preventDefault();
            return false;
        }

        const productPrice = productPriceInput.value;
        if (productPrice === "") {
            alert("The Product Price field must be filled in.");
            e.preventDefault();
            return false;
        }

        const selectOption = selectOptionInput.value;
        if (selectOption === "") {
            alert("The Product Category field must be filled in.");
            e.preventDefault();
            return false;
        }

        const file = fileInput.value;
        if (file === "") {
            alert("The Product File field must be filled in.");
            e.preventDefault();
            return false;
        }
    });
});
