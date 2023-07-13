/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
    // base case
    if (i === nums.length) return 1;
    // normal case
    return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, l=0) {
    // base case
    if (i === words.length-1) return words[i].length > l ? words[i].length : l;
    // normal case
    return words[i].length > l ? longest(words, i+1, words[i].length) : longest(words, i+1, l);
}

/** everyOther: return a string with every other letter. */

function everyOther(st, i=0) {
    // base case
    if (i >= st.length) return '';
    // normal case
    return st[i] + everyOther(st, i+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=1) {
    // base case
    if (str.length === 1 || i === str.length-i-1) return true;
    if (i === str.length-i) return str[i-1] == str[str.length-i] ? true : false;
    // normal case
    return str[i-1] == str[str.length-i] ? isPalindrome(str, i+1) : false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
    // base case
    if (i+1 == arr.length) return arr[i] == val ? i : -1;
    // normal case
    return arr[i] == val ? i : findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=1) {
    // base case
    if (i == str.length) return str[0];
    // normal case
    return str[str.length-i] + revString(str, i+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[], i=0) {
    // base case
    if (i == Object.values(obj).length) return arr
    // normal case
    if (typeof(Object.values(obj)[i]) == 'string') {
        arr.push(Object.values(obj)[i])
    }
    if (typeof(Object.values(obj)[i]) == 'object') {
        gatherStrings(Object.values(obj)[i], arr)
    }
    return gatherStrings(obj, arr, i+1);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
    // base case
    if (i == arr.length - 1) return arr[i] == val ? i : -1;
    // normal case
    return arr[i] == val ? i : binarySearch(arr, val, i+1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
