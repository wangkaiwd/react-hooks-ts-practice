let lastId = 0;
const creteNewId = (prefix = 'id') => {
  lastId++;
  return `${prefix}-${lastId}`;
};
export { creteNewId };
