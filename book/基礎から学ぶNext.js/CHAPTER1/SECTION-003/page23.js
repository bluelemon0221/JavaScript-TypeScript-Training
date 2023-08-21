var anyVariable = 1;
anyVariable = 'string';
anyVariable = true;
var numberVariable = anyVariable;
var unknownVariable = 1;
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
var object1 = {
    numberProperty: 1
};
console.log(object1.numberProperty);
console.log(object1.stringProperty);
