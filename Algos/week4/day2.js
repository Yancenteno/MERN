
/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {

}

/*****************************************************************************/
```javascript
function backspaceStringCompare(S, T) { 
    let stringS = iterateThroughString(S), stringT = iterateThroughString(T)
    if (stringS == stringT) { return true; }
    else { return false }
}
function iterateThroughString(string) {
    let temp = []
    for (let i = 0; i < string.length; i++ ){
        if (string[i] == "#"){ temp.pop(); } 
        else { temp.push(string[i]); }
    }
    return temp.join()
}```

    ```function backspaceStringCompare(S, T) {
    return getTrueValue(S) === getTrueValue(T)
}

function getTrueValue(string) {
    let arr = [];
    for (const i of string) {
        if (string[i] == "#"){
            arr.pop();
        } else {
            arr.push(string[i]);
        }
    }
    return arr.toString().replace(",", "");
}```