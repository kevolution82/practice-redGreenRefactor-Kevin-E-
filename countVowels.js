// this defines the new function `countVowels` that takes in one argument `str`
function countVowels(str) {
    if (typeof str !== "string") return 0;

// The count will always start at 0. We will include lower and upper case inside the const just in case anyone types FRUIT or fruit. It will collect all of the vowels no matter what case they are.
    let count = 0;
    const vowels = "aeiouAEIOU";

// This asks if the current character is in the vowels string. The .includes() for loop makes this clean and reusable. The code also closes out at the end.
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
        count++;
    }
}

// Exports the function so it can be used in other files.
    return count;
}

module.exports = countVowels;