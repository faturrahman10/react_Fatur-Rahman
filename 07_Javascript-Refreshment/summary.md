## 07 Javascript Refreshment

### Tipe Data

JavaScript memiliki beberapa tipe data dasar, termasuk:

-   String: Digunakan untuk merepresentasikan teks.
-   Number: Digunakan untuk merepresentasikan angka, baik bulat maupun pecahan.
-   Boolean: Hanya memiliki dua nilai, yaitu true atau false.
-   Array: Digunakan untuk menyimpan sekumpulan nilai dalam satu variabel.
-   Object: Digunakan untuk menyimpan data dalam bentuk pasangan "key-value".
-   Undefined: Digunakan untuk variabel yang belum diinisialisasi.
-   Null: Digunakan untuk mengindikasikan ketiadaan nilai.

### Var, Let, dan Const

-   var: Variabel yang dideklarasikan dengan var memiliki cakupan (scope) yang lebih luas dan rentan terhadap hoisting. Tidak direkomendasikan untuk digunakan dalam kode modern.
-   let: Variabel yang dideklarasikan dengan let memiliki cakupan blok dan tidak mengalami hoisting. Ini adalah pilihan yang lebih baik daripada var untuk membuat variabel lokal.
-   const: Variabel yang dideklarasikan dengan const juga memiliki cakupan blok dan tidak dapat diubah setelah diinisialisasi. Biasanya digunakan untuk variabel yang nilainya tidak akan berubah.

### Assignment Operator (=), Comparison Operators (==, ===)

-   Operator =: Digunakan untuk menginisialisasi atau menetapkan nilai variabel. Contohnya: let angka = 10;
-   Operator ==: Digunakan untuk membandingkan nilai dua ekspresi dengan mengabaikan tipe data. Jika nilai-nilai sama, operator ini mengembalikan true. Contohnya: 10 == "10" // true
-   Operator ===: Digunakan untuk membandingkan nilai dua ekspresi dengan memperhitungkan tipe data. Operator ini mengembalikan true hanya jika nilai dan tipe data keduanya sama. Contohnya: 10 === "10" // false

Perbedaan utama antara == dan === adalah bahwa == hanya membandingkan nilai tanpa memperhatikan tipe data, sedangkan === membandingkan nilai dan tipe data secara ketat. Pada umumnya, disarankan untuk selalu menggunakan === karena ini meminimalkan potensi kesalahan perbandingan yang tidak diinginkan akibat perbedaan tipe data.

## Logika AND (&&) dan OR (||)

-   Operator && digunakan untuk mengevaluasi dua ekspresi dan mengembalikan true jika keduanya benar.
-   Operator || digunakan untuk mengevaluasi dua ekspresi dan mengembalikan true jika salah satu atau kedua ekspresi benar.

## Function

-   Fungsi adalah blok kode yang dapat dipanggil berulang kali. Dalam JavaScript, fungsi dideklarasikan dengan cara berikut:
-   contoh :

#### function namaFungsi(parameter1, parameter2) {

#### // Kode fungsi

#### return hasil;

#### }

## Asynchronous (Async) Programming

JavaScript mendukung pemrograman asinkron melalui berbagai mekanisme, seperti:

-   Callbacks: Memanggil fungsi lain sebagai argumen.
-   Promises: Mengelola operasi asinkron dengan lebih terstruktur.
-   Async/Await: Menggunakan kata kunci async dan await untuk menulis kode asinkron yang lebih mudah dibaca.
