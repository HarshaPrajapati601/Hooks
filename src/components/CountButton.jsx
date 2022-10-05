import React from 'react';

const CountButton = ({handleCount}) => {
  console.log("Count button 3")
  return (
    <div className="CountButton">
    <button onClick={handleCount}>
      Increment the count
    </button>
    </div>
  );
}

export default React.memo(CountButton);
