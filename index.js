import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, FooterLinkTitle } from './FooterElements';
import { SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights, WebsiteDesigns } from './FooterElements';
import imgLogo from '../../images/logo.png';

const Footer = () => {
  return (
    
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <img src={imgLogo} alt='logo' style={{width:"300px", height:"300px"}}></img>
            <FooterLinkItems>

            </FooterLinkItems>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Pen-Coop</FooterLinkTitle>
                        <FooterLink to='/signin'>A Cooperative that is committed 
                        to serve its members and community with integrity and will continue to perform its best to fully achieve its mission, vision and goals.</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/services'>Services</FooterLink>
                        <FooterLink to='/gallery'>Gallery</FooterLink>
                        <FooterLink to='/about'>Terms of Services</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media </FooterLinkTitle>
                        <FooterLink to='https://www.facebook.com/pencoop.mpc'>Facebook</FooterLink>
                        <FooterLink><h6>OPENING HOURS: <br></br>MONDAY to SATURDAY (9:00am to 6:00pm)</h6></FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/signin'>Contact #: <br></br>(02) - 8353 - 2214 <br></br>
                        09567536518 & 09399080338</FooterLink>
                        <FooterLink to='/signin'>Email Address: pencoop@hotmail.com <br></br>pencoop2006@gmail.com</FooterLink>
                        <FooterLink to='/signin'>Office Address: <br></br>#2344 Corner Onyx and Primo Rivera St, <br></br>
                            Brgy La Paz, Makati City</FooterLink>
                </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                       PENINSULA MANILA <br></br>MULTI-PURPOSE COOPERATIVE
                    </SocialLogo>
                    <WebsiteRights>Copyright © 2023 Pen-Coop <br></br> All rights reserved.</WebsiteRights>
                    <WebsiteDesigns> Designed by: Rhemie Sibug</WebsiteDesigns>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/pencoop.mpc" target="_blank"
                        aria-label="Facebook"><FaFacebook />
                    </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Instagram"><FaInstagram />
                    </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Youtube"><FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

