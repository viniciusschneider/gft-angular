import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextModule } from 'src/app/components/input-text/input-text.module';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateClientComponent } from './create-client.component';
import { FormControlPipeModule } from 'src/app/pipes/form-control/form-control-pipe.module';
import { ButtonModule } from 'src/app/components/button/button.module';

describe('CreateClientComponent', () => {
  let component: CreateClientComponent;
  let fixture: ComponentFixture<CreateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateClientComponent],
      imports: [
        ButtonModule,
        FormControlPipeModule,
        InputTextModule,
        ReactiveFormsModule,
        StepperModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
