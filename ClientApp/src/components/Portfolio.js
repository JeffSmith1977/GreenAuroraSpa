import React from "react";

export default function Portfolio() {
  return (
    <div>

      {/* <div className="section-title">
        <h2>Portfolio</h2>
        <p>
          dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
          fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam
          cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
          iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
          </ul>
        </div>
      </div> */}

      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img className="card-img-top" src={require("../Images/portfolio/1.jpg").default}/> 
                     
             <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
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
              <h4>Web 3</h4>
              <p>Web</p>
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

        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img className="card-img-top" src={require("../Images/portfolio/3.jpg").default}/> 
                     
             <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap">
          <img className="card-img-top" src={require("../Images/portfolio/4.jpg").default}/> 
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
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


{/* 
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap"> 
          <img className="card-img-top" src={require("../../Images/portfolio/3.jpg").default}/> 
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a
                  href="../../Images/portfolio/3.jpg"
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
          <img className="card-img-top" src={require("../Images/portfolio/4.jpg").default}/> 
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  className="../Images/portfolio/4.jpg"
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
          <img className="card-img-top" src={require("../Images/portfolio/5.jpg").default}/> 
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/5.jpg"
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

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">           
          <img className="card-img-top" src={require("../Images/portfolio/6.jpg").default}/> 
            <div clclassNameass="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-wrap"> 
          <img className="card-img-top" src={require("../Images/portfolio/7.jpg").default}/> 
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a
                  href="../Images/portfolio/7.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
