import React from 'react';

const Count = (props) => {
  console.log("Count 2")
  return (
    <div className="Count">
     The Count is {props.count}
    </div>
  );
}

export default React.memo(Count);