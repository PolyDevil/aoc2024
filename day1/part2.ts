import Solution from "Solution";
import input from "Input";

class Data {
  constructor(public t: [number, number]) {}

  static make(valueToCast: unknown) {
    return valueToCast as Data["t"];
  }
}

class Day extends Solution<1, Array<Data["t"]>, number> {
  override async getInput() {
    const html = await input.read(1);

    return html
      .split("\n")
      .filter((line) => line.length)
      .map((pair) => {
        const [left, right] = pair.split(/\s+/);
        return Data.make([Number(left), Number(right)]);
      });
  }

  override solve(input: Array<Data["t"]>) {
    const leftSorted = [];
    const pool = new Map();

    for (const [left, right] of input) {
      leftSorted.push(left);
      pool.set(right, (pool.get(right) || 0) + 1);
    }

    let s = 0;

    for (let i = 0; i < leftSorted.length; i++) {
      if (pool.has(leftSorted[i])) {
        s += leftSorted[i] * pool.get(leftSorted[i]);
      }
    }

    return s;
  }
}

const day = new Day();

console.log(day.solve(await day.getInput()));