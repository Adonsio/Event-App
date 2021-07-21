import { NgModule } from '@angular/core';
import { UppercasePipe } from './uppercase.pipe';



@NgModule({
  declarations: [UppercasePipe],
  exports: [
    UppercasePipe
  ]
})
export class CommonModule { }
