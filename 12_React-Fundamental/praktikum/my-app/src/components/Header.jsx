import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bsLogo from '../assets/bsLogo.png';

const Header = () => {
  return (
    <div>
      <div className="text-center px-5 mb-5">
          <img src={bsLogo} alt="log bootstrap" className="img-fluid mb-3" />
          <p className="h3 mb-2">Create Product</p>
          <p className="px-5">Below is an example form built entirely with Bootstraps form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
    </div>
  )
}

export default Header