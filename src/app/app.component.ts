import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(SidemenuComponent);
  }
}
