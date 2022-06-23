import React from "react";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            Green Aura is the highest frequency that resonates with the
            vibrations of the heart. It is the leading energy that centers and
            aligns with unconditional love. People who have green emissions in
            their energy field are natural born healers. Healers with Green Aura
            channel their energy through their hands. I, Brian Rivera graduated
            from Swedish Institute College of Health Science. I am an innate
            healer discovered my passion and mission when my mother was
            diagnosed with Cancer. Since then, I have dedicated to all my
            patients especially suffering from Cancer, Arthritis, Broken bones,
            structural deformities, Depression, Anxiety, Parkinson’s Disease.
            Depending on the condition, I’ll recommend the best practice at
            Green Aura Spa.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            {/* <img src="../Images/portfolio/5.jpg" className="img-fluid" alt="" />            */}
            <a href="../Images/portfolio/3.JPG" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <p className="fst-italic">
              Spa treatments are available for guests ages 16 and over. Guests
              under the age of 16 must be accompanied by a parent or guardian.
              Spa Reservations A valid credit card is required to secure a spa
              reservation.
            </p>            
            <h5>Medical & Well being:</h5>
            <p>
              Please inform us of any medical needs, physical conditions, or
              ailments that require our attention. For your safety, and the
              safety of our staff, we strongly discourage alcohol consumption
              prior to spa treatments, immediate sun exposure following skincare
              therapy, and shaving before or after exfoliation.
            </p>
            <h5>Spa Arrivals:</h5>
            <p>
              Our services begin and end on time, late arrivals may impact the
              length of your service.
            </p>
            <h5>What to Bring:</h5>
            <p>
              For your comfort and privacy we provide you with a luxurious robe
              and slippers during your visit. A spa locker will also be provided
              to store your personal belongings in individual room. We regret we
              are not responsible for loss or damage to personal belongings.
              Swim suits are required for highrotherapy room.
            </p>
            <h5>Service Charge:</h5>
            <p>
              The service charge is divided among your spa therapist and support
              staff. Additional gratuity for your spa therapist is at your
              discretionCancellation PolicyYour appointment is reserved
              exclusively for you. If you need to change or cancel your
              appointment we require a minimum of 24 hour’s notice or your
              service will be charged in full.CellphonesPlease respect our
              tranquil environment and avoid using your cellphone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
