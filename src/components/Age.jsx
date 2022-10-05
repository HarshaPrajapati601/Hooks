import React from 'react';

const Age = ({age}) => {
  console.log("age 4");
  return (
    <div className="Age">
     The Age is {age}
    </div>
  );
}

export default React.memo(Age);
