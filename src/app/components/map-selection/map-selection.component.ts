import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { Map } from 'src/app/models/map.model';
import { MapService } from 'src/app/services/map.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-selection',
  templateUrl: './map-selection.component.html',
  styleUrls: ['./map-selection.component.css']
})

export class MapSelectionComponent implements OnInit{
  
  maps:Map[] = {} as Map[];
  selectedMap:Map = {} as Map;
  selectedCharacter:Character = {} as Character;

  constructor(private mapService:MapService, private storage:StorageServiceService, private router:Router){}

  ngOnInit(): void {
    this.maps = this.mapService.getMaps();
    this.selectedCharacter=this.storage.getCharacter();
    // redirects if a character was not selected
    if(this.selectedCharacter.getName==null){
      this.router.navigate(['']); 
    }
  }

  chargeMapData(name:string){
    this.selectedMap = this.mapService.getMapByName(name); 
  }
}
