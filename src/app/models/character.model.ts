export class Character {
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