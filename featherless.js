const feather = require('feather-icons')
const fs = require('fs')

/*
let vars =
`$filter: drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white);
$stroke-width: 2;
$stroke-linecap: round;
$stroke-linejoin: round;
$fill: none;
$stroke: currentColor;
$width: 24;
$height: 24;
$viewBox: 0 0 $width $height;
$xmlns: "http://www.w3.org/2000/svg";
$style: "filter: #{$filter}; stroke-width: #{$stroke-width}; stroke-linecap: #{$stroke-linecap}; stroke-linejoin: #{$stroke-linejoin}; fill: none; stroke: #{$stroke};";

`


let sassIcons = vars
*/
let sassIcons = "$icon-svg-contents: \n\t("
let entries = Object.entries(feather.icons)
for (let i = 0; i < entries.length; i ++ ){
  let iconName = entries[i][0]
  let iconContents = entries[i][1].contents
  if ( i !== 0 ) sassIcons += "\t,"
  sassIcons += " \"" + iconName + "\": '" + iconContents + "'\n"
  //let iconContents = feather.icons["external-link"].contents

}
sassIcons += ")"
fs.writeFileSync("./src/modules/_icons-feather.scss", sassIcons)
