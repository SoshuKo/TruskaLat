const headConsonants = ["m", "p", "pr", "sp", "spr", "b", "br", "f", "fr", "v", "n", "t", "tr", "st", "str", "d", "dr", "c", "cl", "sc", "scl", "s", "sl", "z", "r", "l", "ch", "chr", "sch", "schr", "sh", "shr", "j", "ņ", "ç", "çļ", "sç", "sçļ", "ģ", "ģl", "ç", "çļ", "çh", "çhļ", "y", "ļ", "k", "kr", "sk", "skr", "g", "gr", "x", "xr", "w", ""];
const maleVowels = ["ï", "u", "ë", "o", "a"];
const femaleVowels = ["i", "ü", "e", "ö", "a"];
const endConsonants = ["m", "p", "b", "f", "v", "n", "t", "d", "c", "s", "z", "l", "ch", "sh", "j", "ņ", "ç", "ģ", "çh", "ļ", "ng", "k", "g", "x"];
const random = Math.random;

function getRandomElement(arr) {
    return arr[Math.floor(random() * arr.length)];
}

function isFemaleWord(headConsonant) {
    return /^(ņ|ç|çļ|sç|sçļ|ģ|ģl|ç|çļ|çh|çhļ|ļ)$/.test(headConsonant);
}

function isMaleWord(headConsonant) {
    return /^(k|kr|sk|skr|g|gr|x|xr|r)$/.test(headConsonant);
}

function replaceFemaleConsonant(consonant) {
    switch (consonant) {
        case "k": return "ç";
        case "kr": return "çļ";
        case "g": return "ģ";
        case "gr": return "ģļ";
        case "x": return "çh";
        case "xr": return "çhļ";
        case "r": return "ļ";
        default: return consonant;
    }
}

function replaceMaleConsonant(consonant) {
    switch (consonant) {
        case "ņ": return "n";
        case "ç": return "k";
        case "çļ": return "kl";
        case "sç": return "sk";
        case "sçļ": return "skl";
        case "ģ": return "g";
        case "ģl": return "gl";
        case "çh": return "x";
        case "çhļ": return "xr";
        case "ļ": return "r";
        default: return consonant;
    }
}

function convertToMale(word) {
    return word.replace(/çhļ/g, "xr")
               .replace(/sçļ/g, "skl")
               .replace(/çļ/g, "kl")
               .replace(/sç/g, "sk")
               .replace(/çh/g, "x")
               .replace(/ģl/g, "gl")
               .replace(/ņ/g, "n")
               .replace(/ç/g, "k")
               .replace(/ģ/g, "g")
               .replace(/ļ/g, "r")
               .replace(/i/g, "ï")
               .replace(/ü/g, "u")
               .replace(/e/g, "ë")
               .replace(/ö/g, "o");
}

function convertToFemale(word) {
    return word.replace(/xr/g, "çhļ")
               .replace(/skl/g, "sçļ")
               .replace(/kl/g, "çļ")
               .replace(/sk/g, "sç")
               .replace(/x/g, "çh")
               .replace(/gl/g, "ģl")
               .replace(/n/g, "ņ")
               .replace(/k/g, "ç")
               .replace(/g/g, "ģ")
               .replace(/r/g, "ļ")
               .replace(/ï/g, "i")
               .replace(/u/g, "ü")
               .replace(/ë/g, "e")
               .replace(/o/g, "ö");
}

function generateWord() {
    let word = "";
    let headConsonant = getRandomElement(headConsonants);
    word += headConsonant;

    let isFemale = isFemaleWord(headConsonant);
    let isMale = isMaleWord(headConsonant);
    let vowels = isFemale ? femaleVowels : maleVowels;
    let vowel = getRandomElement(vowels);
    let hasLongVowel = false;
    if (random() < 0.2) {
        vowel += "gh";
        hasLongVowel = true;
    }
    word += vowel;

    if (random() < 0.2) {
        word += getRandomElement(endConsonants);
    }

    const syllableCount = document.getElementById("syllableCount").value;
    const maxSyllables = syllableCount === "random" ? (random() < 0.5 ? 2 : 3) : parseInt(syllableCount);

    for (let i = 1; i < maxSyllables; i++) {
        let nextHeadConsonant = getRandomElement(headConsonants);
        if (nextHeadConsonant === "") {
            nextHeadConsonant = "'";
        }
        if (isFemale) {
            nextHeadConsonant = replaceFemaleConsonant(nextHeadConsonant);
        }
        word += nextHeadConsonant;

        let nextVowel = getRandomElement(vowels);
        if (!hasLongVowel && random() < 0.2) {
            nextVowel += "gh";
            hasLongVowel = true;
        }
        word += nextVowel;

        if (random() < 0.2) {
            word += getRandomElement(endConsonants);
        }
    }

    if (isFemale) {
        word = convertToFemale(word);
    } else {
        word = convertToMale(word);
    }

    return word;
}

function generateWords() {
    const wordCount = document.getElementById("wordCount").value;
    const generatedWordsDiv = document.getElementById("generatedWords");
    generatedWordsDiv.innerHTML = "";

    for (let i = 0; i < wordCount; i++) {
        let word = generateWord();
        let wordElement = document.createElement("p");
        wordElement.innerText = word;
        generatedWordsDiv.appendChild(wordElement);
    }
}
