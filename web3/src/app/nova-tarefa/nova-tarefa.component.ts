import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import{AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
 
})
export class NovaTarefaComponent implements OnInit {
  newtarefaform= new FormGroup({
    tarefa: new FormControl('')
  })

  constructor(public firestore:AngularFirestore, public auth:AngularFireAuth, public router: Router) { }

  salvarTarefa(){
    this.firestore.collection(this.auth.auth.currentUser.uid).add({

      tarefa:this.newtarefaform.get('tarefa').value
    }).then(()=>{

this.router.navigate(["tarefas"])
    })

  }

cancel(){

  this.router.navigate(["tarefas"])
}

  ngOnInit() {
  }

}
