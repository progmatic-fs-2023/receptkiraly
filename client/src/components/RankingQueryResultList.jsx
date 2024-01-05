import PropTypes from 'prop-types';
import RankingQueryResultItem from './RankingQueryResultItem';

function RankingQueryResultList({ queryRanking, actualQueryValue }) {
  return queryRanking.map((element) => (
    <ul key={element.key}>
      <RankingQueryResultItem
        queryValue={actualQueryValue}
        key={element.key}
        img={element.img}
        name={element.name}
        description={element.description}
        score={element.score}
        reviews={element.reviews}
        rank={element.rank}
      />
    </ul>
  ));
}

RankingQueryResultList.propTypes = {
  query: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
    }),
  ).isRequired,
  queryValue: PropTypes.string.isRequired,
};
export default RankingQueryResultList;
