
const checkFizzBuzz2 = (value: number): string => {
    switch (true) {
        case value % 3  === 0 && value % 5 === 0:
            return "FizzBuzz";
        case value % 5 === 0:
            return "Buzz";
        case value % 3 === 0:
            return "Fizz";
        default:
            return String(value);
    }
}
let result: string = "";
for (let i = 1; i <= 100; i++) {
    result += `${checkFizzBuzz2(i)} `;
}
result = result.slice(0, -1);
console.log(result);