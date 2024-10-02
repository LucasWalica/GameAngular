import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  private characters: Character[] = [
  new Character("Joe", '../../assets/homeles/Homeless_1/Walk.png', 5, 20,
    "Joe has been a full-time alcoholic since 2015, and still is, he has developed a incredible resistance to suffering. However now he struggles to find his vices in the city because it's hard to deal with all the zombies.", 
    "Alcohol Boost", 1, "He hits a bottle on his head to reduce his hp and increase his dmg."),
  new Character ("Billy", "../../assets/homeles/Homeless_2/Walk.png", 12, 13,
    "Billy ended up in the street thanks to studying computer science in 2024, he has hacking skills so he has little tricks, additionally he is young and in good shape, well, in the best shape a cs mayor can be...", 
    "Hack Machine", 2, "He can use his special skill to affect diferent machines in the scenario, he depends on hacking devices and theirs battery."),
  new Character ("Josef",  '../../assets/homeles/Homeless_3/Walk.png', 5, 20,
    "A former punk rock roadie turned conspiracy theorist, with a mohawk that’s seen better days and a wardrobe that screams 1987. He tries to survive in this urban dystopian world. ",
    "Alcohol Boost", 1, "He hits a bottle on his head to reduce his hp and increase his dmg."),
  new Character ("Dalia" ,'../../assets/thugs/Raider_1/Walk.png', 20, 5,
    "Dalia dealt with lots of troubles when she was younger, she entered in some dark groups of the society, sold weaponry, narcotics, etc... Now she is chilling out killing zombies in a martial state.",
    "Ranged", 3, "She is trained in using an assault rifle, she depends on ammunition and having his weapon in good state."),
  new Character ("Eliot", '../../assets/thugs/Raider_2/Walk.png', 20, 5, 
    "Eliot migrated from Senegal with his family, he needs to survive at least 2 months more until the next evacuation process starts so he may get in touch with his family again.",
    "Ranged", 3, "He is trained in using an assault rifle, he depends on ammunition and having his weapon in good state."),
  new Character ("Bonnie",  '../../assets/thugs/Raider_3/Walk.png', 15, 10, 
    "Bonnie was just a thug and a procurer before the pandemic started, now, he has nothing else than a peanut brain and his old and trusty baseball bat.",
    "Recover", 4, "He can cast his ability to recover some health, this casting takes some time, during this time he takes x2 dmg.") 
  ];

  getCharacters(): Character[]{
    return this.characters;
  }

  constructor() { }
}
