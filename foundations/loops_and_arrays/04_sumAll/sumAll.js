const sumAll = function(num1, num2){
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return `ERROR`;
    } 
    if (num1 > num2) {
        let temp;
        num1 = temp;
        num2 = num1;
        temp = num2;
    }
    let arr = [];
    for (let i = num1 - 1 ; i < num2; i++){
        arr.push[i];
    };
    return arr.reduce((prev, current) => prev + current, 0);
};


// Do not edit below this line
module.exports = sumAll;