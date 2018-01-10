import { Injectable } from '@angular/core';

import { Category } from './category.model';

const records: Category[] = [
  {
    id: 1,
    title: 'Alimentação',
    description: 'Categoria de alimentação'
  },
  {
    id: 2,
    title: 'Combustível',
    description: 'Categoria de combustível'
  },
  {
    id: 3,
    title: 'Entretenimento',
    description: 'Categoria de entretenimento'
  },
  {
    id: 4,
    title: 'Moradia',
    description: 'Categoria de moradia'
  },
  {
    id: 5,
    title: 'Reembolso',
    description: 'Categoria de reembolso'
  }
];

@Injectable()
export class CategoryService {

  constructor() { }

}
