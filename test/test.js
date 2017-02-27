// import aaa from '../'
// aaa.reduce()
//
import aaa, {reduce} from '..'
import assert from 'assert'
function deferValue(v, t) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(v), t))
}
describe('async await arrays', function () {
  it('reduce without default', async function () {
    assert.equal(await aaa([1,2,3]).reduce(async (m, v) => m + await deferValue(v, 100)), 6)
  })
  it('reduce with default', async function () {
    assert.equal(await aaa([1,2,3]).reduce(async (m, v) => m + await deferValue(v, 100), 0), 6)
  })
  describe('static mode', function () {
    it('reduce without default', async function () {
      assert.equal(await reduce([1,2,3], async (m, v) => m + await deferValue(v, 100)), 6)
    })
    it('reduce with default', async function () {
      assert.equal(await reduce([1,2,3], async (m, v) => m + await deferValue(v, 100), 0), 6)
    })
  })
})
