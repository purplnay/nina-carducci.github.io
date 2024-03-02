import purify from "purify-css";

const content = [
    "index.html",
    "assets/*.js",
    "assets/bootstrap/bootstrap.bundle.js",
];

const css = ["assets/bootstrap/bootstrap.css", "assets/style.css"];

purify(content, css, {
    output: "output.css",
    minify: true,
});
