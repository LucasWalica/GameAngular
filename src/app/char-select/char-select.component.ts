import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.component.html',
  styleUrls: ['./char-select.component.css']
})

export class CharSelectComponent implements OnInit {

  constructor(private characterService:CharactersService){}


  characterArray : Character[] = [];
  counter : number = 0;
  // Initialises current Character as null or undefined
  currentSprite:Character = {} as Character;


  ngOnInit():void{
    this.characterArray = this.characterService.getCharacters();
    this.currentSprite = this.characterArray[this.counter]
  }

  goForward(){
    this.counter ++;
    if(this.counter>=this.characterArray.length){
      this.counter=0
    }
    this.currentSprite = this.characterArray[this.counter]
  }

  goBackwards(){
    this.counter--;
    if(this.counter<0){
      this.counter=this.characterArray.length-1
    }
    console.log(this.counter)
    this.currentSprite=this.characterArray[this.counter]
  }
}