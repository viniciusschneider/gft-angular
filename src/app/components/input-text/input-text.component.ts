import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() control: FormControl = new FormControl('');
  @Input() label: string = '';
  @Input() customError: string = '';
  @Input() mask: string = '';
  @Input() type: string = 'text';
  @Input() set disabled(value: boolean) {
    if (value) this.control.disable({ emitEvent: false })
    else this.control.enable({ emitEvent: false })
  }

  name = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');

  get hasErrors(): boolean {
    return !this.control.touched && !this.control.dirty ? false : !!this.control.errors || !!this.customError;
  }

  get error(): string {
    const errors: any = this.control.errors;
    if (errors?.required) {
      return `${this.label} é obrigatório`;
    } else if (errors?.cpfInvalid) {
      return 'Informe um CPF válido';
    } else {
      return '';
    }
  }
}
