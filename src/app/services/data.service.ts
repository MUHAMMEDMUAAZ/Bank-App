import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //login name display
  currentUser:any

  //login acno
  currentAcno:any;

  UserDetails:any={//object of objects
    1000:{acno:1000,username:"muaaz",password:1000,balance:1000,transaction:[]},
    1002:{acno:1000,username:"nawaz",password:1001,balance:1000,transaction:[]},
    1003:{acno:1000,username:"mahshu",password:1002,balance:1000,transaction:[]}
  }

  constructor(private router:Router) {
    this.getDetails;
  }

//save detsils()- to store the details in to the Local Storage

saveDetails(){//object of objects
  if(this.UserDetails){
    localStorage.setItem('database',JSON.stringify(this.UserDetails));
  }
  if(this.currentAcno){
    localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno));
  }
  if(this.currentUser){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
  }
}

//getDetails()-To get details from LocalStorage
getDetails(){
  if(localStorage.getItem('database')){
    this.UserDetails=JSON.parse(localStorage.getItem('database')||'');
  }
  if(localStorage.getItem('currentAcno')){
    this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||'');
  }
  if(localStorage.getItem('currentUser')){
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')||'');
  }
}

  register(acno:any,username:any,password:any){
 var UserDetails=this.UserDetails;
 if(acno in localStorage){
  return false;
 }
 else{
  UserDetails[acno]={
    acno,
    username,
    password,
    balance:0
    
  }
  console.log(UserDetails);
   this.saveDetails();//function call
  return true;
  
 }
  }
  login(acno:any,pswd:any){
    var UserDetails=this.UserDetails;
    if(acno in UserDetails){
      if(pswd=UserDetails[acno]['password']){
        this.currentUser=UserDetails[acno]['username']
        this.currentAcno=acno;
        this.router.navigateByUrl('dashboard')
        this.saveDetails();
        return true;
      }
    
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
deposit(acno:any,pswd:any,amt:any){
 
  let UserDetails=this.UserDetails;
  var amount=parseInt(amt);
  if(acno in UserDetails){
    if(pswd==UserDetails[acno]['password']){
      UserDetails[acno]['balance']+=amount;
      UserDetails[acno]['transaction'].push({
        type:'Credit',
        amount
      })
      console.log(UserDetails);
      this.saveDetails();
      return UserDetails[acno]['balance'];
    }
    else{
      alert('invalid password');
      return false;
    }
  }
    else{('invalid user details')
    return false;
  }
}
withdraw(acno:any,pswd:any,amt:any){
  let UserDetails=this.UserDetails;
  var amount=parseInt(amt);
  if(acno in UserDetails){
    if(pswd==UserDetails[acno]['password']){
      if( UserDetails[acno]['balance']>amount){
      UserDetails[acno]['balance']-=amount;
      UserDetails[acno]['transaction'].push({
        type:'Debit',
        amount
      })
      console.log(UserDetails);
      this.saveDetails();
      return UserDetails[acno]['balance'];
    }
  }
    else{
      alert('invalid password');
      return false;
    }
  }
    else{
      alert('invalid user details')
    return false;
  }
  
}
getTransaction(acno:any){
 return this.UserDetails[acno]['transaction'];
}

}
