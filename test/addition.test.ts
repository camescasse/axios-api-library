import { describe, it, expect } from 'vitest';

describe('Test Group', () => {
  it('should return 4 when given 2 + 2', () => {
    const addition = (first: number, second: number) => first + second;
    const result = addition(2, 2);

    expect(result).equals(4);
  });
});
