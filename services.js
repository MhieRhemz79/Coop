import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import card from 'react-bootstrap';
// import CardGroup from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
// import './services.css';


function Services ({src, alt, title, content, width, height}) {
    return(
        <>
          <Sidebar />
          <Navbar />

            
          <section>
              <h1>Our Services</h1>
              <p>
                Pen Coop impressively grew in all aspect of its operation. Apart from its basic loan products, Pen Coop had expanded and engaged into various business fields such as laundry services, manpower services, trainings for housekeeping and food and beverage hotelier aspirants, consumer store, condo units and van rental, shuttle service for hotel staff, cleaning services and training venue rental.
              </p>    

              <pages>

                  <h1 className="text-capitalize text-white text-center mt-3 mb-3">PEN-COOP OFFERS:</h1>
                
                  <div className="container text-center">
                   
                    <div className="row">

                      <div className="col-4">
                        <div className="card" style={{width:"24rem"}}>
                          <img src="https://picsum.photos/id/7/200/300" className="card-img-top" alt="..." height="250px"  width="300px"/>
                          <div className="card-body">
                            <h2 className="card-title">WHAT ARE THE DIFFERENT TYPES OF LOANS?</h2>
                            <p className="card-text">A member can avail of the following loans:</p>
                            <a href="./Services1" className="btn btn-primary">Read More...</a>
                          </div>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card" style={{width:"24rem"}}>
                          <img src="https://picsum.photos/id/180/200/300" className="card-img-top" alt="..." height="250px"  width="300px"/>
                          <div className="card-body">
                            <h2 className="card-title">HOW MUCH CAN A MEMBER LOAN?</h2>
                            <p className="card-text">A new member can loan based on his needs and capacity to...</p>
                            <a href="./Services2" class="btn btn-primary">Read More...</a>
                          </div>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="card" style={{width:"23.5rem"}}>
                          <img src="https://picsum.photos/id/431/200/300" className="card-img-top" alt="..." height="250px"  width="300px"/>
                          <div className="card-body">
                            <h2 className="card-title">OBLIGATIONS OF PEN-COOP MEMBERS</h2>
                            <p className="card-text">Members will take care their acts, doings and integrity and protect the...</p>
                            <a href="./Services3" class="btn btn-primary">Read More...</a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

              </pages>
          </section>

          <Footer />
        </>
        
    );
};


export default Services;