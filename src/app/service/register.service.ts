import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registers: any = [];

  constructor() { 
    this.registers.push({
      userName: 'alex',
      email: 'abc@xyz.com',
      firstName: 'john',
      lastName:'alex'

    });
  }

  addUser(register) {
    let isUserExist = false;
    this.registers.forEach(existingUser => {
      if(existingUser.userName == register.userName) {
        isUserExist = true;
      } 

    });
    if(!isUserExist) {
      this.registers.push(register);
      return 'success';
    } else {
      return 'failure';
    }
  }

  getAllUsers() {
    return this.registers;
  }
}
