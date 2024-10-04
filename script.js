function generateWord() {
    const headConsonants = ["m", "p", "pr", "sp", "spr", "b", "br", "f", "fr", "v", "n", "t", "tr", "st", "str", "d", "dr", "c", "cl", "sc", "scl", "s", "sl", "z", "r", "l", "ch", "chr", "sch", "schr", "sh", "shr", "j", "ņ", "ç", "çļ", "sç", "sçļ", "ģ", "ģl", "ç", "çļ", "çh", "çhļ", "y", "ļ", "k", "kr", "sk", "skr", "g", "gr", "x", "xr", "w", ""];
    const maleVowels = ["ï", "u", "ë", "o", "a"];
    const femaleVowels = ["i", "ü", "e", "ö", "a"];
    const endConsonants = ["m", "p", "b", "f", "v", "n", "t", "d", "c", "s", "z", "l", "ch", "sh", "j", "ņ", "ç", "ģ", "çh", "ļ", "ng", "k", "g", "x"];
    const random = Math.random;

    function getRandomElement(arr) {
        return arr[Math.floor(random() * arr.length)];
    }

    function isFemaleWord(headConsonant) {
        return /^(ņ|ç|çļ|sç|sçļ|ģ|ģl|ç|çļ|çh|çhļ|ļ)$/.test(headConsonant) || random() < 0.5;
    }

    function containsFemaleVowel(word) {
        return /[iüeoö]/.test(word);
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

    function generateWord() {
        let word = "";
        let headConsonant = getRandomElement(headConsonants);
        word += headConsonant;

        let isFemale = isFemaleWord(headConsonant);
        let vowels = isFemale ? femaleVowels : maleVowels;
        let vowel = getRandomElement(vowels);
        if (random() < 0.2) {
            vowel += "gh";
        }
        word += vowel;

        if (random() < 0.2) {
            word += getRandomElement(endConsonants);
        }

        if (random() < 0.5) {
            let secondHeadConsonant = getRandomElement(headConsonants);
            if (isFemale) {
                secondHeadConsonant = replaceFemaleConsonant(secondHeadConsonant);
            }
            word += secondHeadConsonant;

            let secondVowel = getRandomElement(vowels);
            if (random() < 0.2) {
                secondVowel += "gh";
            }
            word += secondVowel;

            if (random() < 0.2) {
                word += getRandomElement(endConsonants);
            }

            if (random() < 0.33) {
                let thirdHeadConsonant = getRandomElement(headConsonants);
                if (isFemale) {
                    thirdHeadConsonant = replaceFemaleConsonant(thirdHeadConsonant);
                }
                word += thirdHeadConsonant;

                let thirdVowel = getRandomElement(vowels);
                if (random() < 0.2) {
                    thirdVowel += "gh";
                }
                word += thirdVowel;

                if (random() < 0.2) {
                    word += getRandomElement(endConsonants);
                }
            }
        }

        return word;
    }

    let generatedWord = generateWord();
    document.getElementById("generatedWord").innerText = "Generated Word: " + generatedWord;
    document.getElementById("vowelType").innerText = "Vowel Type: " + (containsFemaleVowel(generatedWord) ? "女性母音" : "男性母音");
}
