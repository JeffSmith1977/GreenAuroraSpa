import React, { useState } from "react";

export default function Facialtreatments() {

  const [colapseId, setColapseId] = useState(1);

  return (
    <div className="container">
      <div>Facialtreatments</div>

      <div className="section-title">
        <h2>Facial Treatments</h2>
        <p>Text Pending.</p>
      </div>

      <div className="row">

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button onClick={() => setColapseId(1)} className={`accordion-button ${colapseId == 1 ? '': 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Green Aura Signature Facial
              </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse ${colapseId == 1 ? '': 'collapse'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="card-spa">
                  <img style={{ width : '100px', height: '100px'}} src="" alt="" />
                  <div className="card-spa-content">
                    <h4 className="card-spa-title">Green Aura Signature Facial
</h4>
                    <p className="card-spa-text">This facial includes cleansing. skin analysis, exfoliation, extractions, facial massage and treatment mask tailored specifically for your skin type and skin concerns.</p>
                    <p className="card-spa-price">$125.00</p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
}
