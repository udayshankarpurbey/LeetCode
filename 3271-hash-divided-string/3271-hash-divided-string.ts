function stringHash(s: string, k: number): string {
    const charValue = lowerCharWithValue();
    let str = '';
    for(let i = 0; i< Math.ceil((s.length / k))  ; i++) {
        str += String.fromCharCode("a".charCodeAt(0) + s.slice(i * k , ((i*k) + k )).split('')
        .reduce((acc, cur) => acc + charValue[cur], 0) % 26 );

    }
    return str;
    
};

function lowerCharWithValue() : object {
    const obj = {};
    for(let i = 0 ; i<26; i++) {
        obj[String.fromCharCode("a".charCodeAt(0) + i)] = i
    }
    return obj;
}
