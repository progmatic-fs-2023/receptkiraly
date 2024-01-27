export function transformArrayToIntegers(arrayOfObjects, key) {
  return arrayOfObjects.map(obj => parseInt(obj[key], 10));
}

const unique = array => [...new Set(array)];

function isNumeric(value) {
  return !Number.isNaN(Number(value));
}

// groups an array and returns an object, each key of the object will represent a group
function groupBy(array, keyOrIterator) {
  let iterator;
  let groupKey;

  // use the function passed in, or create one
  if (typeof keyOrIterator !== 'function') {
    groupKey = String(keyOrIterator);
    iterator = item => item[groupKey];
  } else {
    iterator = keyOrIterator;
  }

  return array.reduce((acc, item) => {
    const key = isNumeric(iterator(item)) ? `REC-${iterator(item)}` : iterator(item);
    acc[key] = acc[key] || []; // eslint-disable-line no-param-reassign
    acc[key].push(item);
    return acc;
  }, {});
}
// Preprocess recipes by creating array at label_name
export const preprocess = array =>
  Object.values(groupBy(array, elem => elem.id)).map(arr => {
    const labels = arr.reduce((acc, curr) => {
      if (curr.label_name) {
        acc.push(curr.label_name);
      }
      return acc;
    }, []);
    const ingredients = arr.reduce((acc, curr) => {
      if (curr.ingredient_name) {
        acc.push(curr.ingredient_name);
      }
      return acc;
    }, []);
    return { ...arr[0], label_name: unique(labels), ingredient_name: unique(ingredients) };
  });

export const requireLabels = (recipes, labels) => {
  if (labels !== undefined) {
    return recipes.filter(recipe => labels.every(label => recipe.label_name.indexOf(label) > -1));
  }
  return recipes;
};

const nRandom = (n, arr) => arr.sort(() => 0.5 - Math.random()).slice(0, n);

export const nRandomByCategory = (n, recipes) =>
  Object.entries(groupBy(recipes, elem => elem.main_category_name)).map(([category, arr]) => ({
    category,
    recipes: nRandom(n, arr),
  }));
