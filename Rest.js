const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2});

const doubleAndReturnArgs = (array, ..args) => {
    const doubledArgs = args.map((arg) => arg * 2);
    return [...array, ...doubledArgs];
};
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  };
  
  const extend = (array1, array2) => [...array1, ...array2];

  const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

  const removeKey = (obj, key) => {
    const { [key]: removedKey, ...rest } = obj;
    return rest;
  };
  
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

  const update = (obj, key, val) => ({ ...obj, [key]: val });
