import { Injectable } from '@angular/core';
import { Inventory, Item } from '../models/playerInventory.model';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  inventory:Inventory=new Inventory(
    new Item(1, "Bullets", 2, 0),
    new Item(2, "Riffle Cleaner", 10,0),
    new Item(3, "Batteries", 10, 0),
    new Item(4, "Terminals", 200, 0),
    new Item(5, "Alcohol Bottle", 15, 0),
    new Item(6, "Pills",25, 0),
    new Item(7, "Jewerly", 300, 0),
    new Item(8, "Gold Bars",500, 0)
  );


}


