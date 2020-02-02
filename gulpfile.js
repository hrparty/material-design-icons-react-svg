const { src, dest, series } = require("gulp");
const rename = require("gulp-rename");
const flatten = require("gulp-flatten");
const insert = require("gulp-insert");
const file = require("gulp-file");
const prettier = require("gulp-prettier");
const del = require("del");
const pascalCase = require("pascal-case").pascalCase;

const indexExports = [];

function clean() {
  return del(["icons", "index.js"]);
}

function build() {
  return src("node_modules/material-design-icons/**/svg/production/*_24px.svg")
    .pipe(rename(path => {
      path.basename = path.basename.replace("ic_", "").replace("_24px", "");
      path.extname = ".js";
    }))
    .pipe(insert.transform((content, file) => {
      let name = pascalCase(file.stem);

      if (name === "3dRotation") {
        name = "ThreeDRotation"
      }

      indexExports.push(`export { default as ${name} } from "./icons/${file.basename}"`);

      return createReactComponent(name, content);
    }))
    .pipe(prettier())
    .pipe(flatten())
    .pipe(dest("icons/"));
}

function buildIndex() {
  return file("index.js", indexExports.join("\n"), { src: true })
    .pipe(dest("."));
}

function createReactComponent(name, content) {
  content = content.replace("<svg ", "<svg {...props} ");
  
  return `import React from "react";

const ${name} = props => {
  return (
    ${content}
  );
};

export default ${name};`
}

exports.default = series(clean, build, buildIndex);