import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Simple Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active text-white bg-primary rounded" aria-current="page" href="#">Home</a>
              <a className="nav-link text-primary" href="#">Features</a>
              <a className="nav-link text-primary" href="#">Pricing</a>
              <a className="nav-link disabled text-primary" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
		</div>
  )
}

export default Navbar