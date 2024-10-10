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

export class Item{
    id:number;
    name:string;
    price:number;
    timesInInventory:number;

    constructor(id:number, name:string, price:number, timesInInventory:number){
        this.id=id;
        this.name=name;
        this.price=price;
        this.timesInInventory=timesInInventory;
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
    getTimesInInventory(){
        return this.timesInInventory;
    }
    setTimesInInvory(times:number){
        this.timesInInventory = times;
    }
}