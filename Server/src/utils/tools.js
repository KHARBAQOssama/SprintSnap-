const path = require("path");
const fs = require("fs");
const projectRoot = process.cwd();

function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = Math.random() < 0.5 ? 3 : 4;
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const mimeToExtension = {
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "docx",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "pptx",
  "text/javascript": "js",
  "text/html": "html",
  "text/css": "css",
  "text/x-java-source": "java",
  "application/x-python-code": "py",
  "text/x-c": "c",
  "text/x-c++": "cpp",
  "text/x-php": "php",
  "application/x-ruby": "rb",
  "application/x-swift": "swift",
  "application/pdf": "pdf",
};
function storeFileGetPath(file) {
  return new Promise((resolve, reject) => {
    const mimeTypeRegex = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,/;
    const mimeMatch = file.match(mimeTypeRegex);
    if (!mimeMatch) {
      resolve(new Error("Invalid file data"));
    }
    const mimeType = mimeMatch[1];

    let extension = mimeToExtension[mimeType];
    const base64Data = file.replace(mimeTypeRegex, "");
    console.log(extension);
    const timestamp = Date.now();
    const filename = `file_${timestamp + generateRandomString()}.${extension}`;

    const filePath = path.join(projectRoot, "public", "uploads", filename);
    let fileUrl;
    fs.writeFile(filePath, base64Data, "base64", (err) => {
      if (err) {
        console.log(err);
        reject(new Error("Failed to store the file"));
      } else {
        fileUrl = `/uploads/${filename}`;
        resolve(fileUrl);
      }
    });
  });
}
function storeImageGetPath(image) {
  return new Promise((resolve, reject) => {
    const mimeTypeRegex = /^data:image\/(\w+);base64,/;
    const mimeMatch = image.match(mimeTypeRegex);
    if (!mimeMatch) {
      resolve(new Error("Invalid image data"));
    }
    const mimeType = mimeMatch[1];
    const base64Data = image.replace(mimeTypeRegex, "");

    const timestamp = Date.now();
    const filename = `image_${timestamp + generateRandomString()}.${mimeType}`;

    const imagePath = path.join(
      projectRoot,
      "public",
      "images",
      "uploads",
      filename
    );
    let imageUrl;
    fs.writeFile(imagePath, base64Data, "base64", (err) => {
      if (err) {
        console.log(err);
        reject(new Error("Failed to store the image"));
      } else {
        imageUrl = `/images/uploads/${filename}`;
        resolve(imageUrl);
      }
    });
  });
}
module.exports = {
  storeFileGetPath,
  storeImageGetPath
};
