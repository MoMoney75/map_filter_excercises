//1
function doubleValues(arr) {
  return arr.map((numbers) => {
    return numbers * 2;
  });
}

//2
function onlyEvenValues(arr) {
  return arr.filter((numbers) => {
    return numbers % 2 === 0;
  });
}

//3
function showFirstAndLast(arr) {
  return arr.map((words) => {
    return words[0] + words.charAt(words.length - 1);
  });
}

//4
function addKeyAndValue(object, key, value) {
  let newArr = [];
  object.forEach((val) => {
    val[`${key}`] = value;
    newArr.push(val);
  });
  return newArr;
}
//5
let vowels = "aeiou";
function vowelCount(string) {
  let obj = {};
  string.split("").forEach((letter) => {
    if (vowels.includes(letter)) {
      if (!obj[`${letter}`]) {
        obj[`${letter}`] = 0;
      }
      obj[`${letter}`] = obj[`${letter}`] + 1;
    }
  });
  return obj;
}

//6
function doubleValuesWithMap(arr) {
  return arr.map((numbers) => {
    return numbers * 2;
  });
}

//7
function valTimesIndex(arr) {
  return arr.map((value, i, array) => {
    return value * i;
  });
}

//8
function extractKey(obj) {
  return obj.map((key) => {
    let keysValues = Object.values(key);
    return keysValues;
  });
}

//9
function extractFullName(obj) {
  return obj.map((obj) => {
    return `${obj.first}` + ` ${obj.last}`;
  });
}

//10
function filterByValue(obj, key) {
  return obj.filter(function (value) {
    return value[key] !== undefined;
  });
}

//11
function find(arr, value) {
  return arr.filter((val) => {
    return val === value;
  });
}
//12
function findInObj(arr, key, value) {
  return arr.filter((val) => {
    return val[key] === value;
  })[0];
}

//13
function removeVowels(string) {
  const vowels = "aeiou";
  return string
    .toLowerCase()
    .split("")
    .filter((letter) => {
      return vowels.indexOf(letter) === -1;
    })
    .join("");
}

//14
function doubleOddNumbers(arr) {
  return arr
    .filter((oddNumbers) => {
      return oddNumbers % 2 !== 0;
    })
    .map((oddNumbers) => {
      return oddNumbers * 2;
    });
}
