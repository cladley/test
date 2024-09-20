const path = require("path");
const { readFile, writeFile } = require("fs");

const firstPath = path.join("content", "first.txt");
const secondPath = path.join("content", "second.txt");
const outputPath = path.join("content", "result-async.txt");

readFile(firstPath, "utf8", (err, result) => {
  if (err) return;

  const first = result;

  readFile(secondPath, "utf8", (err, result) => {
    if (err) return;

    const second = result;

    writeFile(
      outputPath,
      `Here is the result: ${first}, ${second}`,
      { flag: "a" },
      (err) => {
        if (err) return;
      }
    );
  });
});
