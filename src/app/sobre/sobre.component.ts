import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-sobre',
    templateUrl: './sobre.component.html',
    styleUrls: ['./sobre.component.scss'],
    standalone: false
})
export class SobreComponent {
  public title = "Sobre";
  public data: any;
  public tools: any;
  public experience: any;
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;

  constructor(private api: ApiService) {
    this.data = api.loadAbout();
    this.tools = api.loadTools();
  }
}
