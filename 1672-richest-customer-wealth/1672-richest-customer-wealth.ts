function maximumWealth(accounts: number[][]): number {

    let maxWealth = 0;

    for(let i = 0 ; i<accounts.length; i++) {
        let customerWealth = accounts[i].reduce((a: number , b : number) => a+b,0);
        if(maxWealth < customerWealth) maxWealth = customerWealth;
    }
    return maxWealth;
};