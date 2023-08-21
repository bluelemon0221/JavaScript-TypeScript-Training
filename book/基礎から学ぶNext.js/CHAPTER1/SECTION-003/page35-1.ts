const objectArgFunc = ({
    stringValue
}: {
    stringValue: string;
}) : boolean => {
    if (stringValue === 'string1') {
        return true;
    }
    return false;
}