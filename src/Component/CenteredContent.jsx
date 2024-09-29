import React from 'react';
import Banner from './Banner';
import FundraiserCard from './FundraiserCard';
import ButtonCenter from './ButtonCenter';
import NewsPenggalangan from './NewsPenggalangan';
import DonasiCard from './DonasiCard';
import ProgSpesialCard from './ProgSpesialCard';
import Buttonfav from './Buttonfav';
import News from './News';
import PilKitaBisa from './PilKitaBisa';

 
const App = () => {
  return (
    <div>
      <Banner />
      <FundraiserCard />
      <ButtonCenter />
      <NewsPenggalangan />
      <DonasiCard />
      <ProgSpesialCard />
      <PilKitaBisa />
      <Buttonfav />
      <News />
    </div>
  );
};

export default App;