import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCardComponent } from './components/component-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ComponentCardComponent],
})
export class App {
  protected readonly components = signal<{ url: string; library: string; libraryLogo: string }[]>([
    {
      url: 'https://angular-ui-libs-material.vercel.app/buttons/basic',
      library: 'Material',
      libraryLogo: 'https://avatars.githubusercontent.com/u/140506044?s=200&v=4',
    },
    {
      url: 'https://angular-ui-libs-material.vercel.app/buttons/basic',
      library: 'Material',
      libraryLogo: 'https://avatars.githubusercontent.com/u/140506044?s=200&v=4',
    },
    {
      url: 'https://angular-ui-libs-material.vercel.app/buttons/basic',
      library: 'Material',
      libraryLogo: 'https://avatars.githubusercontent.com/u/140506044?s=200&v=4',
    },
  ]);
}
