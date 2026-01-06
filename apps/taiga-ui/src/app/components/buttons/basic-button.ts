import { Component } from '@angular/core';
	import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-basic-button',
  template: ` <button size="m" tuiButton type="button">Medium</button> `,
  imports: [TuiButton],
})
export class BasicButtonComponent {}
