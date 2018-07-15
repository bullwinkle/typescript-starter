console.log('hello typescript!');

type TFactor = 1 | 2;
type TSetCost = (newCost:number, factor: TFactor) => number;

const setCost: TSetCost = function (x, y) {
	return x * y;
};

setCost(1,2);