module.exports = function (filePath) {
'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: filePath
});

return result;
}