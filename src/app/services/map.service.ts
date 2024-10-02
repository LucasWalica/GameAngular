import { Injectable } from '@angular/core';
import { Map } from '../models/map.model';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  
    maps:Map[]=[
      new Map("Zone 1", "../../assets/maps/city1.jpg", 
      "Here is where the remaining humans holded their last stronghold against the infection so it may be the safest zone in the city with all the basic needs that a survivor needs.",
      4, 40, 30 ,20, 10),
      new Map("Skycrapers", "../../assets/maps/city2.jpg", 
      "In this zone of the city the upper class was living until the invasion, there are many security systems and maybe some treasures that can be sold on the black market.", 
      6, 10, 40, 20, 30),
      new Map("Parking", "../../assets/maps/city3.jpg", 
      "This is the supermarket parking, the other ways to enter are blocked, if you need food and medication is the best place to search for them, but before you enter, you will hace some troubles with the infected ones.",
      8, 20, 30, 40, 10),
      new Map("Industrial Zone", "../../assets/maps/city4.jpg", 
      "The old industrial zone is still active because the remaining survivors need electricity, if the resistance here falls, all of us will get infected, come here to help the alliance.", 
      10, 80, 10, 10, 0)
    ]
  

    getMaps(): Map[]{
      return this.maps
    }

    getMapByName(name:string):Map{
      const result =  this.maps.filter(map=>map.name===name);
      return result.length>0 ? result[0]:undefined;
    }
  constructor() { }
}
