const createStreamer = require("./src/middleware");

module.exports = dirPath => {
    if (typeof dirPath !== "string")
        throw new Error("A directory-path must be provided");
    return createStreamer(dirPath);
};
