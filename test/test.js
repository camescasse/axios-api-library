import { expect } from "chai";

describe('Test Group', () => {
    it('should return 4 when given 2 + 2', () => {
        function addition(a, b) {
            return a + b;
        }
        const result = addition(2, 2);
        
        expect(result).equals(4);
    })
})