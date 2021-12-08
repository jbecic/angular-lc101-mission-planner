import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(newName: string) {
    if (!this.equipment.includes(newName)) {
      this.equipment.push(newName);
    }
  }
  remove(equi: string) {
    const index = this.equipment.indexOf(equi);
    this.equipment.splice(index, 1);
  }
  edit(equi: string) {
    this.equipmentBeingEdited = equi;
  }
  save(newName: string, equi: string) {
    const index = this.equipment.indexOf(equi);
    this.equipment[index] = newName;
    this.equipmentBeingEdited = null;
  } 

}
