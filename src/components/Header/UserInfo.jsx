import { useEffect, useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    // DOWNLOAD PLACE
  });

  return <span>{user}</span>;
}

export default UserInfo;
