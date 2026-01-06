import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-basic-button',
  template: `<p-button label="Medium" />`,
  imports: [ButtonModule],
})
export class BasicButtonComponent {}
