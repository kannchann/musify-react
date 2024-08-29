import React from 'react';
import styles from './style';
import { Navbar, Hero } from './components';


const App = () => (
    <div>
      <div className={`bg-primaryDark ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Navbar />
        </div>
      </div>

      <div className={`bg-primaryDark ${styles.flexStart}`}>
      <div className='w-[600px] h-[600px] absolute bottom-0 -left-5 bg-primaryBlue rounded-full blur-[500px]'></div>
      <div className='w-[600px] h-[600px] absolute top-0 -right-5 bg-primaryPurple rounded-full blur-[500px]'></div>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
{/* 
      <div className={` bg-primaryBlue ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Trends
          stats
          banner
          accessories
          newarrivals
          download
          footer

        </div>
      </div> */}

    </div>
  )

export default App