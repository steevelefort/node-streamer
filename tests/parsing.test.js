const utils = require("../src/utils");
const { DEFAULT_RANGE, RANGE_TYPE } = require("../src/constants");

describe("Range-Parsing Tests", () => {
    test("should parse range", () => {
        const range = { start: 0, end: 1234 };
        const result = utils.getRange(
            `${RANGE_TYPE}=${range.start}-${range.end}`
        );
        expect(result).toEqual(range);
    });

    test("should parse range with defaults", () => {
        const result = utils.getRange(`${RANGE_TYPE}=0-`);
        expect(result).toEqual(DEFAULT_RANGE);
    });

    test("should not parse range(Formats)", () => {
        expect(utils.getRange(`type=0-`)).toBeNull();
        expect(utils.getRange(`bytes=0`)).toBeNull();
        expect(utils.getRange(`bytes=asbc-`)).toBeNull();
        expect(utils.getRange(`bytes=a-v`)).toBeNull();
    });

    test("should not parse range(Undefined)", () => {
        expect(utils.getRange(undefined)).toBeNull();
        expect(utils.getRange(null)).toBeNull();
    });
});
