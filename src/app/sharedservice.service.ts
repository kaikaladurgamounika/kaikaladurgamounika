import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  shared_variable = 'test';

  constructor() { }
}
