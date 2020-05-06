"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var server;
server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World@");
    response.end();
}).listen(3000);
