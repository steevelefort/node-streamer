const utils = require("../src/utils");
const { RANGE_TYPE } = require("../src/constants");

describe("Range-Formatting Tests", () => {
    test("should format range", () => {
        const range = { start: 0, end: 1234, size: 3000 };
        const result = utils.formatRange(range);
        expect(result).toEqual(
            `${RANGE_TYPE} ${range.start}-${range.end}/${range.size}`
        );
    });

    test("should not format range(Parameters)", () => {
        expect(utils.formatRange({ start: 0, end: 0, size: 1 })).toBeNull();
        expect(utils.formatRange({ start: -3, end: 10, size: 100 })).toBeNull();
        expect(utils.formatRange({ start: 0, end: 1, size: -12 })).toBeNull();
    });

    test("should not format range(Undefined)", () => {
        expect(utils.formatRange(undefined)).toBeNull();
        expect(utils.formatRange(null)).toBeNull();
        expect(utils.formatRange({})).toBeNull();
        expect(utils.formatRange({ end: 1 })).toBeNull();
        expect(utils.formatRange({ start: 1 })).toBeNull();
        expect(utils.formatRange({ size: 1 })).toBeNull();
    });
});
