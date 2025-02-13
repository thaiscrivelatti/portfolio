import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.scss'],
    standalone: false
})
export class ContatoComponent implements OnInit {
  faLinkedin = faLinkedin;
  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
