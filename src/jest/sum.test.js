function sum(a, b) {
    return a + b;
}

describe("My first test", () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

});

