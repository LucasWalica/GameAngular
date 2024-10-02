export class Map{
    // add hp for the industrial zone and zombie population or something.
    name:string;
    dir:string;
    desc:string;
    danger:number;
    ammunitionDropRate:number;
    electronicsDropRate:number;
    medicationDropRate:number;
    rareItemsDropRate:number;
    //jsonData:string;

    constructor(name:string, dir:string, desc:string, danger:number, ammunitionDropRate:number, 
        electronicsDropRate:number, medicationDropRate:number, rareItemsDropRate:number){
        this.name=name; 
        this.dir=dir;
        this.desc=desc;
        this.danger=danger;
        this.ammunitionDropRate=ammunitionDropRate;
        this.electronicsDropRate=electronicsDropRate;
        this.medicationDropRate=medicationDropRate;
        this.rareItemsDropRate=rareItemsDropRate;
        //this.jsonData=jsonData;
    }

}