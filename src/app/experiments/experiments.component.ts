import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
  add(newName: string) {
    if (!this.experiments.includes(newName)) {
      this.experiments.push(newName);
    }
  }
  remove(experiment: string) {
    const index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }
  save(newName: string, experiment: string) {
    const index = this.experiments.indexOf(experiment);
    this.experiments[index] = newName;
    this.experimentBeingEdited = null;
  } 

}
