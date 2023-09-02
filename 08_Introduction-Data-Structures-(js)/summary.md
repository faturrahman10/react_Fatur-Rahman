## 08 Introduction Data Structure Js

1. Array <br>
   Arrays digunakan untuk menyimpan kumpulan nilai dalam urutan tertentu, dimana nilai-nilai tersebut harus memiliki tipe data yang sama

-   pencarian (searching) <br>
    melakukan pencarian index array dari value yang dimasukkan dengan menggunakan indexOf(), includes(), atau find(). <br>
    contoh : <br>
    let numbers = [1, 2, 3, 4, 5]; <br>
    let hasil = numbers.indexOf(3); // hasil = 2
-   penambahan (insertion) <br>
    kita dapat melakukan penambahan isi array dengan menggunakan push(), unshift(), atau splice(). <br>
    contoh : <br>
    let fruits = ["apel", "pisang"]; <br>
    fruits.push("ceri"); // ["apel", "pisang", "ceri"]
-   penghapusan (deletion) <br>
    kita dapat melakukan penghapusan dengan menggunakan pop(), shift(), atau splice(). <br>
    contoh : <br>
    let numbers = [1, 2, 3, 4, 5]; <br>
    numbers.pop(); // hasil = [1, 2, 3, 4]

2. Object <br>
   Object adalah struktur data yang digunakan untuk menyimpan dan mengatur data yang memiliki value dan tipedata. Dalam suatu object dibolehkan meletakkan data yang memiliki tipe data yang berbeda. <br>
   contoh pembuatan object : <br>
   let person = { <br>
   nama: "John", <br>
   umur: 30, <br>
   pekerjaan: "pengembang" <br>
   }; <br>

3. Sets (Set)
   Set adalah struktur data yang digunakan untuk menyimpan data yang memiliki nilai unik tanpa duplikasi, dan dengan urutan yang tidak terdevinisi. Set tidak mengizinkan data yang memiliki duplikasi didalamnya. <br>
   contoh : <br>
   const fruits = new Set (["apple", "anggur", "jeruk"]) <br>
   fruits.add("jeruk"); <br>
   console.log(fruits); <br>

    catatan : computer tidak mengizinkan penambahan "anggur" lagi karena "anggur" sudah ada didalam set
