import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bsLogo from '../../assets/bsLogo.png';
import article from '../../data/article';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [price, setPrice] = useState('');
  const [productCategoryError, setProductCategoryError] = useState('');
  const [fileInputError, setFileInputError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [language, setLanguage] = useState('en');

  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Random Number:', randomNumber);
  }

  const handleButtonCreateProduct = (e) => {
    e.preventDefault();

    if (productName.trim() === '') {
      setProductNameError('Product Name cannot be empty.');
    } else {
      setProductNameError('');
    }

    if (productCategory === '') {
      setProductCategoryError('Please select a product category.');
    } else {
      setProductCategoryError('');
    }

    if (fileInput === '') {
      setFileInputError('Please choose a file.');
    } else {
      setFileInputError('');
    }

    if (price.trim() === '') {
      setPriceError('Price cannot be empty.');
    } else {
      setPriceError('');
    }
  }

  const handleProductName = (e) => {
    const productNameValue = e.target.value;
    setProductName(productNameValue);
    
    if (productNameValue.length > 25) {
      setProductNameError('Product Name must not exceed 25 characters');
    } else {
      setProductNameError('');
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Simple Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active text-white bg-primary rounded" aria-current="page" href="#">Home</a>
              <a className="nav-link text-primary" href="#">Features</a>
              <a className="nav-link text-primary" href="#">Pricing</a>
              <a className="nav-link disabled text-primary" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <div className="text-center px-5 mb-5">
          <img src={bsLogo} alt="log bootstrap" className="img-fluid mb-3" />
          <p className="h3 mb-2">{article.title[language]}</p>
          <p className="px-5">{article.description[language]}</p>
        </div>
        <div className='text-center mb-5'>
          <button className='btn btn-primary me-3' onClick={handleRandomNumber}>Random Number</button>
          <button className='btn btn-primary' onClick={toggleLanguage}>
            {language === 'en' ? 'IN' : 'ENG'}
          </button>
        </div>
        <div className="mx-auto" style={{ width: '40%' }}>
          <form className="needs-validation" noValidate>
            <div>
              <p className="h5">Detail Product</p>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className={`form-control ${productNameError ? 'is-invalid' : ''}`}
                id="productName"
                value={productName}
                onChange={handleProductName}
                required
              />
              {productNameError && (
                <div className="invalid-feedback mt-2">
                  {productNameError}
                </div>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="selectOption" className="form-label">Product Category</label>
              <select
                className={`form-select ${productCategoryError ? 'is-invalid' : ''}`}
                id="selectOption"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Snack">Snack</option>
                <option value="Drink">Drink</option>
                <option value="Pure Water">Pure Water</option>
              </select>
              {productCategoryError && (
                <div className="invalid-feedback mt-2">
                  {productCategoryError}
                </div>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="fileInput" className="form-label">Pilih berkas:</label>
              <input
                type="file"
                className={`form-control border-primary text-primary ${fileInputError ? 'is-invalid' : ''}`}
                id="fileInput"
                value={fileInput}
                onChange={(e) => setFileInput(e.target.value)}
                required
              />
              {fileInputError && (
                <div className="invalid-feedback mt-2">
                  {fileInputError}
                </div>
              )}
            </div>
            <div className="col-md-12">
              <label htmlFor="inputTextarea" className="form-label">Additional Description</label>
              <textarea className="form-control" id="inputTextarea" rows="4" required></textarea>
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="inputPrice" className="form-label">Price</label>
              <input
                type="number"
                className={`form-control ${priceError ? 'is-invalid' : ''}`}
                id="inputPrice"
                placeholder="$ 1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              {priceError && (
                <div className="invalid-feedback mt-2">
                  {priceError}
                </div>
              )}
            </div>
            <div className="container mt-5 text-center">
              <button
                className="btn btn-primary fw-bold"
                style={{ width: '80%' }}
                onClick={handleButtonCreateProduct}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct;
