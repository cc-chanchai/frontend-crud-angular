import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: 'tutorails', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'detial/:id', component: DetailComponent },
  { path: 'add', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
