import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import{AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule}from '@angular/forms';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarContaComponent,
    TarefasComponent,
    NovaTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
  BrowserModule,
AngularFireAuthModule,
AngularFirestoreModule,
AppRoutingModule,
ReactiveFormsModule,
AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
