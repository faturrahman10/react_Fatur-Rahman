## React Form

### 1. Basic Form
Basic Form dalam React adalah cara untuk mengumpulkan dan mengelola input data dari pengguna. Form biasanya terdiri dari elemen-elemen seperti input teks, check box, radio button, dan lainnya. Dalam React, kita dapat membuat formulir dengan menggunakan elemen HTML yang umum digunakan.

### 2. Controlled Components
Controlled Components adalah komponen dalam React yang nilainya dikendalikan sepenuhnya oleh state dalam komponen. Setiap perubahan dalam elemen input akan menciptakan pembaruan state yang akan memperbarui tampilan. Ini memungkinkan kita untuk mengontrol nilai dan perilaku elemen input dengan tepat.

### 3. Uncontrolled Components
Uncontrolled Components adalah komponen dalam React yang nilainya tidak sepenuhnya dikendalikan oleh React state. Nilai elemen input disimpan dalam DOM, dan kita mengaksesnya dengan referensi (ref) ketika diperlukan. Uncontrolled components sering digunakan untuk interaksi dengan library atau kode luar yang tidak sepenuhnya terintegrasi dengan React.

### 4. Controlled vs. Uncontrolled Components
- Controlled Components: Memiliki kontrol penuh atas nilai elemen input dengan menggunakan state React. Ini berguna untuk validasi, pemantauan perubahan, dan manipulasi nilai input.

- Uncontrolled Components: Nilai elemen input dikelola oleh DOM, yang bisa berguna dalam beberapa situasi khusus, terutama saat berinteraksi dengan kode non-React atau ketika kita perlu mengakses elemen input secara langsung.

Pilihan antara controlled dan uncontrolled components akan tergantung pada kebutuhan proyek kita dan kenyamanan dalam penggunaannya. Controlled components lebih umum dalam pengembangan aplikasi React yang besar dan kompleks.