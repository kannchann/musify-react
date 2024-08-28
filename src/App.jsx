import React from 'react';
import styles from './style';
import { Navbar } from './components';


const App = () => (
    <div>
      <div className={`bg-primaryPurple ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Navbar />
        </div>
      </div>

      <div className={`bg-primaryOrange ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero component
        </div>
      </div>

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
      </div>

    </div>
  )

export default App