import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';


const routes: Routes = [
  {path:"books",component:BookComponent},
  {path:"",component:BookComponent,pathMatch:"full"},
  {path:"author",component:AuthorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
