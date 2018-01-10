import { Injectable } from '@angular/core';

import { Person } from './person.model';

const records: Person[] = [
  {
    id: 1,
    name: 'Mãe',
    description: null
  },
  {
    id: 2,
    name: 'Pai',
    description: null
  },
  {
    id: 3,
    name: 'Irmão',
    description: null
  }
];

@Injectable()
export class PersonService {

  constructor() { }

}
