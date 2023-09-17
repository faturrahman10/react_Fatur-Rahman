## 14 React Hooks

### React Hooks
<b>React Hooks</b> adalah fitur yang diperkenalkan dalam React versi 16.8 untuk mengizinkan penggunaan state dan fitur React lainnya dalam komponen fungsional.
- <b>Komponen Fungsional yang Memiliki State</b>: Dengan React Hooks, komponen fungsional dapat memiliki state internal dan melakukan efek samping (side effects).
- <b>Pengganti Komponen Berbasis Kelas</b>: Hooks memberikan alternatif untuk penggunaan komponen berbasis kelas dengan state dan lifecycle methods.
- <b>Penggunaan yang Fleksibel</b>: React Hooks memungkinkan Anda menggunakan banyak hooks yang telah ada (seperti useState, useEffect, dll.) dalam komponen yang sama.

### Contoh sederhana implementasi useEffect
useEffect adalah salah satu hook yang digunakan untuk melakukan efek samping dalam komponen fungsional.  
Contoh sederhana penggunaan useEffect :  
```
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default ExampleComponent;
```