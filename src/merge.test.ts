"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const merge_1 = require("./merge");

describe("merge()", () => {
  it("Array ที่เรียงลำดับจากน้อยไปมาก 1", () => {
    const c1 = [1, 3, 5];
    const c2 = [8, 6, 4];
    const c3 = [2, 7, 9];
    expect((0, merge_1.merge)(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("Array ที่เรียงลำดับจากน้อยไปมาก 2", () => {
    const c1 = [1, 2, 3, 9];
    const c2 = [12, 11, 6, 4];
    const c3 = [5, 7, 8, 10];
    expect((0, merge_1.merge)(c1, c2, c3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });
});
