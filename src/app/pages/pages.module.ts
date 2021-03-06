import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContentsModule } from '../contents';
import { WidgetsModule } from '../widgets';
import { routes } from './pages.routes';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NocontentComponent } from './nocontent';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const componentsList = [
  HomeComponent,
  LoginComponent,
  NocontentComponent,
];

const moduleList = [
  ContentsModule,
  WidgetsModule,
  RouterModule.forChild(routes)
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ...moduleList],
  declarations: [
     ...componentsList
  ],
  exports: [
     ...componentsList
  ],
})
export class PagesModule {
}
