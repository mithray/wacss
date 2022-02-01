const yaml = require('js-yaml')
const fs   = require('fs')
const path = require('path')
const tokenFolders =
  [ path.join( __dirname, "global" )
  , path.join( __dirname, "components")//.map( el => "components/")
  ]
console.log(tokenFolders)

var json = {}
for ( let i = 0 ; i < tokenFolders.length; i++ ) {
  let files = fs.readdirSync(tokenFolders[i]).map( el => path.join( tokenFolders[i], el ) )
  console.log(files)
  for ( let j = 0 ; j < files.length; j++ ) {
    let file = files[j]
    try {
      let doc = yaml.load(fs.readFileSync(file, 'utf8'))
      json = { ...json, ...doc }
    } catch (e) {
      console.log(e);
    }
  }
}
console.log(json)

/*
// Get document, or throw exception on error
var doc
try {
  doc1 = yaml.load(fs.readFileSync(path.join(__dirname,'global/elevation.yml'), 'utf8'));
  doc2 = yaml.load(fs.readFileSync(path.join(__dirname,'global/ratio.yml'), 'utf8'));
} catch (e) {
  console.log(e);
}
doc = { ...doc1, ...doc2}

module.exports = doc 
*/
