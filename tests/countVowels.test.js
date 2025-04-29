// Kevin's Test Kitchen
const countVowels = require('../countVowels');

describe('countVowels', () => {
    test('counts vowels in a regular word', () => {
        expect(countVowels('hello!')).toBe(2);
    });

    test('counts vowels in a word with no vowels', () => {
        expect(countVowels('rhythm')).toBe(0);
    });

    test('counts vowels in an empty string', () => {
        expect(countVowels('')).toBe(0);
    });

    test('counts vowels in a sentence with spaces', () => {
        expect(countVowels('I am coding!')).toBe(4);
    });

    test('counts both lowercase and uppercase vowels', () => {
        expect(countVowels('AEIOU')).toBe(5);
    });
});
