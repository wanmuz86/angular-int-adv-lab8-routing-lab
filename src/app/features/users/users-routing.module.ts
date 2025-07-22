import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {

    // localhost:4200/users
    // Nested routing
    path:'',
    component: UserListComponent,
    children:[
      {
         // localhost:4200/users/1,  // localhost:4200/users/2
        path:':id',
        component:UserDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
