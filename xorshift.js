//** random number generator (xor128 algorithm) */
class XOR128 {
  constructor(
    [x = 123456789, y = 362436069, z = 521288626, w = 88675123] = [],
    [a, b, c] = [11, 8, 19]
  ) {
    this.state = [x, y, z, w];
    this.param = [a, b, c];
  }

  next() {
    const [a, b, c] = this.param;
    const x = this.state[0];
    const w = this.state[3];

    const t = x ^ (x << a);
    const next = w ^ (w >>> c) ^ (t ^ (t >>> b));

    this.state.shift();
    this.state.push(next);

    return Math.abs(next);
  }
}
