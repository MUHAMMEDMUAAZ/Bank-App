import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //ds-register variable


 
  
  //3rd exicution
//properties
aim="......Your perfect banking partner......";
accounts="enter your account here";

acno="";
pswd="";

//user defind functions//4th exicution
acnoChange(event:any){
  this.acno=event.target.value;//1000
console.log( this.acno);

}
pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
}

// login(){
//   // alert('login clicked');
//   var acno=this.acno;
//   var pswd=this.pswd;

//  const result=this.ds.login(acno,pswd);
// if(result){
//   alert('login succesful');
//   this.router.navigateByUrl('dashboard');
// }

  

  
  

// }

// login(a:any,p:any){
//   // alert('login clicked');
//   var acno=a.value;
//   var pswd=p.value;
//   var UserDetails=this.UserDetails;

//   if(acno in UserDetails){
// if(pswd==UserDetails[acno]['password']){
//   alert('login succesful');

// }
// else{
//   alert('invalid password')
// }
//   }else{
//     alert('invalid user details');
//   }

// }

UserDetails:any={//object of objects
  1000:{acno:1000,username:"muaaz",password:1000,balance:1000},
  1002:{acno:1000,username:"nawaz",password:1001,balance:1000},
  1003:{acno:1000,username:"mahshu",password:1002,balance:1000}
}

//router-variable of login
//Router-its a class of nevigateByUrl
  constructor(private router:Router,private fb :FormBuilder,private ds:DataService) { }//1st exicute
  //special member function,automatically involks when an object created  //ds-register variable


  
 
  ngOnInit(): void {// 2nd exicute -life cycle hooks of angular 
    //initial process of component initialization

  }
loginForm=this.fb.group({//group  //*regular expression
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})
login(){
  var acno=this.loginForm.value.acno
  var pswd=this.loginForm.value.pswd
  var result=this.ds.login(acno,pswd)
  if(this.loginForm.valid){
    if(result){
      //alert("login succes")
    }
  }
  else{
    console.log(this.loginForm.get('uname')?.errors);
  }
}

}
