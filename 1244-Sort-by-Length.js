// LANGUAGE: JavaScript 12.18 (nodejs 12.18.3) [+2s] {beta}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

n = lines[0];
i = 1;
while (n--) {
  console.log(
    lines[i]
      .split(" ")
      .sort((a, b) => b.length - a.length)
      .join(" ")
  );
  i++;
}
