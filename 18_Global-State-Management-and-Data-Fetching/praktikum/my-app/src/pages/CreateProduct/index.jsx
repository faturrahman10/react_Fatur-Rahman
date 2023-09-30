import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, editProduct, deleteProduct } from '../../redux/action/productAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bsLogo from '../../assets/bsLogo.png';
import article from '../../data/article';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [fileInput, setFileInput] = useState(null);
  const [productFreshness, setProductFreshness] = useState('');
  const [price, setPrice] = useState('');
  const [productCategoryError, setProductCategoryError] = useState('');
  const [fileInputError, setFileInputError] = useState('');
  const [productFreshnessError, setProductFreshnessError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [language, setLanguage] = useState('en');
  const [editingIndex, setEditingIndex] = useState(-1);

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      products.forEach((product) => {
        if (product.imageURL) {
          URL.revokeObjectURL(product.imageURL);
        }
      });
    };
  }, [products]);

  const productNameRegex = /^[A-Za-z\s]+$/;
  const productPriceRegex = /^\d+(\.\d{1,2})?$/;

  const handleButtonCreateProduct = (e) => {
    e.preventDefault();

    setProductNameError('');
    setProductCategoryError('');
    setFileInputError('');
    setPriceError('');
    setProductFreshnessError('');

    if (!productNameRegex.test(productName)) {
      setProductNameError('Product Name hanya boleh mengandung huruf dan spasi.');
    } else if (productName.trim() === '') {
      setProductNameError('Product Name tidak boleh kosong.');
    }

    if (productCategory === '') {
      setProductCategoryError('Please select a product category.');
    }

    if (fileInput === null) {
      setFileInputError('Please choose a file.');
    }

    if (!productPriceRegex.test(price)) {
      setPriceError('Product Price harus berupa angka positif dengan maksimal 2 angka desimal.');
    } else if (price.trim() === '') {
      setPriceError('Product Price tidak boleh kosong.');
    }

    if (productFreshness === '') {
      setProductFreshnessError('Please select Product Freshness.');
    }

    if (
      productNameRegex.test(productName) &&
      productCategory !== '' &&
      fileInput !== null &&
      productPriceRegex.test(price) &&
      productFreshness !== ''
    ) {
      const imageURL = URL.createObjectURL(fileInput);

      if (editingIndex !== -1) {
        const updatedProduct = { productName, productCategory, productFreshness, price, imageURL };
        dispatch(editProduct(updatedProduct, editingIndex));
        setEditingIndex(-1);
      } else {
        const newProduct = {
          productName,
          productCategory,
          productFreshness,
          price,
          imageURL,
        };

        dispatch(addProduct(newProduct));
      }

      setProductName('');
      setProductCategory('');
      setFileInput(null);
      setProductFreshness('');
      setPrice('');
    }
  };
  
  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Random Number:', randomNumber);
  };

  const handleDeleteProduct = (index) => {
    dispatch(deleteProduct(index));
  };

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
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

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
                accept="image/*"
                onChange={(e) => setFileInput(e.target.files[0])}
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
                type="text"
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
              <th scope="col">Image</th>
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
                <td>${product.price}</td>
                <td>
                  {product.imageURL && (
                    <img src={product.imageURL} alt="Product Image" style={{ maxWidth: '100px' }} />
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    Delete
                  </button>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleEditProduct(index)}
                  >
                    Edit
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
