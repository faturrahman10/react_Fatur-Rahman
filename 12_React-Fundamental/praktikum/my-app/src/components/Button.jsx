import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Button = () => {
  return (
    <div>
      <div className="container mt-5 text-center">
        <button className="btn btn-primary fw-bold" style={{ width: '80%' }}>Submit</button>
      </div>
    </div>
  )
}

export default Button