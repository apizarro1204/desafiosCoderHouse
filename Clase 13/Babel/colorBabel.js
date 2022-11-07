"use strict";

var generarColor = function generarColor() {
  return Math.floor(Math.random() * 255 + 1);
};

console.log("RGB(".concat(generarColor(), ",").concat(generarColor(), ",").concat(generarColor(), ")"));
