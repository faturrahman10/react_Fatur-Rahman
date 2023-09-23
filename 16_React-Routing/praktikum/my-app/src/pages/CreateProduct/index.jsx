import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import article from '../../data/article';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [productFreshness, setProductFreshness] = useState('');
  const [price, setPrice] = useState('');
  const [productCategoryError, setProductCategoryError] = useState('');
  const [fileInputError, setFileInputError] = useState('');
  const [productFreshnessError, setProductFreshnessError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [language, setLanguage] = useState('en');
  const [products, setProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    alert('WELCOME');
  }, []);

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
  
    if (productFreshness === '') {
      setProductFreshnessError('Please select Product Freshness.');
    } else {
      setProductFreshnessError('');
    }
  
    if (productName.trim() !== '' && productCategory !== '' && fileInput !== '' && price.trim() !== '' && productFreshness !== '') {
      if (editingIndex !== -1) {
        const updatedProduct = { productName, productCategory, productFreshness, price };
        const updatedProducts = [...products];
        updatedProducts[editingIndex] = updatedProduct;
        setProducts(updatedProducts);
        setEditingIndex(-1);

        setProductName('');
        setProductCategory('');
        setProductFreshness('');
        setPrice('');
      } else {
        const newProduct = {
          productName,
          productCategory,
          productFreshness,
          price,
        };
    
        setProducts([...products, newProduct]);
    
        setProductName('');
        setProductCategory('');
        setFileInput('');
        setProductFreshness('');
        setPrice('');
      }
    }
  }
  

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  }

  const handleEditProduct = (index) => {
    const productToEdit = products[index];
    setProductName(productToEdit.productName);
    setProductCategory(productToEdit.productCategory);
    setProductFreshness(productToEdit.productFreshness);
    setPrice(productToEdit.price);
    setEditingIndex(index);
  };

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
              <a className="nav-link active text-white bg-primary rounded" aria-current="page" href="/">Home</a>
              <a className="nav-link text-primary" href="#">Features</a>
              <a className="nav-link text-primary" href="#">Pricing</a>
              <a className="nav-link disabled text-primary" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <div className="text-center px-5 mb-5">
          <img src="./img/bsLogo.png" alt="log bootstrap" className="img-fluid mb-3" />
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
            <div className="mb-3 col-md-6">
              <label className="form-label">Product Freshness</label>
              <div className="form-check">
                <input
                  className={`form-check-input ${productFreshnessError ? 'is-invalid' : ''}`}
                  type="radio"
                  name="radioOptions"
                  id="BrandNew"
                  value="Brand New"
                  required
                  onChange={(e) => setProductFreshness(e.target.value)}
                  checked={productFreshness === 'Brand New'}
                />
                <label className="form-check-label" htmlFor="BrandNew"> Brand New </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${productFreshnessError ? 'is-invalid' : ''}`}
                  type="radio"
                  name="radioOptions"
                  id="SecondHand"
                  value="Second Hand"
                  required
                  onChange={(e) => setProductFreshness(e.target.value)}
                  checked={productFreshness === 'Second Hand'}
                />
                <label className="form-check-label" htmlFor="SecondHand"> Second Hand </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${productFreshnessError ? 'is-invalid' : ''}`}
                  type="radio"
                  name="radioOptions"
                  id="Refurbished"
                  value="Refurbished"
                  required
                  onChange={(e) => setProductFreshness(e.target.value)}
                  checked={productFreshness === 'Refurbished'}
                />
                <label className="form-check-label" htmlFor="Refurbished"> Refurbished </label>
                {productFreshnessError && (
                  <div className="invalid-feedback mt-2">
                    {productFreshnessError}
                  </div>
                )}
              </div>
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
      <div className='container mb-5'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{product.price}</td>
                <td>
                  <button 
                    className="btn btn-primary me-2" 
                    onClick={() => handleEditProduct(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(index)}
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
  )
}

export default CreateProduct;
