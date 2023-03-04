import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from '../button/button.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    ButtonModule,
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CardComponent,
  ],
})
export class CardModule {}
