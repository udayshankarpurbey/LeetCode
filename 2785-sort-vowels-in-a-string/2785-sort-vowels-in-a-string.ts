function sortVowels(s: string): string {
    const vowelCount = {
        'A': 0,
        'E': 0,
        'I': 0,
        'O': 0,
        'U': 0,
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
    }
    const position : number[] = [];

    for (let i = 0; i < s.length; i++) {
        if (vowelCount[s[i]] !== undefined) {
            vowelCount[s[i]] = vowelCount[s[i]] + 1;
            position.push(i);
        }
    }

    const rem = Object.entries(vowelCount).sort()
    .reduce((acc ,[val, num]) =>  acc + val.repeat(num), '');

    const letterArray = s.split('');

    for (let i = 0; i < position.length; i++) {
        letterArray[position[i]] = rem[i];
    }

    return letterArray.join('');

};