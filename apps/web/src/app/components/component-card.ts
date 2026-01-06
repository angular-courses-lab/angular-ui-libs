import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-component-card',
  template: `
    <article class="border border-gray-50 bg-gray-50 rounded-xl p-1">
      <header class="flex items-center gap-4 mb-2 pt-2 px-2">
        <img [src]="libraryLogo()" alt="{{ library() }}" class="w-10 h-10 rounded-full" />
        <div class="flex flex-col">
          <h3 class="text-sm font-bold">{{ library() }}</h3>
          <p class="text-xs text-gray-500">Button - Default</p>
        </div>
      </header>
      <iframe
        class="bg-white rounded-xl"
        [src]="sanitizedUrl()"
        width="320px"
        height="180px"
      ></iframe>
    </article>
  `,
})
export class ComponentCardComponent {
  readonly #sanitizer = inject(DomSanitizer);

  url = input.required<string>();
  library = input.required<string>();
  libraryLogo = input.required<string>();

  sanitizedUrl = computed(() => {
    console.log(this.url());
    return this.#sanitizer.bypassSecurityTrustResourceUrl(this.url());
  });
}
