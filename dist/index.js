"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const db_1 = require("./config/db");
require('dotenv').config();
const PORT = process.env.PORT || 3333;
try {
    server_1.app.listen(PORT, () => {
        console.log(`Server running. Use our API on port: ${PORT}`);
    });
}
catch (error) {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
}
(0, db_1.connectDb)();
//# sourceMappingURL=index.js.map