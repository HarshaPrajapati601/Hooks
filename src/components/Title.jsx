import React from 'react';

const Title = () => {
  console.log("Title 1")
  return (
    <div className="Title">
     Use callback Tasks
    </div>
  );
}

export default React.memo(Title);
