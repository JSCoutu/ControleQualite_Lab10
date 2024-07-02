const myApp = require('../src/app');



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

test('adds 2 integer and the result is valid', () => {
    let number1 = getRandomInt(100);
    let number2 = getRandomInt(100);
    let total = myApp.sum(number1, number2);

    expect(total).toBe(number1 + number2);
});

describe('Test de la fonction isPalindrome', function () {
    beforeAll(() => {
        console.log("BEFORE ALL")
    });
    describe('est positif', function () {
        beforeAll(() => {
            console.log("BEFORE ALL")
        });
        test('reverse a string and result is the same', () => {
            expect(myApp.isPalindrome("a")).toBe(true);
        });
        test('reverse a string and result is the same', () => {
            expect(myApp.isPalindrome("aaaa")).toBe(true);
        });
        test('reverse a string and result is the same', () => {
            expect(myApp.isPalindrome("laval")).toBe(true);
        });
        test('reverse a string and result is the same', () => {
            expect(myApp.isPalindrome("racecar")).toBe(true);
        });
        afterAll(() => {
            console.log("AFTER ALL")
        });
    }),
        describe('est negatif', function () {
            beforeAll(() => {
                console.log("BEFORE ALL")
            });
            test('reverse a string and result is NOT the same', () => {
                expect(myApp.isPalindrome("ab")).toBe(false);
            });
            test('reverse a string and result is NOT the same', () => {
                expect(myApp.isPalindrome("launchcode")).toBe(false);
            });
            test('reverse a string and result is NOT the same', () => {
                expect(myApp.isPalindrome("abA")).toBe(false);
            });
            test('reverse a string and result is NOT the same', () => {
                expect(myApp.isPalindrome("so many dynamos")).toBe(false);
            });
            afterAll(() => {
                console.log("AFTER ALL")
            });
        })
    afterAll(() => {
        console.log("AFTER ALL")
    });
});
test('compare currency values', () => {

    expect(myApp.fromEuroToDollar(1)).toBeCloseTo(myApp.oneEuroIs["USD"], 2);
    expect(myApp.fromEuroToJapanYen(1)).toBeCloseTo(myApp.oneEuroIs["JPY"], 2);
    expect(myApp.fromEuroToBritish(1)).toBeCloseTo(myApp.oneEuroIs["GBP"], 2);
});