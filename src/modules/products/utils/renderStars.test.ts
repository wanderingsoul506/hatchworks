import { renderStars } from "./renderStars";

describe("renderStars", () => {
  it("returns 5 full stars for rating 5", () => {
    expect(renderStars(5)).toEqual(["★", "★", "★", "★", "★"]);
  });

  it("returns 4 full stars and 1 empty for rating 4", () => {
    expect(renderStars(4)).toEqual(["★", "★", "★", "★", "☆"]);
  });

  it("returns 3 full stars, 1 half (☆), 1 empty for rating 3.5", () => {
    expect(renderStars(3.5)).toEqual(["★", "★", "★", "☆", "☆"]);
  });

  it("returns 0 full stars, 1 half, 4 empty for rating 0.5", () => {
    expect(renderStars(0.5)).toEqual(["☆", "☆", "☆", "☆", "☆"]);
  });

  it("returns all empty stars for rating 0", () => {
    expect(renderStars(0)).toEqual(["☆", "☆", "☆", "☆", "☆"]);
  });

  it("returns 4 full stars, 1 half for rating 4.9", () => {
    expect(renderStars(4.9)).toEqual(["★", "★", "★", "★", "☆"]);
  });

  it("returns 4 full stars for rating 4.2", () => {
    expect(renderStars(4.2)).toEqual(["★", "★", "★", "★", "☆"]);
  });
});
