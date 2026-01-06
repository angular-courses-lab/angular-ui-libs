import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basic-button',
  template: ` <button matButton>Medium</button> `,
  imports: [MatButtonModule],
})
export class BasicButtonComponent {}
