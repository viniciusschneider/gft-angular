import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IUserAccount } from '../models/user-account.interface';

const mockData: IUserAccount[] = [
  {
    cpf: "53817838093",
    name: "Mariane de Souza Oliveira",
    status: "regular",
    applicationAccount: "5579324",
    currentAccount: "7784618"
  },
  {
    cpf: "63895000094",
    name: "José de Lima",
    status: "regular",
    applicationAccount: "6122324",
    currentAccount: "8984643"
  }
];

@Injectable({
  providedIn: 'root'
})
export class FindCpfService {
  findCpf(cpf: string): Observable<IUserAccount | null> {
    return of(mockData).pipe(
      delay(500),
      map(items => items.find(item => item.cpf === cpf ) || null),
    );
  }
}
