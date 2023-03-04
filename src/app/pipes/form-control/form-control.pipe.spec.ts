import { FormControlPipe } from './form-control.pipe';
import { FormControl, FormGroup } from '@angular/forms';

describe('FormControlPipe', () => {
  const pipe = new FormControlPipe();

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return control', () => {
    const input = new FormControl('');
    const form = new FormGroup({ input });
    expect(pipe.transform(form, 'input')).toEqual(input);
  });

  it('should return a new control', () => {
    const form = new FormGroup({});
    expect(pipe.transform(form, 'input')).toBeInstanceOf(FormControl);
  });
});
