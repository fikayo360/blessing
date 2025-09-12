import React, { useState } from 'react';
import './App.css';

function App() {
   const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">

      
      {/* Overlay */}
      {/* {isOpen && (
        <div 
          className="nav-overlay"
          onClick={closeNav}
        />
      )} */}

      {/* Mobile Navigation */}
      {
        isOpen ? 
      (<nav className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
        <div className="mobile-nav__header">
          <h2 className="mobile-nav__title">Handshake</h2>
          <button 
            className="mobile-nav__close"
            onClick={toggleNav}
            aria-label="Close navigation"
          >
           <span>x</span>
          </button>
        </div>

        <ul className="mobile-nav__list">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav__item">
              <a 
                href={item.href}
                className="mobile-nav__link"
                onClick={toggleNav}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </nav> ): ''
      }

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
             Blessing
            </div>

           <ul className='nav-center'>
                 <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Skills</a></li>
           </ul>

            <button className="menu-button" onClick={toggleNav}>
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Omojowo<br />
              Blessing
            </h1>
            <div className="hero-image">
              <img
                src="blessing.jpg"
                alt="Modern kitchen interior"
              />
            </div>
          </div>
          <div className="hero-bottom">
            <div className="scroll-indicator">
              <a id='downloadLink' href='https://drive.google.com/drive/folders/1-CACK8SRSU5VEccXyyXwlvg5BQSSBpvn?usp=sharing'>Download my portfolio </a>
            </div>
            <div className="location">
              <span>Architecture student based in</span>
              <span>Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-content">
            <div className="section-label">[01] About me</div>
            <h2 className="about-title">
              I am Omojowo Blessing Omotola, an award-winning architecture student at Obafemi Awolowo University
              . For me, architecture is more than a final product- its a journey where every step of the process shapes, refines
              , and influences the outcome.
            </h2>
            <div className="about-text">
              <p>
              As a millennium fellow (class of 2025), i am deeply committed to advancing sustainabilty in architecture. Many of my award winning projects are 
              rooted in sustainable design, reflecting my strong advocacy for environmental responsibility and future-focused solutions.

              Excellence is a standard i live by. With a current CGPA of 4.89 in my third year, i continually push myself to combine academic rigor with creative innovation.
              For me, acheivement is not just about recognition- it is about consistently striving to deliver meaningful impact through design.

              This platform showcases my works, my values, and my vision as i continue to grow as a designer of spaces that inspire, connect, and endure.
              </p>
            </div>
           
          </div>
          <div className="about-image">
            <img
              src="aboutImg.jpeg"
              alt="Modern living space"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div className="section-label">[02] My Portfolio</div>
          <h2 className="portfolio-title">
            With over 2 years of experience and more than 20 design studio projects, i have 
            developed strong design skills and the ability to deliver real value in the architectural field.
          </h2>

          <div className="portfolio-grid">
             <div className="portfolio-item">
              <img src="futwrk1.png" alt="Zellar Residence" />
              <div className="portfolio-info">
                <h3>Future of work[1]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item"> 
              <img src="futwrk2.png" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Future of work[2] </h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="futwrk3.png" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Future of work[3]</h3>
                <span>2025</span>
              </div>
            </div>


            <div className="portfolio-item">
              <img src="dencli1.jpeg" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Dental clinic[1]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="dencli2.jpeg" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Dental clinic[2]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="dencli3.png" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Dental clinic[3]</h3>
                <span>2025</span>
              </div>
            </div>


            <div className="portfolio-item">
              <img src="energyhub1.jpeg" alt="Zellar Residence" />
              <div className="portfolio-info">
                <h3>Automobile Energy hub[1]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="energyhub2.jpeg" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3>Automobile Energy hub[2]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="energyhub3.jpeg" alt="The Meridien" />
              <div className="portfolio-info">
                <h3>Automobile Energy hub[3]</h3>
                <span>2025</span>
              </div>
            </div>


            <div className="portfolio-item">
              <img src="magistrate1.jpeg" alt="Du Ponte Residence" />
              <div className="portfolio-info">
                <h3>Magistrate court[1]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="magistrate2.jpeg" alt="Mercury Interiors" />
              <div className="portfolio-info">
                <h3>Magistrate court[2]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="magistrate3.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>Magistrate court[3]</h3>
                <span>2025</span>
              </div>
            </div>

             <div className="portfolio-item">
              <img src="autoterminus1.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>Autoterminus[1]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="autoterminus2.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>Autoterminus[2]</h3>
                <span>2025</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="autoterminus4.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>Autoterminus[3]</h3>
                <span>2025</span>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-label">[03] My Skills</div>
          <h2 className="services-title">How i can help</h2>
          <p className="services-subtitle">
            Think we might be a good fit for your upcoming project? Reach out — we'd love to
            talk details and see how we can help.
          </p>

          <div className="services-grid">
           <div className="service-card">
              <div className="service-icon">
                <img src="https://cdn4.iconfinder.com/data/icons/architecture-17/64/Architect-engineer-blueprint-draft-design-512.png" />
              </div>
               <h3>drating</h3>
              <span className="service-number">[04]</span>
              <p>
                creating acuurate technical drawings that clearly communicate design intent and construction details.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/3198/3198991.png" />
              </div>
               <h3> modelling </h3>
              <span className="service-number">[04]</span>
              <p>
                Developing 3d digital and physical models to visualize and explore architectural ideas
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dAOrXvptsSGgLL3UXenOQUANdAAb1WKpVw&s" alt="Construction Oversight" />
              </div>
              <h3>Graphic design </h3>
              <span className="service-number">[05]</span>
              <p>
                  Designing visually compelling graphics for branding, presentations and communication.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4FiQHQ9UqMAfanWF4_QZJ99uLMAiG5m53w&s " alt="Interior Detailing" />
              </div>
              <h3>Sketching</h3>
              <span className="service-number">[06]</span>
              <p>
                  Expressing design concepts quickly and creatively through freehand drawing
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://www.svgrepo.com/show/508769/autocad.svg" alt="Post-Occupancy Support" />
              </div>
              <h3>Autodesk</h3>
              <span className="service-number">[07]</span>
              <p>
                Skilled in using Autodesk tools (e.g Revit, Autocad) for drafting, modelling, and architectural visualization
              </p>
            </div>

             <div className="service-card">
              <div className="service-icon">
                <img src="https://www.svgrepo.com/show/361494/figma-logo.svg" />
                </div>
              <h3>Sketch Up</h3>
              <span className="service-number">[08]</span>
              <p>
                Skilled in its use for modelling and architectural visualization
              </p>
              </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="https://www.svgrepo.com/show/305835/canva.svg" />
                </div>
              <h3>Canva</h3>
              <span className="service-number">[09]</span>
              <p>
                Experienced in creating visually appealing designs and presentations with speed and accuracy
              </p>
              </div>
          </div>
          </div>
      </section>

<section id="portfolio" className="portfolio section">
        <div className="container">
          <div className="section-label"> My Certifications</div>
          <h2 className="portfolio-title">
            Certifications received over the years
          </h2>

          <div className="portfolio-grid">
            
            <div className="portfolio-item">
              <img src="cert1.jpeg" alt="Open Coworking" />
              <div className="portfolio-info">
                <h3> HEADING THE GRAPHICS DESIGN UNIT(2024)</h3>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="cert2.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3> OAU STAR-OVERALL BEST 200 LEVEL STUDENT</h3>
              
              </div>
            </div>

            <div className="portfolio-item">
              <img src="cert3.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>HIGHEST C.GPA IN 200 LEVEL</h3>
                
              </div>
            </div>

            <div className="portfolio-item">
              <img src="cert4.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>CERTIFICATE OF PARTICIPATION IN DESIGN
                 COMPETITION AND FIRST PLACE WINNER OF THE DESIGN
                COMPETITION(2025)</h3>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="cert5.jpeg" alt="Brady Residence" />
              <div className="portfolio-info">
                <h3>CERTIFICATE OF PARTICIPATION IN DESIGN
                   COMPETITION AND SECOND PLACE WINNER OF THE
                  DESIGN COMPETITION( 2024)</h3>
               
              </div>
            </div>


          </div>
        </div>
      </section>
    

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="newsletter">
              <h3>Social handles</h3>
               <div className="footer-col">
                
                 <a href="mailto:blessingomojowo@student.oauife.edu.ng">Email me</a>
                <a href="https://www.linkedin.com/in/blessing-omojowo/">linkedIn</a>
                <a href="https://www.instagram.com/blessing_omojowo-250a84286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Instagram</a>
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-col">
                <h4>Navigate</h4>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Skills</a>
              </div>

              <div className="footer-col">
                <h4>Phone</h4>
                <a href="tel:1234567890">08163356466</a>

              </div>

              <div className="footer-col">
                <h4>Address</h4>
                <p>26, <br /> Ago palace way, Okota , Lagos State, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">Blessing.</div>
            <div className="footer-credits">
              <span>Fikayo © 2025</span>
              <span>Built by <a href='https://fikayobytes.netlify.app/' style={{color:'purple'}}>Fikayo the badass</a></span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

