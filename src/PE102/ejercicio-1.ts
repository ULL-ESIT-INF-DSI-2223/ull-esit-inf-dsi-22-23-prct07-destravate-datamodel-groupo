export class RandomNumber{
    private static instance:RandomNumber;
    constructor(){}
    public static getRandomInstance():RandomNumber{
        if(!RandomNumber.instance){
            RandomNumber.instance = new RandomNumber();
        }
        return RandomNumber.instance;
    }

    public getRandomNumber():number{
        return Math.random();
    }

    public getRandomFloatInRange(m: number, n: number): number {
        if(m <= n){
            return Math.random() * (n - m + 1) + m;
        }
    }

    public getRandomIntInRange(m: number, n: number): number {
        if(m <= n){
            return Math.floor(Math.random() * (n - m + 1) + m);
        }
    }
}