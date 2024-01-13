export function transformArrayToIntegers(arrayOfObjects, key) {
  return arrayOfObjects.map(obj => parseInt(obj[key], 10));
}
