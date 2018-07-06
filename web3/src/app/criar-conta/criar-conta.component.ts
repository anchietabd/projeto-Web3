import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',

})
export class CriarContaComponent implements OnInit {

  CriarContaForm= new FormGroup({

    email: new FormControl(''),
    senha: new FormControl(''), 
 
  })
  constructor(public auth: AngularFireAuth, public router: Router) { }

CriarConta() {
  this.auth.auth.createUserWithEmailAndPassword(
    this.CriarContaForm.get('email').value,
    this.CriarContaForm.get('senha').value,
 
  ).then(()=>{
this.router.navigate(['tarefas'])

  })

}

  ngOnInit() {
  }

}
