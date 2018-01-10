import { Injectable } from '@angular/core';

import { Account } from './account.model';

const records: Account[] = [
  {
    id: 1,
    title: 'Banco do Brasil',
    description: 'Conta poupança do Banco do Brasil.'
  },
  {
    id: 2,
    title: 'Bradesco',
    description: 'Conta poupança do Bradesco.'
  },
  {
    id: 3,
    title: 'Banrisul',
    description: 'Conta poupança do Banrisul.'
  },
  {
    id: 4,
    title: 'Banco Inter',
    description: 'Conta corrente do Banco Inter.'
  },
  {
    id: 5,
    title: 'Santander',
    description: 'Conta corrente do Santander.'
  }
];

@Injectable()
export class AccountService {

  constructor() { }

}
