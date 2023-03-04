import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserAccount } from 'src/app/models/user-account.interface';
import { FindCpfService } from 'src/app/services/find-cpf.service';
import { CustomValidators } from 'src/app/utils';
import { firstValueFrom, Subscription } from 'rxjs';
import { IAppCardProps } from 'src/app/models/app-card-props.interface';
import { IStepperItem } from 'src/app/models/stepper-item.interface';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnDestroy, OnInit {
  cards: IAppCardProps[] = [];
  form = new FormGroup({
    cpf: new FormControl('', [Validators.required, CustomValidators.checkCPF])
  });
  userAccount: IUserAccount | null = null;
  cpfNotFound = false;
  loading = false;
  stepperItems: IStepperItem[] = [
    {
      completed: false,
      current: true,
      label: 'Início',
    },
    {
      completed: false,
      current: false,
      label: 'Documentos',
    },
    {
      completed: false,
      current: false,
      label: 'Dados cadastrais',
    }
    ,{
      completed: false,
      current: false,
      label: 'Admissão',
    }
  ]
  private subscription!: Subscription;

  constructor(
    private findCpfService: FindCpfService
  ) {}

  ngOnInit(): void {
    this.subscription = this.form.controls.cpf.valueChanges.subscribe(() => {
      if (this.cpfNotFound) this.cpfNotFound = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async findCpf() {

    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return; 
    }

    this.loading = true;
    const userAccount = await firstValueFrom(this.findCpfService.findCpf(this.form.controls.cpf.value || ''));
    if (userAccount) {
      this.userAccount = userAccount;
      this.cards = [
        {
          title: 'Situação cadastral do CPF',
          subtitle: 'Consulta na Receita Federal',
          cardItems: [
            {
              icon: 'person',
              name: 'Nome',
              value: this.userAccount.name,
            },
            {
              icon: 'check_circle_outline',
              iconColor: 'success',
              name: 'Situação do CPF',
              value: this.userAccount.status === 'regular' ? 'Regular' : '',
            }
          ],
          action: '',
        },
        {
          title: 'Conta aplicação',
          subtitle: 'Cooperativa Viacredi',
          cardItems: [
            {
              icon: 'credit_card',
              name: 'Número da conta',
              value: this.userAccount.applicationAccount,
            }
          ],
          action: 'Duplicar conta',
        },
        {
          title: 'Conta corrente',
          subtitle: 'Cooperativa Viacredi',
          cardItems: [
            {
              icon: 'credit_card',
              name: 'Número da conta',
              value: this.userAccount.currentAccount,
            }
          ],
          action: 'Duplicar conta',
        },
      ]
    } else {
      this.cpfNotFound = true;
    }

    this.loading = false;
  }

  resetForm() {
    this.userAccount = null;
    this.cards = [];
    this.form.reset();
  }
}
