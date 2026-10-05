function removeStars(s: string): string {
    const char = [];

    for(let i = 0 ; i< s.length; i++) {
        if(s[i] === '*' && char.length > 0) {
            char.pop();
        } else {
            char.push(s[i])
        }
    }

    return char.join('');    
};