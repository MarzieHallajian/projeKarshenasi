import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './Components/graph/graph.component';
import { HomeComponent } from './Components/home/home.component';
import { UploadFileComponent } from './Components/upload-file/upload-file.component';

const routes: Routes = [
  { path: 'graph', component: GraphComponent },
  { path: 'upload-file', component: UploadFileComponent }  ,
  { path:'home',component:HomeComponent },
  { path:'', redirectTo:"/home", pathMatch:'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
