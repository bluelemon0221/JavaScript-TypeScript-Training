const objectArgFunc = (arg: {
    stringValue: string;
}): boolean => {
    if (arg.stringValue === 'string1') {
        return true;
    }
    return false;
};