import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>tis a website {{value}}</div>`,
})
export class AppComponent {
  value = 'by the mike of the schnitzels';
}
