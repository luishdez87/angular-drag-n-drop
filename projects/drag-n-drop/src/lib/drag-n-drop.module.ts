import { NgModule } from '@angular/core';
import { DragNDropComponent } from './drag-n-drop.component';
import { DragNDropDirective } from './drag-n-drop/drag-ndrop.directive';



@NgModule({
  declarations: [DragNDropComponent, DragNDropDirective],
  imports: [
  ],
  exports: [DragNDropComponent]
})
export class DragNDropModule { }
