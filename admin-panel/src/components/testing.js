// const fs = require('fs')
// const readline = require('readline-sync')


// async function processLineByLine() {
//     let csv = []
//     const fileStream = fs.createReadStream('testCsv.csv');
  
//     const rl = readline.createInterface({
//       input: fileStream,
//       crlfDelay: Infinity
//     });
//     // Note: we use the crlfDelay option to recognize all instances of CR LF
//     // ('\r\n') in input.txt as a single line break.
  
//     for await (const line of rl) {
//       // Each line in input.txt will be successively available here as `line`.
//       console.log(`Line from file: ${line}`);
//       csv.push(line)
     
//     }
//     console.log("Inside",csv)
//     return csv
//   }
  
//   export async function m(formData){
//     console.log("hello M",formData)
//       let csv = []
//       await processLineByLine().then((res)=>{
//         console.log(`--> ${res}`)
//         csv = res
//       });

//       console.log("array is:: ",csv)


// var attrs = csv.splice(0,1);

// var result = csv.map(function(row) {
//   var obj = {};
//   var rowData = row.split(';');
//   attrs[0].split(';').forEach(function(val, idx) {
//     obj = constructObj(val, obj, rowData[idx]);
//   });
//   return obj;
// })
// function constructObj(str, parentObj, data) {
//     if(str.split('/').length === 1) {
//       parentObj[str] = data;
//       return parentObj;
//     }

//     var curKey = str.split('/')[0];
//     if(!parentObj[curKey])
//       parentObj[curKey] = {};
//     parentObj[curKey] = constructObj(str.split('/').slice(1).join('/'), parentObj[curKey], data);
//     return parentObj;
//   }

// console.log(`Result is:: ${JSON.stringify(result)}`)

     
//   }
//   m()






