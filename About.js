import React from 'react';
import './about.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import { GalleryContainer, GalleryBg,VideoBg } from './AboutElements.js';
import Video from '../../videos/43.mp4';

  function About({src, alt, title, content, width, height}) {
    return (
      <>
        <Sidebar />
        <Navbar />

    
        <GalleryContainer>  
            <GalleryBg>
                <VideoBg autoPlay loop muted src={Video} type='video/43.mp4' />
            </GalleryBg>
        </GalleryContainer>

        <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt=""/>
              <Carousel.Caption>
                  <h3>All ABOUT PEN-COOP</h3>
                  <p>The Pen-Coop led by its, Chairperson, Romelito L. Alvarez was organized to uplift the life status of the workers to better living. Registered to the Cooperative Decelopment Authority with the Registration No.9520-16000835 on the 22nd of February, 2006. The Pen-Coop is a member of the Federation of Makati Cooperative (FEMACO), and Cooperative Council of Makati (COCM).

                 <br></br>
                 <br></br>

                <h3>WHAT ARE THE MISSION OF PEN-COOP?</h3>
                <br></br>
                • To enligthen the members to Savings and Thrift; <br></br>
                • To have the Capital and lend it to the members in need with low interest and   easier payment terms; <br></br>
                • To teach the members the way to better life and to help them be a better person; <b></b>
                • To train members that has the qualities of being a good leader based on the Christian Faith; and <br></br>
                • To be a way for the bettermen of the community.
                <br></br>
                <br></br>

               <h3>WHO ARE THE OWNERS AND THE GOVERNING BODY IN THE COOPERATIVE?</h3>
               <br></br>
               The Cooperative is owned by all the members.The "General Assembly" is the one who approve the policies which serve as guide in the operation and governance of the Cooperative.
               <br></br>
               <br></br>

               <h3>HOW CAN THE MEMBERS USE THEIR RIGHTS ON THE GOVERNANCE OF THE COOPERATIVE?</h3>
               <br></br>
               With the help of elected leaders of the Cooperative, i.e. Board Directors, Audit Committe, Election Committee, every regular members has the right to one vote. (Big or small share capital he/she has). There are "NO PROXY Voting" in the Cooperative.
               <br/>
               <br/>

               <h3>"BUTI NALANG MAY PEN-COOP, GUMAAN ANG BUHAY" </h3>
               </p>
               <br/>
               <br/>

            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt=""/>

            <Carousel.Caption>
               <div></div>
               <h3>WHAT IS A GENERAL ASSEMBLY?</h3>
               <p> This is the annual assembly of the members of the Cooperative where they can exercise their Rights on the things that are included with the Governance and Management of the Cooperative. It is held any day every March.
               <br></br>
               <br></br>

               <h3>WHO ARE THE GOVERNING BODIES OF THE COOPERATIVE?</h3>
               <br></br>
              <h5>BOARD OF DIRECTORS</h5> - the committee who legislates and consists of nine (9) members. <br></br>
              <h5>AUDIT COMMITTEE</h5> - the committee who investigates and checks the operation and management of the Cooperative for the sake of the members. It has three (3) members.
              <br></br>
              <h5>ELECTION COMMITTEE</h5> - the committee who are assigned to implement the mandatory Seminar for Eligible Officers (SEO). They are also the ones who select/qualifies the candidates and they make sure that the election is clean. It has three (3)members.
              <br></br>
              <h5>EDUCATION & TRAINING COMMITTEE</h5> - the committee that is assigned for the continous education and training of the members and staff for the betterment of the Cooperative. It has three (3) members.
              <br></br>
              <h5>MEDIATION AND CONCILIATION COMMITTEE</h5> - the committee assigned for the task of fixing or mediating the misunderstanding between memebers.
              <br></br>
              <h5>CREDIT COMMITTEE</h5> - the committee that executes the Loan Policy.
              <br></br>
              <h5>ETHICS COMMITTEE</h5> - develops the Code of Governance and Ethical Standard to be observed by the members, officers and employees of the Cooperative subject to the approval of the BOD and ratification of the GA.
              <br></br>
              <h5>GAD COMMITTEE</h5> - Conducts gender analysis; Develops and recommends GAD and GE policies and programs/activities/projects to the board; monitors and assessed progress in the implementation of GAD programs/activities/projects towards achieving GE-Submits report to the Board and provides directional guindance.
              </p>
              <br/>
              <br/>
        </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                 className="d-block w-100"
                 src="holder.js/800x400?text=Third slide&bg=20232a"
                 alt=""/>

        <Carousel.Caption>
          <h3>WHO CAN JOIN THE PEN-COOP?</h3>
          <p>
            <h5>REGULAR MEMBER</h5> <br></br>
            • Regular Employee of the Manila Peninsula <br></br>
            • Retired Employee of the Manila Peninsula <br></br>
            • Regular Employee of the Pen-Coop <br></br>
            <br></br>
            <h5>ASSOCIATE MEMBER</h5> <br></br>
            • Dependent of regular members, age 18 and above <br></br>
            • Resigned employee of Manila Peninsula <br></br>
            • Residents of Makati and entire Luzon 
            <br></br>
            <br></br>
            <h3>HOW CAN YOU JOIN PEN-COOP?</h3> <br></br>
            1. Attend the Pre-Membership Seminar that is held in the Office of the Cooperative/or in the Training Centre; <br></br>
            2. Sign-up the subscription form and submit it to the office of the Cooperative; and <br></br>
            3. Pay membership fee.
            <br></br>
            <br></br>
            <h3>WHEN CAN BE YOUR MEMBERSHIP BE REGULAR?</h3> <br></br>
            1. If the membership approval committee certified his/her membership and <br></br>
            2. You have completed the requirements.
            <br></br>
            <br></br>
            <h3>WHAT ARE THE TYPES OF DEPOSITS IN THE COOPERATIVE?</h3>
            <br/>
            1. SHARE CAPITAL <br/>
            2. SAVINGS DEPOSIT <br/>
            3. TIME DEPOSIT <br/>
            4. FIXED DEPOSIT <br/>
          </p>
        </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     

        <Container>
            <section>
              <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title><h2>WHAT ARE THE RIGHTS <br></br>AND PRIVILEDGES OF THE MEMBERS?</h2></Card.Title>
                        <Card.Text>
                            <br></br>
                            1. You can get help and services from the cooperative; <br></br>
                            2. You can save and loan money anytime during office hours; <br></br>
                            3. You will receive dividends and patronage refund from the share capital that has been ratified by GA; <br></br>
                            4. You can check and study the financial status of the Cooperative; <br></br>
                            5. You can vote and be voted upon for the governance of the Cooperative. Associate members are not entitled to vote. <br></br>
                            6. You can approve/disapprove the things that are being discussed and disclosed in the General Assembly. The Associate members are not included.
                            <br></br>
                            <br></br>

                            <h3>IS THERE RATINGS OF MEMBERS? 
                            <br></br>
                            WHAT ARE THE BASIS OF THE RATINGS?
                            <br></br></h3>

                            Yes, there is. It's purpose is to remind the members of their responsibilities.
                            <br></br>
                            • CLASS A (MIGS) - members are paying on the right time, regularly building up share capital and savings deposit, a good co-maker, and attending meetings regularly.
                            <br></br>
                            • CLASS B - if payment has been delayed after five (5) days grace period of past due.
                            <br></br>
                            • CLASS C - if payment has been delayed for 30 days. You are considered as deliquent.
                            <br></br>
                            <br></br>

                            *ONLY "CLASS A" MEMBERS CAN RUN FOR ANY POSITION*
                            <br></br>
                            <br></br>
                            <h3>WHAT ARE THE BENEFITS OF
                            <br></br>
                            BEING A "CLASS-A" MEMBER?
                            <br></br></h3>
                            1. Faster Loan Release
                            <br></br>
                            2. Larger Loanable Amount
                            <br></br>
                            3. Can be voted upon as Officer of the Cooperative
                        </Card.Text>
                    </Card.Body>
         <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
                </Card>         
              </CardGroup>
            </section> 
        </Container>
    


        <Footer />
      </>
    );
  }

export default About;
