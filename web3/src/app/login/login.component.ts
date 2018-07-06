import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({

    email: new FormControl(''),
    senha: new FormControl(''), 
  })
  constructor(public auth: AngularFireAuth, public router: Router) { }

  CriarConta() {
    this.auth.auth.signInWithEmailAndPassword(
      this.loginForm.get('email').value,
      this.loginForm.get('senha').value,
   
    ).then(()=>{
  this.router.navigate(['tarefas'])
  
    })
  
  }


  ngOnInit() {
  }

}
