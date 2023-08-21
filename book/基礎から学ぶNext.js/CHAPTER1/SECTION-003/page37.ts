const stringOrNumberFunction = (arg: string | number) => {
    if (typeof arg === 'string') {
        return arg.length;
    } else if (typeof arg === 'number') {
        return arg;
    }
};