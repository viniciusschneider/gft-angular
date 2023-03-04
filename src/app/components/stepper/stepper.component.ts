import { Component, Input } from '@angular/core';
import { IStepperItem } from 'src/app/models/stepper-item.interface';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() items: IStepperItem[] = [];
}
