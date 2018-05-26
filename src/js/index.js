import { sum } from './sum';
import { currentTime } from './currentTime';
import  {lodash } from './lodash';

const calc = (a, b, c, d) => (a + b) - (c * d);
console.log(calc(1, 1000, 1000, 2));
