## React Routing
### 1. React Routing
React Routing adalah teknik yang digunakan dalam aplikasi React untuk mengelola tampilan berbasis rute (URL). Ini memungkinkan kita untuk mengarahkan pengguna ke berbagai halaman atau tampilan dalam aplikasi Anda tanpa perlu me-refresh halaman sepenuhnya. React Router adalah pustaka populer yang digunakan untuk mengimplementasikan routing dalam aplikasi React.

- BrowserRouter: Digunakan untuk membungkus semua routes kita, sehingga setiap routes dapat mengakses object routes yang merepresentasikan dimana lokasi aplikasi kita sekarang
- Route: Mendefinisikan bagaimana komponen harus ditampilkan berdasarkan URL yang cocok.
- Routes: Memastikan bahwa hanya satu rute yang ditampilkan pada suatu waktu.
- Link: Membuat tautan antara komponen-komponen yang terkait dengan rute tertentu.

### 2. Hook Routing React
Hook Routing React adalah kumpulan hook (misalnya, useHistory, useLocation, useParams, useRouteMatch) yang disediakan oleh React Router untuk memberikan akses dan mengelola informasi tentang rute saat ini dan melakukan navigasi.

- useHistory: Hook ini memungkinkan Anda untuk mengakses objek history yang dapat digunakan untuk melakukan navigasi (pindah halaman) secara imperatif dalam komponen.

- useLocation: Hook ini memungkinkan Anda untuk mengakses objek location yang berisi informasi tentang URL saat ini, seperti path, search, dan state.

- useParams: Hook ini memungkinkan Anda untuk mengambil parameter yang dilewatkan ke rute. Ini sangat berguna ketika Anda ingin menangani parameter dinamis dalam URL.

- useRouteMatch: Hook ini digunakan untuk mencocokkan rute yang saat ini dilihat oleh komponen. Ini memungkinkan Anda untuk mengakses informasi tentang rute saat ini dan membuat logika yang berbeda berdasarkan rute tersebut.