import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-resumo',
    templateUrl: './resumo.component.html',
    styleUrls: ['./resumo.component.scss'],
    standalone: false
})
export class ResumoComponent {
  public title = "Thais Crivelatti | Portfolio";
  public data: any;
  faGraduationCap = faGraduationCap;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private api: ApiService) {
    this.data = api.loadAbout();
  }

  openLink(type: number) {
    switch (type) {
      case 1:
        window.open("https://www.linkedin.com/in/thaiscrivelatti");
        break;
      case 2:
        window.open("https://github.com/thaiscrivelatti");
        break;
      default:
        break;
    }
  }
}
