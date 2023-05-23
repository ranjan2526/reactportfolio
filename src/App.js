// import logo from './logo.svg';
import './App.css';
import Logo from './assets/Screenshot 2023-05-17 212528.png'
import pdf from './assets/IMG-20200301-WA0023.jpg'

function App() {
  return (
    <div className="App">
      <div>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">Ranjan Kumar</a>
            <button className="navbar-toggler text-success" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link active" href="#about">About <span className="sr-only">(current)</span></a>
                <a className="nav-link active" href="/">Skills</a>
                <a className="nav-link active" href="/">Education</a>
                <a className="nav-link active" href="mailto:ranjankumarjh6@gmail.com">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="main-section col-13">
          <div className="d-flex flex-wrap container col-8">
              <div className="pt-5 col-lg-7 col-12 d-lg-none text-center">
                  <img src={Logo} alt="Ranjan Kumar" width="100%" height="100%" />
              </div>
              <div className="col-lg-6 mt-5 text-center pb-4">
                  <h3 className="text-white">Welcome</h3>
                  <h1>I'm <br /><span style={{fontsize: 72,color:'white'}}>Ranjan Kumar</span> </h1>
                  <p className="pt-3 title">Web Developer,Programmer <br /> UI/UX Designer</p>
                  <div className="nav-icon pt-3">
                      <a href="https://www.linkedin.com/in/ranjan-kumar-467a2a21b/" target="_blank" rel="noreferrer" className="text-white p-2">
                          <i className="fab fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/ranjan.rakhi.1" target="_blank" rel="noreferrer" className="text-white p-2">
                          <i className="fab fa-facebook"></i></a>
                      <a href="https://www.instagram.com/ranjan.rakhi.1/" target="_blank" rel="noreferrer" className="text-white p-2">
                          <i className="fab fa-instagram"></i></a>
                      <a href="https://github.com/ranjan2526" target="_blank" rel="noreferrer" className="text-white w-5 p-2">
                          <i className="fab fa-github"></i></a>
                  </div>
              </div>
              <div className="my-5 col-lg-6 col-10 d-lg-block d-none text-center">
                  <img src={Logo} alt="Ranjan Kumar" width="80%" height="80%" />
              </div>
          </div>
        </div>
        <section className="dark-bg p-2" id="about">
        <div className="container text-white pb-5">
            <div className="d-flex flex-wrap">
                <div className="col-lg-6 col-12 mb-auto"> 
                    <h2>About Me</h2>
                    <p>
                        I am extremely proficient in Front-End Development using HTML5, Cascade Style 
                        Sheets (CSS3), Bootstrap, Javascript And apart from 
                        Front-End, I have good knowledge in Back-End using PHP & MySQL as well as in designing 
                        using Adobe Photoshop, and continuously engage in trying to extend my skills with 
                        new technology.
                    </p>
                </div>
                <div className="col-lg-6 col-12 pt-5">
                    <h4>Any Type Of Query & Discussion</h4>
                    <a href="mailto:ranjankumarjh6@gmail.com" className="text-white d-flex pt-3">
                        <i className="fas fa-envelope pt-2"></i>
                        <h5>ranjankumarjh6@gmail.com</h5>
                    </a>
                    <div className="pt-3">
                        <a href={pdf} className="custom-button px-4 py-2" target="_blank" rel="noreferrer">
                            <i className="fas fa-download"></i>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </div>
      </div>
      
    </div>
  );
}

export default App;
