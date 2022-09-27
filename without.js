const without = function(source, itemsToRemove) {
  let subset = [];
  
  for (let element of source) {
    let result = true;
    for (let item of itemsToRemove) {
      if (element === item) {
        result = false;
      }
    }
    if (result) {
      subset.push(element);
    }
  }

  return subset;
};

module.exports = without;