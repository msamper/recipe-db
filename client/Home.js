import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
    </React.Fragment>
  );
}

export default withRoot(Index);
