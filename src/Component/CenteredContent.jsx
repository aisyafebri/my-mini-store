import React from 'react';
import Banner from './Banner';
import FundraiserCard from './FundraiserCard';
import ButtonCenter from './ButtonCenter';
import NewsPenggalangan from './NewsPenggalangan';
import DonasiCard from './DonasiCard';
import ProgSpesialCard from './ProgSpesialCard';

 
const App = () => {
  return (
    <div>
      <Banner />
      <FundraiserCard />
      <ButtonCenter />
      <NewsPenggalangan />
      <br />
      <br />
      <br />
      <DonasiCard />
      <br />
      <ProgSpesialCard />
      
    </div>
  );
};

export default App;