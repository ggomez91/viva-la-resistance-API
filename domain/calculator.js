const colorMap = require("./colorMap");

/**
 * Tries to get a property for a given color.
 * Throws an error if the color is unknown or if the property is invalid for it.
 * @param {string} color - the color name to get values for
 * @param {string} property - the name of the value to get
 * @returns value
 */
function _tryToMapColor(color, property) {
  if (colorMap[color] == null) {
    throw new Error(`Unknown color '${color}'`);
  }
  const value = colorMap[color][property];
  if (value == null) {
    throw new Error(`Invalid color '${color}' for ${property}`);
  }
  return value;
}

/**
 * Maps a color from band 1 or 2 to its significant value.
 * Throws an error if the color is unknown or if the property is invalid for it.
 * @param {string} color
 * @returns digit
 */
function mapDigit(color) {
  return _tryToMapColor(color, "significanDigit");
}

/**
 * Maps a color from band 3 to multiplier value.
 * Throws an error if the color is unknown or if the property is invalid for it.
 * @param {string} color
 * @returns multiplier value
 */
function mapMultiplier(color) {
  return _tryToMapColor(color, "multiplier");
}

/**
 * Maps a color  from band 4 to its tolerance value (in percentage).
 * Throws an error if the color is unknown or if the property is invalid for it.
 * @param {string} color
 * @returns tolerance in percentage
 */
function mapTolerancePercent(color) {
  return _tryToMapColor(color, "tolerancePercent");
}

/**
 * Decodes a list of 4 colors to its resistance and tolerance as an object.
 * @param {[string]} colors List of 4 colors to decode
 * @returns {ohms: number, tolerancePercent: number}
 */
function calculateResistor(colors) {
  const firstDigit = mapDigit(colors[0]);
  const secondDigit = mapDigit(colors[1]);
  const multiplier = mapMultiplier(colors[2]);
  const tolerancePercent = mapTolerancePercent(colors[3]);

  return {
    ohms: (secondDigit + firstDigit * 10) * multiplier,
    tolerancePercent,
  };
}

module.exports = {
  mapDigit,
  mapMultiplier,
  mapTolerancePercent,
  calculateResistor,
};
