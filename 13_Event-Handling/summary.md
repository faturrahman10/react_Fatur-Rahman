## 13 Event Handling

### State
<b>State</b> adalah salah satu konsep kunci dalam React yang mengacu pada data yang dapat berubah dalam suatu komponen. State digunakan untuk menyimpan informasi yang akan memengaruhi tampilan dan perilaku komponen.  
- <b>class component</b> State umumnya digunakan dalam komponen berbasis kelas dengan menggunakan constructor dan setState() untuk mengelola perubahan state.
- <b>functional component</b> Dalam komponen fungsional, Anda dapat menggunakan React Hooks seperti useState untuk mengelola state.

### Statefull dan Stateless
- <b>Stateful Components</b> adalah komponen yang memiliki kemampuan untuk menyimpan dan mengelola state. Mereka sering digunakan untuk komponen yang memiliki logika kompleks.
- <b>Stateless Components</b> adalah komponen yang tidak memiliki state internal. Mereka hanya menerima props dan menghasilkan tampilan berdasarkan props tersebut. Stateless components biasanya lebih sederhana dan mudah diuji.

### Handling Events
<b>Event Handling</b> adalah peristiwa yang dipicu oleh pengguna pada suatu komponen, contoh : pada saat button ditekan  
Beberapa contoh events :
- form events : onChange, onSubmit
- mouse events : onClick, onDoubleClick, onMouseOver
- generic events : onError, onLoad
<br>  
contoh penggunaan event pada react :
```
<button onClick={handleClickSubmitButton}>Submit</button>
```