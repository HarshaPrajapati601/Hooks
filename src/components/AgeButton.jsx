import React from 'react';

const AgeButton = ({handleAge}) => {
  console.log("age button 5")
  return (
    <div className="AgeButton">
     <button onClick={handleAge}>
      Increment Age
     </button>
    </div>
  );
}

export default React.memo(AgeButton);
