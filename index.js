import Fuse from 'fuse.js';

export default (value = null, options = {}) => {
  if (!value) {
    return () => true;
  }
  const defaultOptions = {
    distance: 100,
    keys: [],
    location: 0,
    maxPatternLength: 32,
    threshold: 0.4,
  };

  let fuse = null;
  let result = null;

  return (val, key, array) => {
    if (!fuse || !result) {
      fuse = new Fuse(array, Object.assign(defaultOptions, options))
      result = fuse.search(value);
    }
    if (typeof val === 'object') {
      let idValues = val;
      options.id.split('.').forEach(key => (idValues = idValues[key]))
      if (Array.isArray(idValues)) {
        let temp = idValues.reduce((prev, idValue) => (result.indexOf(idValue) !== -1 || prev), false)
        return temp;
      }
      return result.indexOf(idValues) !== -1;
    }
    return result.indexOf(key) !== -1;
  };
};
