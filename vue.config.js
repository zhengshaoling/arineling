// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_var.scss";`
      }
    }
  }
}