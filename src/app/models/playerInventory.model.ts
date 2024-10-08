export class Inventory{

    bullets:Item;
    rifleCleaners:Item;
    baterries:Item;
    terminals:Item;
    alcoholBottles:Item;
    pills:Item;
    jewerly:Item;
    goldBar:Item;

    constructor(bullets:Item,rifleCleaners:Item, baterries:Item, terminals:Item,
                alcoholBottles:Item, pills:Item, jewerly:Item, goldBar:Item ){
        this.bullets = bullets;
        this.rifleCleaners = rifleCleaners;
        this.baterries = baterries;
        this.terminals = terminals;
        this.alcoholBottles = alcoholBottles; 
        this.pills = pills;
        this.jewerly = jewerly;
        this.goldBar = goldBar;
    }
}

class Item{
    id:number;
    name:string;
    price:number;

    constructor(id:number, name:string, price:number){
        this.id=id;
        this.name=name;
        this.price=price;
    }

    getId(){
        return this.id;
    }
    setId(id:number){
        this.id=id;
    }
    getName(){
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price:number){
        this.price=price;
    }
}


