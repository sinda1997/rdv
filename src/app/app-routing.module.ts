import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatedemandeComponent } from './demande/createdemande/createdemande.component';
import { DemandeDetailsComponent } from './demande/demande-details/demande-details.component';
import { ListdemandeComponent } from './demande/listdemande/listdemande.component';
import { UpdateDemandeComponent } from './demande/update-demande/update-demande.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'createdemande', component: CreatedemandeComponent},
  { path: 'demandelist', component: ListdemandeComponent},
  { path: 'update-demande', component: UpdateDemandeComponent},
  { path: 'demande-details', component: DemandeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
