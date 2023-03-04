import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' = 'small';
  @Input() rounded = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() text: 'small' | 'large' = 'small';
  @Input() withoutBorder = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
}
