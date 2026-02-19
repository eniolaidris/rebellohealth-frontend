export default function Home() {
  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-body py-2 pe-3 border-end" href="#"><small>FAQs</small></a>
              <a className="text-body py-2 px-3 border-end" href="#"><small>Support</small></a>
              <a className="text-body py-2 px-3 border-end" href="#"><small>Privacy</small></a>
              <a className="text-body py-2 px-3 border-end" href="#"><small>Policy</small></a>
              <a className="text-body py-2 ps-3" href="#"><small>Career</small></a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white px-5">
              <div className="me-3 pe-3 border-end py-2">
                <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@rebellohealth.co.uk</p>
              </div>
              <div className="py-2">
                <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+44 000 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="m-0 text-uppercase text-primary">REBELLO HEALTHCARE</h1>
        </a>
        <div className="navbar-nav ms-auto py-0">
          <a href="/" className="nav-item nav-link active">Home</a>
          <a href="/login" className="nav-item nav-link">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid p-0">
        <div className="position-relative">
          <img className="w-100" src="/img/carousel-1.jpg" alt="Hero" />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h5 className="text-uppercase">Healthcare & Consultancy</h5>
            <h1 className="display-4">
              Accounting & Quantity Surveying Solutions
            </h1>
            <a href="/login" className="btn btn-primary mt-3">
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid bg-secondary p-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="display-5 mb-4">
              Welcome To <span className="text-primary">REBELLO</span>
            </h1>
            <p>
              We provide professional healthcare consultancy,
              accounting services and quantity surveying expertise.
            </p>
            <a href="/login" className="btn btn-primary rounded-pill">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container-fluid pt-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h1 className="display-5 mb-0">Our Services</h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>

        <div className="row g-5">
          <div className="col-lg-4">
            <div className="service-item bg-secondary text-center p-4">
              <h3>Healthcare Consultancy</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-item bg-secondary text-center p-4">
              <h3>Accounting Services</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-item bg-secondary text-center p-4">
              <h3>Quantity Surveying</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-fluid bg-dark text-secondary text-center py-4">
        <p className="m-0">
          © {new Date().getFullYear()} Rebello Healthcare. All Rights Reserved.
        </p>
      </div>
    </>
  );
}