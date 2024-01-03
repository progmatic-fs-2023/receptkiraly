import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import NewsCarousel from '../components/NewsCarousel';
import PostRecipe from '../components/PostRecipe';

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
      <PostRecipe />
    </div>
  );
}

export default HomeNews;
