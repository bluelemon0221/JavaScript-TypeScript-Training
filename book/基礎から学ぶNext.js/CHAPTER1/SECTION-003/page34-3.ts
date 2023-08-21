const optionalArgWithDefaultFunc = (
    arg1: number = 10
): number => {
    return arg1 + 10;
};

optionalArgWithDefaultFunc();
optionalArgWithDefaultFunc(undefined);
optionalArgWithDefaultFunc(10);