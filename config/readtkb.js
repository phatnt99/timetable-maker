module.exports = function (filePath) {
    
//Excel filePath="D:\\DataFiles\\SampleExcel.xlsx"
    var Excel = require("exceljs");
    var workbook = new Excel.Workbook();
    //Use then function to executed code that need to perform immediately after readFile
    workbook.xlsx.readFile(filePath).then(function () {
    //Use sheetName in getWorksheet function
    var worksheet = workbook.getWorksheet("Sheet1");
    //Use nested iterator to read cell in rows 
    //First iterator for rows in sheet
        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
            console.log("Current Row:" + rowNumber);
            //Second iterator for cells in row
            row.eachCell({ includeEmpty: false }, function (cell, colNumber) {
            //print row number, column number and cell value at[row][col]
            console.log("Cell Value=" + cell.value + "for cell [" + rowNumber + "]" + "[" + colNumber + "]");
            /*
                write code
            */
            });
        });
    });
}