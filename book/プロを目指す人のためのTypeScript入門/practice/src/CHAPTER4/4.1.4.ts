
type Human = {
    height: number;
    weight: number;
};

const calcBMI = ({
    height, weight
}: Human): number => {
    return weight / height ** 2;
};
const shinya: Human = { height: 1.67, weight: 79 };

console.log(calcBMI(shinya));

