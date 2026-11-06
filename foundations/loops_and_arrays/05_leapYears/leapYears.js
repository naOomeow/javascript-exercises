const leapYears = function(year) {
    let isLeapYear = year % 4 === 0;
    let isCentury = year % 100 === 0;
    let isDivBy400 = year % 400 === 0;

    if (isLeapYear) {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
