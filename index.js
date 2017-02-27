class AAA {
  constructor(a) {
    this._a = a
  }
  async reduce(reducer, start) {
    let i = 0
    let m = start
    if (arguments.length === 1) {
      ++i
      m = this._a[0]
    }
    while (i < this._a.length) {
      m = await reducer(m, this._a[i])
      ++i
    }
    return m
  }
}

export default function (a) {
  return new AAA(a)
}
export function reduce(a) {
  return AAA.prototype.reduce.apply(new AAA(a), [].slice.call(arguments, 1))
}
