const removeFromArray = (array, ...values) =>
    array.filter((item) => !values.includes(item));


removeFromArray([1, 2, 3, 4], 3,2);
// Do not edit below this line
module.exports = removeFromArray;
