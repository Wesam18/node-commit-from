"use strict";

// Node
const os = require("os");
const path = require("path");

module.exports = () => path.join(os.homedir(), ".cfconfig");
