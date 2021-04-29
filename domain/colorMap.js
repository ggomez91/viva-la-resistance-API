/**
 * Set of colors and known values.
 * Reference: `https://en.wikipedia.org/wiki/Electronic_color_code`
 */
const colorMap = {
  none: {
    tolerancePercent: 20,
  },
  pink: {
    multiplier: 0.001,
  },
  silver: {
    multiplier: 0.01,
    tolerancePercent: 10,
  },
  gold: {
    multiplier: 0.1,
    tolerancePercent: 5,
  },
  black: {
    significanDigit: 0,
    multiplier: 1,
  },
  brown: {
    significanDigit: 1,
    multiplier: 10,
    tolerancePercent: 1,
  },
  red: {
    significanDigit: 2,
    multiplier: 100,
    tolerancePercent: 2,
  },
  orange: {
    significanDigit: 3,
    multiplier: 1000,
    tolerancePercent: 0.05,
  },
  yellow: {
    significanDigit: 4,
    multiplier: 10_000,
    tolerancePercent: 0.02,
  },
  green: {
    significanDigit: 5,
    multiplier: 100_000,
    tolerancePercent: 0.5,
  },
  blue: {
    significanDigit: 6,
    multiplier: 1_000_000,
    tolerancePercent: 0.25,
  },
  violet: {
    significanDigit: 7,
    multiplier: 10_000_000,
    tolerancePercent: 0.1,
  },
  gray: {
    significanDigit: 8,
    multiplier: 100_000_000,
    tolerancePercent: 0.01,
  },
  white: {
    significanDigit: 9,
    multiplier: 1_000_000_000,
  },
};

module.exports = colorMap;
