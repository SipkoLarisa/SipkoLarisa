const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const isEven = num => num % 2 === 0;
89,88,97,31 - apple
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

kiwi

const findSmallestNumber = numbers => Math.min(...numbers);
true - banana
const sum = (a, b) => a + b;

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
60,78,37,10,36,27,62,35,71,79,37,27,65,93,80,65,28,71,59,56,78,87,12,38 / true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const squareRoot = num => Math.sqrt(num);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

kiwi - 99
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
75,25,15,49,22,90,89,78,2,17,16,65,44,36 / 40,72,66,62,92,21,5,68,91,0,59,7,71,62,36,84,9,89,16,75,94,44,1,65,28,75,74,55,64,84,24,14,0,87,98,42,30,34,99,42,18,24,52,38,26,89,53,80,96,44,76,40,23,27,63,25,11,1,13,80,6,51,67,17,31,15,30,50,70,0,55,48,52,50,65,18,67,12,37,26,93,25,27,6,32,14,98,26,88,72,1,61,99,70,89
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
26 - apple
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

apple + true

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

68 * orange
const formatDate = date => new Date(date).toLocaleDateString();
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

apple * 60
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const isPalindrome = str => str === str.split("").reverse().join("");
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const getRandomElement = array => array[getRandomIndex(array)];
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const findSmallestNumber = numbers => Math.min(...numbers);

40 - 40,43,87,60,88,18,56,78,32,46,39,7,15,52,6,36,1,77,93,6,63,45,36,85,4
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
kiwi

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange


const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

class MyClass { constructor() { this.property = getRandomString(); } }

64 / 38
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
grape

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
false * apple
const deepClone = obj => JSON.parse(JSON.stringify(obj));
23 - banana

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

0 * grape

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const randomNumber = getRandomNumber();

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

kiwi

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function addNumbers(a, b) { return a + b; }
orange

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

