import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import{AngularFireAuth} from 'angularfire2/auth';
import { Action } from 'rxjs/internal/scheduler/Action';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',

})
export class TarefasComponent implements OnInit {
usuario;
  tarefaslista;

  constructor(public firestore:AngularFirestore, public auth:AngularFireAuth, public router: Router) { }


  NovaTarefa(){
    this.router.navigate(['novatarefa'])

  }

  editarTarefa(tarefa) {
    this.router.navigate(['/editartarefa', { tarefa: tarefa}])
  }
  ngOnInit() {

    this.auth.authState.subscribe((usuario)=>{
     this.usuario=usuario
           this.tarefaslista=this.firestore.collection(usuario.uid).snapshotChanges().pipe(
        map(actions =>actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      )
    })
    

  }
deletar(id){
  this.firestore.collection(this.usuario.uid).doc(id).delete();
}
sair(){
  this.auth.auth.signOut().then(()=>{
    this.router.navigate(['/'])
  });
}

}
