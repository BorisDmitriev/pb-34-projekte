const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. The Fortune Teller", () => {
    it("`tellFortune` recieves `Job`, `Location`, `Partner`, `numOfKids` arguments and returns the Users Fortune", () => {
        const solution = rewire("../index.js");
        const tellFortune = solution.__get__("tellFortune");
        expect(tellFortune("ball player", "spain", "Shaq", 3)).toEqual(expect.stringMatching(/ball player/i), expect.stringMatching(/spain/i), expect.stringMatching(/Shaq/i), expect.stringMatching(/3/i));
    });
});

describe("2. Calculate Dog Age", () => {
    it("`calculateDogAge` should Calculate dogs age in `human years`", () => {
        const solution = rewire("../index.js");
        const calculateDogAge = solution.__get__("calculateDogAge");
        expect(calculateDogAge(1)).toEqual(expect.stringMatching(/7/i), expect.stringMatching(/in dog year/i));
    });
});

describe("3. Lifetime Supply Calculator", () => {
    it("`calculateSupply` recieves `age`, `amount per day` and returns the number of snacks needed for lifetime", () => {
        const solution = rewire("../index.js");
        const calcSupply = solution.__get__("calculateSupply");
        expect(calcSupply(28, 36)).toEqual(expect.stringMatching(/need 946080/i), expect.stringMatching(/ripe old age 100/i));
    });
});

describe("4. Geometrizer", () => {
    it("`calcCircumference` given a `radius` returns the Circumfrence", () => {
        const solution = rewire("../index.js");
        const calcCircumference = solution.__get__("calcCircumference");
        expect(calcCircumference(5)).toEqual(expect.stringMatching(/circumference/i), expect.stringMatching(/31.41592653589793/i));
    });
    it("`calcArea` given a `radius` returns the Area", () => {
        const solution = rewire("../index.js");
        const calcArea = solution.__get__("calcArea");
        expect(calcArea(5)).toEqual(expect.stringMatching(/area/i), expect.stringMatching(/78.53981633974483/i));
    });
});

describe("5. Temperature Converter", () => {
    it("`celsiusToFahrenheit` given a `celsius` number returns the Fahrenheit", () => {
        const solution = rewire("../index.js");
        const celsiusToFahrenheit = solution.__get__("celsiusToFahrenheit");
        expect(celsiusToFahrenheit(30)).toEqual(expect.stringMatching(/30°C/i), expect.stringMatching(/86°F/i));
    });
    it("`fahrenheitToCelsius` given a `Fahrenheit` number returns the Celsius", () => {
        const solution = rewire("../index.js");
        const fahrenheitToCelsius = solution.__get__("fahrenheitToCelsius");
        expect(fahrenheitToCelsius(86)).toEqual(expect.stringMatching(/86°F/i), expect.stringMatching(/30°C/i));
    });
});
