import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import Header from './components/Header';
import Button from './components/Button';

function App() {

  return (
    <div>
      <Navbar/>
      <div className="container mb-5">
        <Header/>
        <div className="mx-auto" style={{ width: '40%' }}>
          <form className="needs-validation" noValidate>
            <div>
              <p className="h5">Detail Product</p>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" required />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="selectOption" className="form-label">Product Category</label>
              <select className="form-select" id="selectOption" required>
                <option value="1">Snack</option>
                <option value="2">Drint</option>
                <option value="3">Pure Water</option>
              </select>
              <div className="invalid-feedback">Please select a category.</div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="fileInput" className="form-label">Pilih berkas:</label>
              <input type="file" className="form-control border-primary text-primary" id="fileInput" required />
              <div className="invalid-feedback">Please choose a file.</div>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Product Freshness</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="radioOptions" id="option1" value="option1" required />
                <label className="form-check-label" htmlFor="option1"> Brand New </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="radioOptions" id="option2" value="option2" required />
                <label className="form-check-label" htmlFor="option2"> Second Hand </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="radioOptions" id="option3" value="option3" required />
                <label className="form-check-label" htmlFor="option3"> Refurbished </label>
              </div>
              <div className="invalid-feedback">Please select a freshness option.</div>
            </div>
            <div className="col-md-12">
              <label htmlFor="textareaExample" className="form-label">Additional Description</label>
              <textarea className="form-control" id="textareaExample" rows="4" required></textarea>
              <div className="invalid-feedback">Please provide a description.</div>
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="exampleFormControlInput2" className="form-label">Price</label>
              <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="$ 1" required />
              <div className="invalid-feedback">Please provide a valid price.</div>
            </div>
            <Button/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
