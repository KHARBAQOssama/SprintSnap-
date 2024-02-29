const fs = require("fs");
const path = require("path");

// Specify the directory containing the files
const directory = "../client/public/images/logos";

// Read the files in the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  let number = 1
  // Iterate through each file in the directory
  files.forEach((file) => {
    if (true) {
      // Adjust the extension as needed
      try {

        const newFilename = `projectIcon${number}.png`; 

        fs.rename(
          path.join(directory, file),
          path.join(directory, newFilename),
          (err) => {
            if (err) {
              console.error(`Error renaming ${file}:`, err);
            } else {
              console.log(`Renamed ${file} to ${newFilename}`);
            }
          }
        );
        number++
      } catch (error) {
        console.error(`Error renaming ${file}:`, error);
      }
    }
  });
});
