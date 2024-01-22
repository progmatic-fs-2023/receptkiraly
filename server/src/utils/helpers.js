export function transformArrayToIntegers(arrayOfObjects, key) {
  return arrayOfObjects.map(obj => parseInt(obj[key], 10));
}

//groups an array and returns an object, each key of the object will represent a group
function groupBy(array, keyOrIterator) {
  let iterator, key;

  // use the function passed in, or create one
  if (typeof keyOrIterator !== 'function') {
    key = String(keyOrIterator);
    iterator = function (item) {
      return item[key];
    };
  } else {
    iterator = keyOrIterator;
  }

  return array.reduce(function (memo, item) {
    let key = iterator(item);
    memo[key] = memo[key] || [];
    memo[key].push(item);
    return memo;
  }, {});
}
//Preprocess recipes by creating array at label_name
export const prepocess = Object.values(groupBy(arr, elem => elem.id)).map(arr => {
  const labels = arr.reduce((acc, curr) => {
    curr.label_name ? acc.push(curr.label_name) : null;
    return acc;
  }, []);
  return { ...arr[0], label_name: labels };
});
