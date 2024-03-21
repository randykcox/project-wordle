import React from 'react';

function Banner({ children, type = 'normal' }) {
  return (
    <>
      <div className={type + " banner"}>
        <p>{children}</p>
      </div>
    </>
  )
}

export default Banner;
