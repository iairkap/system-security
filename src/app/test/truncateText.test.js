import { truncateText } from "../helpers/truncedText";

describe("truncateText", () => {
  it("should truncate text if it exceeds the maximum length", () => {
    const text = "Hello, this is a long text that should be truncated.";
    const options = { maxLength: 20 };
    const expectedOutput = "Hello, this is a lon...";
    expect(truncateText(text, options)).toBe(expectedOutput);
  });

  it("should not truncate text if it does not exceed the maximum length", () => {
    const text = "Short text";
    const options = { maxLength: 20 };
    expect(truncateText(text, options)).toBe(text);
  });

  it("should handle edge cases where text length equals the max length", () => {
    const text = "Exactly twenty char";
    const options = { maxLength: 20 };
    expect(truncateText(text, options)).toBe(text);
  });

  it("should return empty string if provided text is empty", () => {
    const text = "";
    const options = { maxLength: 20 };
    expect(truncateText(text, options)).toBe("");
  });

  it("should truncate correctly when max length is 0", () => {
    const text = "Non-empty string";
    const options = { maxLength: 0 };
    expect(truncateText(text, options)).toBe("...");
  });
});
