import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollComponent } from './scroll/scroll.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: '', component: ScrollComponent },
  { path: 'graph', component: GraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
