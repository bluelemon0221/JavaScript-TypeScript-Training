type UnionType = number | string;

type NewObjectType1 = {
    numberValue1: number;
    stringValue1: string;
};

type NewObjectType2 = {
    numberValue2: number;
    stringValue2: string;
}

type UnionObjectType = NewObjectType1 | NewObjectType2;
const obj1: UnionObjectType = {
    numberValue1: 1,
    stringValue1: '1'
};
const obj2: UnionObjectType = {
    numberValue2: 2,
    stringValue2: '2'
};
// const obj3: UnionObjectType = {
//     numberValue1: 1,
//     stringValue2: '2'
// };