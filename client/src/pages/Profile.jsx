import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import UserData from '../components/UserData';

function Profile() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  return (
    <div>
      Bejelentkeztél
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
      <UserData />
    </div>
  );
}

export default Profile;