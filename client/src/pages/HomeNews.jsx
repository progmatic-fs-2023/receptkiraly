import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import NewsFeed from './NewsFeed';

function HomeNews() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}`).then((response) => {
      if (response.ok) setIsConnect(true);
    });
  }, []);

  return (
    <div>
      Hello project!
      <ul>
        <li>
          {isConnect ? '✅' : '️❗️'} Connect to backend {!isConnect && 'failed'}
        </li>
      </ul>
      <NewsFeed />
    </div>
  );
}

export default HomeNews;
