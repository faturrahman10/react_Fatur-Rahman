document.addEventListener("DOMContentLoaded", function () {
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const selectButtonInput = document.getElementById("selectOption");
    const submitButton = document.getElementById("submitButton");
    const tableBody = document.getElementById("productTableBody");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        const productName = productNameInput.value;
        const productPrice = productPriceInput.value;
        const selectButton = selectButtonInput.value;

        if (productName.length > 25) {
            alert("Product Name must not exceed 25 characters.");
            return;
        }

        if (/[@#{}]/.test(productName)) {
            alert("Name must not contain symbols.");
            return;
        }

        if (productPrice === "") {
            alert("The Product Price field must be filled in.");
            return;
        }

        if (selectButton === "") {
            alert("The Product Category field must be filled in.");
            return;
        }

        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = productName;
        cell2.textContent = selectButton;
        cell3.textContent = productPrice;

        productNameInput.value = "";
        productPriceInput.value = "";
        selectButtonInput.value = "";
    });
});
