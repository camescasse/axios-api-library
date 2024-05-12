import { expect } from 'chai';
import { addition } from '../src/main';

describe('Calculator Tests', () => {
  it('should return 5 when 2 is added to 3', () => {
    const result = addition(2, 3);
    expect(result).equals(5);
  });
});
