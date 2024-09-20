import React from 'react';
import Banner from './Banner';
import DownloadButtons from './DownloadButtons';
import FundraiserCard from './FundraiserCard';
 
const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Banner />
      <br />
      <FundraiserCard />
    </div>
  );
};

export default App;