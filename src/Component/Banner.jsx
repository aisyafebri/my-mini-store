import React from 'react';
import DownloadButtons from './DownloadButtons';
import SearchBar from './SearchBar';
import Gambar from '../Assets/gam1.png';

const Banner = () => {
  const styles = {
    bannerContainer: {
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60hv',
    
      
    },
    bannerContent: {
      backgroundColor: '#3ea8ef',
      borderRadius: '15px',
      maxWidth: '500px',
      height:'50hv',
      width: '70%',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    bannerTextH1: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffffff'
    },
    bannerTextP: {
      fontSize: '16px',
      color: '#ffffff',
      marginTop: '10px'
    },
    bannerImageContainer: {
      width: '100%',
      height: '200px', // Adjust this value as needed
      overflow: 'hidden',
    },
    bannerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px',
    },
    bannerButtons: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    mobileButton: {
      marginBottom: '5px',
      width: '50%'
    },
    fundraiserCardContainer: {
      position: 'absolute',
      bottom: '-30px', // Adjust this value to control how much it overlaps
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%', // Adjust as needed
      maxWidth: '500px', // Should match or be less than bannerContent maxWidth
    }

  };

  return (
    
      <div style={styles.bannerContainer}>
      <div style={styles.bannerContent}>
        <SearchBar />
        <div style={styles.bannerText}>
          <h1 style={styles.bannerTextH1}>Saling Jaga Se-Indonesia ID</h1>
          <p style={styles.bannerTextP}>Bantu Sesama, Dibantu Bersama</p>
          <p style={styles.bannerTextP}>Donasi, zakat, dan lindungi keluarga bersama jutaan orang baik melalui aplikasi Kitabisa</p>
        </div>
        <br />
      <DownloadButtons />
      <div style={styles.bannerImageContainer}>
          <img src={Gambar} alt="Banner Image" fetchPriority='high' style={styles.bannerImage} />
        </div>
      </div>
      
    </div>
   
  );
};

export default Banner;
