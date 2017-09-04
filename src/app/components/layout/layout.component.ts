import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent {

  constructor(@Inject('APP_CONFIG_DEFAULT_TITLE') private defaultTItle: string) {}

}
