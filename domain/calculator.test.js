const {
  mapDigit,
  mapMultiplier,
  mapTolerancePercent,
  calculateResistor,
} = require("./calculator");

describe("mapDigit()", () => {
  it("can map all valid colors to the expected values", () => {
    const validColors = [
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "gray",
      "white",
    ];
    const expectedDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(validColors.map(mapDigit)).toEqual(expectedDigits);
  });
  it("throws an error on unknown colors", () => {
    const invalidColor = "cyan";
    expect(() => mapDigit(invalidColor)).toThrow();
  });

  it("throws an error on invalid colors", () => {
    const invalidColor = "gold";
    expect(() => mapDigit(invalidColor)).toThrow();
  });
});

describe("mapMultiplier()", () => {
  it("can map all valid colors to the expected values", () => {
    const validColors = [
      "pink",
      "silver",
      "gold",
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "gray",
      "white",
    ];
    const expectedDigits = [
      0.001,
      0.01,
      0.1,
      1,
      10,
      100,
      1000,
      10_000,
      100_000,
      1000_000,
      10_000_000,
      100_000_000,
      1_000_000_000,
    ];
    expect(validColors.map(mapMultiplier)).toEqual(expectedDigits);
  });
  it("throws an error on unknown colors", () => {
    const invalidColor = "cyan";
    expect(() => mapMultiplier(invalidColor)).toThrow();
  });

  it("throws an error on invalid colors", () => {
    const invalidColor = "none";
    expect(() => mapMultiplier(invalidColor)).toThrow();
  });
});

describe("mapTolerancePercent()", () => {
  it("can map all valid colors to the expected values", () => {
    const validColors = [
      "none",
      "silver",
      "gold",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "gray",
    ];
    const expectedDigits = [20, 10, 5, 1, 2, 0.05, 0.02, 0.5, 0.25, 0.1, 0.01];
    expect(validColors.map(mapTolerancePercent)).toEqual(expectedDigits);
  });
  it("throws an error on unknown colors", () => {
    const invalidColor = "cyan";
    expect(() => mapTolerancePercent(invalidColor)).toThrow();
  });

  it("throws an error on invalid colors", () => {
    const invalidColors = ["pink", "black", "white"];
    invalidColors.forEach((invalidColor) => {
      expect(() => mapTolerancePercent(invalidColor)).toThrow();
    });
  });
});

describe("calculateResistor()", () => {
  it("calculates the resistor values from 4 colors", () => {
    const examples = [
      ["red", "red", "orange", "gold"],
      ["yellow", "violet", "brown", "gold"],
      ["blue", "gray", "black", "gold"],
    ];
    const expectedValues = [
      { ohms: 22_000, tolerancePercent: 5 },
      { ohms: 470, tolerancePercent: 5 },
      { ohms: 68, tolerancePercent: 5 },
    ];
    examples.forEach((colors, i) => {
      expect(calculateResistor(colors)).toEqual(expectedValues[i]);
    });
  });

  it("throws on invalid colors", () => {
    expect(() => calculateResistor(["purple", "red", "red", "red"])).toThrow();
  });

  it("throws on invalid parameters", () => {
    expect(() => calculateResistor(["red", "red"])).toThrow();
  });
});
