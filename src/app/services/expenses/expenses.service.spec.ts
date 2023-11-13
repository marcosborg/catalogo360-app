import { TestBed } from '@angular/core/testing';

import { ExpensesService } from './expenses.service';

describe('CatalogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesService = TestBed.get(ExpensesService);
    expect(service).toBeTruthy();
  });
});
