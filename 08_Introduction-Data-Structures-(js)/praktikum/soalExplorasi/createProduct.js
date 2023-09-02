document.addEventListener("DOMContentLoaded", function () {
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const selectButtonInput = document.getElementById("selectOption");
    const submitButton = document.getElementById("submitButton");
    const tableBody = document.getElementById("productTableBody");

    // Array untuk menyimpan data produk
    const products = [];

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Validasi input
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

        // Tambahkan data produk ke dalam array
        const product = {
            name: productName,
            category: selectButton,
            price: productPrice,
        };

        products.push(product);

        // Bersihkan input
        productNameInput.value = "";
        productPriceInput.value = "";
        selectButtonInput.value = "";

        // Perbarui tabel
        updateTable();
    });

    function updateTable() {
        // Hapus semua baris tabel
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }

        // Tambahkan data produk ke dalam tabel
        products.forEach(function (product, index) {
            const row = tableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);

            cell1.textContent = product.name;
            cell2.textContent = product.category;
            cell3.textContent = product.price;

            // Tombol Delete
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("btn", "btn-danger", "btn-md", "me-3");
            deleteButton.addEventListener("click", function () {
                deleteProduct(index);
            });

            // Tombol Update
            const updateButton = document.createElement("button");
            updateButton.textContent = "Update";
            updateButton.classList.add("btn", "btn-primary", "btn-md");
            updateButton.addEventListener("click", function () {
                updateProduct(index);
            });

            cell4.appendChild(deleteButton);
            cell4.appendChild(updateButton);
        });
    }

    function deleteProduct(index) {
        // Hapus produk dari array
        products.splice(index, 1);
        // Perbarui tabel
        updateTable();
    }

    function updateProduct(index) {
        // Isi form dengan data produk yang akan diupdate
        const product = products[index];
        productNameInput.value = product.name;
        productPriceInput.value = product.price;
        selectButtonInput.value = product.category;

        // Hapus produk dari array
        products.splice(index, 1);

        // Perbarui tabel
        updateTable();
    }
});
