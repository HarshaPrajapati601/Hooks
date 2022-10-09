import React, { useContext } from 'react';
import UsersItems from './UsersItems';



const Users = () => {


  return (
    <div className="Users">
     The Users is <UsersItems />
    </div>
  );
}

export default React.memo(Users);