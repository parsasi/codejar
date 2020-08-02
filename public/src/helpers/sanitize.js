const sanitize = require("sanitize-filename");
export default (fileName) => {
    return sanitize(fileName)
}