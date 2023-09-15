## 12 React Fundamental

### React Component
React adalah library JavaScript yang memungkinkan pembuatan antarmuka pengguna (UI) yang modular dan komponen-komponen yang dapat digunakan kembali. Komponen adalah bagian inti dalam pengembangan aplikasi React.
- <b>Komponen Fungsional</b>: Komponen fungsional adalah komponen yang berbasis pada fungsi JavaScript. Mereka hanya mengembalikan elemen React.
- <b>Komponen Berbasis Kelas</b>: Komponen berbasis kelas adalah komponen yang berinherit dari class React.Component dan memiliki state serta lifecycle methods.

### Struktur Folder
Struktur folder dalam proyek React adalah organisasi file dan direktori yang memudahkan pengembangan aplikasi. Struktur folder yang umum digunakan meliputi:
- <b>src</b>: Direktori utama yang berisi kode sumber aplikasi. <br><br>
Lalu didalam folder src, secara umum terdapat beberapa folder yaitu :
- <b>components</b>: Direktori untuk menyimpan komponen-komponen React.
- <b>pages</b>: Direktori untuk halaman-halaman aplikasi.
- <b>styles</b>: Direktori untuk file-file gaya (CSS atau preprosesor CSS).

### React Lyfecycle
react lifecycle componen react mengacu pada peristiwa-peristiwa yang terjadi selama komponen berinteraksi dengan DOM. Beberapa siklus hidup utama termasuk:
- <b>Mounting</b>: Tahap saat komponen pertama kali dimasukkan ke dalam DOM.
- <b>Updating</b>: Tahap ketika komponen diperbarui sebagai respons terhadap perubahan prop atau state.
- <b>Unmounting</b>: Tahap saat komponen dihapus dari DOM.
- <b>Error</b> Handling: Tahap saat kesalahan terjadi dalam komponen.

### Inline style
Styling inline adalah pendekatan dalam React di mana gaya CSS didefinisikan langsung di dalam prop style pada elemen React. Ini merupakan cara yang sederhana dalam memberikan tampilan pada element react, tetapi didalam aplikasi yang lebih kompleks, penggunaan pendekatan seperti css module, dan UI-framework lebih disarankan <br><br>
Berikut contoh penggunaan inline css pada salahsatu react component : <br>
```
const Button = () => {  
return (
    <div>
        <button style={{ width: '80%', height: '50px', backgroundColor: '#fff', color: '#000', borderRadius: '10px', outlien: 'none', border: '1px solid #000' }}>Submit</button>
    </div>
  )
}

export default Button
```
