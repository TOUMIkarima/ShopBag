import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuHeight: string = '0px'; 

  menuToggle() : void {
    this.menuHeight = this.menuHeight === '0px' ? '200px' : '0px';
  }
}
