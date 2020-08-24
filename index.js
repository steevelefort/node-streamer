const createStreamer = require("./src/middleware");

module.exports = filePath => {
    if (typeof filePath !== "string")
        throw new Error("A file-path must be provided");
    return createStreamer(filePath);
};
