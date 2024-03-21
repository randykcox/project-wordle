import React from 'react';
import Banner from '../Banner'

function LoseBanner({ children }) {
  return (
    <Banner type={'sad'}>
      {children}
    </Banner>
  )
}

export default LoseBanner;
