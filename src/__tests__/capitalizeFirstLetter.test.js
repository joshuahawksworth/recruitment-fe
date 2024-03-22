import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

describe('capitalizeFirstLetter function', () => {
    test('should capitalize the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    test('should handle if input is a number', () => {
        expect(capitalizeFirstLetter(123)).toBe('123');
    });
});