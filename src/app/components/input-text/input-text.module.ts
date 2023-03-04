import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    InputTextComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    ReactiveFormsModule,
  ],
  exports: [
    InputTextComponent,
  ],
  providers: [provideNgxMask({ validation: true })],
})
export class InputTextModule {}
