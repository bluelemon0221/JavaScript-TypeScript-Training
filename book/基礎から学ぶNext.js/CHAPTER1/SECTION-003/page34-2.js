var optionalArgFunc = function (arg1) {
    if (arg1) {
        return arg1 + 10;
    }
    return 10;
};
optionalArgFunc();
optionalArgFunc(undefined);
optionalArgFunc(10);
