
let csvToJson = require('convert-csv-to-json');

let json = csvToJson.getJsonFromCsv("myInputFile.csv");
console.log(JSON.stringify(json))
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }