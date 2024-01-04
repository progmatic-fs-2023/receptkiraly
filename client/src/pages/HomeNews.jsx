import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import NewsCarousel from '../components/NewsCarousel';
import BattleCard from '../components/BattleCard';

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
      <NewsCarousel />
      <BattleCard battleId={1} />
    </div>
  );
}

export default HomeNews;
