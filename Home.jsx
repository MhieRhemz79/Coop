import React, { useState } from 'react';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { homeObjOne } from '../../components/InfoSection/Data';
import Navbar from '../../components/Navbar';
// import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
function home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Footer />
    
    </>
   
  );
};

export default home;















// const Home = () =>  {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//     <Sidebar isOpen={isOpen} toggle={toggle} />
//     <Navbar toggle={toggle} />
//     <HeroSection />
//     <InfoSection {...homeObjOne}/>
//     <Footer />
//     </>
//   );
// };

// export default Home;