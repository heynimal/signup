import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: any = {
    userName: '',
    email: '',
    firstName: '',
    lastName: ''
  };


  constructor(private registerService: RegisterService,private toastr:ToastrService,private router: Router) {
    this.register = this.registerService.getAllUsers(); 
  }

  ngOnInit() {
    document.body.classList.add('bg-color');
    
  }

  signUp() {
    // console.log(this.register);
    if (this.register.userName && this.register.email && this.register.firstName && this.register.lastName) {
      let result = this.registerService.addUser(this.register);
      if (result == 'success') {
		  
		  let me = this;
    setTimeout(function(){
      me.router.navigate(["/"]).then(result=>{window.location.href = 'https://heynimal.github.io/';});
    },2000);
	 this.toastr.success("You've Successfully Signed up",'Success');
	  
      } else {
      this.toastr.warning("This User is Alredy Exists",'Warning');
      }


    } else {
      if (!this.register.userName) {
        this.toastr.info("Please Fill up User Name",'Information');
      } else if (!this.register.email) {
      this.toastr.error("Please Enter Valid Email",'Error');
      }
    }
  }


}
