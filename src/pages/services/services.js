import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap';
// import CardGroup from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import './services.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


// function Services () {

function Services ({src, alt, title, content, width, height}) {
    return(
        <>
            <Sidebar />
            <Navbar />

            
            <section>
                <h1>Our Services</h1>
                <p>
                    Pen Coop impressively grew in all aspect of its operation. Apart from its basic loan products, Pen Coop had expanded and engaged into various business fields such as <b>laundry services, manpower services, trainings for housekeeping and food and beverage hotelier aspirants, consumer store, condo units and van rental, shuttle service for hotel staff, cleaning services and training venue rental.</b>
                </p>

                <CardGroup>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                        <Card.Title><h2>WHAT ARE THE DIFFERENT TYPES OF LOANS?</h2></Card.Title>
                        <Card.Text>
                            A member can avail of the following loans: <br></br>
                            <br></br>
                           TYPES & CORRESPONDING RATES: <br></br>
                           <br></br>
                           I. <span>LOAN AGAINST DEPOSIT</span><br></br>
                           <span></span><span>-</span>1.5% diminishing or 10% effective rate.
                           <br></br>
                           <br></br>
                           II. <span>MULTI-PURPOSE LOAN</span><br></br>
                           <span></span><span>-</span>1.9% diminishing or 13% effective rate.
                           <br></br>
                    
                           <span></span><span>i.</span><span> LIVELIHOOD</span> - 1.3% straight
                           <br></br>
                           <span></span><span>ii.</span><span> EDUCATIONAL</span> - 1.9% diminishing or 13& effective rate.
                           <br></br>
                           <span></span><span>iii.</span><span> EMERGENCY</span> - 2% straight (3mos.) maximum loanable amount of Php 10,000.00 (case to case basis)
                           <br></br>
                           <span></span><span>iv.</span><span> APPLIANCES/GADGET</span> - 1.3% straight.
                           <br></br>
                           <span></span><span>v.</span><span> Others - PDC PAYMENT</span> - 1.9% diminishing or 13& effective rate.
                           <br></br>
                           <span></span><span>vi.</span><span> Extended MPL-PDC PAYMENT</span> - 1.3% straight.
                           <br></br>
                           <br></br>
                           A Flexible Payment Scheme for each Loan Type is available as: <br></br>
                           <br></br>
                           I. <span>Below 50,000</span><br></br>
                           <span></span><span>-</span>payable for 3 to 12 mons. (1 - Co-Maker).
                           <br></br>
                           <br></br>
                           II. <span>50,001 to 100,000</span><br></br>
                           <span></span><span>-</span>payable for 3 to 24 mons. (1 - Co-Maker).
                           <br></br>
                           <br></br>
                           III. <span>100,001 to 200,000</span><br></br>
                           <span></span><span>-</span>payable for 3 to 36 mons. (2 - Co-Makers).
                           <br></br>
                           <br></br>
                           IV. <span>200,001 to 300,000</span><br></br>
                           <span></span><span>-</span>payable for 3 to 48 mons. (3 - Co-Makers).
                           <br></br>
                           <br></br>
                           V. <span>300,001 & above</span><br></br>
                           <span></span><span>-</span>payable for 3 to 60 mons. (4 - Co-Makers).
                           <br></br>
                           <br></br>
                           
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
};


export default Services;