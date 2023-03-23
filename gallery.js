import React from 'react';
import { GalleryContainer, GalleryBg, GalleryBg2,VideoBg, Container2, Container3, GalleryBg3} from './GalleryElements.js';
import Video from '../../videos/v.mp4';
import Video2 from '../../videos/2.mp4';
import Video3 from '../../videos/re3.mp4';
import './GalleryElements.js';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';


function Gallery () {
  return (
    <>
      <Sidebar />
      <Navbar />

      <section>
      <h1 style={{textAlign: 'center'}}>Social Commitments</h1>
      <br></br>
      <h2 style={{textAlign: 'center', color: 'darkgoldenrod'}}>Pen-Coop Cafe Soft Opening</h2>
      </section>
      
      <GalleryContainer>
      <GalleryBg>
        <VideoBg autoPlay loop src={Video} type='video/v.mp4' />
      </GalleryBg>
      </GalleryContainer>

      <section2>
      <h2 style={{textAlign: 'center', color: 'darkgoldenrod'}}>Pen-Coop Medical Missions</h2>
      </section2>

      <Container2>
      <GalleryBg2>
        <VideoBg autoPlay loop src={Video2} type='video/2.mp4' />
      </GalleryBg2>
      </Container2>

      <section3>
      <h2 style={{textAlign: 'center', color: 'darkgoldenrod'}}>LiveLihood Activities</h2>
      </section3>

      <Container3>
      <GalleryBg3>
        <VideoBg autoPlay loop src={Video3} type='video/re3.mp4' />
      </GalleryBg3>
      </Container3>



      <Footer />
      </>
  );
};

export default Gallery;







// import Header from '../../components/Header';
// import HeaderImage from '../../images/logo.png'
// import './about.css';

// const About = () => {
//   return (
//     <>
//       <h3>About Page</h3>
//     {/* <Header title="About Us" image={}></Header> */}
//     </>
//   );
// };

// export default About;