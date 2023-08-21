type NewObjectType1 = {
    numberValue1: number;
    stringValue1: string;
};

type NewObjectType2 = {
    numberValue2: number;
    stringValue2: string;
};

const objectUnionFunction = (
    arg: NewObjectType1 | NewObjectType2
) => {
    if ('numberValue1' in arg) {
        return arg.stringValue1;
    } else if ('numberValue2' in arg) {
        return arg.stringValue2;
    }
};

const objectUnionFunction2 = (
    arg: NewObjectType1 | NewObjectType2
) => {
    if ('numberValue1' in arg) {
        return arg.stringValue1;
    } else {
        return arg.stringValue2;
    }
}