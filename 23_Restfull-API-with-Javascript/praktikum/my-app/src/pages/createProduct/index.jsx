import { useState, useEffect } from 'react';
import axios from 'axios';
import article from '../../data/article';
import Swal from 'sweetalert2';


const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [language, setLanguage] = useState('en');
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productCategory: 'Snack',
    productFreshness: 'Brand New',
    price: '',
  });
  const [editProduct, setEditProduct] = useState(null);

  const getAllProduct = () => {
    axios.get('https://6520eae4a4199548356ca46b.mockapi.io/product')
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  const handleCreateProduct = () => {
    if (editProduct) {
      axios
        .put(
          `https://6520eae4a4199548356ca46b.mockapi.io/product/${editProduct.id}`,
          newProduct
        )
        .then(() => {
          getAllProduct();
          setEditProduct(null);
          setNewProduct({
            productName: '',
            productCategory: 'Snack',
            productFreshness: 'Brand New',
            price: '',
          });
          Swal.fire('Success', 'Data berhasil diubah!', 'success');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post('https://6520eae4a4199548356ca46b.mockapi.io/product', newProduct)
        .then(() => {
          getAllProduct();
          setNewProduct({
            productName: '',
            productCategory: 'Snack',
            productFreshness: 'Brand New',
            price: '',
          });
          Swal.fire('Berhasil', 'Data berhasil ditambahkan!', 'success');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  

  const handleDeleteProduct = (productId) => {
    Swal.fire({
      title: 'Konfirmasi',
      text: 'Anda yakin ingin menghapus data ini?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://6520eae4a4199548356ca46b.mockapi.io/product/${productId}`)
          .then(() => {
            getAllProduct();
            Swal.fire('Berhasil', 'Data berhasil dihapus!', 'success');
          })
          .catch((error) => {
            console.error(error);
            Swal.fire('Error', 'Terjadi kesalahan saat menghapus data', 'error');
          });
      }
    });
  };
  
  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditProduct(productToEdit);
    setNewProduct({
      productName: productToEdit.productName,
      productCategory: productToEdit.productCategory,
      productFreshness: productToEdit.productFreshness,
      price: productToEdit.price,
    });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  }

  return (
    <div>
      <nav className='fixed top-0 left-0 right-0 bg-slate-200'>
        <div className='flex items-center justify-between px-[5%] h-14'>
          <div>
            <p className='text-2xl font-bold text-slate-600'>Welcome</p>
          </div>
          <div>
            <ul className='flex gap-14'>
              <li className='text-lg font-bold '><span className='text-green-500'>Nav</span>bar</li>
              <li><a className='text-lg font-bold text-slate-800 hover:text-green-500' href="">Home</a></li>
              <li>
                <button className='px-3 py-1 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold border-none' onClick={toggleLanguage}>
                  {language === 'en' ? 'ENG' : 'IN'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='mt-24 px-[15%]'>
        <div className='mb-10'>
          <img className='w-52 mx-auto' src="/img/tailwindIcon.png" alt="" />
        </div>
        <div className='text-center mb-5'>
          <p className="font-bold text-3xl mb-5">{article.title[language]}</p>
          <p className="text-md">{article.description[language]}</p>
        </div>
        <form action='' className='mb-10'>
          <div className='w-[50%] mx-auto'>
            <p className='text-lg font-semibold text-center mb-5'>Detail Product</p>
            <div className='mb-7'>
              <div className='mb-1'>
                <label htmlFor='productName'>Product Name</label>
              </div>
              <input 
                type='text'
                id='productName'
                className='w-full h-10 px-2 border-2 border-slate-300 rounded-md focus:outline-none'
                name='productName'
                value={newProduct.productName}
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-7'>
              <div className='mb-1'>
                <label htmlFor='productCategory'>Product Category</label>
              </div>
              <select
                className='w-full h-10 px-2 border-2 border-slate-300 rounded-md focus:outline-none'
                id='productCategory'
                name='productCategory'
                value={newProduct.productCategory}
                onChange={handleInputChange}
              >
                <option className='bg-red' value='Snack'>Snack</option>
                <option value='Drink'>Drink</option>
                <option value='Pure Water'>Pure Water</option>
              </select>
            </div>
            <div className='mb-7'>
              <div className='mb-1'>
                <label htmlFor='productFreshness'>Product Freshness</label>
              </div>
              <select
                className='w-full h-10 px-2 border-2 border-slate-300 rounded-md focus:outline-none'
                id='productFreshness'
                name='productFreshness'
                value={newProduct.productFreshness}
                onChange={handleInputChange}
              >
                <option className='bg-red' value='Brand New'>Brand New</option>
                <option value='Brand New'>Second Hand</option>
                <option value='Brand New'>Refurbished</option>
              </select>
            </div>
            <div className='mb-10'>
              <div className='mb-1'>
                <label htmlFor='price'>Product Price</label>
              </div>
              <input 
                type='text'
                id='price'
                className='w-full h-10 px-2 border-2 border-slate-300 rounded-md focus:outline-none'
                name='price'
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <button
              className='py-2 w-full bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold text-center'
              type='button'
              onClick={handleCreateProduct}
            >
              {editProduct ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
        <div>
          <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto mb-5">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Product Category</th>
                  <th className="px-4 py-2">Product Freshness</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                    <td className="border px-4 py-2">{product.productName}</td>
                    <td className="border px-4 py-2">{product.productCategory}</td>
                    <td className="border px-4 py-2">{product.productFreshness}</td>
                    <td className="border px-4 py-2">{product.price}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleEditProduct(product.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct