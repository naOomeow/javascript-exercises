const sumAll = function(num1, num2){
    let numbers = [];
    let sum = 0;

    if (num1 > num2) {
        let temp;
        temp = num2;
        num2 = num1;
        num1 = temp;  
    };

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 > 0 && num2 > 0) {
            for (let i = num1 ; i < num2 + 1; i++){
            numbers.push(i);
            };
            
        console.log(numbers);
        let total = numbers.reduce((prev, current) => prev + current, 0);
        sum += total;
            return sum;
        } else {
            return `ERROR`;
        }
        
    }else{
        return "ERROR";
    };
};


let sum = sumAll(4, 1);
console.log(sum);
console.log(typeof sum)
// Do not edit below this line
module.exports = sumAll;