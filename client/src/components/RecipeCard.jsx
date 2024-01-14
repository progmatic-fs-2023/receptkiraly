import PropTypes from 'prop-types';
import Icon from './Icon';
import ResponsiveImage from './ResponsiveImage';
import IconContainer from './IconContainer';
import Button from './Button';
import { Edit, Delete } from '@mui/icons-material';

/* <RecipeCard
  id={7}
  imgUrl="https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_2480_1860.webp 2480w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_2074_1556.webp 2074w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1735_1301.webp 1735w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1452_1089.webp 1452w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1215_911.webp 1215w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_1016_762.webp 1016w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_850_638.webp 850w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_711_533.webp 711w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_595_446.webp 595w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_498_374.webp 498w, https://d2vsf1hynzxim7.cloudfront.net/production/media/23976/responsive-images/air-fryer-prawns___default_416_312.webp 416w"
  minutes={55}
  difficulty="Easy"
  serves={5}
  name="Air Fryer Fried Prawns"
/> */

function RecipeCard({ id, imgUrl, minutes, difficulty, serves, name, actions }) {
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />;
  return (
    <div>
      <a className="block group" href={`/recipe/${id}`}>
        {actions ? (
          <div className="justify-between flex">
            <div className="relative  ">
              <div className="absolute top-2 left-2 bg-white bg-opacity-75 rounded hover:filter hover:invert">
                <Edit></Edit>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-2 right-2 bg-white bg-opacity-75 rounded hover:filter hover:invert">
                <Delete></Delete>
              </div>
            </div>
          </div>
        ) : null}
        <ResponsiveImage imgUrl={imgUrl} />
        <IconContainer>
          {minutes ? <Icon imgUrl="/images/time-icon.svg" text={`${minutes} mins`} /> : null}
          {difficulty ? <Icon imgUrl="/images/difficulty-icon.svg" text={difficulty} /> : null}
          {serves ? <Icon imgUrl="/images/serves-icon.svg" text={serves.toString()} /> : null}
        </IconContainer>
        <div className="flex justify-center mt-3">
          <h3 className="group-hover:text-primary">{name}</h3>
        </div>
      </a>
    </div>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  minutes: PropTypes.number,
  difficulty: PropTypes.string,
  serves: PropTypes.number,
  name: PropTypes.string.isRequired,
};

RecipeCard.defaultProps = {
  minutes: null,
  difficulty: null,
  serves: null,
};
export default RecipeCard;
