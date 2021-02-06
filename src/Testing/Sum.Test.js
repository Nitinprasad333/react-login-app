// const sum = require('../components/Sum');
import { sum } from '../components/Sum';

test('add 1+2 to eqal 3',()=>{
    expect(sum(1,2)).toBe(3)
})