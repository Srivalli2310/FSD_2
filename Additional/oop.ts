class FixedDeposit{
    public customerName:string;
    public principalAmount:number;
    public  interestRate:number;
    public tenureYears:number;

    //Constructor Overloading
    //sig1 : Default /Standard FD (1-year)
    constructor(name:string,amount:number);
    constructor(Name:string, Amount:number,Rate:number, Years:number);

    //Implementation Signature
    constructor(name:string,amount:number,rate?:number,years?:number){
        this.customerName=name;
        this.principalAmount=amount;
        this.interestRate=rate ?? 6.5;  //Default Interest Rate
        this.tenureYears=years ?? 1; //Default Tenure
    }

    //3 methods 
    //
    public calculateMaturity():number{
        const interest =(this.principalAmount * this.interestRate * this.tenureYears)/100;
        return this.principalAmount + interest;
    }

    public displayDetails():void{
        console.log(`Customer Name: ${this.customerName}`);
        console.log(`Principal Amount: ${this.principalAmount}`);
        console.log(`Interest Rate: ${this.interestRate}`);
        console.log(`Tenure (Years): ${this.tenureYears}`);
        console.log(`Maturity Amount: ${this.calculateMaturity()}`);
        console.log('-----------------------------');
    }

}


//scenario 1 : Using 
const standardFD =new FixedDeposit("Alice",10000);

const customFD = new FixedDeposit("Bob", 20000, 7.5, 3);

standardFD.displayDetails();
customFD.displayDetails();
customFD.principalAmount = 15000;
console.log(`Updates Maturity Amount for Custom FD: ${customFD.calculateMaturity()}`);
