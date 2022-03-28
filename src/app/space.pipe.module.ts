import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CreateSpace } from './space.pipe';


@NgModule({
  declarations: [CreateSpace], // <---
  imports: [CommonModule],
  exports: [CreateSpace] // <---
})

export class CreateSpacePipe {
 }
