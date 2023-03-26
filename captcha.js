const tesseract = require("node-tesseract-ocr");

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  }
  
  tesseract
    .recognize("https://i.ibb.co/jTKYQqP/Captcha-United.png", config)
    // you can also give -https://i.ibb.co/R4BB$DW/Captcha-Bajaj.jpg
    .then((text) => {
      console.log("Result:", text)
    })
    .catch((error) => {
      console.log(error.message)
    });
