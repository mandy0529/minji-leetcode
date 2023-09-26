function wordPattern(pattern: string, s: string): boolean {
    const patternArray=pattern.split(''); // ['a', 'b', 'b', 'a']
    const wordArray=s.split(' '); //  ['dog', 'cat', 'cat', 'dog']
    
     if (patternArray.length !== wordArray.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();
    
    for(let i=0; i < patternArray.length; i++) {
        const patternChar=patternArray[i];
        const wordChar=wordArray[i];
        
         if (!patternToWord.has(patternChar) && !wordToPattern.has(wordChar)) {
            patternToWord.set(patternChar, wordChar);
            wordToPattern.set(wordChar, patternChar);
        } else if (patternToWord.get(patternChar) !== wordChar || wordToPattern.get(wordChar) !== patternChar) {
            return false;
        }
    }
    return true
};