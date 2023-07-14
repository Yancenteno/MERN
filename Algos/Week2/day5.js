/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution

  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

  Hard Bonus: make it O(n) time
*/

const numbers1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];

const numbers2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];

const numbers3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(numbers, k) {
    const frequencyTable = {};
    for (const num of numbers) {
        if (frequencyTable[num] === undefined) {
            frequencyTable[num] = 0
            console.log(frequencyTable);
                    console.log("__________________`_______________________");
        }
        frequencyTable[num]++;
        // console.log(frequencyTable);
    }
    // Step 2: Create an array of unique numbers
    const serbsNumbers = Object.keys(frequencyTable).map(Number);
    //   console.log(serbsNumbers);

    // Step 3: Sort the unique numbers array based on frequencies
    serbsNumbers.sort((a, b) => frequencyTable[b] - frequencyTable[a]);

    // Step 4: Return the k most frequent elements
    return serbsNumbers.slice(0, k);

}
console.log(kMostFrequent(numbers1, k1));
console.log("********************************")
console.log(kMostFrequent(numbers2, k2));
console.log("********************************")
console.log(kMostFrequent(numbers3, k3));