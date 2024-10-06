const headConsonants = ["m", "p", "pr", "b", "br", "f", "fr", "v", "n", "t", "tr", "d", "dr", "c", "cl", "s", "sl", "z", "r", "l", "ch", "chr", "sh", "shr", "j", "y", "k", "kr", "g", "gr", "x", "xr", "w", ""];
const specialConsonants = ["pr", "br", "fr", "tr", "dr", "cl", "sl", "chr", "shr", "kr", "gr", "xr"];
const maleVowels = ["ï", "u", "ë", "o", "a"];
const femaleVowels = ["i", "ü", "e", "ö", "a"];
const endConsonants = ["m", "p", "b", "f", "v", "n", "t", "d", "c", "s", "z", "l", "ch", "sh", "j", "ņ", "ç", "ģ", "çh", "ļ", "ng", "k", "g", "x"];
const random = Math.random;

function getRandomElement(arr) {
    return arr[Math.floor(random() * arr.length)];
}

function getRandomHeadConsonant() {
    return random() < 1/3 ? getRandomElement(specialConsonants) : getRandomElement(headConsonants);
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
    if (random() < 1/8) {
        vowel += "gh";
        hasLongVowel = true;
    }
    word += vowel;

    if (random() < 0.2) {
        word += getRandomElement(endConsonants);
    }

    const syllableCount =
        wordElement.innerText = word;
        generatedWordsDiv.appendChild(wordElement);
    }
}
