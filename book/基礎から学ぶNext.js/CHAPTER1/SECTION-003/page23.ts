let anyVariable: any = 1;
anyVariable = 'string';
anyVariable = true;

let numberVariable: number = anyVariable;
let unknownVariable: unknown = 1;
unknownVariable = 'string';
unknownVariable = true;

// numberVariable = unknownVariable;


// const object1: {
//     numberPropety: number;
//     stringPropety: string;
// } = {
//     numberPropety: 1,
//     stringPropety: 'string'
// };

const object1: {
    numberProperty: number,
    stringProperty?: string;
} = {
    numberProperty: 1
}

console.log(object1.numberProperty);
console.log(object1.stringProperty);