## 23 Restfull API with Javascript

### MockupAPI
Mockup API adalah simulasi atau tiruan dari sebuah API yang sebenarnya. Ini digunakan untuk pengembangan dan pengujian perangkat lunak ketika API sebenarnya belum tersedia atau ketika Anda ingin menghindari penggunaan sumber daya yang sebenarnya, seperti database produksi. Mockup API memberikan respons yang diprogram sebelumnya, sehingga Anda dapat menguji berbagai skenario dan perilaku tanpa harus terhubung ke server nyata.

### Implementasi Pengambilan Data dari Mockup API (GET)
```
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://mockupapi.com/api/v1/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data dari Mockup API</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### Implementasi Penghapusan Data dari Mockup API (DELETE)
```
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://mockupapi.com/api/v1/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = (userId) => {DELETE
    axios.delete(`https://mockupapi.com/api/v1/users/${userId}`)
      .then((response) => {
        if (response.status === 204) {
          setData(data.filter((user) => user.id !== userId));
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Data dari Mockup API</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

### Implementasi Edit Data dari Mockup API (PUT)
```
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [editedName, setEditedName] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios.get('https://mockupapi.com/api/v1/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleEdit = () => {
    if (selectedUserId !== null) {
      const updatedData = data.map((user) => {
        if (user.id === selectedUserId) {
          return { ...user, name: editedName };
        }
        return user;
      });

      axios.put(`https://mockupapi.com/api/v1/users/${selectedUserId}`, {
        name: editedName,
      })
        .then((response) => {
          if (response.status === 200) {
            setData(updatedData);
            setSelectedUserId(null);
            setEditedName('');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <h1>Data dari Mockup API</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => {
              setSelectedUserId(user.id);
              setEditedName(user.name);
            }}>Edit</button>
          </li>
        ))}
      </ul>
      <h2>Edit Nama Pengguna</h2>
      <input
        type="text"
        placeholder="Nama Baru"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button onClick={handleEdit}>Simpan Perubahan</button>
    </div>
  );
}

export default App;

```
