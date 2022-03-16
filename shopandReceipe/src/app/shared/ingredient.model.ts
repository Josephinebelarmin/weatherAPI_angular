// export class Ingredients{
//     public ingredientName:string;
//     public ingredientAmount: number;

//     constructor(name: string, amount: number){
//         this.ingredientName = name;
//         this.ingredientAmount = amount;
//     }
// }

// The above code is replaced as

export class Ingredient{
    constructor (public ingredientName: string, public amount:number){}
}