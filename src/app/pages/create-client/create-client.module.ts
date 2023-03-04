import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientRoutingModule } from './create-client-routing.module';
import { CreateClientComponent } from './create-client.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { InputTextModule } from 'src/app/components/input-text/input-text.module';
import { FormControlPipeModule } from 'src/app/pipes/form-control/form-control-pipe.module';
import { CardModule } from 'src/app/components/card/card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperModule } from 'src/app/components/stepper/stepper.module';

@NgModule({
  declarations: [
    CreateClientComponent
  ],
  imports: [
    ButtonModule,
    ButtonModule,
    CardModule,
    CommonModule,
    CreateClientRoutingModule,
    FormControlPipeModule,
    InputTextModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    StepperModule,
  ],
})
export class CreateClientModule {}
