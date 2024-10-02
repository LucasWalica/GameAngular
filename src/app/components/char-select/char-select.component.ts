import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.component.html',
  styleUrls: ['./char-select.component.css']
})

export class CharSelectComponent implements OnInit {

  constructor(private characterService:CharactersService, private router:Router){}

  characterArray : Character[] = [];
  counter : number = 0;
  // Initialises current Character as null or undefined
  selectedCharacter:Character = {} as Character;

  ngOnInit():void{
    this.characterArray = this.characterService.getCharacters();
    this.selectedCharacter = this.characterArray[this.counter]
  }

  // needs to assign select char to a selected Char
  assignCharAndRedirectToMapSelect() {
    this.router.navigate(['/mapSelection']);
  }

  goForward(){
    this.counter ++;
    if(this.counter>=this.characterArray.length){
      this.counter=0
    }
    this.selectedCharacter = this.characterArray[this.counter]
  }

  goBackwards(){
    this.counter--;
    if(this.counter<0){
      this.counter=this.characterArray.length-1
    }
    this.selectedCharacter=this.characterArray[this.counter]
  }
}