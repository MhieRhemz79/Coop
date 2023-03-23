import './services2.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap';
// import CardGroup from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Services2 = () => {
  return (
    <>
    <Sidebar />
    <Navbar />

    
    <section>
        <h1>Our Services</h1>
        <p>
            Pen Coop impressively grew in all aspect of its operation. Apart from its basic loan products, Pen Coop had expanded and engaged into various business fields such as laundry services, manpower services, trainings for housekeeping and food and beverage hotelier aspirants, consumer store, condo units and van rental, shuttle service for hotel staff, cleaning services and training venue rental.
        </p>

        <CardGroup>
            <Card>
            <Card.Body>
            <Card.Title><h2>HOW MUCH CAN <br></br>A MEMBER LOAN?</h2></Card.Title>
            <Card.Text>
            <br></br>
            A new member can loan based on his needs and capacity to pay and based on his investment at the cooperative. Postdates checks (PDC) is required for an Associate Member.
            <br></br>
            <br></br>
            <br></br>
             MAXIMUM LOAN AMOUNT:
             <br></br>
             - The maximum loan amount that a member can borrow shall be computed as follows:
            <br></br>
            <br></br>
            FOR REGULAR MEMBERS: <br></br>
            a) Loan Against Deposit - Total Loan amount will be equal to Total Paid-Up Capital.
            <br></br>
             b) For Multi-Purpose and other Loans, total amount will be:<br></br>
            - New member should have paid at least Php25,000 share capital or other investment at Pen-Coop.<br></br>
            - Members below five (5) years in service equals to twice the amount of his/her share capital plus other investment at the Cooperative.<br></br>
            - Members above five (5) years to ten (10) years in service equals to 3 times the amount of his/her share capital plus other investment at the cooperative. (Case to case basis) Members eleven (11) years and above in the service equal to (4) times the amount of his/her share capital plus other investment at the cooperative. (Case to case basis)
            <br></br>
            <br></br>
            WHAT ARE THE FEES DEDUCTED TO THE MEMBER'S LOANS?
            <br></br>
            *REGULAR CASH LOAN* <br></br>
            - 1% Service Fee <br></br>
            - .6% Insurance for 1 years <br></br>
             - 1% Fixed Deposit (Non-Withdrawable)
            <br></br> 
                       
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            </Card>


            </CardGroup>
    </section>

    <Footer />
        </>
        
  );
}

export default Services2;