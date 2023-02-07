"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSV = void 0;
const parseCSV = (data) => {
    const result = [];
    for (const item of data) {
        if (item.length > 0) {
            result.push(item.split("|"));
        }
    }
    return result;
};
exports.parseCSV = parseCSV;
