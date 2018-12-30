'use strict'

import { factory } from './utils/factory'
import { version } from './version'
import {
  createBigNumberE,
  createBigNumberPhi,
  createBigNumberPi,
  createBigNumberTau
} from './utils/bignumber/constants'

export const createTrue = /* #__PURE__ */ factory('true', [], () => true)
export const createFalse = /* #__PURE__ */ factory('false', [], () => false)
export const createNull = /* #__PURE__ */ factory('null', [], () => null)

export const createInfinity = /* #__PURE__ */ recreateFactory(
  'Infinity',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(Infinity)
    : Infinity
)

export const createNaN = /* #__PURE__ */ recreateFactory(
  'NaN',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(NaN)
    : NaN
)

export const createPi = /* #__PURE__ */ recreateFactory(
  'pi',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? createBigNumberPi(BigNumber)
    : Math.PI
)

export const createTau = /* #__PURE__ */ recreateFactory(
  'tau',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? createBigNumberTau(BigNumber)
    : (2 * Math.PI)
)

export const createE = /* #__PURE__ */ recreateFactory(
  'e',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? createBigNumberE(BigNumber)
    : Math.E
)

// golden ratio, (1+sqrt(5))/2
export const createPhi = /* #__PURE__ */ recreateFactory(
  'phi',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? createBigNumberPhi(BigNumber)
    : 1.61803398874989484820458683436563811772030917980576286213545
)

export const createLN2 = /* #__PURE__ */ recreateFactory(
  'LN2',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(2).ln()
    : Math.LN2
)

export const createLN10 = /* #__PURE__ */ recreateFactory(
  'LN10',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(10).ln()
    : Math.LN10
)

export const createLOG2E = /* #__PURE__ */ recreateFactory(
  'LOG2E',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(1).div(new BigNumber(2).ln())
    : Math.LOG2E
)

export const createLOG10E = /* #__PURE__ */ recreateFactory(
  'LOG10E',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(1).div(new BigNumber(10).ln())
    : Math.LOG10E
)

export const createSQRTHalf = /* #__PURE__ */ recreateFactory(
  'SQRT1_2',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber('0.5').sqrt()
    : Math.SQRT1_2
)

export const createSQRT2 = /* #__PURE__ */ recreateFactory(
  'SQRT2',
  ['config', 'type.BigNumber'],
  ({ config, type: { BigNumber } }) => (config.number === 'BigNumber')
    ? new BigNumber(2).sqrt()
    : Math.SQRT2
)

export const createI = /* #__PURE__ */ recreateFactory(
  'i',
  ['type.Complex'],
  ({ type: { Complex } }) => Complex.I
)

// for backward compatibility with v5
export const createUppercasePi = /* #__PURE__ */ factory('PI', ['pi'], ({ pi }) => pi)
export const createUppercaseE = /* #__PURE__ */ factory('E', ['e'], ({ e }) => e)

export const createVersion = /* #__PURE__ */ factory('version', [], () => version)

// helper function to create a factory with a flag recreateOnConfigChange
// idea: allow passing optional properties to be attached to the factory function as 4th argument?
function recreateFactory (name, dependencies, create) {
  const f = factory(name, dependencies, create)
  f.recreateOnConfigChange = true
  return f
}
