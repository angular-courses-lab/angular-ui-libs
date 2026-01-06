import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-basic-button',
  template: `<button hlmBtn>Button</button>`,
  imports: [HlmButtonImports],
})
export class BasicButtonComponent {}
