## 22 Introduction Restfull API

### Apa itu API?
API (Application Programming Interface) adalah kumpulan aturan dan protokol yang memungkinkan berbagai komponen perangkat lunak untuk berkomunikasi satu sama lain. Ini menyediakan cara untuk mengakses atau berinteraksi dengan layanan, data, atau fungsionalitas yang disediakan oleh aplikasi atau sistem lain, seringkali melalui permintaan HTTP.

### Bagaimana API bekerja antara client dan server 
- <b>HTTP Request Method</b>: Client mengirimkan permintaan ke server menggunakan HTTP request method yang mengindikasikan jenis operasi yang akan dilakukan pada sumber daya, seperti GET (mendapatkan data), POST (mengirim data baru), PUT (memperbarui data), atau DELETE (menghapus data).

- <b>Permintaan (Request)</b>: Client (biasanya sebuah aplikasi atau situs web) mengirim permintaan ke server melalui HTTP. Permintaan ini dapat berupa permintaan untuk mendapatkan data, mengirim data, atau menjalankan fungsi tertentu.

- <b>Proses Server</b>: Server menerima permintaan, memprosesnya sesuai dengan permintaan tersebut, dan mengembalikan respons yang sesuai.

- <b>HTTP Response Kode</b>: Setelah memproses permintaan, server mengirimkan respons kepada client, yang berisi HTTP response code untuk mengindikasikan hasil dari permintaan tersebut. Kode respons ini meliputi 200 OK (permintaan berhasil), 201 Created (sumber daya baru dibuat), 204 No Content (permintaan berhasil tanpa konten), 400 Bad Request (permintaan tidak valid), 401 Unauthorized (permintaan memerlukan autentikasi), 404 Not Found (sumber daya tidak ditemukan), dan lainnya.

- <b>Respon (Response)</b>: Client menerima respon dari server dan melakukan pemrosesan sesuai dengan kontennya, seperti menampilkan data kepada pengguna akhir atau menggunakan informasi yang diterima.

### HTTP Request Method
HTTP Request Method adalah cara yang digunakan oleh client untuk berkomunikasi dengan server dan mengindikasikan jenis operasi yang akan dilakukan pada sumber daya. Beberapa HTTP Request Methods yang umum digunakan dalam penggunaan API RESTful adalah:

- <b>GET</b>: Digunakan untuk mendapatkan data dari server. Ini adalah operasi baca.

- <b>POST</b>: Digunakan untuk mengirim data baru ke server. Ini adalah operasi tambah.

- <b>PUT</b>: Digunakan untuk memperbarui data yang ada di server. Ini adalah operasi ubah.

- <b>DELETE</b>: Digunakan untuk menghapus data dari server. Ini adalah operasi hapus.

### HTTP Response Kode
HTTP Response Code adalah kode numerik yang dikirim oleh server ke client untuk mengindikasikan hasil dari permintaan yang dilakukan oleh client. Beberapa HTTP Response Codes yang umum digunakan dalam respons API RESTful adalah:

- <b>200 OK</b>: Permintaan berhasil, dan server mengembalikan respons yang benar.

- <b>201 Created</b>: Permintaan berhasil, dan server telah membuat sumber daya baru.

- <b>204 No Content</b>: Permintaan berhasil, tetapi server tidak mengirimkan konten dalam respons.

- <b>400 Bad Request</b>: Permintaan tidak valid atau terdapat kesalahan dalam sintaks permintaan.

- <b>401 Unauthorized</b>: Permintaan memerlukan autentikasi atau token yang valid.

- <b>404 Not Found</b>: Sumber daya yang diminta tidak ditemukan di server.

- <>500 Internal Server Error</b>: Terjadi kesalahan internal pada server.

HTTP Response Codes membantu client memahami hasil dari permintaan yang telah dikirimkan dan mengambil tindakan yang sesuai berdasarkan respons tersebut.