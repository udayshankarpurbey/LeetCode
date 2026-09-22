function maxCoins(piles: number[]): number {
    let max = (piles.length) - 2; 
    let sumOfCoins = 0;
    piles.sort((a : number , b: number) => a - b);
    for(let i = 0 ; i<(piles.length /3); i++) {
        sumOfCoins += piles[max];
        max -=2;
    };
    return sumOfCoins;    
};