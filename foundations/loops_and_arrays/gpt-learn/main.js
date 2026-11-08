function leapYears(year) {
    if (year % 400 === 0) { return true };
    if (year % 100 === 0) { return false };
    if (year % 4 === 0) { return true };
    return false;
}

console.log(leapYears(2000)); // true
console.log(leapYears(1900)); // false
console.log(leapYears(2024)); // true
console.log(leapYears(2023)); // false