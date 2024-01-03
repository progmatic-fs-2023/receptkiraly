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
      <BattleCard
        imageLeftUrl="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
        imageRightUrl="https://i0.wp.com/www.onceuponachef.com/images/2020/09/Sprinkle-Funfetti-Cake-scaled.jpg?resize=760%2C896&ssl=1"
        title="Cake of 2024"
        description="Vote for your favorite"
      />
    </div>
  );
}

export default HomeNews;
