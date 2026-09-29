function buildArray(target: number[], n: number): string[] {

    const stackOperation = [];
    let currentPositionofTarget = 0;

    for(let i = 1 ; i<=n ; i++) {
        if(currentPositionofTarget === target.length) return stackOperation;

        if(target[currentPositionofTarget] === i) {
            currentPositionofTarget++;
            stackOperation.push('Push');
        } else {
            stackOperation.push('Push' , "Pop");
        }
    }

    return stackOperation;    
};