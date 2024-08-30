import React from 'react';
import { Navbar, Hero } from '../layout';
import styles from '../style';

const Home = () => {
  return (
    <div>
        
         <Navbar />
      
   

      <div className={`bg-primaryDark ${styles.flexStart} relative`}>
      <div className='w-[600px] h-[600px] absolute bottom-0 -left-5 bg-primaryBlue rounded-full blur-[500px]'></div>
      <div className='w-[600px] h-[600px] absolute top-0 -right-5 bg-primaryPurple rounded-full blur-[500px]'></div>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default Home