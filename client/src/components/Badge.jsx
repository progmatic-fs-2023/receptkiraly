import PropTypes from 'prop-types';

function Badge({ label }) {
    const getColorClass = () => {
        switch (label) {
            case 'vegan':
                return 'bg-green-100 text-green-800';
              case 'vegetarian':
                return 'bg-lime-100 text-lime-800';
              case 'nut-free':
                return 'bg-amber-500 text-yellow-800';
              case 'egg-free':
                return 'bg-orange-500 text-yellow-50';
              case 'dairy-free':
                return 'bg-amber-100 text-amber-500';
              case 'gluten-free':
                return 'bg-orange-100 text-orange-800';
              case 'low-carb':
                return 'bg-blue-100 text-blue-800';
              case 'spicy':
                return 'bg-red-400 text-red-900';
              case 'alcoholic':
                return 'bg-gray-500 text-gray-100';
              case 'non-alcoholic':
                return 'bg-teal-100 text-teal-800';
              case 'seafood':
                return 'bg-aqua-100 text-aqua-800';
              default:
                return 'bg-gray-100 text-gray-800';
        }
      };

      const colorClass = getColorClass();

  return (
    <span className={`${colorClass} text-sm font-medium me-2 px-2.5 py-0.5 rounded p-1 m-1`}>#{label}</span>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Badge;