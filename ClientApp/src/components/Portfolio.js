import React from "react";

export default function Portfolio() {
  return (
    <div>     
      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img className="card-img-top" src={require("../Images/portfolio/1.jpg").default}/> 
                     
             <div className="portfolio-info">              
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap"> 
          <img className="card-img-top" src={require("../Images/portfolio/2.jpg").default}/> 
            <div className="portfolio-info">              
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img className="card-img-top" src={require("../Images/portfolio/3.JPG").default}/> 
                     
             <div className="portfolio-info">              
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/3.JPG"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
          <img className="card-img-top" src={require("../Images/portfolio/4.JPG").default}/> 
            <div className="portfolio-info">              
              <div class="portfolio-links">
                <a
                  className="../Images/portfolio/4.jpg"
                  data-gallery="portfolioGallery" 
                  title="Card 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
 
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap"> 
          <img className="card-img-top" src={require("../Images/portfolio/5.jpg").default}/> 
            <div className="portfolio-info">              
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
          <img className="card-img-top" src={require("../Images/portfolio/6.JPG").default}/> 
            <div className="portfolio-info">              
              <div class="portfolio-links">
                <a
                  className="../Images/portfolio/6.JPG"
                  data-gallery="portfolioGallery" 
                  title="Card 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
          <img className="card-img-top" src={require("../Images/portfolio/7.jpg").default}/> 
            <div className="portfolio-info">              
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/7.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
