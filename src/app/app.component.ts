import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { faSun, faMoon, faCircleArrowUp, faG } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'Thais Crivelatti | Portfolio';
  toggleControl = new FormControl(false);
  faSun = faSun;
  faMoon = faMoon;
  faCircleArrowUp = faCircleArrowUp;
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  @HostBinding('class') className = ''

  constructor(private overlay: OverlayContainer) { }

  ngOnInit(): void {
      this.toggleControl.valueChanges.subscribe((darkMode) => {
        const darkClassName = 'darkMode';
        this.className = darkMode ? darkClassName : '';
        if (darkMode) {
          this.overlay.getContainerElement().classList.add(darkClassName);
        } else {
          this.overlay.getContainerElement().classList.remove(darkClassName);
        }
      });
  }

  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition, this.topPosToStartShowing);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
