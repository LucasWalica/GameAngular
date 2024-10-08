import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { Map } from '../models/map.model';
import { Inventory } from '../models/playerInventory.model';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() {}

  private userCharacter: Character = {} as Character;
  private selectedMap: Map = {} as Map;
  private inventory: Inventory = {} as Inventory;

  saveInventory(inventory:Inventory){
    this.inventory=inventory;
  }
  getInventory(){
    return this.inventory;
  }
  saveCharacter(character:Character){
    this.userCharacter = character;
  }
  getCharacter(){
    return this.userCharacter;
  }
  saveMap(map:Map){
    this.selectedMap=map;
  }
  getMap(){
    return this.selectedMap;
  }
}