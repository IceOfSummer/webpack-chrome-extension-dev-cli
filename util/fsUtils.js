const fs = require("fs")
module.exports.deleteFolder = function deleteFolder(path) {
  let files = [];
  if(fs.existsSync(path) ) {
    files = fs.readdirSync(path);
    files.forEach(function(file){
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
