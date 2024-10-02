import { Component, OnInit } from '@angular/core';
import { Map } from 'src/app/models/map.model';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-map-selection',
  templateUrl: './map-selection.component.html',
  styleUrls: ['./map-selection.component.css']
})

export class MapSelectionComponent implements OnInit{
  
  maps:Map[] = {} as Map[];
  selectedMap:Map = {} as Map;

  constructor(private mapService:MapService){}

  ngOnInit(): void {
    this.maps = this.mapService.getMaps()
  }

  chargeMapData(name:string){
    this.selectedMap = this.mapService.getMapByName(name); 
  }

}
