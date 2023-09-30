## 18 Global State Management

### React Redux
React Redux adalah pustaka yang digunakan untuk mengelola state global dalam aplikasi React. Ini dibangun di atas Redux, sebuah manajer state global yang terpisah.
- <b>State Global</b>: React Redux memungkinkan kita untuk menyimpan state aplikasi secara global, sehingga dapat diakses dan dikelola oleh komponen-komponen React di seluruh aplikasi.
- <b>Store</b>: Store adalah tempat di mana state global disimpan. Redux menyediakan store untuk menyimpan data aplikasi.
- <b>Actions dan Reducers</b>: kita mendefinisikan actions untuk mengganti state dan reducers untuk mengelola perubahan tersebut. Actions menjelaskan apa yang terjadi, dan reducers menentukan bagaimana state berubah.
- <b>Connect</b>: Dalam komponen React, kita dapat menggunakan fungsi connect untuk menghubungkan komponen dengan store Redux, sehingga komponen dapat mengakses dan mengubah state global.

### Global State
Global State adalah konsep dalam pengembangan aplikasi di mana data dapat diakses dan dimutakhirkan dari berbagai komponen tanpa harus melewatkan prop di antara mereka. 
- <b>State Bersama</b>: Global state memungkinkan berbagi data dan informasi di seluruh komponen dalam aplikasi, sehingga komponen-komponen tersebut dapat berinteraksi dan berbagi informasi tanpa perlu berkomunikasi langsung satu sama lain.

- <b>Kepatuhan Data</b>: Memastikan data yang sama digunakan di berbagai bagian aplikasi dapat membantu dalam menjaga konsistensi dan integritas data.

- <b>Pengurangan Kompleksitas</b>: Dengan menggantikan beberapa state lokal dengan state global, kita dapat mengurangi kompleksitas dan memudahkan pemeliharaan aplikasi.

<b>React Redux</b> dan <b>global state</b> sangat berguna dalam mengelola keadaan kompleks dalam aplikasi React yang besar. Dengan menggunakan Redux dan React Redux, kita dapat memisahkan logika state dari komponen, sehingga memudahkan pengembangan dan pemeliharaan aplikasi kita.