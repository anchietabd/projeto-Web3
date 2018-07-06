import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'criarconta', component: CriarContaComponent},
    {path: 'tarefas', component: TarefasComponent},
    {path: 'novatarefa', component: NovaTarefaComponent},
    {path: 'editartarefa', component: EditarTarefaComponent},
    {path: 'editartarefa/:tarefa', component: EditarTarefaComponent}
];
@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]


})
export class AppRoutingModule {}
