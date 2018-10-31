const path = require("path");
const mime = require("mimetype");
const reader = require("./reader");
const utils = require("./utils");
const { RANGE_TYPE } = require("./constants");

module.exports = dirPath => async (req, res) => {
    const range = utils.getRange(req.headers["range"]);
    const filename = path.join(dirPath, req.path);
    const result = await reader.readFile(filename, range);

    if (result === null) return res.status(404).send();

    res.header("Content-Type", mime.lookup(filename));
    if (range)
        res.writeHead(206, {
            "Content-Length": result.contentSize,
            "Accept-Ranges": RANGE_TYPE,
            "Content-Range": utils.formatRange(result.range)
        });
    else
        res.writeHead(200, {
            "Content-Length": result.range.size,
            "Content-Disposition": "attachment;filename=" + name
        });

    return result.stream.pipe(res);
};
