import './services3.css'
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
const Services3 = () => {
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
            <Card.Title><h2>OBLIGATIONS OF <br></br>PEN-COOP MEMBERS:</h2></Card.Title>
            <Card.Text>
            <br></br>
            1. I will continously and regularly deposit to my Cooperative even if it's a small amount to teach myself in being more thrifty;
            <br></br>
            2. I will avail a loan to my Cooperative only for the things that are good. I will tell the Cooperative the true purpose of the loan and the true amount I can pay;
            <br></br>
            3. I will pay all my dues on time so that other member can avail the loan on time;
            <br></br>
            4. If I will fail on paying the loan in due time, I will immediately notify the staff or the General Manager and explain why;
            <br></br>
            5. I will attend every meeting and will actively join every discussion and will give my opinion for the betterment of the Cooperative;
            <br></br>
             6. I will help my co-member to the fullest ways, and I will accept being the "Guarantor" for other members who wants/needs to loan in the Cooperative;
             <br></br>
             7. I will follow my duties/obligations and will help the elected Officers in fulfilling their mandates in operating the Cooperative;
            <br></br>
             8. I will help in teaching the essence, vision and mission of the Cooperative and will help in recruiting my friends as members;
             <br></br>
             9. Broadening my knowledge to the works, problems and plans of the Cooperative;
             <br></br>
             10. I will notify the Cooperative if I have moved to new home, and give them my New Address; and
             <br></br>
             11. I will take care of my acts, doings and my integrity and protect the Image of my Cooperative.
             <br></br>
            <br></br>
             HOW TO PAY LOANS? <br></br>
              Salary deduction every 15th and 30th of the Month.
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

export default Services3;