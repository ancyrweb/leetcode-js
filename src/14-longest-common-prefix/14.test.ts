import { defaultSolution } from "./14";

test.each([[defaultSolution, "default"]])("$1", (fn) => {
  expect(fn(["dog", "racecar", "car"])).toBe("");
  expect(fn(["flower", "flow", "flight"])).toBe("fl");
});
