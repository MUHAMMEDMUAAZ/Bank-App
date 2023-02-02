import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
// uname="";
// acno="";
// pswd="";
 
 constructor(private ds:DataService,private fb :FormBuilder,private router:Router) { }
//ds-register variable

//register model
registerForm=this.fb.group({//group  //*regular expression
 uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], //array
 acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
 pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
})

  ngOnInit(): void {
  }

register(){
  // alert("Register Clicked");
  var uname=this.registerForm.value.uname
  var acno=this.registerForm.value.acno
  var pswd=this.registerForm.value.pswd

  const result=this.ds.register(acno,uname,pswd);
if(this.registerForm.valid){

  if(result){
    alert('register success');
    this.router.navigateByUrl('');
  }
  else{
    alert('register failed');
    
  }
}
else {
  alert('Register Filed');
  console.log(this.registerForm.get('uname')?.errors);
  
}
}
}