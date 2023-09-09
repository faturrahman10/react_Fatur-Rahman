## 11 Introduction react

### Apa itu React

React merupakan lybrary javascript untuk membuat User Interface (UI) yang interaktif dan cepat pada web maupun mobile

### Cara penginstalan React

1. Create React App (CRA)
   jalankan perintah : <strong>npx create-react-app nama_project_kita</strong> , pada terminal

2. React Vite
   jalankan perintah : <strong>npm create vite@latest nama_project_kita -- --template react</strong> , pada terminal

### VDOM

Virtual DOM (VDOM) adalah konsep kunci dalam React yang memungkinkan pembaruan UI yang efisien. VDOM adalah representasi virtual dari DOM aktual di browser. Ketika ada perubahan data atau keadaan dalam aplikasi, React membandingkan VDOM baru dengan yang lama untuk menghitung perbedaan, lalu hanya memperbarui bagian yang diperlukan pada DOM aktual. Ini meningkatkan kinerja aplikasi, mempercepat pembaruan UI, dan mendukung renderisasi server. VDOM membantu React mencapai responsivitas dan efisiensi dalam pembangunan aplikasi.
