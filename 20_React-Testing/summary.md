## 20 Reat Testing

## Basic Testing
<b>Basic Testing</b> dalam React adalah praktik yang penting untuk memastikan bahwa komponen-komponen React berperilaku dengan benar. Pengujian dasar sering digunakan untuk menguji fungsi-fungsi kecil atau unit dalam aplikasi React, memverifikasi bahwa outputnya sesuai dengan yang diharapkan.

## Tools yang digunakan
Beberapa alat umum yang digunakan dalam pengujian React termasuk:

- <b>Jest</b>: Jest adalah framework pengujian yang sering digunakan untuk menguji komponen dan fungsi dalam aplikasi React. Ini memiliki fitur bawaan untuk mengelola pengujian unit dan integrasi.

- <b>React Testing Library</b>: React Testing Library adalah alat yang dirancang khusus untuk menguji komponen React dengan fokus pada pengguna. Ini membantu dalam menulis pengujian yang lebih bersifat pengguna.

## Yang perlu diinstall
<b>Untuk CRA</b>
- Jest :
```
npm install --save-dev jest
```
- React Testing Library :
```
npm install --save-dev 
@testing-library/react 
@testing-library/jest-dom
```
- Melakukan konvigurasi jest pada file jest.config.js

<b>Untuk React Vite</b>
- semua yang perlu di install :
```
npm install --save-dev 
jest 
jest-environment-jsdom 
@testing-library/react 
@testing-library/jest-dom
babel-jest
@babel/core
@babel/preset-env
@babel/preset-react
```


