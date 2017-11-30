import { expect } from 'chai';

describe('Server test', () => {
  it('should add function run properly', () => {
    const add = (a, b) => a + b;
    const res = add(1, 2);
  
    expect(res).to.equal(3);
  });
});
