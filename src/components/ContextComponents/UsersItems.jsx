import React, { useContext } from 'react';
import { MyContext } from './context';

const UsersItems = (props) => {
    const theContext = useContext(MyContext);
    console.log(theContext)
  return (
    <div className="UsersItems">
     The UsersItems is user Items
    </div>
  );
}

export default React.memo(UsersItems);