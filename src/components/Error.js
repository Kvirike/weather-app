import React from 'react';
import '../App.css'

const errorMsg = () => {

  return (
    <div className='errDiv' style={{ color: 'red', marginTop: '10px' }}>
      <h3>No City/Coutry has been found</h3>
    </div>
  );
};

export default errorMsg;