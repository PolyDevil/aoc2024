import type { day } from "Input";

abstract class Solution<Day extends day, Input, Answer> {
  abstract getInput(): Promise<Input>;
  abstract solve(data: Input): Answer;
}

export default Solution;
