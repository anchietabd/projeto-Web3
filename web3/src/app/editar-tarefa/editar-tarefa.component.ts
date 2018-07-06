import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',

})
export class EditarTarefaComponent implements OnInit {
  id = '';
usuario;
  tarefaForm = new FormGroup({
    tarefa: new FormControl('')


  })

  constructor(public route: ActivatedRoute, public auth: AngularFireAuth, public firestore: AngularFirestore, public router:Router) { }

  ngOnInit() {
    this.auth.authState.subscribe((usuario) => {
     this.usuario=usuario;     if (usuario) {
        this.route.params.subscribe(parames => {
          this.id = parames['tarefa'];
          this.firestore.collection(usuario.uid).doc(this.id).valueChanges().subscribe(tarefa=>{
            this.tarefaForm.get('tarefa').setValue(tarefa['tarefa']);
          });
        })
      }
    })

  }
  salvar(){
    this.firestore.collection(this.usuario.uid).doc(this.id).update({
tarefa:this.tarefaForm.get('tarefa').value

    }).then(()=>{
this.router.navigate(['/tarefas'])
    })
  }

}
