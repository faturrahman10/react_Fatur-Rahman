import React, { useState, useEffect } from 'react';
import axios from 'axios';
import article from '../../data/article';


const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [language, setLanguage] = useState('en');

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
      <div className='mt-24 px-[25%]'>
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
                className='w-full h-10 border-2 border-slate-300 rounded-md focus:outline-none'
              />
            </div>
            <div className='mb-7'>
              <div className='mb-1'>
                <label htmlFor='productCategory'>Product Category</label>
              </div>
              <select
                  className='w-full h-10 border-2 border-slate-300 rounded-md focus:outline-none'
                  id='productCategory'
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
                  className='w-full h-10 border-2 border-slate-300 rounded-md focus:outline-none'
                  id='productFreshness'
                >
                  <option className='bg-red' value='Brand New'>Brand New</option>
                  <option value='Brand New'>Second Hand</option>
                  <option value='Brand New'>Refurbished</option>
                </select>
            </div>
            <div className='mb-10'>
              <div className='mb-1'>
                <label htmlFor='productName'>Product Name</label>
              </div>
              <input 
                type='text'
                id='productName'
                className='w-full h-10 border-2 border-slate-300 rounded-md focus:outline-none'
              />
            </div>
            <button
              className='py-2 w-full bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold text-center'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto mb-5">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Product Category</th>
                  <th className="px-4 py-2">Product Freshness</th>
                  <th className="px-4 py-2">Harga</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border px-4 py-2 text-center">{product.id}</td>
                    <td className="border px-4 py-2">{product.productName}</td>
                    <td className="border px-4 py-2">{product.productCategory}</td>
                    <td className="border px-4 py-2">{product.productFreshness}</td>
                    <td className="border px-4 py-2">{product.price}</td>
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