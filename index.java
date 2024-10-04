import java.util.Random;

public class WordGenerator {
    private static final String[] HEAD_CONSONANTS = {"m", "p", "pr", "sp", "spr", "b", "br", "f", "fr", "v", "n", "t", "tr", "st", "str", "d", "dr", "c", "cl", "sc", "scl", "s", "sl", "z", "r", "l", "ch", "chr", "sch", "schr", "sh", "shr", "j", "ņ", "ç", "çļ", "sç", "sçļ", "ģ", "ģl", "ç", "çļ", "çh", "çhļ", "y", "ļ", "k", "kr", "sk", "skr", "g", "gr", "x", "xr", "w", ""};
    private static final String[] MALE_VOWELS = {"ï", "u", "ë", "o", "a"};
    private static final String[] FEMALE_VOWELS = {"i", "ü", "e", "ö", "a"};
    private static final String[] END_CONSONANTS = {"m", "p", "b", "f", "v", "n", "t", "d", "c", "s", "z", "l", "ch", "sh", "j", "ņ", "ç", "ģ", "çh", "ļ", "ng", "k", "g", "x"};
    private static final Random RANDOM = new Random();

    public static void main(String[] args) {
        String word = generateWord();
        System.out.println("Generated Word: " + word);
        System.out.println("Vowel Type: " + (containsFemaleVowel(word) ? "女性母音" : "男性母音"));
    }

    private static String generateWord() {
        StringBuilder word = new StringBuilder();
        String headConsonant = HEAD_CONSONANTS[RANDOM.nextInt(HEAD_CONSONANTS.length)];
        word.append(headConsonant);

        boolean isFemale = isFemaleWord(headConsonant);
        String[] vowels = isFemale ? FEMALE_VOWELS : MALE_VOWELS;
        String vowel = vowels[RANDOM.nextInt(vowels.length)];
        if (RANDOM.nextInt(5) == 0) {
            vowel += "gh";
        }
        word.append(vowel);

        if (RANDOM.nextInt(5) == 0) {
            word.append(END_CONSONANTS[RANDOM.nextInt(END_CONSONANTS.length)]);
        }

        if (RANDOM.nextBoolean()) {
            String secondHeadConsonant = HEAD_CONSONANTS[RANDOM.nextInt(HEAD_CONSONANTS.length)];
            if (isFemale) {
                secondHeadConsonant = replaceFemaleConsonant(secondHeadConsonant);
            }
            word.append(secondHeadConsonant);

            String secondVowel = vowels[RANDOM.nextInt(vowels.length)];
            if (RANDOM.nextInt(5) == 0) {
                secondVowel += "gh";
            }
            word.append(secondVowel);

            if (RANDOM.nextInt(5) == 0) {
                word.append(END_CONSONANTS[RANDOM.nextInt(END_CONSONANTS.length)]);
            }

            if (RANDOM.nextInt(3) == 0) {
                String thirdHeadConsonant = HEAD_CONSONANTS[RANDOM.nextInt(HEAD_CONSONANTS.length)];
                if (isFemale) {
                    thirdHeadConsonant = replaceFemaleConsonant(thirdHeadConsonant);
                }
                word.append(thirdHeadConsonant);

                String thirdVowel = vowels[RANDOM.nextInt(vowels.length)];
                if (RANDOM.nextInt(5) == 0) {
                    thirdVowel += "gh";
                }
                word.append(thirdVowel);

                if (RANDOM.nextInt(5) == 0) {
                    word.append(END_CONSONANTS[RANDOM.nextInt(END_CONSONANTS.length)]);
                }
            }
        }

        return word.toString();
    }

    private static boolean isFemaleWord(String headConsonant) {
    return headConsonant.matches("^(ņ|ç|çļ|sç|sçļ|ģ|ģl|ç|çļ|çh|çhļ|ļ)$") || RANDOM.nextBoolean();
}


    private static boolean containsFemaleVowel(String word) {
        return word.matches(".*[iüeoö].*");
    }

    private static String replaceFemaleConsonant(String consonant) {
        switch (consonant) {
            case "k":
                return "ç";
            case "kr":
                return "çļ";
            case "g":
                return "ģ";
            case "gr":
                return "ģļ";
            case "x":
                return "çh";
            case "xr":
                return "çhļ";
            case "r":
                return "ļ";
            default:
                return consonant;
        }
    }
}
