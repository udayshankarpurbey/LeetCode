function maxDepth(s: string): number {
    let stack = [];
    let depth = 0;

    for(let i = 0 ; i<s.length; i++) {
        
        if(s[i] === '(') {
            stack.push(s[i])
        } else if(s[i] === ')') {
            depth = depth <stack.length ? stack.length : depth;
            stack.pop();
        }
    }

    return depth;
};