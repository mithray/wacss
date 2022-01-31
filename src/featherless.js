const feather = require('feather-icons')
const fs = require('fs')

let sassIcons = "$icon-svg-contents: \n\t("
let entries = Object.entries(feather.icons)
for (let i = 0; i < entries.length; i ++ ){
  let iconName = entries[i][0]
  let iconContents = entries[i][1].contents
  if ( i !== 0 ) sassIcons += "\t,"
  sassIcons += " \"" + iconName + "\": '" + iconContents + "'\n"
}
sassIcons += ")"
fs.writeFileSync("./modules/_icons-feather.scss", sassIcons)
