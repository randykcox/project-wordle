import React from 'react';
import Banner from '../Banner'

function WinBanner({ children }) {
  return (
    <Banner type="happy">
      {children}
    </Banner>
  )
}

export default WinBanner;
