## 27 Instalation Open AI di 

### Persiapan Proyek React
Sebelum mengintegrasikan OpenAI ke dalam proyek React, pastikan proyek Anda sudah terinstal dan berjalan dengan baik. Jika belum, Anda dapat membuat proyek React baru dengan menggunakan <b>Create React App</b> atau <b>React Vite</b>.

### Instalasi Package OpenAI
Untuk mengintegrasikan OpenAI, Anda perlu menginstal paket openai yang disediakan oleh OpenAI. Anda dapat melakukannya dengan menggunakan manajer paket seperti npm atau Yarn.  
Menggunakan npm :
```
npm install openai
```
Menggunakan yarn :
```
yarn add openai
```

### Menggunakan OpenAI dalam React
contoh menggunakan CRA:
```
import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const App = () => {
  const [generatedText, setGeneratedText] = useState('');

  const configuration = new Configuration({
    apiKey: process.env.VITE_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const handleSubmit = async () => {
    try {
      const response = await openai.Completion.create({
        engine: 'text-davinci-003',
        prompt: input,
        max_tokens: 50,
      });

      setGeneratedText(response.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Contoh Penggunaan OpenAI dalam React</h1>
      <button onClick={handleSubmit}>Generate Text</button>
      <p>{generatedText}</p>
    </div>
  );
};

export default App;

```

### Mengatur APIkey OpenAI
Untuk menggunakan OpenAI API, Anda perlu mengatur API key yang sesuai, API key ini hanya bisa didapatkan di akun openai kita masing-masing. API key ini harus diamankan dengan baik, misalnya dengan menyimpannya di environment variable. Pastikan untuk melindungi API key agar tidak diakses oleh pihak yang tidak berwenang.