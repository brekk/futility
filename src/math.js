import {curry} from 'katsu-curry'

/**
 * === comparison
 * @method equals
 * @param {*} a - anything
 * @param {*} b - anything
 * @returns {boolean} whether a triple-equals b
 * @public
 * @alias equal
 * @example
 * import {equals} from 'f-utility'
 * const SAFE_ID = 123456
 * const equalsID = equals(SAFE_ID)
 * equalsID(200) // false
 * equalsID(SAFE_ID) // true
 */
export const 𝘍equals = (a, b) => a === b
export const equals = curry(𝘍equals)
export const equal = equals

/**
 * > comparison but inverted
 * @method greaterThan
 * @alias gt
 * @param {*} b - anything
 * @param {*} a - anything
 * @returns {boolean} whether a > b
 * @public
 * @alias equal
 * @example
 * import {greaterThan, gt} from 'f-utility'
 * gt(100, 99) // false
 * gt(100, 100) // false
 * gt(100, 101) // true
 */
export const 𝘍greaterThan = (b, a) => a > b
export const greaterThan = curry(𝘍greaterThan)
export const gt = greaterThan

/**
 * >= comparison but inverted
 * @method greaterThanOrEqualTo
 * @alias gte
 * @param {*} b - anything
 * @param {*} a - anything
 * @returns {boolean} whether a > b
 * @public
 * @alias equal
 * @example
 * import {greaterThanOrEqualTo, gte} from 'f-utility'
 * gte(100, 99) // false
 * gte(100, 100) // true
 * gte(100, 101) // true
 */
export const 𝘍greaterThanOrEqualTo = (b, a) => a >= b
export const greaterThanOrEqualTo = curry(𝘍greaterThanOrEqualTo)
export const gte = greaterThanOrEqualTo

/**
 * < comparison but inverted
 * @method lessThan
 * @alias lt
 * @param {*} b - anything
 * @param {*} a - anything
 * @returns {boolean} whether a > b
 * @public
 * @alias equal
 * @example
 * import {lessThan, lt} from 'f-utility'
 * lt(100, 99) // true
 * lt(100, 100) // false
 * lt(100, 101) // false
 */
export const 𝘍lessThan = (b, a) => a < b
export const lessThan = curry(𝘍lessThan)
export const lt = lessThan

/**
 * < comparison but inverted
 * @method lessThanOrEqualTo
 * @alias lte
 * @param {*} b - anything
 * @param {*} a - anything
 * @returns {boolean} whether a > b
 * @public
 * @alias equal
 * @example
 * import {lessThanOrEqualTo, lte} from 'f-utility'
 * lte(100, 99) // true
 * lte(100, 100) // true
 * lte(100, 101) // false
 */
export const 𝘍lessThanOrEqualTo = (b, a) => a <= b
export const lessThanOrEqualTo = curry(𝘍lessThanOrEqualTo) // reverse arrow!
export const lte = lessThanOrEqualTo

/**
 * convenience method for Math.round
 * @method round
 * @param {number} x - a number
 * @returns {number} rounded number
 * @public
 * @example
 * import {round} from 'f-utility'
 * round(10.3) // 10
 * round(10.9) // 11
 */
export const {round} = Math

/**
 * add things
 * @method add
 * @param {number} a - a number
 * @param {number} b - b number
 * @returns {number} sum
 * @public
 * @example
 * import {add} from 'f-utility'
 * add(4, 2) // 6
 */
export const 𝘍add = (a, b) => b + a
export const add = curry(𝘍add)

/**
 * subtract things
 * @method subtract
 * @param {number} a - a number
 * @param {number} b - b number
 * @returns {number} subtracted
 * @public
 * @example
 * import {subtract} from 'f-utility'
 * subtract(4, 2) // -2
 */
export const 𝘍subtract = (a, b) => b - a
export const subtract = curry(𝘍subtract)

/**
 * multiply things
 * @method multiply
 * @param {number} a - a number
 * @param {number} b - b number
 * @returns {number} multiplied
 * @public
 * @example
 * import {multiply} from 'f-utility'
 * multiply(4, 2) // 8
 */
export const 𝘍multiply = (a, b) => b * a
export const multiply = curry(𝘍multiply)

/**
 * divide things
 * @method divide
 * @param {number} a - a number
 * @param {number} b - b number
 * @returns {number} divided
 * @public
 * @example
 * import {divide} from 'f-utility'
 * divide(4, 2) // 0.5
 */
export const 𝘍divide = (a, b) => b / a
export const divide = curry(𝘍divide)

/**
 * exponentiate things
 * @method pow
 * @param {number} a - a number
 * @param {number} b - b number
 * @returns {number} b to the power of a
 * @public
 * @example
 * import {pow} from 'f-utility'
 * pow(4, 2) // 16
 */
export const 𝘍pow = (a, b) => Math.pow(b, a)
export const pow = curry(𝘍pow)
