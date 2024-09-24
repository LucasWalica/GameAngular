import { Component } from '@angular/core';

class Character {
  name : string
  dir : string
  dmg : number
  hp : number
  desc : string
  specialName: string
  specialID : number
  specialSkillDes:string

  constructor(name:string, dir:string, dmg:number, hp:number, desc:string, specialName:string, specialID:number, specialSkillDes:string) {
    this.name = name 
    this.dir = dir
    this.dmg = dmg 
    this.hp = hp
    this.desc = desc
    this.specialName = specialName
    this.specialID = specialID
    this.specialSkillDes = specialSkillDes
  }
}

@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.component.html',
  styleUrls: ['./char-select.component.css']
})
export class CharSelectComponent {

  homeles1 : Character = new Character("Joe", '../../assets/homeles/Homeless_1/Walk.png', 5, 20,
                        "Joe has been a full-time alcoholic since 2015, and still is. However now he struggles to find his vices in the city because it's hard to deal with all the zombies.", 
                        "Alcohol Boost", 1, "He hits a bottle on his head to reduce his hp and increase his dmg.") 
  homeles2 : Character = new Character ("Billy", "../../assets/homeles/Homeless_2/Walk.png", 12, 13,
                        "Billy ended up in the street thanks to studying computer science in 2024, he has hacking skills so he has little tricks, additionally he is young and in good shape, well, in the best shape a cs mayor can be...", 
                        "Hack Machine", 2, "He can use his special skill to affect diferent machines in the scenario, he depends on hacking devices and theirs battery.")
  homeles3 : Character = new Character ("Josef",  '../../assets/homeles/Homeless_3/Walk.png', 5, 20,
                         "A former punk rock roadie turned conspiracy theorist, with a mohawk that’s seen better days and a wardrobe that screams 1987. He tries to survive in this urban dystopian world. ",
                         "Alcohol Boost", 1, "He hits a bottle on his head to reduce his hp and increase his dmg.")
  thug1 : Character = new Character ("Dalia" ,'../../assets/thugs/Raider_1/Walk.png', 20, 5,
                      "Dalia dealt with lots of troubles when she was younger, she entered in some dark groups of the society, sold weaponry, narcotics, etc... Now she is chilling out killing zombies in a martial state.",
                      "Ranged", 3, "She is trained in using an assault rifle, she depends on ammunition and having his weapon in good state.")
  thug2 : Character = new Character ("Eliot", '../../assets/thugs/Raider_2/Walk.png', 20, 5, 
                      "Eliot is a migrant from Sudafrica with his family, he needs to survive at least 2 months more until the next evacuation process starts so he may get in touch with his family again.",
                      "Ranged", 3, "He is trained in using an assault rifle, he depends on ammunition and having his weapon in good state.")
  thug3 : Character = new Character ("Bonnie",  '../../assets/thugs/Raider_3/Walk.png', 15, 10, 
                      "Olivian was just a thug and a procurer before the pandemic started ,now, he has nothing else than a peanut brain and his old and trusty baseball bat.",
                      "Recover", 4, "He can cast his ability to recover some health this casting takes some seconds, during this time he takes x2 dmg.") 


  currentSprite : Character = this.homeles1

  array : Character[] = [this.homeles1, this.homeles2, this.homeles3, this.thug1, this.thug2, this.thug3]

  counter : number = 0

  goForward(){
    this.counter ++;
    if(this.counter>=this.array.length){
      this.counter=0
    }
    this.currentSprite = this.array[this.counter]
  }

  goBackwards(){
    this.counter--;
    if(this.counter<0){
      this.counter=this.array.length-1
    }
    console.log(this.counter)
    this.currentSprite=this.array[this.counter]
  }

}