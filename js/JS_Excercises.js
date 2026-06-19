// Ex1.1
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Ex2.1
function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];
}

// Ex2.2
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}

// Ex2.3
function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  return Number.isInteger(root) ? (root + 1) ** 2 : -1;
}

// Ex2.4
function findUniq(arr) {
  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

// Ex2.5
function summation(num) {
  return (num * (num + 1)) / 2;
}

// Ex2.6
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// Ex2.7
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+": return value1 + value2;
    case "-": return value1 - value2;
    case "*": return value1 * value2;
    case "/": return value1 / value2;
  }
}

// Ex3.1
function nb_year(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    years++;
  }

  return years;
}

// Ex3.2
function number(busStops) {
  return busStops.reduce((total, stop) => total + stop[0] - stop[1], 0);
}

// Ex4.1
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// Ex4.2
function tribonacci(signature, n) {
  const result = signature.slice(0, n);

  for (let i = 3; i < n; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }

  return result;
}

// Ex5.1
function removeChar(str) {
  return str.slice(1, -1);
}

// Ex5.2
function repeatStr(count, src) {
  return src.repeat(count);
}

// Ex5.3
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

// Ex5.4
function toWeirdCase(str) {
  return str
    .split(" ")
    .map(word =>
      word
        .split("")
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

// Ex5.5
function abbrevName(name) {
  return name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join(".");
}

// Ex5.6
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

// Ex5.7
function findShort(s) {
  return Math.min(...s.split(" ").map(word => word.length));
}

// Ex5.8
function longestWord(s) {
  return s.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}